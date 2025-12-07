import fs from 'fs';
import path from 'path';

const CATALOGUE_DIR = path.join(process.cwd(), 'public/CPL Catalogue');

export interface Category {
    name: string;
    slug: string;
    image?: string; // Potential cover image
}

export interface Product {
    id: string;
    serialNumber: string;
    name: string;
    subcategory?: string; // Type of product derived from subdirectory
    imagePath: string;
    isDetail: boolean;
    detailImagePath?: string;
}

export async function getCategories(): Promise<Category[]> {
    if (!fs.existsSync(CATALOGUE_DIR)) {
        return [];
    }

    const entries = await fs.promises.readdir(CATALOGUE_DIR, { withFileTypes: true });

    return entries
        .filter(entry => entry.isDirectory())
        .map(entry => ({
            name: entry.name,
            slug: entry.name, // using name as slug for simplicity, handled by Next.js file routing often automatically but explicit is good
        }));
}

async function getRecursiveFilePaths(dir: string): Promise<string[]> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const subFiles = await getRecursiveFilePaths(fullPath);
            files.push(...subFiles);
        } else if (entry.isFile()) {
            files.push(fullPath);
        }
    }
    return files;
}

export async function getProducts(categorySlug: string): Promise<Product[]> {
    // Decoding URI component to handle spaces in directory names
    const decodedSlug = decodeURIComponent(categorySlug);
    const categoryPath = path.join(CATALOGUE_DIR, decodedSlug);

    if (!fs.existsSync(categoryPath)) {
        return [];
    }

    const allFiles = await getRecursiveFilePaths(categoryPath);

    // 1. First pass: Collect all valid image entries
    const imageFiles = allFiles.filter(filePath => /\.(jpg|jpeg|png|webp)$/i.test(path.basename(filePath)));

    // 2. Separate into potential main images and detail images
    // We assume detail images have "Detail" in their name (case insensitive)
    const allImages = imageFiles.map(filePath => {
        const fileName = path.basename(filePath);
        const nameWithoutExt = path.parse(fileName).name;
        const isDetail = nameWithoutExt.toLowerCase().includes('detail');

        // Normalize name for matching: remove "Detail" and trim
        // e.g. "KN014 Series ... Detail" -> "KN014 Series ..."
        // e.g. "KN014 Series ..." -> "KN014 Series ..."
        const normalizedName = nameWithoutExt.replace(/detail/i, '').trim();

        // Calculate public path
        // filePath is absolute
        // We want path relative to 'public' folder for the URL
        const relativeFromPublic = path.relative(path.join(process.cwd(), 'public'), filePath);
        // Ensure forward slashes for URL regardless of OS
        const publicPath = '/' + relativeFromPublic.split(path.sep).join('/');

        // Determine Subcategory / Type
        // We look at the relative path from the *category* directory.
        // If it's directly inside, it has no subcategory.
        // If it's nested (e.g. "door bolt/item.jpg"), "door bolt" is the subcategory.
        const relativeFromCategory = path.relative(categoryPath, filePath);
        const parts = relativeFromCategory.split(path.sep);

        // If parts.length > 1, the first part is the subfolder name
        let subcategory: string | undefined = undefined;
        if (parts.length > 1) {
            subcategory = parts[0];
        }

        return {
            id: relativeFromPublic, // Use relative path as ID to ensure uniqueness
            fileName,
            nameWithoutExt,
            normalizedName,
            isDetail,
            subcategory,
            path: publicPath
        };
    });

    const mainImages = allImages.filter(img => !img.isDetail);
    const detailImages = allImages.filter(img => img.isDetail);

    // 3. Map products
    const products = mainImages.map(img => {
        // Find matching detail image
        // We match if the normalized names are identical
        const matchingDetail = detailImages.find(d => d.normalizedName === img.normalizedName);

        // Parsing Serial and Name from the Main Image Text
        // Heuristic: First word is serial number if it looks like one (alphanumeric), 
        // or we just split by space.
        const parts = img.normalizedName.split(' ');
        const serialNumber = parts[0];
        const productName = parts.slice(1).join(' ');

        return {
            id: img.id,
            serialNumber: serialNumber,
            name: productName || img.normalizedName,
            subcategory: img.subcategory,
            imagePath: img.path,
            isDetail: false, // It's a main product now
            detailImagePath: matchingDetail ? matchingDetail.path : undefined
        };
    });

    return products;
}

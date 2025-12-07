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

export async function getProducts(categorySlug: string): Promise<Product[]> {
    // Decoding URI component to handle spaces in directory names
    const decodedSlug = decodeURIComponent(categorySlug);
    const categoryPath = path.join(CATALOGUE_DIR, decodedSlug);

    if (!fs.existsSync(categoryPath)) {
        return [];
    }

    const entries = await fs.promises.readdir(categoryPath, { withFileTypes: true });

    // 1. First pass: Collect all valid image entries
    const imageEntries = entries.filter(entry => entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name));

    // 2. Separate into potential main images and detail images
    // We assume detail images have "Detail" in their name (case insensitive)
    const allImages = imageEntries.map(entry => {
        const fileName = entry.name;
        const nameWithoutExt = path.parse(fileName).name;
        const isDetail = nameWithoutExt.toLowerCase().includes('detail');

        // Normalize name for matching: remove "Detail" and trim
        // e.g. "KN014 Series ... Detail" -> "KN014 Series ..."
        // e.g. "KN014 Series ..." -> "KN014 Series ..."
        const normalizedName = nameWithoutExt.replace(/detail/i, '').trim();

        return {
            fileName,
            nameWithoutExt,
            normalizedName,
            isDetail,
            path: `/CPL Catalogue/${categorySlug}/${fileName}`
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
            id: img.fileName,
            serialNumber: serialNumber,
            name: productName || img.normalizedName,
            imagePath: img.path,
            isDetail: false, // It's a main product now
            detailImagePath: matchingDetail ? matchingDetail.path : undefined
        };
    });

    return products;
}

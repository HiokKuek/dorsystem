import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION - YOU NEED TO FILL THESE
const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = 'production';
const token = process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
    apiVersion: '2023-10-01',
});

const CATALOGUE_DIR = path.join(process.cwd(), 'public/CPL Catalogue');

async function uploadImage(filePath) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const asset = await client.assets.upload('image', fileStream, {
            filename: path.basename(filePath),
        });
        return asset._id;
    } catch (error) {
        console.error(`Failed to upload ${filePath}:`, error.message);
        return null;
    }
}

async function getRecursiveFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await getRecursiveFiles(fullPath)));
        } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
            files.push(fullPath);
        }
    }
    return files;
}

async function runMigration() {
    if (!projectId || !token) {
        console.error('Missing SANITY_PROJECT_ID or SANITY_API_TOKEN env vars');
        return;
    }

    const categoryFolders = fs.readdirSync(CATALOGUE_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());

    for (const catFolder of categoryFolders) {
        console.log(`\nProcessing Category: ${catFolder.name}`);

        // 1. Create/Ensure Category
        const category = await client.createIfNotExists({
            _type: 'category',
            _id: `category-${catFolder.name.toLowerCase().replace(/\s+/g, '-')}`,
            title: catFolder.name,
            slug: { _type: 'slug', current: catFolder.name.toLowerCase().replace(/\s+/g, '-') },
        });

        const categoryPath = path.join(CATALOGUE_DIR, catFolder.name);
        const allFiles = await getRecursiveFiles(categoryPath);

        // Grouping into products by logic similar to lib/catalogue.ts
        const items = allFiles.map(filePath => {
            const fileName = path.basename(filePath);
            const nameWithoutExt = path.parse(fileName).name;
            const isDetail = nameWithoutExt.toLowerCase().includes('detail');
            const normalizedName = nameWithoutExt.replace(/detail/i, '').trim();

            const relativeFromCategory = path.relative(categoryPath, filePath);
            const parts = relativeFromCategory.split(path.sep);
            const subcategory = parts.length > 1 ? parts[0] : null;

            return { filePath, normalizedName, isDetail, subcategory };
        });

        const mainImages = items.filter(i => !i.isDetail);
        const detailImages = items.filter(i => i.isDetail);

        for (const item of mainImages) {
            console.log(`  Migrating Product: ${item.normalizedName}`);

            const parts = item.normalizedName.split(' ');
            const serialNumber = parts[0];
            const productName = parts.slice(1).join(' ') || item.normalizedName;

            const mainImageAssetId = await uploadImage(item.filePath);

            const matchingDetail = detailImages.find(d => d.normalizedName === item.normalizedName);
            let detailImageAssetId = null;
            if (matchingDetail) {
                detailImageAssetId = await uploadImage(matchingDetail.filePath);
            }

            const productDoc = {
                _type: 'product',
                name: productName,
                serialNumber: serialNumber,
                subcategory: item.subcategory,
                category: {
                    _type: 'reference',
                    _ref: category._id,
                },
                mainImage: {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: mainImageAssetId },
                },
                slug: {
                    _type: 'slug',
                    current: `${serialNumber}-${productName}`.toLowerCase().replace(/\s+/g, '-'),
                },
            };

            if (detailImageAssetId) {
                productDoc.detailImage = {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: detailImageAssetId },
                };
            }

            await client.create(productDoc);
        }
    }

    console.log('\nMigration Complete!');
}

runMigration();

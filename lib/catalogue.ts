import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

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
    description?: any; // Sanity rich text (Portable Text)
}

export async function getCategories(): Promise<Category[]> {
    try {
        const categories = await client.fetch(`*[_type == "category"] | order(title asc) {
            "name": title,
            "slug": slug.current
        }`);
        return categories;
    } catch (error) {
        console.error("Error fetching categories from Sanity:", error);
        return [];
    }
}

export async function getProducts(categorySlug: string): Promise<Product[]> {
    try {
        // Decoding URI component to handle spaces in directory names if passed from URL
        const decodedSlug = decodeURIComponent(categorySlug).toLowerCase().replace(/\s+/g, '-');

        const products = await client.fetch(`*[_type == "product" && category->slug.current == $slug] | order(serialNumber asc) {
            "id": _id,
            "serialNumber": serialNumber,
            name,
            subcategory,
            mainImage,
            detailImage,
            description
        }`, { slug: decodedSlug });

        return products.map((p: any) => ({
            id: p.id,
            serialNumber: p.serialNumber,
            name: p.name,
            subcategory: p.subcategory || undefined,
            imagePath: p.mainImage ? urlFor(p.mainImage).url() : '',
            isDetail: false,
            detailImagePath: p.detailImage ? urlFor(p.detailImage).url() : undefined,
            description: p.description
        }));
    } catch (error) {
        console.error(`Error fetching products for category ${categorySlug} from Sanity:`, error);
        return [];
    }
}

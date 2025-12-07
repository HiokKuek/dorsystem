import { getCategories, getProducts } from '@/lib/catalogue';
import { CategoryCard } from '@/components/catalogue/CategoryCard';
import { ProductCard } from '@/components/catalogue/ProductCard';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface CataloguePageProps {
    params: {
        slug?: string[];
    };
}

export default async function CataloguePage({ params }: CataloguePageProps) {
    // Next.js 15 requires awaiting params
    const { slug } = await Promise.resolve(params);
    const isCategoryView = slug && slug.length > 0;

    if (!isCategoryView) {
        const categories = await getCategories();

        return (
            <div>
                <PageHeader
                    title="Product Catalogue"
                    description="Browse our comprehensive range of architectural ironmongery."
                />

                <div className="container py-12">
                    {categories.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            No categories found.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.map((category) => (
                                <CategoryCard
                                    key={category.slug}
                                    name={category.name}
                                    slug={category.slug}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Handle Category View
    const categorySlug = slug[0];
    const decodedCategoryName = decodeURIComponent(categorySlug);

    // We can also verify if category exists if we wanted to be strict,
    // but getProducts will just return empty for now if invalid folder.
    // Ideally we check if category is valid to 404.
    const categories = await getCategories();
    const isValidCategory = categories.some(c => c.slug === decodedCategoryName);

    if (!isValidCategory) {
        notFound();
    }

    const products = await getProducts(categorySlug);

    return (
        <div>
            <div className="bg-muted/30 border-b">
                <div className="container py-8">
                    <div className="mb-4">
                        <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground hover:text-foreground">
                            <Link href="/catalogue">
                                <ChevronLeft className="mr-1 h-4 w-4" />
                                Back to Catalogue
                            </Link>
                        </Button>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight capitalize">{decodedCategoryName}</h1>
                    <p className="text-muted-foreground mt-2">
                        {products.length} products available
                    </p>
                </div>
            </div>

            <div className="container py-12">
                {products.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        No products found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="h-full">
                                <ProductCard
                                    serialNumber={product.serialNumber}
                                    name={product.name}
                                    imagePath={product.imagePath}
                                    detailImagePath={product.detailImagePath}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

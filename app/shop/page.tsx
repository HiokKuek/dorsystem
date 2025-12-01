import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function ShopPage() {
    return (
        <div>
            <PageHeader
                title="Shop"
                description="Browse our complete collection of architectural hardware available for direct purchase."
            />

            <div className="container py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Placeholder Products */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Card key={i} className="group overflow-hidden">
                            <div className="aspect-square bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-muted-foreground">
                                    Product Image {i + 1}
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-base">Premium Door Handle {i + 1}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-sm font-medium">$129.00</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

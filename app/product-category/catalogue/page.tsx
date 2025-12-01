import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function CataloguePage() {
    return (
        <div>
            <PageHeader
                title="Product Catalogue"
                description="Download our technical specifications and product brochures."
            />

            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {["Door Handles 2024", "Locking Systems", "Glass Fittings", "Hinges & Accessories", "Electronic Access Control", "Bathroom Accessories"].map((item, i) => (
                        <Card key={i} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{item}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="aspect-[3/4] bg-muted mb-4 rounded-md flex items-center justify-center text-muted-foreground">
                                    Cover Preview
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Comprehensive guide to our {item.toLowerCase()} range, including technical drawings and finish options.
                                </p>
                                <Button className="w-full" variant="outline">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

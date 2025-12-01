import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectReferencePage() {
    return (
        <div>
            <PageHeader
                title="Project References"
                description="A showcase of our work in prestigious residential and commercial developments."
            />

            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i} className="overflow-hidden border-none shadow-none bg-transparent">
                            <div className="aspect-video bg-muted rounded-xl mb-4 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-muted-foreground">
                                    Project Image {i + 1}
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <CardContent className="p-0">
                                <h3 className="text-xl font-bold mb-2">Luxury Residence {i + 1}</h3>
                                <p className="text-muted-foreground">
                                    Supplied full range of architectural ironmongery including custom door handles and high-security locks.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

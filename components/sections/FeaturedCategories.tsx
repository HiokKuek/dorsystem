"use client"

import Link from "next/link"
import { ArrowRight, DoorOpen, Lock, Shield, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
    {
        title: "Cylinder",
        description: "High-precision lock cylinders for maximum security.",
        icon: Lock,
        href: "/catalogue/cylinder",
    },
    {
        title: "Door Accessories",
        description: "Essential finishing touches for every door installation.",
        icon: Settings,
        href: "/catalogue/door%20accessories",
    },
    {
        title: "Door Closer",
        description: "Reliable and durable door closing mechanisms.",
        icon: DoorOpen,
        href: "/catalogue/door%20closer",
    },
    {
        title: "Door Hinge",
        description: "Smooth-operating hinges for all types of doors.",
        icon: Settings,
        href: "/catalogue/door%20hinge",
    },
    {
        title: "Lockcase",
        description: "Robust and secure internal locking mechanisms.",
        icon: Shield,
        href: "/catalogue/lockcase",
    },
    {
        title: "Pull Handle",
        description: "Stunning pull handles that make a statement.",
        icon: DoorOpen,
        href: "/catalogue/pull%20handle",
    },
    {
        title: "Solid Stainless Lever Handle On Rose",
        description: "Premium solid stainless steel lever handles.",
        icon: Settings,
        href: "/catalogue/solid%20stainless%20lever%20handle%20on%20rose",
    },
    {
        title: "Stainless Steel Tube Lever Handle",
        description: "Elegant and modern tube lever handle designs.",
        icon: Settings,
        href: "/catalogue/stainless%20steel%20tube%20lever%20handle",
    },
]

export function FeaturedCategories() {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <h2 className="text-3xl font-light tracking-tight sm:text-4xl mb-4">Our Catalogue</h2>
                    <p className="text-muted-foreground max-w-2xl text-lg font-light">
                        Explore our comprehensive range of architectural ironmongery, designed to meet the highest standards of quality and aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link key={category.title} href={category.href} className="group">
                            <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-none bg-secondary/30 hover:bg-secondary/50">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-background shadow-sm`}>
                                        <category.icon className="h-5 w-5 text-foreground" />
                                    </div>
                                    <CardTitle className="text-xl font-medium group-hover:text-primary transition-colors">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-primary opacity-60 group-hover:opacity-100 transition-all duration-300">
                                        Browse Category <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

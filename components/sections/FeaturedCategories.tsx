"use client"

import Link from "next/link"
import { ArrowRight, DoorOpen, Lock, Shield, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
    {
        title: "Door Handles",
        description: "Premium lever handles and pull handles for every style.",
        icon: DoorOpen,
        href: "/product-category/catalogue",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Locks & Cylinders",
        description: "High-security locking systems for peace of mind.",
        icon: Lock,
        href: "/product-category/catalogue",
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Hinges & Fittings",
        description: "Durable and smooth-operating hinges for all door types.",
        icon: Settings,
        href: "/product-category/catalogue",
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        title: "Glass Hardware",
        description: "Sleek fittings for glass doors and partitions.",
        icon: Shield,
        href: "/product-category/catalogue",
        color: "bg-purple-500/10 text-purple-500",
    },
]

export function FeaturedCategories() {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <h2 className="text-3xl font-light tracking-tight sm:text-4xl mb-4">Our Collections</h2>
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

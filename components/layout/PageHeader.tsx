import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description?: string
    className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <div className={cn("bg-zinc-50 dark:bg-zinc-900/50 py-16 md:py-24 border-b", className)}>
            <div className="container text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{title}</h1>
                {description && <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>}
            </div>
        </div>
    )
}

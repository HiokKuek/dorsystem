import Link from 'next/link';
import { Folder } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
    name: string;
    slug: string;
}

export function CategoryCard({ name, slug }: CategoryCardProps) {
    return (
        <Link href={`/catalogue/${slug}`} className="block h-full">
            <Card className="h-full hover:bg-accent/50 transition-colors group cursor-pointer flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                    <Folder className="w-12 h-12" />
                </div>
                <CardHeader className="p-0">
                    <CardTitle className="text-lg capitalize">{name}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    );
}

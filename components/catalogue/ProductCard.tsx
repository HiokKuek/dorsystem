'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, X, FileText } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';

interface ProductCardProps {
    serialNumber: string;
    name: string;
    subcategory?: string;
    imagePath: string;
    detailImagePath?: string;
    description?: any; // Sanity Portable Text
}

export function ProductCard({ serialNumber, name, subcategory, imagePath, detailImagePath, description }: ProductCardProps) {
    const [showDetail, setShowDetail] = useState(false);

    const cleanName = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanSerial = serialNumber.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const showName = cleanName !== cleanSerial && cleanName.length > 0;

    const hasExtraInfo = detailImagePath || (description && description.length > 0);

    return (
        <>
            <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-square bg-white flex items-center justify-center p-4">
                    <Image
                        src={imagePath}
                        alt={`${serialNumber} - ${name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <CardHeader className="p-4 pb-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="text-sm font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-foreground w-fit">
                                {serialNumber}
                            </span>
                            {hasExtraInfo && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-7 w-fit px-2"
                                    onClick={() => setShowDetail(true)}
                                >
                                    {detailImagePath ? <Eye className="h-4 w-4 mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
                                    {detailImagePath ? 'View Detail' : 'Show Info'}
                                </Button>
                            )}
                        </div>
                        {subcategory && (
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                {subcategory}
                            </span>
                        )}
                    </div>
                </CardHeader>

                {showName && (
                    <CardContent className="p-4 pt-2 flex-grow">
                        <h3 className="font-medium text-sm text-muted-foreground line-clamp-2" title={name}>
                            {name}
                        </h3>
                    </CardContent>
                )}
            </Card>

            {/* Detail & Description Modal */}
            {showDetail && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity animate-in fade-in" onClick={() => setShowDetail(false)}>
                    <div className="bg-white dark:bg-zinc-950 rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col relative shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="absolute top-4 right-4 z-20">
                            <Button variant="ghost" size="icon" className="rounded-full bg-zinc-100/80 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-foreground" onClick={() => setShowDetail(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex flex-col md:flex-row h-full overflow-hidden">
                            {/* Image Section */}
                            {(detailImagePath || imagePath) && (
                                <div className={`relative flex-grow bg-white ${description ? 'md:w-3/5' : 'w-full'} h-[50vh] md:h-[70vh]`}>
                                    <Image
                                        src={detailImagePath || imagePath}
                                        alt={`Detail for ${serialNumber}`}
                                        fill
                                        className="object-contain p-8"
                                    />
                                    {detailImagePath && (
                                        <div className="absolute bottom-4 left-4 bg-zinc-100/80 px-2 py-1 text-xs font-bold rounded">
                                            DETAIL VIEW
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Content Section */}
                            {description && (
                                <div className="p-8 md:w-2/5 overflow-y-auto bg-zinc-50 dark:bg-zinc-900 border-l dark:border-zinc-800">
                                    <div className="mb-6">
                                        <span className="text-xs font-bold text-primary tracking-widest uppercase">Product Specifications</span>
                                        <h2 className="text-2xl font-bold mt-1">{serialNumber}</h2>
                                        <p className="text-muted-foreground font-medium">{subcategory}</p>
                                    </div>

                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <PortableText value={description} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t bg-white dark:bg-zinc-950 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground">Product Name</span>
                                <span className="font-bold">{name}</span>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => window.print()} className="hidden sm:flex">
                                Print Specs
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


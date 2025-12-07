'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
    serialNumber: string;
    name: string;
    subcategory?: string; // New: To display type (e.g. "Door Bolt")
    imagePath: string;
    // isDetail is no longer needed for main cards as we filter them out, 
    // but keeping it optional just in case or if we reuse card for details list
    isDetail?: boolean;
    detailImagePath?: string;
}

export function ProductCard({ serialNumber, name, subcategory, imagePath, detailImagePath }: ProductCardProps) {
    const [showDetail, setShowDetail] = useState(false);

    // Heuristic: If name is very similar to serial number, hide it.
    // e.g. Serial: "THT102", Name: "THT102" -> Hide Name
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanSerial = serialNumber.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const showName = cleanName !== cleanSerial && cleanName.length > 0;

    return (
        <>
            <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-sm hover:shadow-md transition-shadow">
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
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-foreground">
                                {serialNumber}
                            </span>
                            {detailImagePath && (
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-7 w-fit p-2"
                                    onClick={() => setShowDetail(true)}
                                >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Detail
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

            {/* Simple Detail Modal */}
            {showDetail && detailImagePath && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity animate-in fade-in" onClick={() => setShowDetail(false)}>
                    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="absolute top-2 right-2 z-10">
                            <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/40 text-black dark:text-white" onClick={() => setShowDetail(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="relative w-full h-full flex-grow min-h-[50vh]">
                            <Image
                                src={detailImagePath}
                                alt={`Detail for ${serialNumber}`}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="p-4 border-t text-center">
                            <h3 className="font-bold text-lg">{serialNumber} - Detail View</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background text-foreground">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/20" />
                {/* Subtle Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                {/* Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium tracking-widest uppercase text-primary backdrop-blur-md">
                        Architectural Ironmongery
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 text-5xl font-light tracking-tight sm:text-7xl md:text-8xl text-foreground"
                >
                    Precision in <br className="hidden sm:block" />
                    <span className="font-serif italic opacity-90 text-primary">Every Detail</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mb-12 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Elevate your space with our curated collection of premium door handles,
                    locks, and architectural fittings. Designed for modern living.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0"
                >
                    <Link href="/shop">
                        <Button size="lg" className="w-full sm:w-auto text-base px-10 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                            View Collection
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-10 h-14 rounded-full bg-transparent border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

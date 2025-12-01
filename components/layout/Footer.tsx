import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">DORSYSTEM</h3>
                        <p className="text-sm text-muted-foreground">
                            Premium Architectural Ironmongery Supplier. Quality and precision in every detail.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                            <li><Link href="/shop" className="hover:text-foreground">Shop</Link></li>
                            <li><Link href="/project-reference" className="hover:text-foreground">Projects</Link></li>
                            <li><Link href="/product-category/catalogue" className="hover:text-foreground">Catalogue</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
                            <li><Link href="/my-account" className="hover:text-foreground">My Account</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>123 Ironmongery Lane</li>
                            <li>Singapore, 123456</li>
                            <li>sales@dorsystem.com</li>
                            <li>+65 1234 5678</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Dorsystem. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

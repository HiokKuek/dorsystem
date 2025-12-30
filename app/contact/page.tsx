import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="Contact Us"
                description="Get in touch with our team for inquiries, quotes, or technical support."
            />

            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8">
                                We are here to help you with all your architectural ironmongery needs.
                                Visit our showroom or contact us via phone or email.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card>
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Our Location</h3>
                                        <p className="text-sm text-muted-foreground">
                                            No 1 Soon Lee St, #05-61<br />
                                            Pioneer Centre, Singapore 627605
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-1">Contact Details</h3>
                                        <p className="text-sm text-muted-foreground">Tel: (65) 6899-1787</p>
                                        <p className="text-sm text-muted-foreground">Fax: (65) 6899-1789</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-start p-6 space-x-4">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-sm text-muted-foreground">dorsystem@hotmail.com</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

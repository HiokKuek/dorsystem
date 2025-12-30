"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner" // Assuming sonner is used, if not I'll use a simple state
import { Loader2, Send } from "lucide-react"

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.current) return

        setIsSubmitting(true)

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
            const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || "YOUR_ADMIN_TEMPLATE_ID"
            const customerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID || "YOUR_CUSTOMER_TEMPLATE_ID"
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"

            // Send both emails simultaneously
            await Promise.all([
                // 1. Email to Admin (Us)
                emailjs.sendForm(
                    serviceId,
                    adminTemplateId,
                    form.current,
                    publicKey
                ),
                // 2. Confirmation Email to Customer
                emailjs.sendForm(
                    serviceId,
                    customerTemplateId,
                    form.current,
                    publicKey
                )
            ])

            toast.success("Message sent successfully! A confirmation email has been sent to you.")
            form.current.reset()
        } catch (error) {
            console.error("EmailJS Error:", error)
            toast.error("Failed to send message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full border-none shadow-xl bg-gradient-to-br from-background to-muted/50">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Send an Enquiry</CardTitle>
                <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="user_name">Name of customer</Label>
                            <Input
                                id="user_name"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="bg-background/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="user_email">Email Address</Label>
                            <Input
                                id="user_email"
                                name="user_email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                className="bg-background/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contact_number">Contact Number</Label>
                        <Input
                            id="contact_number"
                            name="contact_number"
                            type="tel"
                            placeholder="+65 1234 5678"
                            required
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Enquiry</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            required
                            className="min-h-[150px] bg-background/50 resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full group relative overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

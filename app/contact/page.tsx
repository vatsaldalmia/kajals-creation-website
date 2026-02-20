import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import LocalBusinessSchema from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Contact Kajal's Creation - Beverly Hills Luxury Packaging | Get Quote",
  description:
    "Contact Kajal's Creation in Beverly Hills for luxury gift packaging services. Located at 123 Luxury Lane, Beverly Hills, CA. Call +1-555-TREASURE for consultation.",
  keywords:
    "contact Kajal's Creation, Beverly Hills gift packaging, luxury packaging consultation, custom boxes quote, gift wrapping Beverly Hills",
}

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="pt-8">
        <ContactForm />
      </div>
    </>
  )
}

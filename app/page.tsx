import type { Metadata } from "next"
import Hero from "@/components/hero"
import ArtOfPacking from "@/components/art-of-packing"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import ContactForm from "@/components/contact-form"
import LocalBusinessSchema from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Kajal's Creation - Luxury Gift Packaging & Custom Boxes | Local Business",
  description:
    "Premium gift packaging and custom treasure boxes in your area. Expert craftsmanship, elegant designs, and personalized service for all occasions.",
  keywords:
    "luxury gift packaging, custom boxes, treasure boxes, gift wrapping service, premium packaging, local gift packaging, custom gift boxes",
  openGraph: {
    title: "Kajal's Creation - Luxury Gift Packaging & Custom Boxes",
    description: "Premium gift packaging and custom treasure boxes in your area.",
    images: ["/images/hero-bg.jpg"],
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ArtOfPacking />
      <Services />
      <Gallery limit={3} />
      <ContactForm />
    </>
  )
}

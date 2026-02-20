import type { Metadata } from "next"
import Gallery from "@/components/gallery"
import LocalBusinessSchema from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Luxury Packaging Gallery - Kajal's Creation Beverly Hills",
  description:
    "Browse our portfolio of exquisite luxury gift packaging creations. See examples of our custom boxes, corporate gifts, wedding favors, and premium wrapping services.",
  keywords:
    "luxury packaging gallery, gift packaging portfolio, custom boxes examples, corporate gifts gallery, wedding packaging Beverly Hills",
}

export default function GalleryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Gallery />
    </>
  )
}

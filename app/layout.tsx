import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Cinzel, Lato } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kajal's Creation — Luxury Trousseau & Gift Packaging",
  description:
    "Where every detail tells a story. Premium luxury trousseau packaging, bridal gift hampers, and bespoke wedding presentation crafted with royal elegance and timeless sophistication.",
  keywords:
    "luxury trousseau packaging, bridal gift hampers, wedding favors, premium packaging, luxury gift boxes, trousseau packing, bespoke wedding gifts",
  authors: [{ name: "Kajal's Creation" }],
  creator: "Kajal's Creation",
  publisher: "Kajal's Creation",
  icons: {
    icon: "/dalmiakajal.jpeg",
    apple: "/dalmiakajal.jpeg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://treasureelegance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kajal's Creation — Luxury Trousseau & Gift Packaging",
    description: "Where every detail tells a story. Premium luxury trousseau packaging crafted with royal elegance.",
    url: "https://treasureelegance.com",
    siteName: "Kajal's Creation",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kajal's Creation luxury trousseau packaging",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kajal's Creation — Luxury Trousseau & Gift Packaging",
    description: "Where every detail tells a story. Premium luxury trousseau packaging crafted with royal elegance.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${lato.variable} silk-bg silk-texture`}
      >
        <Header />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

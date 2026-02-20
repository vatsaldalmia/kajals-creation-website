"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const showGlass = !isHome || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${showGlass ? "navbar-glass py-3" : "navbar-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-cinzel text-2xl md:text-3xl tracking-[0.15em] luxury-transition"
            style={{ color: showGlass ? "#D4AF37" : "#F8F5F0" }}
          >
            Kajal's Creation
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-luxury font-lato text-sm tracking-[0.1em] uppercase font-light ${showGlass ? "text-wine" : "text-ivory/90"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold font-lato text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-full"
            >
              Book for Event
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className={`p-2 rounded-lg luxury-transition ${showGlass
                  ? "text-wine hover:text-champagne"
                  : "text-ivory hover:text-champagne"
                  }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] border-l border-champagne/20"
              style={{ background: "linear-gradient(180deg, #F8F5F0 0%, #F5F0E8 100%)" }}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col mt-12 space-y-2">
                <p className="font-cinzel text-champagne text-xs tracking-[0.2em] uppercase mb-6 px-4">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-cormorant text-2xl text-wine hover:text-champagne px-4 py-3 luxury-transition border-b border-champagne/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-8 px-4">
                  <Link
                    href="/contact"
                    className="btn-gold block text-center font-lato text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Book for Event
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

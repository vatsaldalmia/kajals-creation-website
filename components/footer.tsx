import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const businessInfo = {
    name: "Kajal's Creation",
    phone: "+91 9334944976",
    address: "A-802 Panchwati Residency, Chandani Chowk, Kanke Road, opp. to Kaveri, Ranchi, Jharkhand",
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D2137 0%, #0B1C2D 40%, #06111C 100%)" }}
    >
      {/* Subtle gold pattern overlay */}
      <div className="absolute inset-0 mughal-pattern-bg opacity-10" />

      {/* Top gold border line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Brand Section */}
        <div className="text-center mb-14">
          <h2 className="font-cinzel text-3xl md:text-4xl tracking-[0.2em] text-champagne mb-3">
            {businessInfo.name}
          </h2>
          <p className="font-cormorant text-ivory/40 text-lg italic tracking-wide">
            Where Every Detail Tells a Story
          </p>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-champagne/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-champagne/30" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-champagne/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-5">
            <h4 className="font-cinzel text-champagne text-xs tracking-[0.2em] uppercase">
              About Us
            </h4>
            <div className="w-8 h-px bg-champagne/30" />
            <p className="font-lato text-ivory/40 text-sm leading-relaxed font-light">
              Premium luxury trousseau packaging and bespoke gift presentation, crafted with
              devotion and timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="social-glow text-ivory/30 hover:text-champagne" aria-label="Facebook">
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="social-glow text-ivory/30 hover:text-champagne" aria-label="Instagram">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="social-glow text-ivory/30 hover:text-champagne" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-cinzel text-champagne text-xs tracking-[0.2em] uppercase">
              Quick Links
            </h4>
            <div className="w-8 h-px bg-champagne/30" />
            <div className="space-y-3">
              {["Home", "Services", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="block font-lato text-ivory/40 hover:text-champagne text-sm font-light tracking-wide luxury-transition"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="font-cinzel text-champagne text-xs tracking-[0.2em] uppercase">
              Our Services
            </h4>
            <div className="w-8 h-px bg-champagne/30" />
            <div className="space-y-3">
              {[
                "Trousseau Packing",
                "Bridal Hampers",
                "Wedding Favors",
                "Corporate Gifting",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block font-lato text-ivory/40 hover:text-champagne text-sm font-light tracking-wide luxury-transition"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-cinzel text-champagne text-xs tracking-[0.2em] uppercase">
              Contact Info
            </h4>
            <div className="w-8 h-px bg-champagne/30" />
            <div className="space-y-4">
              {[
                { icon: MapPin, text: businessInfo.address },
                { icon: Phone, text: businessInfo.phone },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <item.icon className="h-4 w-4 text-champagne/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-lato text-ivory/40 text-sm font-light leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-champagne/10 text-center">
          <p className="font-lato text-ivory/25 text-xs tracking-[0.1em] font-light">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved. Crafted with devotion.
          </p>
        </div>
      </div>
    </footer>
  )
}

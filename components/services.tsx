"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Gift, Heart, Crown, Gem, Briefcase, Sparkles } from "lucide-react"

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el) => {
              el.classList.add("is-visible")
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Trousseau Packing",
      description:
        "Exquisite bridal trousseau presentation with hand-folded fabrics, signature draping, and luxury embellishments that honor tradition.",
      image: "/trousseau-packing/PHOTO-2025-08-06-11-14-06 13.jpg",
    },
    {
      title: "Bridal Gift Hampers",
      description:
        "Curated gift hampers adorned with silk, florals, and gold detailing — perfect for mehndi, haldi, and wedding celebrations.",
      image: "/hamper/PHOTO-2025-08-04-08-58-07 2.jpg",
    },
    {
      title: "Fruit Hampers",
      description:
        "Beautifully arranged premium fruit hampers presented in luxurious packaging, ideal for festive gifting occasions.",
      image: "/fruit-hamper/PHOTO-2025-08-04-12-24-35 5.jpg",
    },
    {
      title: "Meva Platters",
      description:
        "Stunning dry fruit and meva platters arranged with artistic precision, wrapped in royal glory for special occasions.",
      image: "/meva-platters/PHOTO-2025-08-06-11-33-12 2.jpg",
    },
    {
      title: "Coin Platters",
      description:
        "Ceremonial coin platters presented with regal elegance — a traditional touch crafted for modern celebrations.",
      image: "/coin-platters/PHOTO-2025-08-04-11-49-36 4.jpg",
    },
    {
      title: "Seasonal Collections",
      description:
        "Festival-themed packaging — Diwali, Eid, Christmas — capturing the spirit of celebration with timeless elegance.",
      image: "/trousseau-packing/PHOTO-2025-08-06-11-21-50 19.jpg",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F5F0 0%, #F5F0E8 50%, #F8F5F0 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 mughal-pattern-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <p className="animate-on-scroll font-cinzel text-champagne text-xs tracking-[0.25em] uppercase">
            What We Offer
          </p>
          <h2 className="animate-on-scroll stagger-1 font-cormorant text-4xl md:text-5xl lg:text-6xl text-wine tracking-wide">
            Our <span className="italic text-emerald">Services</span>
          </h2>

          {/* Gold Divider */}
          <div className="animate-on-scroll stagger-2 gold-divider">
            <span className="gold-divider-icon">✦</span>
          </div>

          <p className="animate-on-scroll stagger-2 font-lato text-wine/60 max-w-2xl mx-auto font-light tracking-wide text-lg">
            Discover our comprehensive range of luxury packaging services, each crafted with
            precision, passion, and attention to every exquisite detail.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-on-scroll scale-in stagger-${index + 1} luxury-card ribbon-top overflow-hidden group cursor-pointer`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="font-cormorant text-2xl text-wine mb-3 tracking-wide group-hover:text-emerald luxury-transition">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent mx-auto mb-4" />

                <p className="font-lato text-wine/55 leading-relaxed font-light text-sm tracking-wide">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

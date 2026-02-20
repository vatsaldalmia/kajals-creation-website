"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ArtOfPacking() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 silk-bg mughal-pattern-bg overflow-hidden"
    >
      {/* Decorative Mughal corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-champagne/20" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-champagne/20" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-champagne/20" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-champagne/20" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 relative z-10">
            <div className="animate-on-scroll">
              <p className="font-cinzel text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                Our Heritage
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wine leading-[1.15] tracking-wide">
                The Art of
                <br />
                <span className="italic text-emerald">Trousseau Packing</span>
              </h2>
            </div>

            {/* Gold Divider */}
            <div className="animate-on-scroll stagger-1">
              <div className="flex items-center gap-3 max-w-[200px]">
                <div className="flex-1 h-px bg-gradient-to-r from-champagne/60 to-transparent" />
                <div className="w-1.5 h-1.5 rotate-45 bg-champagne/40" />
              </div>
            </div>

            <p className="animate-on-scroll stagger-2 font-lato text-wine/70 text-lg leading-relaxed font-light tracking-wide">
              Every package tells a story. Our master artisans combine centuries-old Indian trousseau
              traditions with contemporary luxury aesthetics to create packaging that is as
              memorable as the treasures inside.
            </p>

            {/* Gold Divider thin */}
            <div className="animate-on-scroll stagger-3 w-24 h-px bg-gradient-to-r from-champagne/40 to-transparent" />

            <p className="animate-on-scroll stagger-3 font-lato text-wine/60 text-base leading-relaxed font-light">
              From intimate bridal trousseau presentations to grand wedding celebrations, we bring
              meticulous artistry to every fold, every ribbon, every detail — crafting moments
              that linger in memory forever.
            </p>

            {/* Signature detail */}
            <div className="animate-on-scroll stagger-4 flex items-center gap-4 pt-4">
              <div className="w-12 h-px bg-champagne/40" />
              <p className="font-cormorant text-champagne italic text-lg">
                Handcrafted with devotion
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="animate-on-scroll stagger-2 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden border border-champagne/15 shadow-lg">
                <Image
                  src="/trousseau-packing/PHOTO-2025-08-06-11-14-41 5.jpg"
                  alt="Luxury trousseau packing artwork"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/20 to-transparent" />
              </div>
              {/* Two smaller images */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-champagne/15 shadow-md">
                <Image
                  src="/trousseau-packing/PHOTO-2025-08-06-11-21-50 6.jpg"
                  alt="Elegant gift wrapping detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/15 to-transparent" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-champagne/15 shadow-md">
                <Image
                  src="/meva-platters/PHOTO-2025-08-06-11-33-12.jpg"
                  alt="Premium meva platter presentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/15 to-transparent" />
              </div>
            </div>

            {/* Floating gold accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
            />
            {/* Inner gold frame on the main image */}
            <div className="absolute top-4 left-4 right-4 bottom-[calc(50%+8px)] border border-champagne/10 rounded-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

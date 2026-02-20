"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

/* ─── Photo data from all 5 folders ─── */

const coinPlatters = [
  "PHOTO-2025-08-04-11-49-36 10.jpg", "PHOTO-2025-08-04-11-49-36 11.jpg",
  "PHOTO-2025-08-04-11-49-36 12.jpg", "PHOTO-2025-08-04-11-49-36 2.jpg",
  "PHOTO-2025-08-04-11-49-36 3.jpg", "PHOTO-2025-08-04-11-49-36 4.jpg",
  "PHOTO-2025-08-04-11-49-36 5.jpg", "PHOTO-2025-08-04-11-49-36 6.jpg",
  "PHOTO-2025-08-04-11-49-36 7.jpg", "PHOTO-2025-08-04-11-49-36 8.jpg",
  "PHOTO-2025-08-04-11-49-36 9.jpg", "PHOTO-2025-08-04-11-49-36.jpg",
  "PHOTO-2025-08-04-11-50-07 2.jpg", "PHOTO-2025-08-04-11-50-07.jpg",
  "PHOTO-2025-08-04-11-51-59 2.jpg", "PHOTO-2025-08-04-11-51-59 3.jpg",
  "PHOTO-2025-08-04-11-51-59 4.jpg", "PHOTO-2025-08-04-11-51-59.jpg",
  "PHOTO-2025-08-04-11-56-39 10.jpg", "PHOTO-2025-08-04-11-56-39 11.jpg",
  "PHOTO-2025-08-04-11-56-39 12.jpg", "PHOTO-2025-08-04-11-56-39 2.jpg",
  "PHOTO-2025-08-04-11-56-39 3.jpg", "PHOTO-2025-08-04-11-56-39 4.jpg",
  "PHOTO-2025-08-04-11-56-39 5.jpg", "PHOTO-2025-08-04-11-56-39 6.jpg",
  "PHOTO-2025-08-04-11-56-39 7.jpg", "PHOTO-2025-08-04-11-56-39 8.jpg",
  "PHOTO-2025-08-04-11-56-39 9.jpg", "PHOTO-2025-08-04-11-56-39.jpg",
].map((f) => ({ image: `/coin-platters/${f}`, category: "Coin Platters" }))

const fruitHamper = [
  "PHOTO-2025-08-04-12-24-35 10.jpg", "PHOTO-2025-08-04-12-24-35 11.jpg",
  "PHOTO-2025-08-04-12-24-35 12.jpg", "PHOTO-2025-08-04-12-24-35 13.jpg",
  "PHOTO-2025-08-04-12-24-35 2.jpg", "PHOTO-2025-08-04-12-24-35 3.jpg",
  "PHOTO-2025-08-04-12-24-35 4.jpg", "PHOTO-2025-08-04-12-24-35 5.jpg",
  "PHOTO-2025-08-04-12-24-35 6.jpg", "PHOTO-2025-08-04-12-24-35 7.jpg",
  "PHOTO-2025-08-04-12-24-35 8.jpg", "PHOTO-2025-08-04-12-24-35 9.jpg",
  "PHOTO-2025-08-04-12-24-35.jpg",
].map((f) => ({ image: `/fruit-hamper/${f}`, category: "Fruit Hampers" }))

const hamper = [
  "PHOTO-2025-08-04-08-57-13 2.jpg", "PHOTO-2025-08-04-08-57-13.jpg",
  "PHOTO-2025-08-04-08-58-07 10.jpg", "PHOTO-2025-08-04-08-58-07 11.jpg",
  "PHOTO-2025-08-04-08-58-07 12.jpg", "PHOTO-2025-08-04-08-58-07 13.jpg",
  "PHOTO-2025-08-04-08-58-07 14.jpg", "PHOTO-2025-08-04-08-58-07 15.jpg",
  "PHOTO-2025-08-04-08-58-07 16.jpg", "PHOTO-2025-08-04-08-58-07 17.jpg",
  "PHOTO-2025-08-04-08-58-07 18.jpg", "PHOTO-2025-08-04-08-58-07 19.jpg",
  "PHOTO-2025-08-04-08-58-07 2.jpg", "PHOTO-2025-08-04-08-58-07 3.jpg",
  "PHOTO-2025-08-04-08-58-07 4.jpg", "PHOTO-2025-08-04-08-58-07 5.jpg",
  "PHOTO-2025-08-04-08-58-07 6.jpg", "PHOTO-2025-08-04-08-58-07 7.jpg",
  "PHOTO-2025-08-04-08-58-07 8.jpg", "PHOTO-2025-08-04-08-58-07 9.jpg",
  "PHOTO-2025-08-04-08-58-07.jpg", "PHOTO-2025-08-04-08-58-40.jpg",
  "PHOTO-2025-08-04-08-59-19 10.jpg", "PHOTO-2025-08-04-08-59-19 11.jpg",
  "PHOTO-2025-08-04-08-59-19 2.jpg", "PHOTO-2025-08-04-08-59-19 3.jpg",
  "PHOTO-2025-08-04-08-59-19 4.jpg", "PHOTO-2025-08-04-08-59-19 5.jpg",
  "PHOTO-2025-08-04-08-59-19 6.jpg", "PHOTO-2025-08-04-08-59-19 7.jpg",
  "PHOTO-2025-08-04-08-59-19 8.jpg", "PHOTO-2025-08-04-08-59-19 9.jpg",
  "PHOTO-2025-08-04-08-59-19.jpg",
  "WhatsApp Image 2026-02-21 at 12.51.27 AM (1).jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.27 AM.jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.28 AM (1).jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.28 AM.jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.29 AM.jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.30 AM.jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.31 AM (1).jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.31 AM.jpeg",
  "WhatsApp Image 2026-02-21 at 12.51.43 AM.jpeg",
].map((f) => ({ image: `/hamper/${f}`, category: "Gift Hampers" }))

const mevaPlatters = [
  "PHOTO-2025-08-06-11-33-12 10.jpg", "PHOTO-2025-08-06-11-33-12 11.jpg",
  "PHOTO-2025-08-06-11-33-12 2.jpg", "PHOTO-2025-08-06-11-33-12 3.jpg",
  "PHOTO-2025-08-06-11-33-12 4.jpg", "PHOTO-2025-08-06-11-33-12 5.jpg",
  "PHOTO-2025-08-06-11-33-12 6.jpg", "PHOTO-2025-08-06-11-33-12 7.jpg",
  "PHOTO-2025-08-06-11-33-12 8.jpg", "PHOTO-2025-08-06-11-33-12 9.jpg",
  "PHOTO-2025-08-06-11-33-12.jpg",
  "PHOTO-2025-08-06-11-34-24 10.jpg", "PHOTO-2025-08-06-11-34-24 11.jpg",
  "PHOTO-2025-08-06-11-34-24 12.jpg", "PHOTO-2025-08-06-11-34-24 13.jpg",
  "PHOTO-2025-08-06-11-34-24 14.jpg", "PHOTO-2025-08-06-11-34-24 15.jpg",
  "PHOTO-2025-08-06-11-34-24 16.jpg", "PHOTO-2025-08-06-11-34-24 17.jpg",
  "PHOTO-2025-08-06-11-34-24 18.jpg", "PHOTO-2025-08-06-11-34-24 2.jpg",
  "PHOTO-2025-08-06-11-34-24 3.jpg", "PHOTO-2025-08-06-11-34-24 4.jpg",
  "PHOTO-2025-08-06-11-34-24 5.jpg", "PHOTO-2025-08-06-11-34-24 6.jpg",
  "PHOTO-2025-08-06-11-34-24 7.jpg", "PHOTO-2025-08-06-11-34-24 8.jpg",
  "PHOTO-2025-08-06-11-34-24 9.jpg", "PHOTO-2025-08-06-11-34-24.jpg",
  "PHOTO-2025-08-06-11-34-56.jpg",
].map((f) => ({ image: `/meva-platters/${f}`, category: "Meva Platters" }))

const trousseauPacking = [
  "PHOTO-2025-08-06-11-14-06 10.jpg", "PHOTO-2025-08-06-11-14-06 11.jpg",
  "PHOTO-2025-08-06-11-14-06 12.jpg", "PHOTO-2025-08-06-11-14-06 13.jpg",
  "PHOTO-2025-08-06-11-14-06 14.jpg", "PHOTO-2025-08-06-11-14-06 15.jpg",
  "PHOTO-2025-08-06-11-14-06 16.jpg", "PHOTO-2025-08-06-11-14-06 17.jpg",
  "PHOTO-2025-08-06-11-14-06 18.jpg", "PHOTO-2025-08-06-11-14-06 19.jpg",
  "PHOTO-2025-08-06-11-14-06 2.jpg", "PHOTO-2025-08-06-11-14-06 20.jpg",
  "PHOTO-2025-08-06-11-14-06 21.jpg", "PHOTO-2025-08-06-11-14-06 22.jpg",
  "PHOTO-2025-08-06-11-14-06 3.jpg", "PHOTO-2025-08-06-11-14-06 4.jpg",
  "PHOTO-2025-08-06-11-14-06 5.jpg", "PHOTO-2025-08-06-11-14-06 6.jpg",
  "PHOTO-2025-08-06-11-14-06 7.jpg", "PHOTO-2025-08-06-11-14-06 8.jpg",
  "PHOTO-2025-08-06-11-14-06 9.jpg", "PHOTO-2025-08-06-11-14-06.jpg",
  "PHOTO-2025-08-06-11-14-41 10.jpg", "PHOTO-2025-08-06-11-14-41 11.jpg",
  "PHOTO-2025-08-06-11-14-41 12.jpg", "PHOTO-2025-08-06-11-14-41 2.jpg",
  "PHOTO-2025-08-06-11-14-41 3.jpg", "PHOTO-2025-08-06-11-14-41 4.jpg",
  "PHOTO-2025-08-06-11-14-41 5.jpg", "PHOTO-2025-08-06-11-14-41 6.jpg",
  "PHOTO-2025-08-06-11-14-41 7.jpg", "PHOTO-2025-08-06-11-14-41 8.jpg",
  "PHOTO-2025-08-06-11-14-41 9.jpg", "PHOTO-2025-08-06-11-14-41.jpg",
  "PHOTO-2025-08-06-11-15-51 2.jpg", "PHOTO-2025-08-06-11-15-51 3.jpg",
  "PHOTO-2025-08-06-11-15-51.jpg",
  "PHOTO-2025-08-06-11-17-29 2.jpg", "PHOTO-2025-08-06-11-17-29 3.jpg",
  "PHOTO-2025-08-06-11-17-29 4.jpg", "PHOTO-2025-08-06-11-17-29 5.jpg",
  "PHOTO-2025-08-06-11-17-29 6.jpg", "PHOTO-2025-08-06-11-17-29 7.jpg",
  "PHOTO-2025-08-06-11-17-29 8.jpg", "PHOTO-2025-08-06-11-17-29 9.jpg",
  "PHOTO-2025-08-06-11-17-29.jpg",
  "PHOTO-2025-08-06-11-21-50 10.jpg", "PHOTO-2025-08-06-11-21-50 11.jpg",
  "PHOTO-2025-08-06-11-21-50 12.jpg", "PHOTO-2025-08-06-11-21-50 13.jpg",
  "PHOTO-2025-08-06-11-21-50 14.jpg", "PHOTO-2025-08-06-11-21-50 15.jpg",
  "PHOTO-2025-08-06-11-21-50 16.jpg", "PHOTO-2025-08-06-11-21-50 17.jpg",
  "PHOTO-2025-08-06-11-21-50 18.jpg", "PHOTO-2025-08-06-11-21-50 19.jpg",
  "PHOTO-2025-08-06-11-21-50 2.jpg", "PHOTO-2025-08-06-11-21-50 20.jpg",
  "PHOTO-2025-08-06-11-21-50 21.jpg", "PHOTO-2025-08-06-11-21-50 22.jpg",
  "PHOTO-2025-08-06-11-21-50 23.jpg", "PHOTO-2025-08-06-11-21-50 24.jpg",
  "PHOTO-2025-08-06-11-21-50 25.jpg", "PHOTO-2025-08-06-11-21-50 26.jpg",
  "PHOTO-2025-08-06-11-21-50 27.jpg", "PHOTO-2025-08-06-11-21-50 28.jpg",
  "PHOTO-2025-08-06-11-21-50 29.jpg", "PHOTO-2025-08-06-11-21-50 3.jpg",
  "PHOTO-2025-08-06-11-21-50 30.jpg", "PHOTO-2025-08-06-11-21-50 4.jpg",
  "PHOTO-2025-08-06-11-21-50 5.jpg", "PHOTO-2025-08-06-11-21-50 6.jpg",
  "PHOTO-2025-08-06-11-21-50 7.jpg", "PHOTO-2025-08-06-11-21-50 8.jpg",
  "PHOTO-2025-08-06-11-21-50 9.jpg", "PHOTO-2025-08-06-11-21-50.jpg",
].map((f) => ({ image: `/trousseau-packing/${f}`, category: "Trousseau Packing" }))

const ALL_PHOTOS = [
  ...trousseauPacking,
  ...hamper,
  ...coinPlatters,
  ...mevaPlatters,
  ...fruitHamper,
]

const CATEGORIES = [
  "All",
  "Trousseau Packing",
  "Gift Hampers",
  "Coin Platters",
  "Meva Platters",
  "Fruit Hampers",
]

interface GalleryProps {
  /** When set, show only this many photos per category (home page preview) */
  limit?: number
}

export default function Gallery({ limit }: GalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const isPreview = typeof limit === "number"

  /* When limit is set, pick N evenly-spaced photos per category */
  const DISPLAY_PHOTOS = isPreview
    ? [
      ...coinPlatters.slice(0, limit),
      ...fruitHamper.slice(0, limit),
      ...hamper.slice(0, limit),
      ...mevaPlatters.slice(0, limit),
      ...trousseauPacking.slice(0, limit),
    ]
    : ALL_PHOTOS

  /* Re-trigger fade-in animation whenever the filtered photos change */
  const triggerAnimations = useCallback(() => {
    if (!gridRef.current) return
    const items = gridRef.current.querySelectorAll(".gallery-fade-item")
    items.forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = "0"
      htmlEl.style.transform = "translateY(24px) scale(0.97)"
    })
    items.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      const delay = Math.min(i * 35, 800)
      setTimeout(() => {
        htmlEl.style.opacity = "1"
        htmlEl.style.transform = "translateY(0) scale(1)"
      }, delay)
    })
  }, [])

  useEffect(() => {
    const t = setTimeout(triggerAnimations, 50)
    return () => clearTimeout(t)
  }, [activeCategory, triggerAnimations])

  const filteredPhotos =
    activeCategory === "All"
      ? DISPLAY_PHOTOS
      : DISPLAY_PHOTOS.filter((p) => p.category === activeCategory)

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F0E8 0%, #F8F5F0 50%, #F5F0E8 100%)",
      }}
    >
      <div className="absolute inset-0 mughal-pattern-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6 pt-8">
          <p className="font-cinzel text-champagne text-xs tracking-[0.25em] uppercase">
            Our Portfolio
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-wine tracking-wide">
            Our <span className="italic text-emerald">Gallery</span>
          </h2>

          <div className="gold-divider">
            <span className="gold-divider-icon">✦</span>
          </div>

          <p className="font-lato text-wine/60 max-w-2xl mx-auto font-light tracking-wide text-lg">
            Explore our complete collection of exquisite packaging creations,
            each piece handcrafted with meticulous attention to detail.
          </p>
        </div>

        {/* Category Filter Pills — hidden in preview mode */}
        {!isPreview && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-lato text-xs tracking-[0.12em] uppercase px-6 py-2.5 rounded-full border luxury-transition ${activeCategory === cat
                  ? "bg-gradient-to-r from-champagne to-champagne-dark text-ivory border-champagne shadow-md"
                  : "bg-ivory-cream/80 text-wine/60 border-champagne/20 hover:border-champagne/40 hover:text-wine"
                  }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({ALL_PHOTOS.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Pinterest-style Masonry Grid — images render at natural aspect ratio */}
        <div
          ref={gridRef}
          className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
          style={{ columnGap: "16px" }}
        >
          {filteredPhotos.map((item) => (
            <div
              key={item.image}
              className="gallery-fade-item mb-4 break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer border border-champagne/10 hover:border-champagne/30 shadow-sm hover:shadow-lg"
              style={{
                opacity: 0,
                transform: "translateY(24px) scale(0.97)",
                transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Image at natural aspect ratio */}
              <Image
                src={item.image}
                alt={`${item.category} - Kajal's Creation`}
                width={0}
                height={0}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 rounded-xl">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-cormorant text-ivory text-lg tracking-wide">
                    {item.category}
                  </p>
                  <p className="font-lato text-champagne text-[10px] tracking-[0.2em] uppercase mt-1">
                    View Details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: photo count or View Full Gallery link */}
        <div className="text-center mt-12">
          {isPreview ? (
            <Link
              href="/gallery"
              className="inline-block font-lato text-xs tracking-[0.15em] uppercase px-8 py-3 rounded-full border border-champagne/40 text-wine hover:bg-gradient-to-r hover:from-champagne hover:to-champagne-dark hover:text-ivory hover:border-champagne luxury-transition shadow-sm hover:shadow-md"
            >
              View Full Gallery →
            </Link>
          ) : (
            <p className="font-lato text-wine/40 text-sm font-light tracking-wide">
              Showing {filteredPhotos.length} of {ALL_PHOTOS.length} creations
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

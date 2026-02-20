"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const parallaxRef = useRef<HTMLDivElement>(null)

  const slideImages = [
    "/trousseau-packing/PHOTO-2025-08-06-11-14-06 5.jpg",
    "/hamper/PHOTO-2025-08-04-08-57-13.jpg",
    "/trousseau-packing/PHOTO-2025-08-06-11-21-50 13.jpg",
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slideImages.length])

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.15}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background with Real Images */}
      <div ref={parallaxRef} className="absolute inset-0 parallax-slow" style={{ top: "-10%", bottom: "-10%" }}>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image}
              alt={`Kajal's Creation luxury packaging ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Luxury overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, rgba(91,14,45,0.5) 0%, rgba(11,28,45,0.6) 50%, rgba(11,28,45,0.8) 100%),
                  radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)
                `,
              }}
            />
          </div>
        ))}

        {/* Silk texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg, transparent, transparent 1px,
              rgba(212,175,55,0.3) 1px, rgba(212,175,55,0.3) 2px
            )`,
          }}
        />
        <div className="absolute inset-0 mughal-pattern-bg opacity-30 z-10" />
      </div>

      {/* Decorative Gold Corner Ornaments */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-champagne/30 rounded-tl-sm z-20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-champagne/30 rounded-tr-sm z-20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-champagne/30 rounded-bl-sm z-20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-champagne/30 rounded-br-sm z-20" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Calligraphy Tagline */}
          <p
            className={`font-cormorant text-champagne-light text-xl md:text-2xl tracking-[0.3em] uppercase transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Stylizing Special Moments
          </p>

          {/* Main Heading */}
          <h1
            className={`font-playfair text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] tracking-wide transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Elegant.{" "}
            <span className="italic text-champagne">Personal.</span>
            <br />
            Memorable.
          </h1>

          {/* Gold Divider */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-1000 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-champagne/60" />
            <div className="w-2 h-2 rotate-45 border border-champagne/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-champagne/60" />
          </div>

          {/* Subtitle */}
          <p
            className={`font-lato text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide transition-all duration-1000 ease-out delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Transform your most precious moments into treasured keepsakes with our
            handcrafted luxury trousseau packaging — where heritage meets modern elegance.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 ease-out delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <Link
              href="/gallery"
              className="btn-gold font-lato text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full"
            >
              Explore Our Craft
            </Link>
            <Link
              href="/contact"
              className="font-lato text-sm tracking-[0.2em] uppercase text-ivory/80 hover:text-champagne border border-ivory/30 hover:border-champagne/50 px-10 py-4 rounded-full luxury-transition"
            >
              Book for Event
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 rounded-full ${index === currentSlide
                ? "w-8 h-2 bg-champagne"
                : "w-2 h-2 bg-ivory/40 hover:bg-ivory/60"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="font-lato text-[10px] tracking-[0.3em] uppercase text-ivory/40 rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-champagne/40 to-transparent mt-8" />
      </div>
    </section>
  )
}

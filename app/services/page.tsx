import type { Metadata } from "next"
import Services from "@/components/services"
import LocalBusinessSchema from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Luxury Gift Packaging Services - Kajal's Creation Beverly Hills",
  description:
    "Explore our comprehensive range of luxury gift packaging services including corporate gifts, wedding favors, custom boxes, and premium wrapping in Beverly Hills, CA.",
  keywords:
    "luxury gift packaging services, corporate gifts Beverly Hills, wedding favors packaging, custom boxes Los Angeles, premium gift wrapping CA",
}

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Services Section */}
      <Services />

      {/* Additional Services Info */}
      <section className="relative py-20 silk-bg mughal-pattern-bg overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { emoji: "🎁", title: "Custom Design", desc: "Every package is uniquely designed to match your vision and occasion, ensuring a truly personalized experience." },
              { emoji: "✨", title: "Fast Turnaround", desc: "We understand timing is crucial. Our efficient process ensures quick delivery without compromising quality." },
              { emoji: "👑", title: "Premium Materials", desc: "Only the finest materials and craftsmanship go into every package, ensuring lasting beauty and protection." },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto luxury-transition hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.03) 100%)",
                    border: "1px solid rgba(212,175,55,0.25)",
                  }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-wine tracking-wide">{item.title}</h3>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent mx-auto" />
                <p className="font-lato text-wine/55 text-sm font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

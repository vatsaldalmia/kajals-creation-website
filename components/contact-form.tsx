"use client"

import { useState, useEffect, useRef } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [state, handleSubmit] = useForm("xdallrpw")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    budget: "",
    message: "",
  })

  const isEventSelected = formData.service !== ""

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

  const businessInfo = {
    name: "Kajal's Creation",
    phone: "+1-555-TREASURE",
    email: "info@treasureelegance.com",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F5F0 0%, #F2DCDD 30%, #E8C7C8 50%, #F2DCDD 70%, #F8F5F0 100%)",
      }}
    >
      <div className="absolute inset-0 mughal-pattern-bg opacity-15" />

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-champagne/20" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-champagne/20" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-champagne/20" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-champagne/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <p className="animate-on-scroll font-cinzel text-champagne text-xs tracking-[0.25em] uppercase">
            Reach Out
          </p>
          <h2 className="animate-on-scroll stagger-1 font-cormorant text-4xl md:text-5xl lg:text-6xl text-wine tracking-wide">
            Get In <span className="italic text-emerald">Touch</span>
          </h2>

          <div className="animate-on-scroll stagger-2 gold-divider">
            <span className="gold-divider-icon">✦</span>
          </div>

          <p className="animate-on-scroll stagger-2 font-lato text-wine/60 max-w-2xl mx-auto font-light tracking-wide text-lg">
            Ready to create something extraordinary? Tell us about your event and we&apos;ll craft the perfect packaging.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="animate-on-scroll stagger-2 luxury-card p-8 md:p-10 mughal-corner">
            <div className="relative z-10">
              {state.succeeded ? (
                /* ── Success Message ── */
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                      border: "1px solid rgba(212,175,55,0.3)",
                    }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-cormorant text-3xl text-wine tracking-wide">
                    Thank You!
                  </h3>
                  <p className="font-lato text-wine/60 text-sm font-light leading-relaxed max-w-sm mx-auto">
                    Your booking request has been received. We&apos;ll get back to you within 24 hours to discuss your event.
                  </p>
                </div>
              ) : (
                /* ── Form ── */
                <>
                  <h3 className="font-cormorant text-2xl text-wine mb-2 tracking-wide">
                    Book for Your Event
                  </h3>
                  <p className="font-lato text-wine/50 text-sm font-light mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="input-luxury w-full px-5 py-3.5 text-sm font-lato"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1 font-lato" />
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="input-luxury w-full px-5 py-3.5 text-sm font-lato"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1 font-lato" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input-luxury w-full px-5 py-3.5 text-sm font-lato"
                        />
                      </div>
                      <div>
                        {/* Hidden input so Formspree receives the select value */}
                        <input type="hidden" name="event" value={formData.service} />
                        <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                          <SelectTrigger className="input-luxury h-[50px] text-sm font-lato">
                            <SelectValue placeholder="Select Event" />
                          </SelectTrigger>
                          <SelectContent className="bg-ivory border-champagne/20">
                            <SelectItem value="baby-shower">Baby Shower</SelectItem>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Conditional event details — shown when an event is selected */}
                    {isEventSelected && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                        <div className="relative">
                          <input
                            id="eventDate"
                            type="date"
                            name="eventDate"
                            placeholder="Event Date"
                            value={formData.eventDate}
                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                            className="input-luxury w-full px-5 py-3.5 text-sm font-lato"
                          />
                          <span className="absolute -top-2.5 left-3 bg-ivory px-1.5 text-[10px] font-lato text-champagne tracking-wider uppercase">Event Date</span>
                        </div>
                        <div>
                          <input type="hidden" name="budget" value={formData.budget} />
                          <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                            <SelectTrigger className="input-luxury h-[50px] text-sm font-lato">
                              <SelectValue placeholder="Budget Range" />
                            </SelectTrigger>
                            <SelectContent className="bg-ivory border-champagne/20">
                              <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                              <SelectItem value="5k-15k">₹5,000 – ₹15,000</SelectItem>
                              <SelectItem value="15k-30k">₹15,000 – ₹30,000</SelectItem>
                              <SelectItem value="30k-50k">₹30,000 – ₹50,000</SelectItem>
                              <SelectItem value="50k-plus">₹50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event &amp; vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="input-luxury w-full px-5 py-3.5 text-sm font-lato resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1 font-lato" />

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn-gold w-full font-lato text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Sending..." : "Book for Event"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

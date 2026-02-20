export default function LocalBusinessSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kajal's Creation",
    description:
      "Premium luxury gift packaging and custom treasure boxes with expert craftsmanship and personalized service.",
    url: "https://treasureelegance.com",
    telephone: "+1-555-TREASURE",
    email: "info@treasureelegance.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Luxury Lane",
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0736",
      longitude: "-118.4004",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    priceRange: "$$-$$$",
    image: ["https://treasureelegance.com/images/hero-bg.jpg", "https://treasureelegance.com/images/gallery-1.jpg"],
    sameAs: [
      "https://www.facebook.com/treasureelegance",
      "https://www.instagram.com/treasureelegance",
      "https://www.linkedin.com/company/treasureelegance",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Absolutely stunning packaging! The attention to detail is incredible and made our corporate gifts truly memorable.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gift Packaging Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Gift Wrapping",
            description: "Premium gift wrapping with custom ribbons and elegant finishes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Treasure Boxes",
            description: "Handcrafted custom boxes for special occasions and corporate gifts",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData).replace(/</g, "\\u003c"),
      }}
    />
  )
}

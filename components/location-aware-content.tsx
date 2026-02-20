"use client"

import { useEffect, useState } from "react"

interface LocationData {
  city: string
  state: string
  country: string
}

export default function LocationAwareContent() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [localKeywords, setLocalKeywords] = useState<string[]>([])

  useEffect(() => {
    // Get user's location (in a real app, you'd use a geolocation API)
    const detectLocation = async () => {
      try {
        // Simulated location detection - replace with actual geolocation API
        const mockLocation = {
          city: "Beverly Hills",
          state: "CA",
          country: "US",
        }
        setLocation(mockLocation)

        // Set location-specific keywords
        const keywords = [
          `luxury gift packaging ${mockLocation.city}`,
          `custom boxes ${mockLocation.city}`,
          `gift wrapping service ${mockLocation.state}`,
          `premium packaging near me`,
        ]
        setLocalKeywords(keywords)
      } catch (error) {
        console.error("Location detection failed:", error)
      }
    }

    detectLocation()
  }, [])

  if (!location) return null

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <h3 className="font-semibold text-amber-800 mb-2">
        Serving {location.city}, {location.state}
      </h3>
      <p className="text-sm text-amber-700">
        We provide premium luxury gift packaging services in your area. Local delivery available with same-day service
        for urgent orders.
      </p>

      {/* Hidden keywords for SEO */}
      <div className="sr-only">
        {localKeywords.map((keyword, index) => (
          <span key={index}>{keyword} </span>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect } from "react"

export default function GoogleBusinessIntegration() {
  useEffect(() => {
    // Google Business Profile integration script
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/platform.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="space-y-4">
      {/* Google Reviews Widget */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-amber-800 mb-4">Find Us on Google</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-600">4.8/5 based on 127 reviews</span>
          </div>
          <p className="text-sm text-gray-600">
            See what our customers are saying about our luxury packaging services in Beverly Hills.
          </p>
          <a
            href="https://www.google.com/maps/place/Treasure+Elegance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Google Posts Integration */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-amber-800 mb-4">Latest Updates</h3>
        <div className="space-y-3">
          <div className="border-l-4 border-amber-500 pl-4">
            <p className="text-sm font-medium">Holiday Special Packaging Available</p>
            <p className="text-xs text-gray-500">Posted 2 days ago</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <p className="text-sm font-medium">New Corporate Gift Collection Launched</p>
            <p className="text-xs text-gray-500">Posted 1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  // Generate location-specific content
  const locationContent = {
    heroTitle: `Luxury Gift Packaging in ${city}, ${state}`,
    heroDescription: `Transform your gifts into treasured memories with our premium packaging services in ${city}. Expert craftsmanship and local delivery available.`,
    serviceAreas: [
      `${city} luxury gift packaging`,
      `${state} custom boxes`,
      `Premium packaging near ${city}`,
      `Gift wrapping services ${city}`,
    ],
    localKeywords: [
      `luxury gift packaging ${city}`,
      `custom boxes ${city} ${state}`,
      `gift wrapping service ${city}`,
      `premium packaging ${state}`,
    ],
  }

  return NextResponse.json(locationContent)
}

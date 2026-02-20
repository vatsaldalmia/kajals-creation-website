import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PackingInsights() {
  const insights = [
    {
      title: "5 Secrets to Eco-Friendly Luxury Packaging",
      excerpt:
        "Discover how to maintain elegance while being environmentally conscious in your gift packaging choices.",
      image: "/placeholder.svg?height=200&width=300",
      date: "December 15, 2024",
      category: "Sustainability",
    },
    {
      title: "A Gift That Speaks a 1000 Words",
      excerpt:
        "Learn the psychology behind memorable gift presentation and how packaging influences emotional connection.",
      image: "/placeholder.svg?height=200&width=300",
      date: "December 10, 2024",
      category: "Psychology",
    },
    {
      title: "The Art of Corporate Gift Wrapping",
      excerpt:
        "Master the techniques for creating professional, branded packaging that leaves lasting impressions on clients.",
      image: "/placeholder.svg?height=200&width=300",
      date: "December 5, 2024",
      category: "Business",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Packing Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and techniques in luxury packaging from our Beverly Hills
            experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={insight.image || "/placeholder.svg"} alt={insight.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm">{insight.category}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-amber-800 hover:text-amber-900 cursor-pointer">{insight.title}</CardTitle>
                <CardDescription>{insight.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{insight.date}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-800 text-amber-800 hover:bg-amber-50 bg-transparent"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-amber-800 hover:bg-amber-900">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}

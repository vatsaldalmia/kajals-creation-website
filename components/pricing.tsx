import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "$15,000",
      period: "per year",
      description: "Perfect for small businesses and personal gifts",
      features: [
        "Basic decorative materials",
        "Standard packaging options",
        "Email support",
        "Local delivery in Beverly Hills",
        "Basic customization",
      ],
    },
    {
      name: "Premium",
      price: "$30,000",
      period: "per year",
      description: "Ideal for growing businesses and special occasions",
      features: [
        "Premium materials and finishes",
        "Custom design consultation",
        "Priority phone support",
        "Extended delivery area (LA County)",
        "Advanced customization options",
        "Seasonal design updates",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$50,000",
      period: "per year",
      description: "For discerning clients who demand the finest",
      features: [
        "Exclusive luxury materials",
        "Dedicated account manager",
        "24/7 concierge support",
        "Nationwide delivery",
        "Unlimited customization",
        "White-glove service",
        "Exclusive design previews",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your needs. All plans include our signature Beverly Hills craftsmanship and
            attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-amber-500 shadow-lg scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-amber-800">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-amber-800 hover:bg-amber-900" : "bg-gray-800 hover:bg-gray-900"}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

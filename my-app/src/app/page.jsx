import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { ToolCard } from "@/components/tool-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const categories = [
    { name: "Marketing", count: 20 },
    { name: "Music", count: 20 },
  ]

  const tools = [
    {
      name: "Memon",
      description:
        "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
      logo: "/placeholder.svg?height=40&width=40",
      type: "Premium",
      socialTags: ["Social Media", "Social Media", "Social Media"],
    },
    {
      name: "metastory AI",
      description:
        "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
      logo: "/placeholder.svg?height=40&width=40",
      type: "Paid",
      socialTags: ["Social Media", "Social Media", "Social Media"],
    },
    {
      name: "SWE Lens",
      description:
        "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
      logo: "/placeholder.svg?height=40&width=40",
      type: "Free",
      socialTags: ["Social Media", "Social Media", "Social Media"],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Suspense fallback={<div className="min-h-[600px] bg-black" />}>
        <Hero />
      </Suspense>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-square glass-card rounded-lg flex items-center justify-center">
              <img src="/placeholder.svg?height=40&width=40" alt={`Logo ${i}`} className="w-12 h-12 opacity-50" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <Select>
            <SelectTrigger className="w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="music">Music</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Pricing Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Access Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="api">API</SelectItem>
              <SelectItem value="webapp">Web App</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Sort By: Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-white text-2xl font-semibold">{category.name}</h2>
                <span className="px-2 py-0.5 rounded-full bg-[#2EFFD5] text-black text-sm">{category.count}</span>
              </div>
              <button className="text-white/70 hover:text-white">View All →</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
            And Many More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}


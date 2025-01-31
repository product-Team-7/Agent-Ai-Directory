import { Search } from "lucide-react"
import { ToolCard } from "@/components/tool-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MarketingPage() {

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

      {/* Hero section with smaller height */}
      <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center px-4 overflow-hidden hero2-background">
        <div className="grid-perspective">
          <div className="perspective-grid">
            <div className="horizontal-lines" />
          </div>
        </div>

        {/* Gradient sources */}
        <div className="gradient-source-left" />
        <div className="gradient-source-right" />

        {/* Gradient overlay */}
        <div className="gradient-overlay" />

        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-suisse-bold text-white mb-4">Marketing AI Tools</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 sm:mb-12">
          <div className="relative flex-1 min-w-[200px] w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 pl-4 pr-12 rounded-lg search-input text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2EFFD5] transition-all font-suisse-regular"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
              <Search className="text-white w-5 h-5" />
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-card text-white border-white/10">
              <SelectValue placeholder="Pricing Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-card text-white border-white/10">
              <SelectValue placeholder="Access Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="api">API</SelectItem>
              <SelectItem value="webapp">Web App</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-card text-white border-white/10">
              <SelectValue placeholder="Sort By: Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <ToolCard key={`${tool.name}-${index}`} {...tool} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold transition-colors">
            And Many More
          </button>
        </div>
      </main>

    </div>
  )
}


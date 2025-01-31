"use client"
import { Search } from "lucide-react"
import { ToolCard } from "@/components/tool-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from 'react'

export default function MarketingPage({ params }) {
  // State for tools data and loading state
  const [tools, setTools] = useState([])
  const [filteredTools, setFilteredTools] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { category } = await params // Destructure category from params
        const res = await fetch(`http://localhost:3001/api/category/${category}`)
        const data = await res.json()

        if (res.ok) {
          setTools(data.tools || []) // Adjust according to actual API structure
          setFilteredTools(data.tools || [])
        } else {
          console.error("Failed to fetch tools")
        }
      } catch (error) {
        console.error("Error fetching tools:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params]) // Add params as a dependency

  // Handle filtering (if needed)
  const handleFilter = (type) => {
    if (type === "all") {
      setFilteredTools(tools)
    } else {
      setFilteredTools(tools.filter((tool) => tool.pricingModel.toLowerCase() === type)) // Adjust filter condition if necessary
    }
  }

  if (loading) {
    return <div>Loading...</div> // Show loading state while fetching data
  }

  if (tools.length === 0) {
    return <div>No tools available for this category</div>
  }

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-suisse-bold text-white mb-4"> {`${params.category.replace("%20"," ")} AI Tools`}</h1>
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

          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-card text-white border-white/10">
              <SelectValue placeholder="Pricing Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
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
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <ToolCard key={`${tool.name}-${index}`} {...tool} />
            ))
          ) : (
            <div>No tools available for this category</div>
          )}
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

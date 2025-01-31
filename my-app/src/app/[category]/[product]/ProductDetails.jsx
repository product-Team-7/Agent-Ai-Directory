import Link from "next/link"
import { ArrowLeft, ExternalLink, Heart, Linkedin, Twitter, Github } from "lucide-react"

import { ToolCard } from "@/components/tool-card"
import Image from "next/image"

export default function ProductDetails({ productData }) {
  const featuredTools = [
    {
      name: "Memon",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Topicmojo",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Artical Fiesta",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Content Company",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Thundercontent",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const categories = [
    { name: "Text", count: 150 },
    { name: "Image", count: 120 },
    { name: "Code", count: 80 },
    { name: "Audio", count: 60 },
    { name: "Business", count: 90 },
    { name: "3D", count: 40 },
  ]

  const similarTools = [
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

      <main className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/${productData.category.toLowerCase().replace(" ", "-")}`}
            className="hover:text-white transition-colors"
          >
            {productData.category}
          </Link>
          <span>/</span>
          <span className="text-white">{productData.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Product Header */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              <Image
                src={productData.logo || "/placeholder.svg"}
                alt={`${productData.name} logo`}
                width={70}
                height={70}
                className="rounded-2xl"
              />
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">{productData.name}</h1>
                    <p className="text-white/60">{productData.tagline}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={productData.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white text-black font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
                    >
                      Explore Tool
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-white/80">{productData.discription}</p>
            </div>

            {/* Product Image */}
            <div className="rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
              <Image
                src={productData.thumbnailImage || "/placeholder.svg"}
                alt={`${productData.name} thumbnail`}
                width={800}
                height={400}
                className="w-full rounded-lg border border-white/10"
              />
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-white/80">
                {productData.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Use Cases</h2>
              <ul className="list-disc list-inside text-white/80">
                {productData.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            {/* Video */}
            {productData.videoUrl && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Demo Video</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={productData.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}

          
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            {/* Tool Info */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Tool Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-white/60">Category:</span>
                  <span className="text-white ml-2">{productData.category}</span>
                </div>
                <div>
                  <span className="text-white/60">Industry:</span>
                  <span className="text-white ml-2">{productData.industry}</span>
                </div>
                <div>
                  <span className="text-white/60">Access Model:</span>
                  <span className="text-white ml-2">{productData.accessModel}</span>
                </div>
                <div>
                  <span className="text-white/60">Pricing Model:</span>
                  <span className="text-white ml-2">{productData.pricingModel}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                {productData.linkedin && (
                  <a
                    href={productData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white"
                  >
                    <Linkedin />
                  </a>
                )}
                {productData.twitter && (
                  <a
                    href={productData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white"
                  >
                    <Twitter />
                  </a>
                )}
                {productData.github && (
                  <a
                    href={productData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white"
                  >
                    <Github />
                  </a>
                )}
              </div>
            </div>

            {/* Featured AI Tools */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Featured AI Tools</h3>
              <div className="space-y-4">
                {featuredTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-8 h-8 rounded-lg" />
                      <span className="text-white group-hover:text-[#2EFFD5] transition-colors">{tool.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#2EFFD5] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools Category */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">AI Tools Category</h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between group">
                    <span className="text-white group-hover:text-[#2EFFD5] transition-colors">{category.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">{category.count}</span>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#2EFFD5] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* Similar Tools */}
          <div className="mt-16 lg:mt-24">
              <h2 className="text-2xl font-bold text-white mb-8">Similar Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarTools.map((tool) => (
                  <ToolCard key={tool.name} {...tool} />
                ))}
              </div>
            </div>
      </main>

    </div>
  )
}


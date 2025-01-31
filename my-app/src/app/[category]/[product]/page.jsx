"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Heart } from 'lucide-react'
import { ToolCard } from "@/components/tool-card"
import Image from "next/image";
import logo2 from "../../../../public/chat-writer.png";
import logo1 from "../../../../public/chat-gpt-full.png";

export default function ProductPage({ params }) {
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
          <Link href="/marketing" className="hover:text-white transition-colors">
            Marketing
          </Link>
          <span>/</span>
          <span className="text-white">Email Assistance</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Product Header */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              <Image
                src={logo2}
                alt="ChatGPT Writer"
                className="w-[70px] h-[70px] rounded-2xl"
                priority
              />
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">ChatGPT Writer</h1>
                    <p className="text-white/60">Email Assistant</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 rounded-lg bg-white text-black font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                      Explore Tool
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-white/80">
                ChatGPT Writer is a free Chrome extension that uses artificial intelligence to help you write emails,
                messages, and more. It works on all sites, but it has special features for Gmail. You can use ChatGPT
                Writer to:
              </p>
            </div>

            {/* Product Image */}
            <div className="rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
            <Image
                src={logo1}
                alt="ChatGPT Writer"
                className="w-full rounded-2xl"
                priority
              />
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">AI-Powered Features for Productivit</h2>
              <p className="text-white/80">
                Workflow Wizard: Create detailed workflows in minutes. Taskade's AI helps you turn scattered ideas into
                actionable tasks, making it useful for anyone managing dynamic projects—from solo founders to small
                teams.
              </p>
            </div>

            {/* Who It's For sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Who It's For</h2>
                <p className="text-white/80">
                  Taskade serves best as a team-based AI solution for small businesses and startups looking for an
                  alternative to Slack or Asana. Entrepreneurs juggling multiple projects may find value in its
                  automation and AI-supported task generation, while those in client services (e.g., marketing,
                  consulting) can leverage its multi-format workspaces to manage workflows with clients or internal
                  teams.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Who It's For</h2>
                <p className="text-white/80">
                  ChatGPT Writer is a free Chrome extension that uses artificial intelligence to help you write emails,
                  messages, and more. It works on all sites, but it has special features for Gmail. You can use ChatGPT
                  Writer to:
                </p>
                <p className="text-white/80 mt-4">
                  skade AI attempts to tackle productivity from every angle: task management, team collaboration,
                  brainstorming, and automation. It combines AI task management with customizable workspaces and
                  real-time communication, making it a broad productivity tool rather than a mere task list app. But is
                  it worth your tim
                </p>
              </div>
            </div>

         
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            {/* Featured AI Tools */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Featured AI Tools</h3>
              <div className="space-y-4">
                {featuredTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5">
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

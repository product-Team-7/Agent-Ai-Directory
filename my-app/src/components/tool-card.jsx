"use client"

import { Heart, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PricingBadge } from "./pricing-badge"
import { CardContainer, CardBody, CardItem } from "./card"

export function ToolCard({ name, category, pricingModel, websiteUrl, tagline, logo, socialTags = [] }) {
  return (
    <CardContainer className="w-full">
      <CardBody className="w-full [transform-style:preserve-3d]">
        <CardItem
          translateZ="0"
          className="w-full relative overflow-hidden rounded-xl border border-white/[0.2] bg-black transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30"
        >
          <Link href={`/${category}/${name}`} passHref>
            <div className="relative p-6 bg-white/5 backdrop-blur-sm cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white/10">
              <div className="flex items-start justify-between mb-6">
                <CardItem translateZ="30" className="flex items-center gap-3">
                  <img
                    src={
                      logo ||
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8iqIGEJxXqHsIuLCe7yItwNQrxvw5.png" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <h3 className="text-white text-xl font-semibold">{name}</h3>
                </CardItem>
                <CardItem translateZ="20">
                  <PricingBadge pricingModel={pricingModel} />
                </CardItem>
              </div>

              <CardItem translateZ="40" className="text-gray-400 text-lg h-[3.6rem] mb-6">
                <div className="line-clamp-2">{tagline}</div>
              </CardItem>

              <CardItem translateZ="30" className="flex flex-wrap gap-2">
                {socialTags.slice(0, 3).map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="px-3 py-1 rounded-lg bg-[#0A1A2F] text-[#5B8DEF] text-sm border border-[#1B3A5E]"
                  >
                    {tag}
                  </span>
                ))}
              </CardItem>
            </div>
          </Link>

          <CardItem
            translateZ="20"
            className="relative border-t border-white/[0.08] bg-black/40 transition-colors duration-300 ease-in-out hover:bg-black/60"
          >
            <div className="flex items-stretch">
              <CardItem
                translateZ="30"
                as="a"
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-32 py-6 flex-1 hover:bg-white/10 text-white text-base transition-colors border-r border-white/[0.08] hover:text-primary"
              >
                <span>Visit</span>
                <ExternalLink className="h-4 w-4" />
              </CardItem>
              <CardItem
                translateZ="30"
                as="button"
                className="px-12 hover:bg-white/10 text-white/40 hover:text-primary transition-colors"
              >
                <Heart className="h-6 w-6" />
              </CardItem>
            </div>
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}


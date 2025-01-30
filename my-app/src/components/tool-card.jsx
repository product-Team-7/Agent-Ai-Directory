import { Heart, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function ToolCard({ name, description, logo, type, socialTags }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.08]">
      {/* Main content */}
      <div className="relative p-6 pb-1 bg-white/5 backdrop-blur-sm ">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              src={
                logo ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8iqIGEJxXqHsIuLCe7yItwNQrxvw5.png"
              }
              alt={name}
              className="w-12 h-12 rounded-xl"
            />
            <h3 className="text-white text-xl font-semibold">{name}</h3>
          </div>
          <span
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium",
              type === "Paid" && "bg-[#2D0C0C] text-[#FF4747]",
              type === "Freemium" && "bg-[#4D2F07] text-[#FF9F2F]",
              type === "Premium" && "bg-[#4D2F07] text-[#FF9F2F]",
              type === "Free" && "bg-[#4D2F07] text-[#FF9F2F]",
            )}
          >
            {type}
          </span>
        </div>

        <p className="text-gray-400 text-lg mb-6 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {socialTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-lg bg-[#0A1A2F] text-[#5B8DEF] text-sm border border-[#1B3A5E]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
{/* Bottom section with border */}
<div className="relative border-t border-white/[0.08] bg-black/40">
        <div className="flex items-stretch">
          <button className="flex items-center justify-center gap-2 px-6 py-5 flex-1 hover:bg-white/5 text-white text-base transition-colors border-r border-white/[0.08]">
            <span>Visit</span>
            <ExternalLink className="h-4 w-4" />
          </button>
          <button className="p-5 hover:bg-white/5 text-white/40 hover:text-white transition-colors">
            <Heart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

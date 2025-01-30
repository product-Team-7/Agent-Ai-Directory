import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function ToolCard({ name, description, logo, type, socialTags }) {
  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={logo || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-lg" />
          <div>
            <h3 className="text-white font-medium">{name}</h3>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                type === "Premium" && "badge-premium",
                type === "Paid" && "badge-paid",
                type === "Free" && "badge-free",
              )}
            >
              {type}
            </span>
          </div>
        </div>
      </div>

      <p className="text-white/70 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {socialTags.map((tag) => (
          <span key={tag} className="social-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm transition-colors">
          Visit
        </button>
        <button className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}


import { Search } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="relative flex flex-col items-center mb-8">
          {/* Top Glowing Line */}
          <div className="w-full max-w-[250px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-2"></div>

          {/* Text in the Center */}
          <span className="text-white/70 text-xs sm:text-sm bg-black px-4 py-1 rounded-full">
            🔥 1000+ AI tools added last month
          </span>

          {/* Bottom Glowing Line */}
          <div className="w-full max-w-[250px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-2"></div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-suisse-medium text-white mb-4">
          Ultimate{" "}
          <span className="font-instrument italic bg-gradient-to-r from-sky-400  via-sky-300 to-white text-transparent bg-clip-text">
            Directory
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-suisse-medium text-white mb-10">
          Your One Stop for AI Tools
        </p>

        <div className="relative w-full max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Exploring AI Tool With AI"
            className="w-full h-12 pl-12 pr-4 rounded-full search-input text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2EFFD5] transition-all"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Search className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"

// Import your logo images
import logo1 from "../../public/chatgpt.png"
import logo2 from "../../public/compose.png"
import logo3 from "../../public/gemini.png"
import logo4 from "../../public/chatgpt.png"
import logo5 from "../../public/gitcopilot.png"

// Array of imported logos
const logos = [logo1, logo2, logo3, logo4, logo5]

export default function InfiniteScroll() {
  const controls = useAnimationControls()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -1920], // Assuming standard screen width
        transition: {
          duration: 100,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }

    animate()
  }, [controls])

  return (
    <div className="w-full overflow-hidden bg-black mb-10">
      <motion.div className="flex items-center gap-8 py-8" animate={controls}>
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-24 min-w-max">
            <div className="flex items-center gap-4">
              <Image src={logo || "/placeholder.svg"} alt={`Logo ${index + 1}`} width={100} height={32} />
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex items-center gap-24 min-w-max">
            <div className="flex items-center gap-4">
              <Image src={logo || "/placeholder.svg"} alt={`Logo ${index + 1}`} width={100} height={32} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}


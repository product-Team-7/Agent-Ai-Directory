// "use client"

// import { useEffect, useRef, useState } from "react"
// import Typed from "typed.js"

// export function TypewriterEffect() {
//   const el = useRef(null)
//   const typed = useRef(null)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   useEffect(() => {
//     if (!isClient) return

//     const options = {
//       strings: ["Ultimate AI", "Powerful AI", "AI Tools"],
//       typeSpeed: 80,
//       backSpeed: 50,
//       loop: true,
//       smartBackspace: true,
//     }

//     if (el.current) {
//       typed.current = new Typed(el.current, options)
//     }

//     return () => {
//       if (typed.current) {
//         typed.current.destroy()
//       }
//     }
//   }, [isClient])

//   if (!isClient) {
//     return (
//       <span className="inline-block">
//         <span className="inline-block">Ultimate</span>
//         <span className="font-instrument italic bg-gradient-to-r from-sky-400 via-sky-300 to-white text-transparent bg-clip-text">
//           Directory
//         </span>
//       </span>
//     )
//   }

//   return (
//     <span className="inline-block">
//       <span ref={el} className="inline-block"></span>
//       <span className="font-instrument italic bg-gradient-to-r from-sky-400 via-sky-300 to-white text-transparent bg-clip-text">
//         Directory
//       </span>
//     </span>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"

export function TypewriterEffect() {
  const el = useRef(null)
  const typed = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const options = {
      strings: ["Ultimate AI ", "Powerful AI ", "AI Tools"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000, // 1 second pause before backspacing
      startDelay: 100, // 0.5 second delay before typing starts
      loop: true,
      smartBackspace: false, // Ensure full backspace of each word
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      onStringTyped: (arrayPos, self) => {
        // Pause for 1 second after typing each word
        setTimeout(() => {
          self.backspace()
        }, 1000)
      },
    }

    if (el.current) {
      typed.current = new Typed(el.current, options)
    }

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [isClient])

  if (!isClient) {
    return (
      <span className="inline-block">
        <span className="inline-block ">Ultimate</span>
        <span className="font-instrument italic bg-gradient-to-r from-sky-400 via-sky-300 to-white text-transparent bg-clip-text">
          Directory
        </span>
      </span>
    )
  }

  return (
    <span className="inline-block">
      <span ref={el} className="inline-block"></span>
      <span className="font-instrument ml-3 italic bg-gradient-to-r from-sky-400 via-sky-300 to-white text-transparent bg-clip-text">
        Directory
      </span>
    </span>
  )
}


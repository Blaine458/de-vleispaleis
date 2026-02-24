"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const updateProgress = () => {
      if (lenis) {
        setScrollProgress(lenis.progress * 100)
      } else if (typeof window !== "undefined") {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setScrollProgress(docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0)
      }
    }

    setScrollProgress(0)
    setTimeout(updateProgress, 100)

    if (lenis) {
      lenis.on("scroll", updateProgress)
      return () => lenis.off("scroll", updateProgress)
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateProgress, { passive: true })
      window.addEventListener("resize", updateProgress, { passive: true })
      return () => {
        window.removeEventListener("scroll", updateProgress)
        window.removeEventListener("resize", updateProgress)
      }
    }
  }, [pathname, isMounted, lenis])

  // Always render the same structure to prevent hydration mismatch
  // The width will update after mount via useEffect
  return (
    <div className="fixed left-0 w-full h-1 z-[9999] bg-[#223534] top-0">
      <div 
        className="h-full bg-[#82212a]"
        style={{ 
          width: isMounted ? `${scrollProgress}%` : '0%',
        }}
      />
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const updateScrollProgress = () => {
      // Simple, reliable calculation
      const scrollTop = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop || 0)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      
      setScrollProgress(progress)
    }

    // Reset progress to 0 on page change
    setScrollProgress(0)

    // Initial calculation
    setTimeout(updateScrollProgress, 100)

    // Use Lenis scroll event if available, otherwise fallback to window scroll
    if (lenis) {
      lenis.on('scroll', updateScrollProgress)
      return () => {
        lenis.off('scroll', updateScrollProgress)
      }
    } else {
      // Fallback to window scroll listener
      window.addEventListener("scroll", updateScrollProgress, { passive: true })
      window.addEventListener("resize", updateScrollProgress, { passive: true })

      return () => {
        window.removeEventListener("scroll", updateScrollProgress)
        window.removeEventListener("resize", updateScrollProgress)
      }
    }
  }, [pathname, lenis]) // Re-run when pathname or lenis changes

  return (
    <div className="fixed left-0 w-full h-1 z-[9999] bg-[#223534] top-0">
      <div 
        className="h-full bg-[#82212a]"
        style={{ 
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  )
}

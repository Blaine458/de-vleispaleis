"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
// Removed unused Lenis import - LenisProvider is disabled

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  // Ensure component only renders on client to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Only run on client after mount
    if (!isMounted) return

    const updateScrollProgress = () => {
      // Simple, reliable calculation
      const scrollTop = typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || 0) : 0
      const docHeight = typeof window !== 'undefined' ? (document.documentElement.scrollHeight - window.innerHeight) : 0
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0
      
      setScrollProgress(progress)
    }

    // Reset progress to 0 on page change
    setScrollProgress(0)

    // Initial calculation
    setTimeout(updateScrollProgress, 100)

    // Use window scroll listener (Lenis is disabled)
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", updateScrollProgress, { passive: true })
      window.addEventListener("resize", updateScrollProgress, { passive: true })

      return () => {
        window.removeEventListener("scroll", updateScrollProgress)
        window.removeEventListener("resize", updateScrollProgress)
      }
    }
  }, [pathname, isMounted]) // Re-run when pathname changes

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

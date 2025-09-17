"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ScrollImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  maxScale?: number
  scaleMultiplier?: number
}

export default function ScrollImage({ src, alt, width, height, className = "", maxScale = 2.5, scaleMultiplier = 1 }: ScrollImageProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      
      // Calculate scroll progress (0 to 1)
      const progress = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0
      
      // Scale increases with scroll progress, modified by scaleMultiplier
      const adjustedProgress = progress * scaleMultiplier
      const newScale = 1 + (adjustedProgress * (maxScale - 1))
      
      // Only set scale if it's less than maxScale
      if (newScale < maxScale) {
        setScale(newScale)
      }
    }

    // Initial calculation
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <div 
      className={`flex items-center justify-center transition-transform duration-[50ms] ease-out ${className}`}
      style={{
        transform: `scale(${scale})`
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-lg shadow-2xl w-full h-auto"
      />
    </div>
  )
}

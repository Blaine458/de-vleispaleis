"use client";
import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  // Temporarily disable Lenis to test mobile scrolling
  return <>{children}</>;
  
  // return (
  //   <ReactLenis
  //     root
  //     options={{
  //       duration: 1.2,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       direction: 'vertical',
  //       gestureDirection: 'vertical',
  //       smooth: true,
  //       mouseMultiplier: 1,
  //       smoothTouch: true,
  //       touchMultiplier: 1,
  //       infinite: false,
  //       normalizeWheel: true,
  //     }}
  //   >
  //     {children}
  //   </ReactLenis>
  // );
}
"use client";

import ParticlesCanvas from "@/components/ParticlesCanvas";

export default function GlowEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particles Canvas - positioned absolutely to cover the hero section */}
      <ParticlesCanvas />
      
      {/* Glow Effect */}
      <div className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]" 
           style={{
             maskImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
             opacity: 1,
             transform: "none"
           }}>
        <div className="flex flex-col w-full h-full blur">
          <div className="grow" 
               style={{background: "conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(255, 208, 134) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)"}}></div>
          <div className="grow" 
               style={{background: "conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(255, 208, 134) 324deg, rgb(255, 255, 255) 342deg)"}}></div>
        </div>
      </div>
    </div>
  );
} 
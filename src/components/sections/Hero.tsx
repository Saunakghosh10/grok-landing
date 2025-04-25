"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative z-10 mx-auto w-full max-w-7xl">
      {/* Grok Logo/Image */}
      <div className="text-center mb-16 w-full mx-auto flex justify-center">
        <div style={{ opacity: 1, transform: "none" }} className="relative">
          <Image 
            src="/images/grok-outline-home.webp"
            alt="Outline of the word Grok"
            width={2299}
            height={779}
            priority
            className="max-w-screen sm:max-w-full xl:max-w-5xl pointer-events-none select-none"
            style={{
              color: "transparent",
              maskImage: "linear-gradient(30deg, rgba(255,255,255,0) 15%, rgba(255,255,255, 1), rgba(255,255,255, 1))"
            }}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[600px] mb-24 mx-auto">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask Grok anything..." 
            className="search-input w-full bg-black/30 border border-white/10 rounded-full outline-none focus:border-white/30 transition-all"
          />
          <button className="search-button absolute right-1 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl opacity-80 max-w-[600px] mx-auto">
          We are thrilled to unveil Grok 3, our most advanced model yet, 
          blending superior reasoning with extensive pretraining knowledge.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <Link href="#" className="button button-primary uppercase tracking-wider px-6 py-3">BUILD WITH GROK</Link>
        <Link href="#" className="button button-secondary uppercase tracking-wider px-6 py-3">LEARN MORE</Link>
      </div>
    </section>
  );
} 
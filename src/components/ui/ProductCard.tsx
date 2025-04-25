"use client";

import Link from "next/link";
import { ProductCardProps } from "@/types";

export default function ProductCard({ title, description, link, buttonText, renderVisual }: ProductCardProps) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 flex flex-col h-full overflow-hidden group">
      {/* Corner highlights */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-tl-xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-br-xl"></div>
      
      {/* Visual Element */}
      <div className="mb-6 h-40 flex items-center justify-center relative">
        {renderVisual && renderVisual()}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <Link href={link} className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-all">
          {buttonText}
        </Link>
      </div>
    </div>
  );
} 
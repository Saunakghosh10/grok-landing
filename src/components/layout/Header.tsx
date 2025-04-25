"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12 z-10 absolute top-0 left-0">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-10" aria-label="xAI Homepage">
            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8">
              <path d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z" fill="currentColor"></path>
            </svg>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="nav-link uppercase tracking-wider">GROK</Link>
            <Link href="#" className="nav-link uppercase tracking-wider">API</Link>
            <Link href="#" className="nav-link uppercase tracking-wider">COMPANY</Link>
            <Link href="#" className="nav-link uppercase tracking-wider">COLOSSUS</Link>
            <Link href="#" className="nav-link uppercase tracking-wider">CAREERS</Link>
            <Link href="#" className="nav-link uppercase tracking-wider">NEWS</Link>
          </div>
        </div>
        <div>
          <Link href="#" className="button button-primary uppercase tracking-wider font-medium px-6 py-2">TRY GROK</Link>
        </div>
      </nav>
    </header>
  );
} 
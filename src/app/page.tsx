import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Features from '@/components/sections/Features';
import Subscription from '@/components/sections/Subscription';
import Platforms from '@/components/sections/Platforms';
import Games from '@/components/sections/Games';
import GlowEffect from '@/components/effects/GlowEffect';

export const metadata: Metadata = {
  title: 'Grok - Advanced AI',
  description: 'Grok is the most advanced AI assistant, capable of handling complex tasks across multiple domains.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Hero section with glow effect */}
      <div className="relative min-h-screen">
        <GlowEffect />
        <Header />
        <Hero />
      </div>

      {/* Products section */}
      <Products />

      {/* Features section */}
      <Features />

      {/* Subscription section */}
      <Subscription />

      {/* Platforms section */}
      <Platforms />

      {/* Games section */}
      <Games />

      {/* Footer section */}
      <Footer />
    </div>
  );
}

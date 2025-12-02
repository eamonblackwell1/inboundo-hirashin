"use client";

import { motion } from "framer-motion";
import { ArrowRight, Waves, Utensils, BedDouble } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const BOOKING_URL = "https://www.ryokan.or.jp/inn/redirect_detail_english_sp/96061";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }
  };

  return (
    <main className="min-h-screen bg-washi text-stone-800 selection:bg-moss selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* HERO IMAGE: seikoro_v5_0.jpg */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/seikoro_v5_0.jpg" 
            alt="Seikoro Entrance" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-washi/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-white/80 tracking-[0.3em] text-sm uppercase mb-4">Est. 1831 • Kyoto</p>
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-wide">
              SEIKORO
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wider mb-10 max-w-xl mx-auto leading-relaxed">
              The Soul of Kyoto. A timeless sanctuary where tradition breathes.
            </p>
            
            <Link 
              href={BOOKING_URL}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-moss/90 text-white hover:bg-moss transition-all duration-500 rounded-sm overflow-hidden"
            >
              <span className="relative z-10 tracking-widest uppercase text-sm font-medium">Check Availability</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Silence is our <br/> <span className="italic text-moss">greatest amenity.</span>
            </h2>
            <p className="text-stone-600 leading-loose font-light text-lg">
              Located in the heart of the Higashiyama district, Seikoro Ryokan has been a guardian of Kyoto's hospitality since 1831. We offer not just a room, but a return to the rhythm of nature.
            </p>
          </motion.div>
          <div className="h-[500px] w-full bg-stone-200 relative overflow-hidden rounded-sm">
             {/* INTRO IMAGE: Hallway looking out onto garden */}
             <img 
               src="/images/seikoro-hallway.jpg" 
               alt="Serene wooden hallway at Seikoro Ryokan looking out onto the garden"
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] rounded-sm"
             />
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-1">
            
            {/* ONSEN CARD: seikoro_v5_5.jpg */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/seikoro_v5_5.jpg" alt="Onsen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 text-white">
                <Waves className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">Onsen</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">ANCIENT PINE BATHS</p>
              </div>
            </div>

            {/* KAISEKI CARD: seikoro_v5_7.jpg */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/seikoro_v5_7.jpg" alt="Kaiseki" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 text-white">
                <Utensils className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">Kaiseki</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">SEASONAL CULINARY ART</p>
              </div>
            </div>

            {/* TATAMI CARD: seikoro_v5_17.jpg */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/seikoro_v5_17.jpg" alt="Tatami" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 text-white">
                <BedDouble className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">Tatami</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">TRADITIONAL ROOMS</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GUEST REFLECTIONS (TESTIMONIALS) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <motion.div {...fadeIn} className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic">
              "This ryokan made our trip to Japan, it was truly amazing."
            </p>
            <p className="text-stone-600 text-sm tracking-wider uppercase">
              — Claire Courtney
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic">
              "This was the highlight of our trip to Japan!"
            </p>
            <p className="text-stone-600 text-sm tracking-wider uppercase">
              — Sarah J.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic">
              "The location was convenient, the service was exceptional, and the bath was deeply relaxing and very beautiful."
            </p>
            <p className="text-stone-600 text-sm tracking-wider uppercase">
              — Steven Z.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONCIERGE MAP SECTION --- */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-800 text-center mb-12">
            The Kyoto Sanctuary
          </h2>

          {/* Map Card Container */}
          <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-xl group border border-stone-200">
            
            {/* 1. BACKGROUND IMAGE - No Filters */}
            <Image
              src="/images/map_bg.jpg"
              alt="Seikoro Ryokan Location"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />

            {/* 2. THE LUXURY PIN - Pulsing Location Marker */}
            {/* Note: I may need to manually tweak top/left later to match the exact street */}
            <div className="absolute top-[52%] left-[82%] md:left-[68%] -translate-x-1/2 -translate-y-full z-10 pointer-events-none">
              <div className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A5D23] opacity-30"></span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="relative inline-flex rounded-full h-8 w-8 text-[#4A5D23] drop-shadow-md"
                >
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* 3. FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-[#F9F7F2]/95 backdrop-blur-sm p-6 max-w-sm border-l-4 border-[#4A5D23] shadow-lg z-20">
              <h3 className="text-xl font-serif text-stone-800 mb-2">Seikoro Ryokan</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed mb-4">
                Nestled by the Kamo River. <br/>
                A 10-minute walk to Gion's historic streets.
              </p>
              
              <a 
                href="https://www.google.com/maps/place/Seikoro/data=!4m2!3m1!1s0x0:0x574cb48a00c9e74c?sa=X&ved=1t:2428&ictx=111" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4A5D23] uppercase tracking-widest text-xs font-bold hover:opacity-70 transition-opacity"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 bg-moss text-washi text-center px-4">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 opacity-90">Begin Your Journey</h2>
        <Link 
          href={BOOKING_URL}
          className="inline-block border border-washi/30 px-12 py-5 text-lg hover:bg-washi hover:text-moss transition-colors duration-300 tracking-widest uppercase mb-16"
        >
          Reserve Your Stay
        </Link>
        
        {/* CONTACT & LOCATION */}
        <div className="mt-16 pt-16 border-t border-washi/20 max-w-2xl mx-auto space-y-4 text-washi/80 font-light">
          <p className="text-sm tracking-wider">467 Nishitachibana-cho, Higashiyama-ku, Kyoto</p>
          <p className="text-sm">
            <a href="mailto:yoyaku@seikoro.com" className="hover:text-washi transition-colors duration-300">
              yoyaku@seikoro.com
            </a>
          </p>
          <p className="text-sm tracking-wider">+81 75-561-0771</p>
        </div>
      </section>
    </main>
  );
}
// Triggering new luxury map build

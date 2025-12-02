"use client";

import { motion } from "framer-motion";
import { ArrowRight, Waves, Utensils, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const BOOKING_URL = "https://www.tenawan.ne.jp/lodgment/rec/004/891/pcr.asp";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }
  };

  return (
    <main className="min-h-screen bg-washi text-stone-800 selection:bg-moss selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* HERO IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Kyoto street scene" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-wide">
              Kyoto's Hidden Heart.
            </h1>
            <p className="text-white/90 text-2xl md:text-3xl font-light tracking-wider mb-10 max-w-3xl mx-auto leading-relaxed">
              Where traditional hospitality meets urban energy. The only classic ryokan steps from Nishiki Market.
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
              A traditional sanctuary <br/> <span className="italic text-moss">in the heart of the city.</span>
            </h2>
            <p className="text-stone-600 leading-loose font-light text-lg">
              Located steps from Nishiki Market, Ryokan Hirashin offers a rare blend of traditional hospitality and urban convenience. Experience authentic Kyoto culture without leaving the city center.
            </p>
          </motion.div>
          <div className="h-[500px] w-full bg-stone-200 relative overflow-hidden rounded-sm">
             <img 
               src="/images/sanctuary.jpeg" 
               alt="Traditional ryokan in the heart of Kyoto"
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] rounded-sm"
             />
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-1">
            
            {/* MAIKO EXPERIENCE CARD */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/maiko.png" alt="Maiko Experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 text-white z-10">
                <Sparkles className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">The Maiko Experience</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">PRIVATE DINING WITH A MAIKO</p>
                <p className="text-white/90 font-light text-base leading-relaxed mt-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Dine privately with a Geiko or Maiko, enjoying traditional dance and ozashiki-asobi games.
                </p>
              </div>
            </div>

            {/* GRAND BATH CARD */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/bath.jpg" alt="Grand Bath" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 text-white z-10">
                <Waves className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">The Grand Bath</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">SPACIOUS COMMUNAL BATHS</p>
                <p className="text-white/90 font-light text-base leading-relaxed mt-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Spacious communal baths with seasonal yuzu and iris waters to wash away city fatigue.
                </p>
              </div>
            </div>

            {/* KYOTO KAISEKI CARD */}
            <div className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img src="/images/food.jpg" alt="Kyoto Kaiseki" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 text-white z-10">
                <Utensils className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="font-serif text-3xl mb-2">Kyoto Kaiseki</h3>
                <p className="text-white/80 font-light text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">DAILY FROM NISHIKI MARKET</p>
                <p className="text-white/90 font-light text-base leading-relaxed mt-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                  Seasonal ingredients from Nishiki Market, served in the privacy of your tatami room.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-neutral-50">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div {...fadeIn} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100">
            <p className="font-serif text-stone-700 italic leading-relaxed text-base mb-6">
              "A lovely gem in a very central and safe location. The staff knew what I wanted and even took extra steps to help me maximize my stay... I will certainly come back."
            </p>
            <div className="flex items-center justify-between">
              <p className="font-sans text-stone-800 font-medium text-sm">
                — Joseph (USA)
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100">
            <p className="font-serif text-stone-700 italic leading-relaxed text-base mb-6">
              "Typical Japanese experience. The room is spacious... and kudos to the staff that are beyond helpful and gentle. On top of that the hotel has its own Onsen. We loved it."
            </p>
            <div className="flex items-center justify-between">
              <p className="font-sans text-stone-800 font-medium text-sm">
                — Fabio (Italy)
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100">
            <p className="font-serif text-stone-700 italic leading-relaxed text-base mb-6">
              "Really good ryokan for the price and great location in central Kyoto. The ladies who prepared dinner were so nice!!"
            </p>
            <div className="flex items-center justify-between">
              <p className="font-sans text-stone-800 font-medium text-sm">
                — Mary Taylor (UK)
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONCIERGE MAP SECTION --- */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-800 text-center mb-12">
            The Heart of Kyoto
          </h2>

          {/* Map Card Container */}
          <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-xl group border border-stone-200">
            
            {/* Clickable Map Image */}
            <Link 
              href="https://www.google.com/maps/search/?api=1&query=Ryokan+Hirashin+Kyoto"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/map-hirashin%202.jpg"
                alt="Ryokan Hirashin Location"
                fill
                className="object-cover"
              />
            </Link>

            {/* The Pin */}
            <div className="absolute top-[58%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30">
              <div className="relative flex items-center justify-center">
                {/* Luxury Glow Ring */}
                <div className="animate-pulse absolute inline-flex h-8 w-8 rounded-full bg-amber-400/60 duration-[3000ms]"></div>
                {/* Gold Center Dot */}
                <div className="relative inline-flex rounded-full h-4 w-4 bg-amber-600 border-2 border-white shadow-lg"></div>
              </div>
              {/* Tooltip */}
              <div className="mt-2 px-2 py-1 bg-white text-xs font-serif font-bold tracking-widest uppercase shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                We Are Here
              </div>
            </div>

            {/* Location Info Card */}
            <div className="absolute bottom-6 left-6 bg-[#F9F7F2]/95 backdrop-blur-sm p-6 max-w-sm border-l-4 border-[#4A5D23] shadow-lg z-20">
              <h3 className="text-xl font-serif text-stone-800 mb-2">Ryokan Hirashin</h3>
              <p className="text-sm text-stone-600 font-sans leading-relaxed mb-4">
                Steps from Nishiki Market. <br/>
                The only traditional Ryokan in the heart of the city.
              </p>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Ryokan+Hirashin+Kyoto" 
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
          <p className="text-sm tracking-wider">Takoyakushi-dori, Takakura-Nishi, Nakagyo-ku, Kyoto 604-8141</p>
          <p className="text-sm tracking-wider">+81-75-221-0121</p>
        </div>
      </section>
    </main>
  );
}
// Triggering new luxury map build

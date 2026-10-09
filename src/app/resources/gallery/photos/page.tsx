"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Camera, Sparkles, Heart } from "lucide-react";

const photos = [
  { id: 1, src: "/images/image34.png", title: "Divine Entrance", category: "Shrine" },
  { id: 2, src: "/images/image12.png", title: "Golden Alankaram", category: "Deity" },
  { id: 3, src: "/images/image9.png", title: "Temple Lights", category: "Festival" },
  { id: 4, src: "/images/image7.png", title: "Yoga & Peace", category: "Culture" },
  { id: 5, src: "/images/image11.png", title: "Sacred Procession", category: "Tradition" },
  { id: 6, src: "/images/image10.png", title: "Morning Prayer", category: "Daily" },
];

export default function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState<any>(null);

  return (
    <main className="bg-cream min-h-screen pb-32 overflow-hidden selection:bg-maroon selection:text-gold">
      <SubPageHero title="Photo Gallery" subtitle="A Visual Pilgrimage Through HSV" />

      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        
        <div className="absolute top-20 right-10 text-gold/20 animate-bounce"><Sparkles size={40}/></div>
        <div className="absolute bottom-40 left-0 text-maroon/10 -rotate-12"><Camera size={150}/></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-x-12">
          {photos.map((img, idx) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative flex flex-col group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[12px] border-white group-hover:border-gold/10 transition-all duration-700">
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  alt={img.title} 
                />
                
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-maroon text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
                    {img.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                   <div className="text-white space-y-2">
                     <p className="text-gold font-black text-[10px] uppercase tracking-widest">Click to Expand</p>
                     <h3 className="text-3xl font-heading font-black italic">{img.title}</h3>
                   </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 flex items-baseline gap-2 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-5xl font-heading font-black text-maroon italic">0{idx + 1}</span>
                <div className="h-1 w-12 bg-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-cream/98 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImg(null)}
            >
              <motion.button 
                whileHover={{ rotate: 90 }} 
                className="absolute top-10 right-10 text-maroon bg-white p-3 rounded-full shadow-xl"
              >
                <X size={32} />
              </motion.button>
              
              <motion.div 
                initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }}
                className="relative max-w-5xl w-full flex flex-col items-center"
              >
                <div className="relative p-3 bg-white shadow-2xl rounded-[2rem] border border-maroon/5">
                   <img src={selectedImg.src} className="max-w-full max-h-[75vh] rounded-[1.5rem] object-contain" alt="" />
                </div>
                <div className="mt-10 text-center space-y-2">
                  <h4 className="text-4xl md:text-6xl font-heading font-black text-maroon italic drop-shadow-sm">{selectedImg.title}</h4>
                  <div className="flex items-center justify-center gap-4 text-gold font-black text-xs uppercase tracking-[0.4em]">
                    <div className="h-px w-8 bg-gold/50" />
                    {selectedImg.category}
                    <div className="h-px w-8 bg-gold/50" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
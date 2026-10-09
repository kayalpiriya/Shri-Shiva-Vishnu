"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Pin } from "lucide-react";

const festivalImages = [
  { id: 1, src: "/images/image28.png", rotation: "-rotate-2" },
  { id: 2, src: "/images/image29.png", rotation: "rotate-3" },
  { id: 3, src: "/images/image30.png", rotation: "rotate-1" },
  { id: 4, src: "/images/image31.png", rotation: "-rotate-3" },
  { id: 5, src: "/images/image32.png", rotation: "rotate-2" },
  { id: 6, src: "/images/image33.png", rotation: "-rotate-1" },
];

export default function BrammothsavamGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Brammothsavam" subtitle="Festival Highlights 2026" />

      <section className="max-w-7xl mx-auto px-6 py-16">
        
        {/* FESTIVE TITLE */}
        <div className="flex flex-col items-center mb-16">
           <div className="flex items-center gap-4 text-maroon font-black uppercase tracking-[0.4em] text-xs">
              <div className="w-8 h-px bg-gold" /> Divine Memories <div className="w-8 h-px bg-gold" />
           </div>
           <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon mt-4 italic">Brammothsavam Captures</h2>
        </div>

        {/* POLAROID STYLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {festivalImages.map((img, idx) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              onClick={() => setSelectedImg(img.src)}
              className={`bg-white p-4 pb-12 shadow-2xl border border-maroon/5 rounded-sm cursor-pointer transition-all duration-500 relative ${img.rotation}`}
            >
              {/* Decorative Pin */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-gold opacity-50"><Sparkles size={16}/></div>
              
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                <img src={img.src} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="mt-6 text-center">
                 <p className="font-heading font-black text-maroon italic text-xl uppercase">Festival Day {img.id}</p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">HSV Brammothsavam 2026</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-maroon/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 text-white"><X size={40}/></button>
              <motion.img 
                initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                src={selectedImg} className="max-w-full max-h-[80vh] rounded-xl border-4 border-gold shadow-[0_0_100px_rgba(212,175,55,0.3)]" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
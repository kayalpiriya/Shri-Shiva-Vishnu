// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Camera, Expand } from "lucide-react";
// import Link from "next/link";

// const galleryData = [
//   { id: 1, url: "/images/image2.png", title: "Temple Architecture", tag: "Sacred Design" },
//   { id: 2, url: "/images/image3.png", title: "Ritual Splendor", tag: "Divine Tradition" },
//   { id: 3, url: "/images/image4.png", title: "Morning Peace", tag: "Serenity" },
//   { id: 4, url: "/images/image2.png", title: "Sanctuary View", tag: "Spiritual" },
// ];

// export default function Gallery() {
//   const [expandedId, setExpandedId] = useState<number | null>(2); // Default-ah 2nd image expand aagi irukkum

//   return (
//     <section className="py-20 bg-maroon overflow-hidden">
//       <div className="max-w-[1500px] mx-auto px-6">
        
//         {/* MODERN HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//            <motion.div 
//              initial={{ opacity: 0, x: -30 }} 
//              whileInView={{ opacity: 1, x: 0 }} 
//              viewport={{ once: false }}
//              className="relative"
//            >
//               <span className="text-saffron font-black tracking-[0.5em] text-[10px] uppercase block mb-2">The Visual Legacy</span>
//               <h2 className="text-5xl md:text-7xl font-heading font-black text-maroon italic leading-none">DIVINE <span className="text-gold not-italic">GALLERY</span></h2>
//               <div className="absolute -left-4 top-0 w-1 h-full bg-saffron/20 rounded-full" />
//            </motion.div>
           
//            <Link href="/resources/gallery" className="group bg-[#1A0F0F] text-gold px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-maroon hover:text-white transition-all duration-500 flex items-center gap-3">
//              View Collections <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//            </Link>
//         </div>

//         {/* 
//            EXPANDING ACCORDION GRID:
//            - lg:flex (Desktop): Hover to expand logic
//            - Default: Horizontal Scroll (Mobile/iPad)
//         */}
//         <div className="flex flex-col md:flex-row h-auto md:h-[600px] gap-4 overflow-x-auto md:overflow-visible no-scrollbar pb-10">
//           {galleryData.map((img) => (
//             <motion.div
//               key={img.id}
//               layout // Smooth width change animation
//               onMouseEnter={() => setExpandedId(img.id)}
//               className={`relative rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out shrink-0
//                 ${expandedId === img.id ? 'w-full md:flex-[3]' : 'w-full md:flex-[0.8] opacity-60 md:opacity-100'}
//                 h-[450px] md:h-full border border-maroon/5
//               `}
//             >
//               {/* IMAGE */}
//               <img 
//                 src={img.url} 
//                 alt={img.title} 
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
//               />

//               {/* OVERLAY GRADIENT */}
//               <div className={`absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent transition-opacity duration-700 
//                 ${expandedId === img.id ? 'opacity-100' : 'opacity-40'}
//               `} />

//               {/* CONTENT REVEAL */}
//               <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
//                 <AnimatePresence>
//                   {expandedId === img.id && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.5 }}
//                       className="space-y-4"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-maroon">
//                           <Camera size={18} />
//                         </div>
//                         <span className="text-gold font-black text-[10px] uppercase tracking-widest bg-maroon/40 backdrop-blur-md px-3 py-1 rounded-full border border-gold/20">
//                           {img.tag}
//                         </span>
//                       </div>
//                       <h3 className="text-3xl md:text-5xl font-heading font-black text-white italic leading-none">{img.title}</h3>
//                       <button className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors text-[10px] font-black uppercase tracking-widest pt-4 group">
//                         Enlarge Image <Expand size={14} className="group-hover:scale-125 transition-transform" />
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
                
//                 {/* VERTICAL TITLE (When collapsed on Desktop) */}
//                 {expandedId !== img.id && (
//                   <motion.div 
//                     initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//                     className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap"
//                   >
//                     <span className="text-white/60 font-black text-xs uppercase tracking-[0.3em]">{img.title}</span>
//                   </motion.div>
//                 )}
//               </div>

//               {/* DYNAMIC BORDER GLOW */}
//               {expandedId === img.id && (
//                  <motion.div layoutId="glow" className="absolute inset-0 border-4 border-gold/20 rounded-[3rem] pointer-events-none" />
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM DECORATION */}
//         <motion.div 
//           initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }}
//           className="w-full h-px bg-maroon/5 mt-10 origin-left" 
//         />
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

const galleryData = [
  { id: 1, url: "/images/image2.png", title: "Temple Architecture", tag: "Sacred Design", desc: "Witness the divine craftsmanship of our sacred towers." },
  { id: 2, url: "/images/image12.png", title: "Ritual Splendor", tag: "Divine Tradition", desc: "Experience the vibrant energy of our daily poojas." },
  { id: 3, url: "/images/image4.png", title: "Morning Peace", tag: "Serenity", desc: "Find your inner peace in our tranquil surroundings." },
  { id: 4, url: "/images/image2.png", title: "Sanctuary View", tag: "Spiritual", desc: "A breathtaking view of the inner sanctum." },
];

export default function Gallery() {
  // Grid layout sizes for Bento Box effect
  const getGridClass = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]"; // Big Left Box
      case 1: return "md:col-span-2 md:row-span-1 h-[300px] md:h-auto";    // Wide Top Right Box
      case 2: return "md:col-span-1 md:row-span-1 h-[300px] md:h-auto";    // Small Bottom Right Box 1
      case 3: return "md:col-span-1 md:row-span-1 h-[300px] md:h-auto";    // Small Bottom Right Box 2
      default: return "col-span-1";
    }
  };

  return (
    // Bottom gap reduced here (pb-8 md:pb-10)
    <section className="pt-12 md:pt-16 pb-8 md:pb-10 bg-cream overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-maroon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER SECTION (Button Removed) */}
        <div className="mb-10">
           <motion.div 
             initial={{ opacity: 0, x: -50 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once: false, amount: 0.3 }} 
             transition={{ duration: 0.7, ease: "easeOut" }}
           >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-saffron" />
                <span className="text-maroon font-bold tracking-[0.3em] text-[11px] uppercase">The Visual Legacy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon leading-tight">
                DIVINE <span className="text-gold italic">GALLERY</span>
              </h2>
           </motion.div>
        </div>

        {/* MODERN BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {galleryData.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // Repeats on scroll
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg ${getGridClass(index)}`}
            >
              {/* IMAGE */}
              <img 
                src={img.url} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />

              {/* OVERLAY GRADIENTS */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                
                {/* Floating Tag */}
                <div className="overflow-hidden mb-3">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  >
                    <Camera size={12} className="text-gold" />
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest">
                      {img.tag}
                    </span>
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-heading font-black text-cream leading-tight mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {img.title}
                </h3>
                
                {/* Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <p className="text-cream/80 text-sm overflow-hidden font-medium">
                    {img.desc}
                  </p>
                </div>

              </div>

              {/* BORDER GLOW EFFECT ON HOVER */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATIVE LINE - Top margin reduced to mt-8 */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          viewport={{ once: false }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-maroon/20 to-transparent mt-8 origin-center" 
        />
      </div>
    </section>
  );
}
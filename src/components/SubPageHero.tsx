// "use client";
// import { motion } from "framer-motion";

// interface SubPageHeroProps {
//   title: string;
//   subtitle: string;
// }

// export default function SubPageHero({ title, subtitle }: SubPageHeroProps) {
//   return (
//     <section className="relative h-[40vh] flex items-center justify-center bg-maroon overflow-hidden pt-20">
//       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] grayscale invert" />
//       <div className="relative z-10 text-center px-6">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-heading font-black text-gold italic uppercase"
//         >
//           {title}
//         </motion.h1>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-saffron font-bold tracking-[0.3em] text-[10px] md:text-xs mt-4 uppercase"
//         >
//           {subtitle}
//         </motion.p>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";

interface SubPageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function SubPageHero({ 
  title, 
  subtitle, 
  bgImage = "/images/image2.png" 
}: SubPageHeroProps) {
  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden pt-20 bg-black">
      
      {/* 1. BACKGROUND IMAGE - Absolute Layer */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Temple Background" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 to-maroon/80 z-10" />
      </div>

      <div className="absolute inset-0 z-20 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] grayscale invert pointer-events-none" />

      {/* 3. YOUR ORIGINAL TEXT CONTENT */}
      <div className="relative z-30 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-gold italic uppercase drop-shadow-2xl">
            {title}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-saffron font-bold tracking-[0.3em] text-[10px] md:text-xs mt-4 uppercase drop-shadow-lg"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Elegant Bottom Curve (Matches page bg) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H0V56.44Z" fill="#FCF9F2" />
        </svg>
      </div>
    </section>
  );
}
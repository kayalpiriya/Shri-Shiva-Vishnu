// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const slides = [
//   { img: "/images/image2.png", title: "DIVINE", subtitle: "SANCTUARY" },
//   { img: "/images/image3.png", title: "SACRED", subtitle: "TRADITIONS" },
//   { img: "/images/image4.png", title: "PEACEFUL", subtitle: "PRAYERS" },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1)), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-maroon">
//       <AnimatePresence mode="wait">
//         <motion.div 
//           key={current}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 z-0"
//         >
//           {/* Transparent Maroon Overlay - Image-um theriyum color-um irukkum */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-maroon/40 to-maroon z-10" />
//           <img src={slides[current].img} className="w-full h-full object-cover" alt="Temple" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-6xl md:text-[9rem] font-heading font-black text-white leading-[0.8] tracking-tighter">
//             {slides[current].title} <br />
//             <span className="text-gold italic font-light drop-shadow-2xl">{slides[current].subtitle}</span>
//           </h1>
          
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: false }}
//             transition={{ delay: 0.4 }}
//             className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <button className="bg-saffron text-maroon px-12 py-5 rounded-full font-black text-sm tracking-widest hover:scale-105 transition-all shadow-2xl">
//               BOOK A POOJA
//             </button>
//             <button className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-maroon transition-all">
//               EXPLORE MORE
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator with animation */}
//       <motion.div 
//         animate={{ y: [0, 15, 0] }} 
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
//       >
//         <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
//       </motion.div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link"; // Routing-kku Link import panniyachu

// const slides = [
//   { img: "/images/image2.png", title: "DIVINE", subtitle: "SANCTUARY" },
//   { img: "/images/image3.png", title: "SACRED", subtitle: "TRADITIONS" },
//   { img: "/images/image4.png", title: "PEACEFUL", subtitle: "PRAYERS" },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1)), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-maroon">
//       <AnimatePresence mode="wait">
//         <motion.div 
//           key={current}
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 z-0"
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-maroon/40 to-maroon z-10" />
//           <img src={slides[current].img} className="w-full h-full object-cover" alt="Temple" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-6xl md:text-[9rem] font-heading font-black text-white leading-[0.8] tracking-tighter">
//             {slides[current].title} <br />
//             <span className="text-gold italic font-light drop-shadow-2xl">{slides[current].subtitle}</span>
//           </h1>
          
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: false }}
//             transition={{ delay: 0.4 }}
//             className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             {/* BUTTON 1: BOOK A POOJA */}
//             <Link 
//               href="/pooja-events/bookings" 
//               className="bg-saffron text-maroon px-12 py-5 rounded-full font-black text-sm tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center justify-center"
//             >
//               BOOK A POOJA
//             </Link>

//             {/* BUTTON 2: EXPLORE MORE */}
//             <Link 
//               href="/about/management" 
//               className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-maroon transition-all flex items-center justify-center"
//             >
//               EXPLORE MORE
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       <motion.div 
//         animate={{ y: [0, 15, 0] }} 
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
//       >
//         <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
//       </motion.div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const slides = [
//   { img: "/images/image2.png", title: "DIVINE", subtitle: "SANCTUARY" },
//   { img: "/images/image16.png", title: "SACRED", subtitle: "TRADITIONS" },
//   { img: "/images/image4.png", title: "PEACEFUL", subtitle: "PRAYERS" },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1)), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-[#1a0505]">
//       <AnimatePresence mode="wait">
//         <motion.div 
//           key={current}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 z-0"
//         >
//           {/* 
//              MAROON OVERLAY FIX: 
//              Ippo black and maroon mix pannirukkaen. 
//              Mela black shadow, naduvula clear image, keela Royal Maroon (to-[#2D0A0A]).
//              Ithanaala Maroon feel-um varum, image-um nalla theriyaum.
//           */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-maroon/10 to-[#2D0A0A] z-10" />
          
//           <img 
//             src={slides[current].img} 
//             className="w-full h-full object-cover opacity-80" 
//             alt="Temple" 
//           />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="text-saffron font-black tracking-[0.5em] text-[10px] md:text-xs mb-4 block uppercase bg-maroon/20 backdrop-blur-md w-fit mx-auto px-4 py-1 rounded-full border border-saffron/20">
//             Hindu Society of Victoria
//           </span>
          
//           {/* 
//              FONT UPDATE:
//              Italic-a remove panni Bold Serif (font-heading) vachirukkaen. 
//              Ippo "TRADITIONS" romba "Italian" maari illama, "Royal Indian" style-la irukkum.
//           */}
//           <h1 className="text-6xl md:text-[9rem] font-heading font-black text-white leading-[0.8] tracking-tighter drop-shadow-2xl">
//             {slides[current].title} <br />
//             <span className="text-gold font-bold uppercase tracking-widest drop-shadow-2xl text-[4rem] md:text-[6rem]">
//               {slides[current].subtitle}
//             </span>
//           </h1>
          
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: false }}
//             transition={{ delay: 0.4 }}
//             className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
//           >
//             <Link 
//               href="/pooja-events/bookings?service=n-2026" 
//               className="bg-maroon text-gold px-12 py-5 rounded-full font-black text-xs md:text-sm tracking-widest hover:bg-saffron hover:text-maroon transition-all shadow-2xl flex items-center justify-center border-2 border-gold/30"
//             >
//               BOOK A POOJA
//             </Link>

//             <Link 
//               href="/about/management" 
//               className="backdrop-blur-md bg-white/5 border-2 border-white/20 text-white px-12 py-5 rounded-full font-black text-xs md:text-sm tracking-widest hover:bg-white hover:text-maroon transition-all flex items-center justify-center"
//             >
//               EXPLORE MORE
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div 
//         animate={{ y: [0, 15, 0] }} 
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
//       >
//         <div className="w-[1px] h-16 bg-gradient-to-b from-saffron to-transparent" />
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  { img: "/images/image2.png", title: "DIVINE", subtitle: "SANCTUARY" },
  { img: "/images/image16.png", title: "SACRED", subtitle: "TRADITIONS" },
  { img: "/images/image4.png", title: "PEACEFUL", subtitle: "PRAYERS" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1)), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0505]">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-maroon/20 to-[#1a0505] z-10" />
          <img 
            src={slides[current].img} 
            className="w-full h-full object-cover opacity-70 md:opacity-80" 
            alt="Temple" 
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl" // Mobile-la container width control panna
        >
          {/* Top Label: Mobile-la letter spacing koraichiruken */}
          <span className="text-saffron font-black tracking-[0.2em] md:tracking-[0.5em] text-[9px] md:text-xs mb-4 block uppercase bg-maroon/40 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full border border-saffron/20 leading-none">
            Hindu Society of Victoria
          </span>
          
          {/* 
             Main Title: 
             - Mobile: text-5xl (Iphone size-ku correct-ah irukum)
             - Desktop: text-[9rem] 
          */}
          <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-heading font-black text-white leading-[0.85] md:leading-[0.8] tracking-tighter drop-shadow-2xl">
            {slides[current].title} <br />
            <span className="text-gold font-bold uppercase tracking-widest drop-shadow-2xl text-2xl sm:text-4xl md:text-[6rem] mt-2 block">
              {slides[current].subtitle}
            </span>
          </h1>
          
          {/* 
             Buttons Container:
             - Mobile: full width, 1 column
             - Desktop: row
          */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto"
          >
            <Link 
              href="/pooja-events/bookings?service=n-2026" 
              className="w-full sm:w-auto bg-maroon text-gold px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] md:text-sm tracking-[0.15em] hover:bg-saffron hover:text-maroon transition-all shadow-xl flex items-center justify-center border border-gold/30 active:scale-95"
            >
              BOOK A POOJA
            </Link>

            <Link 
              href="/about/management" 
              className="w-full sm:w-auto backdrop-blur-md bg-white/5 border border-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] md:text-sm tracking-[0.15em] hover:bg-white hover:text-maroon transition-all flex items-center justify-center active:scale-95"
            >
              EXPLORE MORE
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator: Mobile-la chinathavum, desktop-la perusavum irukum */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-saffron to-transparent" />
      </motion.div>
    </section>
  );
}
// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, Variants } from "framer-motion";
// import { Music, Users, Calendar, MapPin, Info, ArrowRight, Phone, Clock } from "lucide-react";

// // --- ANIMATION VARIANTS ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.7, ease: "easeOut" } 
//   }
// };

// const fadeInLeft: Variants = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.7, ease: "easeOut" } 
//   }
// };

// const fadeInRight: Variants = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.7, ease: "easeOut" } 
//   }
// };

// export default function BhajanGatherings() {
//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="Bhajan Gatherings" subtitle="Divine Melodies & Devotion" />

//       <section className="max-w-7xl mx-auto px-6 py-16">
        
//         {/* SECTION 1: WELCOME & IMAGE (Slide in from sides) */}
//         <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={fadeInLeft}
//             className="lg:w-1/2"
//           >
//             <div className="inline-block p-4 bg-saffron/10 rounded-full text-saffron mb-6 shadow-inner">
//               <Music size={32} />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-heading font-black text-maroon mb-6 italic leading-tight uppercase tracking-tighter">
//               Join Our <span className="text-saffron">Uplifting</span> <br/>Community
//             </h2>
//             <p className="text-gray-600 font-medium leading-relaxed text-lg italic">
//               We host regular gatherings for both adults and children to come together, sing devotional songs, and share in the spiritual atmosphere of the temple.
//             </p>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={fadeInRight}
//             className="lg:w-1/2 w-full"
//           >
//             <div className="relative h-[380px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] border-white group">
//               <img 
//                 src="/images/image24.png" 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                 alt="Bhajan Community Gathering" 
//               />
//               <div className="absolute inset-0 bg-maroon/10 group-hover:bg-transparent transition-colors duration-500" />
//             </div>
//           </motion.div>
//         </div>

//         {/* SECTION 2: SESSION TYPES (Fade Up sequence) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          
//           {/* MONTHLY LIBRARY BHAJANS */}
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             variants={fadeInUp}
//             className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-maroon/5 flex flex-col hover:shadow-2xl transition-all duration-500"
//           >
//             <div className="flex justify-between items-start mb-8">
//                <div className="bg-cream px-5 py-2 rounded-2xl text-maroon font-black text-[10px] uppercase tracking-[0.2em] border border-maroon/5">Monthly Session</div>
//                <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron"><Calendar size={20}/></div>
//             </div>
//             <h3 className="text-3xl font-heading font-black text-maroon mb-6 italic tracking-tight">Library Bhajans</h3>
//             <div className="space-y-5 mb-8 flex-1">
//               <div className="flex items-center gap-4 text-sm font-bold text-gray-500"><div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold"><Calendar size={16}/></div> 1st Friday of the Month</div>
//               <div className="flex items-center gap-4 text-sm font-bold text-gray-500"><div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold"><Clock size={16}/></div> 6:30 PM – 7:30 PM</div>
//               <div className="flex items-center gap-4 text-sm font-bold text-gray-500"><div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold"><MapPin size={16}/></div> Cultural & Heritage Centre</div>
//             </div>
//             <div className="bg-cream/50 p-6 rounded-3xl border border-dashed border-maroon/10">
//               <p className="text-xs font-bold text-maroon/60 italic leading-relaxed text-center">Open to children and adults. Bhajan books are provided during the session.</p>
//             </div>
//           </motion.div>

//           {/* WEEKLY TEMPLE BHAJANS */}
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             variants={fadeInUp}
//             className="bg-[#2D0A0A] rounded-[3.5rem] p-10 shadow-xl text-white flex flex-col hover:-translate-y-3 transition-all duration-500 border border-white/5"
//           >
//             <div className="flex justify-between items-start mb-8">
//                <div className="bg-white/10 px-5 py-2 rounded-2xl text-gold font-black text-[10px] uppercase tracking-[0.2em] border border-white/10">Weekly Session</div>
//                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold"><Users size={20}/></div>
//             </div>
//             <h3 className="text-3xl font-heading font-black text-gold mb-6 italic tracking-tight">Temple Bhajans</h3>
//             <div className="space-y-5 mb-8 flex-1">
//               <div className="flex items-center gap-4 text-sm font-bold text-white/70"><div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center text-saffron"><Calendar size={16}/></div> Every Friday</div>
//               <div className="flex items-center gap-4 text-sm font-bold text-white/70"><div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center text-saffron"><Clock size={16}/></div> 8:00 PM – 9:00 PM</div>
//               <div className="flex items-center gap-4 text-sm font-bold text-white/70"><div className="w-8 h-8 rounded-lg bg-saffron/20 flex items-center justify-center text-saffron"><MapPin size={16}/></div> Main Temple (Post Pooja)</div>
//             </div>
//             <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
//               <p className="text-xs font-bold text-gold/60 italic leading-relaxed text-center">Held weekly following Shiva & Venkateshwara Poojas.</p>
//             </div>
//           </motion.div>

//         </div>

//         {/* SECTION 3: INFO & CONTACT (Fade Up) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.1 }}
//             variants={fadeInUp}
//             className="md:col-span-2 bg-white rounded-[3rem] p-10 border border-maroon/5 flex flex-col md:flex-row gap-8 items-center shadow-sm"
//           >
//             <div className="w-20 h-20 bg-maroon/5 rounded-full flex items-center justify-center text-maroon shrink-0"><Info size={32}/></div>
//             <div>
//               <h4 className="text-xl font-heading font-black text-maroon mb-4 italic uppercase tracking-tighter">Important Information</h4>
//               <ul className="text-xs text-gray-500 font-bold space-y-3">
//                 <li className="flex items-center gap-3"><ArrowRight size={14} className="text-saffron"/> Everyone is welcome, from beginners to experienced singers.</li>
//                 <li className="flex items-center gap-3"><ArrowRight size={14} className="text-saffron"/> Contact us if you wish to have your own copy of the Bhajan book.</li>
//               </ul>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.1 }}
//             variants={fadeInUp}
//             className="bg-maroon rounded-[3rem] p-10 text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group"
//           >
//             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700"><Users size={120}/></div>
//             <h4 className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-gold/20 pb-2">Coordinators</h4>
//             <div className="space-y-6 relative z-10">
//               <div className="group/item">
//                 <p className="text-[9px] font-black opacity-50 uppercase tracking-widest mb-1">Muruga</p>
//                 <a href="tel:0469148288" className="font-heading text-xl flex items-center gap-3 text-gold hover:text-white transition-colors"><Phone size={18}/> 0469 148 288</a>
//               </div>
//               <div className="group/item">
//                 <p className="text-[9px] font-black opacity-50 uppercase tracking-widest mb-1">Susila</p>
//                 <a href="tel:0401960045" className="font-heading text-xl flex items-center gap-3 text-gold hover:text-white transition-colors"><Phone size={18}/> 0401 960 045</a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//       </section>
//     </main>
//   );
// }


"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion, Variants } from "framer-motion";
import { Music, Users, Calendar, MapPin, Info, ArrowRight, Phone, Clock, Sparkles } from "lucide-react";

const revealAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function BhajanGatherings() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Bhajan Gatherings" subtitle="Divine Melodies & Devotion" />

      {/* Responsive Section Spacing */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
        
        {/* --- GRID SETTINGS FOR IPAD & DESKTOP --- 
            Mobile: 1 Col | iPad (md): 2 Col | Desktop (lg): 12 Col 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* A. INTRO TILE 
              iPad: Full Width (2 Col) | Desktop: 8 Col 
          */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={revealAnim}
            className="md:col-span-2 lg:col-span-8 bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-maroon/5 shadow-sm flex flex-col sm:flex-row gap-8 items-center overflow-hidden relative group"
          >
            <div className="flex-1 space-y-4 md:space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-saffron font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] bg-saffron/5 px-4 py-1.5 rounded-full border border-saffron/10">
                <Music size={14} /> Sacred Tradition
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-maroon italic leading-tight tracking-tight">
                Devotion in <br className="hidden md:block"/> <span className="text-saffron">Every Note.</span>
              </h2>
              <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-md italic">
                Join our community for regular bhajan sessions. Sing devotional songs and share in the spiritual bliss of our temple.
              </p>
            </div>
            <div className="w-full sm:w-56 md:w-64 lg:w-72 h-64 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-cream shrink-0 relative">
               <img src="/images/image24.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Bhajan" />
            </div>
          </motion.div>

          {/* B. COORDINATORS TILE 
              iPad: Full Width (2 Col) | Desktop: 4 Col 
          */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={revealAnim}
            className="md:col-span-2 lg:col-span-4 bg-gold rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-center text-maroon shadow-lg relative overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
              <Users size={160} />
            </div>
            <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 border-b border-maroon/10 pb-2">Bhajan Contacts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 relative z-10">
              <a href="tel:0469148288" className="group/link block">
                <p className="text-[8px] md:text-[9px] font-black uppercase opacity-50 mb-1">Muruga</p>
                <p className="text-xl md:text-2xl font-heading font-black group-hover:text-white transition-colors">0469 148 288</p>
              </a>
              <a href="tel:0401960045" className="group/link block">
                <p className="text-[8px] md:text-[9px] font-black uppercase opacity-50 mb-1">Susila</p>
                <p className="text-xl md:text-2xl font-heading font-black group-hover:text-white transition-colors">0401 960 045</p>
              </a>
            </div>
          </motion.div>

          {/* C. WEEKLY SESSION 
              iPad: 1 Col | Desktop: 6 Col 
          */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={revealAnim}
            className="md:col-span-1 lg:col-span-6 bg-[#1A0F0F] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative group overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000"><Sparkles size={100} /></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 block">Weekly Tradition</span>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-gold italic mb-8 md:mb-10">Temple Bhajans</h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
                <div className="space-y-1">
                  <p className="text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-widest">Frequency</p>
                  <div className="flex items-center gap-2 font-bold text-xs md:text-sm text-saffron"><Calendar size={14}/> Every Fri</div>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-widest">Sanctum</p>
                  <div className="flex items-center gap-2 font-bold text-xs md:text-sm text-saffron"><MapPin size={14}/> Main Temple</div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 p-4 md:p-5 bg-white/5 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-saffron/20 rounded-full flex items-center justify-center text-saffron"><Clock size={16} /></div>
                <p className="text-xs md:text-sm font-bold italic text-white/90">8:00 PM – 9:00 PM <span className="text-white/30 ml-2 hidden sm:inline">(Post Poojas)</span></p>
              </div>
            </div>
          </motion.div>

          {/* D. MONTHLY SESSION 
              iPad: 1 Col | Desktop: 6 Col 
          */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={revealAnim}
            className="md:col-span-1 lg:col-span-6 bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-maroon/5 shadow-xl group overflow-hidden"
          >
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-maroon/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8 block">Library Session</span>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-maroon italic mb-8 md:mb-10">Library Bhajans</h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
                <div className="space-y-1">
                  <p className="text-[8px] md:text-[9px] font-black text-maroon/20 uppercase tracking-widest">Occurrence</p>
                  <div className="flex items-center gap-2 font-bold text-xs md:text-sm text-maroon"><Calendar size={14}/> 1st Fri / Mo</div>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] md:text-[9px] font-black text-maroon/20 uppercase tracking-widest">Venue</p>
                  <div className="flex items-center gap-2 font-bold text-xs md:text-sm text-maroon"><MapPin size={14}/> Heritage Ctr</div>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-4 p-4 md:p-5 bg-cream rounded-[2rem] border border-maroon/5">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-maroon/5 rounded-full flex items-center justify-center text-maroon"><Clock size={16} /></div>
                <p className="text-xs md:text-sm font-bold italic text-maroon/80">6:30 PM – 7:30 PM <span className="text-maroon/30 ml-2 hidden sm:inline">(Books Provided)</span></p>
              </div>
            </div>
          </motion.div>

          {/* E. FOOTER INFO BAR 
              iPad: Full Width (2 Col) | Desktop: 12 Col 
          */}
          {/* <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false }} variants={revealAnim}
            className="md:col-span-2 lg:col-span-12 bg-white/60 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-dashed border-maroon/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-maroon text-gold rounded-full flex items-center justify-center shrink-0 shadow-lg"><Info size={24}/></div>
              <p className="text-[11px] md:text-sm font-bold text-maroon/60 italic leading-snug max-w-lg">
                Everyone is welcome! Whether you are a beginner or experienced in singing bhajans, we encourage you to join. 
              </p>
            </div>
            <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-maroon text-gold px-8 py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-saffron hover:text-maroon transition-all shadow-xl group">
              Request Bhajan Book <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div> */}

        </div>
      </section>
    </main>
  );
}
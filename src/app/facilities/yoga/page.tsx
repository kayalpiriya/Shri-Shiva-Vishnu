// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion } from "framer-motion";
// import { Sparkles, MapPin, Calendar, Clock, Globe, Phone, Mail, Heart, ArrowRight } from "lucide-react";

// export default function YogaPage() {
//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="Yoga & Meditation" subtitle="Wellness for Body, Mind & Soul" />

//       <section className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* INTRO WITH LOGO/ICON */}
//         <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-6">
//             <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon leading-tight italic">
//               Vasudeva Kriya <br/><span className="text-saffron">Yoga Centre</span>
//             </h2>
//             <p className="text-gray-500 font-medium text-lg italic leading-relaxed">
//               Instilling correct practicing techniques and in-depth knowledge of Yoga principles. Weekly sessions for physical, mental, and spiritual health.
//             </p>
//             <div className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-maroon/5 shadow-sm">
//                <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0"><Heart size={24}/></div>
//                <p className="text-sm font-bold text-maroon/60">Over 10 years of benefiting hundreds of students at the temple.</p>
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative h-[450px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
//              <img src="/images/image7.png" className="w-full h-full object-cover" alt="Yoga Session" />
//              <div className="absolute inset-0 bg-maroon/5" />
//           </motion.div>
//         </div>

//         {/* SCHEDULE & PRICING BENTO */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
           
//            {/* Founder Tile */}
//            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#1A0F0F] p-8 rounded-[3rem] text-white flex flex-col justify-center">
//               <Sparkles className="text-gold mb-4" />
//               <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Founder</h4>
//               <p className="text-2xl font-heading font-black text-gold italic leading-tight">Shri Rajendra Yenkannamoole</p>
//            </motion.div>

//            {/* Schedule Tile */}
//            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[3rem] border border-maroon/5 shadow-lg flex flex-col justify-between">
//               <div className="flex items-center gap-4 mb-6">
//                  <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-maroon"><Calendar size={18}/></div>
//                  <p className="text-maroon font-black text-xl italic uppercase">Saturdays</p>
//               </div>
//               <div className="space-y-4">
//                  <div className="flex justify-between text-xs font-bold border-b pb-2"><span>Time</span><span className="text-maroon">9:30 AM – 11:00 AM</span></div>
//                  <div className="flex justify-between text-xs font-bold border-b pb-2"><span>Venue</span><span className="text-maroon">Peacock Room</span></div>
//               </div>
//            </motion.div>

//            {/* Fee Tile */}
//            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-maroon p-8 rounded-[3rem] text-white flex flex-col items-center justify-center text-center shadow-xl">
//               <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-2">Investment in Health</p>
//               <h3 className="text-5xl font-heading font-black italic">$120</h3>
//               <p className="text-xs font-bold text-white/50 mt-2 italic">per term (10 sessions)</p>
//            </motion.div>

//         </div>

//         {/* WEB & CONTACT FOOTER */}
//         <div className="bg-white rounded-[3.5rem] p-10 md:p-16 border border-maroon/5 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
//            <div className="space-y-4 text-center md:text-left">
//               <h3 className="text-2xl font-heading font-black text-maroon italic">More Information</h3>
//               <a href="http://www.vasudevakriyayoga.com" target="_blank" className="flex items-center gap-2 text-saffron font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
//                 <Globe size={16}/> Visit Website <ArrowRight size={14}/>
//               </a>
//            </div>
//            <div className="flex flex-wrap justify-center gap-6">
//               <div className="text-center">
//                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Email Enquiries</p>
//                  <a href="mailto:vasudevakriyayoga@gmail.com" className="text-maroon font-bold text-sm underline italic">vasudevakriyayoga@gmail.com</a>
//               </div>
//               <div className="text-center">
//                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Phone</p>
//                  <a href="tel:0410527904" className="text-maroon font-bold text-lg italic">0410 527 904</a>
//               </div>
//            </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Calendar, Clock, Globe, Phone, Mail, Heart, ArrowRight } from "lucide-react";

export default function YogaPage() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Yoga & Meditation" subtitle="Wellness for Body, Mind & Soul" />

      {/* Responsive Section Padding: px-4 (Mobile), px-10 (iPad), px-12 (Desktop) */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-12">
        
        {/* INTRO SECTION: Stacked on Mobile/iPad, Side-by-Side on Desktop */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-maroon leading-tight italic">
              Vasudeva Kriya <br className="hidden lg:block"/><span className="text-saffron">Yoga Centre</span>
            </h2>
            <p className="text-gray-500 font-medium text-base md:text-lg italic leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Instilling correct practicing techniques and in-depth knowledge of Yoga principles. Weekly sessions for physical, mental, and spiritual health.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-maroon/5 shadow-sm text-left">
               <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0"><Heart size={24}/></div>
               <p className="text-sm font-bold text-maroon/60">Over 10 years of benefiting hundreds of students at the temple.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
             <img src="/images/image7.png" className="w-full h-full object-cover" alt="Yoga Session" />
             <div className="absolute inset-0 bg-maroon/5" />
          </motion.div>
        </div>

        {/* SCHEDULE & PRICING BENTO: 
            Mobile: 1 Col | iPad (md): 2 Col | Desktop (lg): 3 Col 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
           
           {/* Founder Tile */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#1A0F0F] p-8 md:p-10 rounded-[3rem] text-white flex flex-col justify-center min-h-[220px]">
              <Sparkles className="text-gold mb-4" />
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Founder</h4>
              <p className="text-2xl md:text-3xl font-heading font-black text-gold italic leading-tight">Shri Rajendra Yenkannamoole</p>
           </motion.div>

           {/* Schedule Tile */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 md:p-10 rounded-[3rem] border border-maroon/5 shadow-lg flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-maroon"><Calendar size={18}/></div>
                 <p className="text-maroon font-black text-2xl italic uppercase tracking-tighter">Saturdays</p>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between text-xs md:text-sm font-bold border-b pb-2"><span>Time</span><span className="text-maroon font-black">9:30 AM – 11:00 AM</span></div>
                 <div className="flex justify-between text-xs md:text-sm font-bold border-b pb-2"><span>Venue</span><span className="text-maroon font-black">Peacock Room</span></div>
              </div>
           </motion.div>

           {/* Fee Tile: Optimized for iPad Portrait (md:col-span-2) */}
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-2 lg:col-span-1 bg-maroon p-8 md:p-10 rounded-[3rem] text-white flex flex-col items-center justify-center text-center shadow-xl min-h-[220px]">
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-2">Investment in Health</p>
              <h3 className="text-5xl md:text-6xl font-heading font-black italic">$120</h3>
              <p className="text-xs font-bold text-white/50 mt-2 italic">per term (10 sessions)</p>
           </motion.div>

        </div>

        {/* WEB & CONTACT FOOTER: Responsive flex for all screen sizes */}
        <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 border border-maroon/5 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg">
           <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-heading font-black text-maroon italic leading-tight">More Information</h3>
              <a href="http://www.vasudevakriyayoga.com" target="_blank" className="inline-flex items-center gap-2 text-saffron font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform duration-300">
                <Globe size={16}/> Visit Website <ArrowRight size={14}/>
              </a>
           </div>
           
           <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10">
              <div className="text-center min-w-[200px]">
                 <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Email Enquiries</p>
                 <a href="mailto:vasudevakriyayoga@gmail.com" className="text-maroon font-bold text-sm md:text-base underline italic break-all">vasudevakriyayoga@gmail.com</a>
              </div>
              <div className="text-center min-w-[200px]">
                 <p className="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Contact Phone</p>
                 <a href="tel:0410527904" className="text-maroon font-black text-2xl md:text-3xl italic tracking-tighter">0410 527 904</a>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
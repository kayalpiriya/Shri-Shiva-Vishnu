"use client";
import { motion, Variants } from "framer-motion";
import { Clock, Coffee, Sparkles, Ban } from "lucide-react";

export default function InfoGrid() {
  const itemVars: Variants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 bg-cream/50 relative overflow-hidden">
      <motion.div 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 relative z-10"
      >
        
        {/* TEMPLE TIMINGS */}
        <motion.div variants={itemVars} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-maroon/5 group">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-maroon rounded-2xl flex items-center justify-center text-white shadow-lg shadow-maroon/20">
              <Clock size={28} />
            </div>
            <h2 className="text-3xl font-heading font-black text-maroon tracking-tighter uppercase">Temple Hours</h2>
          </div>
          <div className="space-y-4">
             <div className="bg-cream/30 p-5 rounded-2xl border-l-4 border-maroon/20 hover:border-maroon transition-all">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Monday – Friday</p>
                <p className="text-lg font-bold text-maroon">7:30 AM to 12:05 PM <span className="text-saffron px-2">|</span> 4:00 PM to 9:05 PM</p>
             </div>
             <div className="bg-cream/30 p-5 rounded-2xl border-l-4 border-saffron/30 hover:border-saffron transition-all">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Weekends & Holidays</p>
                <p className="text-lg font-bold text-maroon">7:30 AM to 1:05 PM <span className="text-saffron px-2">|</span> 4:00 PM to 9:05 PM</p>
             </div>
          </div>
        </motion.div>

        {/* CAFE TIMINGS (Deep Charcoal Maroon - Not Pure Black) */}
        <motion.div variants={itemVars} className="bg-[#1F1111] p-8 md:p-10 rounded-[2.5rem] shadow-2xl text-white border border-white/5 relative overflow-hidden group">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center text-maroon shadow-lg shadow-gold/20">
                <Coffee size={28} />
              </div>
              <h2 className="text-3xl font-heading font-black text-gold uppercase tracking-tighter italic">Café Timings</h2>
            </div>
            <div className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-[9px] font-black uppercase border border-red-500/20">
              <Ban size={12} className="inline mr-1" /> Wed Closed
            </div>
          </div>
          <div className="grid gap-2 relative z-10">
            {[
              { day: "Weekdays", time: "05:30 PM to 09:00 PM" },
              { day: "Public Holidays", time: "10:00 AM to 02:00 PM" },
              { day: "Weekends", time: "09:30 AM – 02:00 PM", time2: "05:00 PM – 09:00 PM" }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{item.day}</span>
                <div className="text-right font-black text-gold text-lg">{item.time} {item.time2 && <><br/>{item.time2}</>}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
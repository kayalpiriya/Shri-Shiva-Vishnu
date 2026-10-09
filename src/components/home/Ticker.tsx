"use client";
import { motion } from "framer-motion";
import { Play, Heart, Bell } from "lucide-react";

export default function Ticker() {
  return (
    <div className="bg-[#181111] py-6 overflow-hidden border-y border-gold/10 relative z-30">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap gap-20 items-center text-gold/80 font-bold text-[11px] uppercase tracking-[0.25em]"
      >
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-20 items-center">
            <span className="flex items-center gap-3"><Play size={14} fill="currentColor"/> Youtube Live Streaming</span>
            <span className="text-white/10">///</span>
            <span className="flex items-center gap-3"><Heart size={14} fill="currentColor"/> Support Athma Lingam Project</span>
            <span className="text-white/10">///</span>
            <span className="flex items-center gap-3"><Bell size={14} fill="currentColor"/> Navarathri Pooja Bookings Open</span>
            <span className="text-white/10">///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
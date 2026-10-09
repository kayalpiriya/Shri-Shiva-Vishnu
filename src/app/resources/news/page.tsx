"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Bell, Sparkles } from "lucide-react";

const newsList = [
  { id: 1, title: "Grand Kumbhabhishekam Anniversary", date: "Aug 15, 2026", category: "Event", desc: "Special poojas and cultural programs scheduled for the upcoming anniversary celebrations." },
  { id: 2, title: "New Youth Leadership Program", date: "Sep 01, 2026", category: "Community", desc: "Applications are open for the SDS Youth Leadership program for 2026-27." },
  { id: 3, title: "Temple Expansion Project Update", date: "Oct 10, 2026", category: "Notice", desc: "Construction of the new Athma Lingam project is progressing ahead of schedule." },
];

export default function NewsPage() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Temple News" subtitle="Latest Updates & Announcements" />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <motion.div 
              key={news.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-maroon/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-saffron/10 text-saffron px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{news.category}</span>
                <Bell size={18} className="text-maroon/20 group-hover:text-maroon transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-black text-maroon mb-4 group-hover:text-saffron transition-colors leading-tight">{news.title}</h3>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest">
                <Calendar size={12} /> {news.date}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 italic line-clamp-3">{news.desc}</p>
              <button className="flex items-center gap-2 text-[10px] font-black text-maroon uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Full Story <ArrowRight size={14} className="text-saffron" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
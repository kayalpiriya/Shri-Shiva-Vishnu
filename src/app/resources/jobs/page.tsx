"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { SearchX, BellRing, Sparkles } from "lucide-react";

export default function JobOpportunities() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Careers" subtitle="Work with the Society" />

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[4rem] p-12 md:p-20 border border-maroon/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03]"><Sparkles size={200}/></div>
          <div className="w-24 h-24 bg-maroon/5 rounded-full mx-auto mb-8 flex items-center justify-center text-maroon/20">
             <SearchX size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-maroon italic mb-6">No Openings</h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12">Job Openings at HSV: Nil at this stage</p>
          
          <div className="bg-cream/50 p-6 rounded-3xl inline-flex items-center gap-4 border border-dashed border-maroon/10">
             <BellRing className="text-saffron" size={20} />
             <p className="text-xs font-bold text-maroon/60 italic">Future opportunities will be advertised here. Stay tuned!</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
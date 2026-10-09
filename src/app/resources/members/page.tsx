"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Users, FileText, Search, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinancialMembers() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Financial Members" subtitle="Management & Governance Information" />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 2026 ELECTION TILE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }}
            className="lg:col-span-8 bg-maroon rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Decorative Background Icon */}
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
              <Calendar size={200} />
            </div>

            <div className="relative z-10">
              <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-4 block bg-white/5 w-fit px-4 py-1.5 rounded-full border border-gold/20">
                August 30, 2026
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-gold italic mb-6 leading-tight">
                AGM & Election for <br/>Management Committee 2026-28
              </h2>
              <p className="text-white/60 font-medium mb-10 max-w-xl leading-relaxed">
                The list of nominations and candidate profiles signed, dated, and received by the Banks Group on time are now available for review.
              </p>
              
              {/* --- PDF DOWNLOAD BUTTON --- */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/pdfs/nominations-2026.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-gold text-maroon px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 group"
                >
                  <FileText size={20} className="group-hover:rotate-12 transition-transform" /> 
                  View Nominations List 
                  <ExternalLink size={14} className="opacity-50"/>
                </a>
              </div>
            </div>
          </motion.div>

          {/* SEARCH/PAST MC TILE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false }}
            className="lg:col-span-4 bg-white rounded-[3rem] p-10 border border-maroon/5 shadow-xl flex flex-col justify-center text-center group"
          >
            <div className="w-20 h-20 bg-cream rounded-[2rem] mx-auto mb-8 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-gold transition-all duration-500 shadow-inner">
              <Search size={32}/>
            </div>
            <h3 className="text-2xl font-heading font-black text-maroon mb-4">Historical Archives</h3>
            <p className="text-gray-400 text-[10px] font-bold leading-relaxed mb-10 italic uppercase tracking-[0.15em]">
              Access current and past management committee records since 1982.
            </p>
            
            <Link 
              href="/about/previous-mc" 
              className="w-full bg-cream text-maroon py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-maroon hover:text-gold transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
            >
               Full MC Members List <ArrowRight size={14}/>
            </Link>
          </motion.div>

          {/* FOOTER NOTE */}
          <div className="lg:col-span-12 flex flex-col items-center gap-4 py-8">
            <div className="h-px w-20 bg-maroon/10" />
            <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.4em] text-center">
              As on 12th Nov 2020 • HSV Management Records
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
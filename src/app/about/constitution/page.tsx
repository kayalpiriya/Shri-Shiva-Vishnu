"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck } from "lucide-react";

export default function Constitution() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      {/* Hero Section */}
      <SubPageHero title="HSV Constitution" subtitle="Governance & Values" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-maroon/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center text-maroon">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-3xl font-heading font-black text-maroon italic">Our Foundation</h2>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
            <p>
              The Hindu Society of Victoria (HSV) operates under a formal constitution that outlines our 
              commitment to spiritual service, cultural preservation, and community welfare.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-maroon/5">
                <FileText className="text-saffron shrink-0" />
                <div>
                  <h4 className="font-black text-maroon text-sm uppercase mb-1">Article I: Objectives</h4>
                  <p className="text-sm">To maintain the temple of Shri Shiva Vishnu and promote Hindu religious and cultural activities.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-cream/30 rounded-2xl border border-maroon/5">
                <FileText className="text-saffron shrink-0" />
                <div>
                  <h4 className="font-black text-maroon text-sm uppercase mb-1">Article II: Membership</h4>
                  <p className="text-sm">Guidelines for devotees to join and contribute to the society's growth and governance.</p>
                </div>
              </div>
            </div>

            {/* DOWNLOAD SECTION */}
            <div className="mt-12 p-8 bg-maroon rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-gold">Download Full Document</h3>
                <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Version 2.4 | PDF (2.4 MB)</p>
              </div>
              <button className="bg-gold text-maroon px-8 py-4 rounded-full font-black text-xs flex items-center gap-2 hover:bg-saffron transition-all active:scale-95 shadow-lg">
                <Download size={18} /> DOWNLOAD NOW
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
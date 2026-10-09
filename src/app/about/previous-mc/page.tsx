"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Search, History, Award, User, Hash, X } from "lucide-react";

// The full data you provided
const previousMCData = [
  { year: "2024-2026", role: "President", name: "Dr. Usha Rani GULAPALLI", order: "01" },
  { year: "2024-2026", role: "Secretary", name: "Ms. Inthirai Parameswaran", order: "02" },
  { year: "2024-2026", role: "Treasurer", name: "Mr. Arulsothy Appapillai", order: "03" },
  { year: "2025-2025", role: "Vice President -1", name: "Mr. Aiyathurai Kirupakaran", order: "04" },
  { year: "2024-2026", role: "Vice President -2", name: "Mr. Dorai Subramaniam", order: "05" },
  { year: "2024-2026", role: "Asst Secretary", name: "Mr. Sivakumar Gurusamy", order: "06" },
  { year: "2024-2026", role: "Asst Treasurer", name: "Mr. Navaratnam Illventhan", order: "07" },
  { year: "2024-2026", role: "Committee Member", name: "Mr. Arroran Raveendran", order: "08" },
  { year: "2024-2026", role: "Committee Member", name: "Mr. Manivannan Ramachandran", order: "09" },
  { year: "2024-2026", role: "Committee Member", name: "Mr. Niroshan Sanjaya Rajakulendran", order: "10" },
  { year: "2022-2023", role: "President", name: "Mr. Sabaratnam Kathirkhanthan", order: "01" },
  { year: "2022-2023", role: "Vice President", name: "Mrs. U.R. Gullapalli", order: "03" },
  { year: "2021-2022", role: "President", name: "Mr. B. Rangarajan", order: "01" },
  { year: "2021-2022", role: "Treasurer", name: "Mrs. I. Parameswaran", order: "06" },
];

export default function PreviousMC() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = previousMCData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.year.includes(searchTerm)
  );

  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Legacy of Service" subtitle="Historical Management Committees" />

      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* ULTRA MODERN SEARCH BAR */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="text-maroon/40 group-focus-within:text-maroon transition-colors" size={22} />
          </div>
          <input 
            type="text"
            value={searchTerm}
            placeholder="Search by name, year or role..."
            className="w-full bg-white/80 backdrop-blur-xl border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-6 pl-16 pr-16 rounded-[2rem] focus:outline-none focus:border-gold/50 transition-all font-bold text-maroon placeholder:text-gray-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-6 flex items-center text-gray-400 hover:text-maroon transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </motion.div>

        {/* STATS SUMMARY (Visual impact) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 text-center">
            <div className="flex flex-col">
                <span className="text-2xl font-black text-maroon">{previousMCData.length}</span>
                <span className="text-[9px] font-black text-saffron uppercase tracking-widest">Total Records</span>
            </div>
            <div className="w-[1px] h-10 bg-maroon/10 hidden md:block" />
            <div className="flex flex-col">
                <span className="text-2xl font-black text-maroon">{new Set(previousMCData.map(d => d.year)).size}</span>
                <span className="text-[9px] font-black text-saffron uppercase tracking-widest">Tenure Years</span>
            </div>
        </div>

        {/* THE ANIMATED LIST */}
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => (
              <motion.div 
                key={`${item.year}-${item.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-maroon/5 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-gold/30 hover:shadow-2xl hover:shadow-maroon/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Year Badge */}
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="flex items-center gap-2 text-saffron mb-1">
                    <History size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tenure</span>
                  </div>
                  <span className="text-2xl font-heading font-black text-maroon italic group-hover:text-saffron transition-colors">
                    {item.year}
                  </span>
                </div>

                {/* Role & Name */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-maroon/5 text-maroon px-3 py-1 rounded-full text-[9px] font-black uppercase mb-3 border border-maroon/5 group-hover:bg-maroon group-hover:text-white transition-colors">
                    <Award size={12} /> {item.role}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-3">
                    {item.name}
                  </h3>
                </div>

                {/* Order Circle */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-cream border border-maroon/5 flex flex-col items-center justify-center group-hover:bg-gold transition-colors">
                    <span className="text-[8px] font-black text-gray-400 group-hover:text-maroon uppercase">Order</span>
                    <span className="text-lg font-black text-maroon">#{item.order || '--'}</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-gold/10 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* NO RESULTS ANIMATION */}
          {filteredData.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-maroon/10"
            >
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 text-maroon/30">
                 <Search size={40} />
              </div>
              <h3 className="text-2xl font-heading font-black text-maroon italic">No records found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or year.</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-6 text-saffron font-black text-xs uppercase underline underline-offset-8"
              >
                Clear All Search
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
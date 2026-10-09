"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { FileText, FileDown, Calendar, Sparkles, BookOpen } from "lucide-react";

export default function PanchavatiPage() {
  const newsletters = [
    { title: "Panchavati - Feb 2020", date: "Feb 2020", file: "panchavati-feb-2020.pdf" },
    { title: "Panchavati - 28 Oct 2020 AGM 2", date: "Oct 2020", file: "panchavati-agm-oct-2020.pdf" },
  ];

  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Panchavati" subtitle="HSV Temple Newsletters" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
           <div className="inline-block p-4 bg-maroon/5 rounded-full text-maroon mb-6"><BookOpen size={32} /></div>
           <h2 className="text-4xl font-heading font-black text-maroon italic mb-4">Temple Archives</h2>
           <p className="text-gray-500 font-medium">Explore the history and updates of the Hindu Society of Victoria through our Panchavati newsletters.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {newsletters.map((item, idx) => (
             <motion.div 
               key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-[3rem] p-10 border border-maroon/5 shadow-lg group hover:shadow-2xl transition-all"
             >
                <Calendar className="text-saffron mb-6" size={24} />
                <h3 className="text-xl font-heading font-black text-maroon mb-8 italic">{item.title}</h3>
                <a 
                  href={`/pdfs/${item.file}`} target="_blank"
                  className="inline-flex items-center gap-3 text-xs font-black text-maroon uppercase tracking-widest group-hover:text-saffron transition-colors"
                >
                  View Newsletter <FileDown size={16}/>
                </a>
             </motion.div>
           ))}
        </div>
      </section>
    </main>
  );
}
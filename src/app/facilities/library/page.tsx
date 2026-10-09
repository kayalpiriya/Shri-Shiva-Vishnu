"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Book, MapPin, Clock, User, Phone, Info, Sparkles, Languages, Calendar, GraduationCap } from "lucide-react";

export default function LibraryPage() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="HSV Library" subtitle="A Gateway to Ancient Wisdom" />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        
        {/* --- MAIN BENTO LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. KNOWLEDGE HUB TILE (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-14 border border-maroon/5 shadow-sm relative overflow-hidden group"
          >
            {/* Background Decorative Icon */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
               <Book size={250} />
            </div>

            <div className="relative z-10 space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-maroon text-[10px] font-black uppercase tracking-[0.2em] border border-maroon/5">
                 <Languages size={14} className="text-saffron" /> Multilingual Collection
               </div>
               
               <h2 className="text-4xl md:text-6xl font-heading font-black text-maroon italic leading-tight tracking-tight">
                 Explore the Wealth of <br/> <span className="text-saffron">Ancient Scriptures.</span>
               </h2>
               
               <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-2xl italic border-l-4 border-gold/30 pl-6">
                 HSV Library offers a vast selection of Hinduism books in English, Tamil, and other Indian languages, fostering spiritual growth through reading.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 bg-cream/30 rounded-3xl border border-maroon/5 group-hover:border-gold/30 transition-colors">
                     <h4 className="text-maroon font-black text-xs mb-2 uppercase tracking-widest flex items-center gap-2">
                       <Sparkles size={14} className="text-gold"/> Akshaya Patra Hall
                     </h4>
                     <p className="text-xs text-gray-400 font-bold leading-relaxed">Experience our special book display designed to inspire visits to our heritage collection.</p>
                  </div>
                  <div className="p-6 bg-[#2D0A0A] rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-xl">
                     <Calendar className="text-gold mb-2" size={24} />
                     <p className="text-gold font-black text-sm uppercase italic tracking-wider">Restarted July 1st</p>
                     <p className="text-[9px] text-white/40 font-bold uppercase mt-1 tracking-widest">Post Pandemic Initiative</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* 2. PROFILE AVATAR WIDGET (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}
            className="lg:col-span-4 bg-white rounded-[3rem] p-8 md:p-10 border border-maroon/5 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            {/* STYLIZED AVATAR */}
            <div className="relative mb-8">
               <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-maroon to-saffron p-1.5 shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-maroon overflow-hidden">
                     {/* Modern Avatar Icon */}
                     <User size={60} strokeWidth={1.5} className="opacity-80" />
                  </div>
               </div>
               <div className="absolute -bottom-2 -right-2 bg-gold text-white p-2 rounded-full shadow-lg">
                  <GraduationCap size={20} />
               </div>
            </div>

            <div className="space-y-2">
               <h4 className="text-[10px] font-black text-maroon/40 uppercase tracking-[0.3em]">Library In-Charge</h4>
               <h3 className="text-3xl font-heading font-black text-maroon italic">Mrs. Medini</h3>
               <p className="text-xs font-bold text-gray-400 italic px-4">Passionate about preserving our sacred Indian languages and heritage.</p>
            </div>

            <div className="mt-10 w-full space-y-3">
               <a 
                 href="tel:0425216944" 
                 className="w-full flex items-center justify-center gap-3 bg-maroon text-gold py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-saffron hover:text-maroon transition-all shadow-lg active:scale-95 group/btn"
               >
                 <Phone size={16} className="group-hover/btn:rotate-12 transition-transform" /> 0425 216 944
               </a>
               <p className="text-[9px] font-black text-maroon/30 uppercase tracking-widest">Call for book enquiries</p>
            </div>
          </motion.div>

          {/* 3. TIME & LOCATION BAR (12 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="lg:col-span-12 bg-[#1A0F0F] rounded-[2.5rem] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
            
            <div className="flex items-center gap-6 relative z-10">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold border border-white/10 shadow-inner">
                  <Clock size={32} />
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Visiting Hours</p>
                  <h4 className="text-2xl md:text-3xl font-heading font-black italic">Every Friday | 7:00 PM – 8:30 PM</h4>
               </div>
            </div>

            <div className="flex items-center gap-5 relative z-10 bg-white/5 px-8 py-4 rounded-[2rem] border border-white/5">
               <div className="w-10 h-10 bg-saffron/20 rounded-full flex items-center justify-center text-saffron shrink-0">
                  <MapPin size={20} />
               </div>
               <div>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-bold">Heritage Centre (Upstairs)</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
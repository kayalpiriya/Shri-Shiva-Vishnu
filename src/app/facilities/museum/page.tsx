"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { Camera, Phone, Mail, MapPin, Info, ArrowRight, Sparkles, User } from "lucide-react";

export default function MuseumPage() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Divine Museum" subtitle="Preserving Heritage & Spirituality" />

      <section className="max-w-7xl mx-auto px-6 py-12">
        
        {/* TOP GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/image26.png" className="w-full h-full object-cover" alt="Museum Exhibit" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/image27.png" className="w-full h-full object-cover" alt="Museum Artifacts" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent" />
          </motion.div>
        </div>

        {/* INFO & BOOKING BENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-12 border border-maroon/5 shadow-sm">
            <Sparkles className="text-gold mb-4" />
            <h2 className="text-4xl font-heading font-black text-maroon italic mb-6">Explore Our Divine Legacy</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              The Shri Shiva Vishnu Temple Museum houses a rare collection of spiritual artifacts, sculptures, and historical documents that showcase the rich tapestry of Sanadhana Dharma. 
            </p>
            <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-maroon/5">
               <Info className="text-maroon shrink-0" />
               <p className="text-xs font-bold text-maroon/60 italic uppercase tracking-wider">Guided tours are available upon prior request.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="lg:col-span-4 bg-maroon rounded-[3rem] p-10 text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-700"><Camera size={150} /></div>
            <h4 className="text-gold font-black text-[10px] uppercase tracking-[0.3em] mb-8 border-b border-gold/20 pb-2">Tour Enquiries</h4>
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Temple Manager</p>
                <a href="tel:97820878" className="text-xl font-heading font-black hover:text-gold transition-colors flex items-center gap-2"><Phone size={16}/> 9782 0878</a>
              </div>
              <div className="space-y-1 pt-4 border-t border-white/10">
                <p className="text-[9px] font-black opacity-40 uppercase tracking-widest text-gold">Mangalam Vasan</p>
                <a href="tel:98984469" className="text-xl font-heading font-black hover:text-gold transition-colors block"><Phone size={16} className="inline mr-2"/> 9898 4469</a>
                <a href="mailto:mangalamvasan@y7mail.com" className="text-[10px] font-bold text-saffron flex items-center gap-2 mt-2"><Mail size={12}/> mangalamvasan@y7mail.com</a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
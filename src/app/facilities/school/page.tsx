"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { BookOpen, Users, Music, Theater, Sparkles, GraduationCap, Clock, MapPin, Mail } from "lucide-react";

const curriculum = [
  { title: "GODS", desc: "Learn about our divine Gods and their stories.", icon: <Sparkles className="text-orange-500" /> },
  { title: "SAINTS", desc: "Inspiring lives and teachings of Saints.", icon: <Users className="text-pink-500" /> },
  { title: "TEMPLES", desc: "Explore the significance and traditions of Hindu Temples.", icon: <GraduationCap className="text-yellow-600" /> },
  { title: "EPICS & ETHICS", desc: "Stories from the Epics and lessons on values.", icon: <BookOpen className="text-blue-500" /> },
  { title: "SCRIPTURES", desc: "Discover wisdom from our ancient Scriptures.", icon: <BookOpen className="text-purple-500" /> },
  { title: "DRAMAS & SKITS", desc: "Learn through fun dramas and skits.", icon: <Theater className="text-red-500" /> },
  { title: "BHAJANS", desc: "Devotional singing in multiple languages.", icon: <Music className="text-cyan-500" /> },
];

export default function HSVSchool() {
  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="HSV School for Children" subtitle="Sanadhana Dharma Sansthan (SDS)" />

      <section className="max-w-7xl mx-auto px-6 py-16">
        
        {/* SECTION 1: INTRO WITH FEATURED IMAGE */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-maroon mb-6 leading-tight italic">
              Nurturing Values in a <br /><span className="text-saffron underline decoration-gold/30">Fun Environment</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-medium text-lg italic">
              Sri Shiva Vishnu temple runs the SDS Hinduism School where spiritual values are taught through engaging activities.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white rounded-2xl border border-maroon/5 shadow-sm">
                  <h4 className="text-maroon font-black text-[10px] uppercase tracking-widest mb-1">Language</h4>
                  <p className="font-bold text-sm">English Medium</p>
               </div>
               <div className="p-4 bg-white rounded-2xl border border-maroon/5 shadow-sm">
                  <h4 className="text-maroon font-black text-[10px] uppercase tracking-widest mb-1">Events</h4>
                  <p className="font-bold text-sm">Annual Concerts</p>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] -rotate-3 blur-sm" />
             {/* FEATURED IMAGE */}
             <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/image20.png" className="w-full h-full object-cover" alt="Hinduism School" />
             </div>
          </motion.div>
        </div>

        {/* SECTION 2: CURRICULUM GRID */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading font-black text-maroon uppercase tracking-widest italic">Our Curriculum</h3>
            <div className="w-24 h-1.5 bg-saffron mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((item, idx) => (
              <motion.div 
                key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-maroon/5 hover:border-saffron/50 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-cream rounded-2xl mb-6 flex items-center justify-center group-hover:bg-maroon group-hover:text-white transition-colors">{item.icon}</div>
                  <h4 className="text-lg font-heading font-black text-maroon mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: LEARNING IN ACTION (IMAGE GALLERY) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div className="md:col-span-2 h-[400px] rounded-[3rem] overflow-hidden shadow-lg border-2 border-white">
                <img src="/images/image25.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Activity 1" />
            </div>
            <div className="space-y-6">
                <div className="h-[188px] rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white">
                    <img src="/images/image21.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Activity 2" />
                </div>
                <div className="h-[188px] rounded-[2.5rem] overflow-hidden shadow-lg border-2 border-white">
                    <img src="/images/image22.png" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Activity 3" />
                </div>
            </div>
        </div>

        {/* SECTION 4: CONTACT & INFO */}
        <div className="bg-[#1A0F0F] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><GraduationCap size={200} /></div>
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-8">
                    <h3 className="text-4xl font-heading font-black text-gold italic">Join Our Class</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Clock className="text-saffron shrink-0" />
                            <div><p className="font-bold text-lg">Fridays | 7:00 PM – 8:30 PM</p><p className="text-white/40 text-[10px] uppercase font-bold italic">Includes a Vada Break time!</p></div>
                        </div>
                        <div className="flex gap-4">
                            <MapPin className="text-saffron shrink-0" />
                            <div><p className="font-bold text-lg">Museum Hall</p><p className="text-white/40 text-[10px] uppercase font-bold italic">Above Canteen, HSV Temple</p></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10">
                    <h4 className="text-gold font-black text-xs uppercase tracking-widest mb-6">Enrolment Enquiries</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/10 pb-4">
                            <span>Nandini</span><a href="tel:0420774224" className="text-gold font-bold">0420 774 224</a>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-4">
                            <span>Saravana</span><a href="tel:0413640320" className="text-gold font-bold">0413 640 320</a>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span>Mrs. Mangalam</span><a href="mailto:mangalamvasan@ymail.com" className="text-saffron font-bold text-sm italic underline">Email Teacher</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </section>
    </main>
  );
}
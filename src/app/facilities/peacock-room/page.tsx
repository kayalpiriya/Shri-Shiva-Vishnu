"use client";
import SubPageHero from "@/components/SubPageHero"; 
import { motion } from "framer-motion";
import { Users, MonitorPlay, UtensilsCrossed, MapPin, Mail, Phone, CalendarHeart, Sparkles } from "lucide-react";

export default function PeacockRoom() {
  const features = [
    { icon: <Users />, title: "Capacity", desc: "Accommodates up to 200 guests comfortably" },
    { icon: <MonitorPlay />, title: "AV Equipment", desc: "Modern audio-visual setup for presentations" },
    { icon: <UtensilsCrossed />, title: "Catering", desc: "Various customized catering options available" },
  ];

  return (
    <main className="bg-cream min-h-screen">
      <SubPageHero 
        title="Peacock Room" 
        subtitle="Intimate Space for Functions & Celebrations" 
      />

      <section className="py-20 px-6 max-w-[1200px] mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - IMAGE & INTRO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-[500px]">
              {/* Replace with your actual Peacock Room image */}
              <img src="/images/image15.png" alt="Peacock Room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-gold" />
                  <span className="text-gold font-bold text-xs uppercase tracking-widest">Cozy & Elegant</span>
                </div>
                <h2 className="text-3xl font-heading font-black text-cream">Perfect for Intimate Gatherings</h2>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-saffron text-maroon font-bold w-24 h-24 rounded-full flex items-center justify-center text-center text-sm shadow-xl border-4 border-cream rotate-12">
              200<br/>Guests
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT & INFO */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-4xl font-heading font-black text-maroon mb-4">
                The <span className="text-gold italic">Peacock Room</span>
              </h3>
              <p className="text-lg text-maroon/80 font-medium leading-relaxed">
                An intimate, elegantly designed space tailored for seminars, meetings, family functions, and private celebrations. Experience seamless service with our top-notch amenities.
              </p>
            </motion.div>

            {/* Features Row */}
            <div className="space-y-4">
              {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5 bg-white p-4 rounded-2xl shadow-sm border border-maroon/5 hover:border-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-maroon text-gold rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-maroon">{item.title}</h4>
                    <p className="text-sm text-maroon/70 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }}
              className="bg-maroon/5 border border-maroon/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-2 text-maroon font-black uppercase tracking-widest text-xs mb-6 pb-4 border-b border-maroon/10">
                <CalendarHeart size={16} className="text-maroon" /> Opening Times: By Appointment Only
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-maroon/50 font-bold uppercase tracking-widest mb-2">Bookings (Call)</p>
                  <ul className="space-y-2 text-sm font-bold text-maroon">
                    <li>Ramaprasad: <span className="text-saffron">0404 481 476</span></li>
                    <li>Kirupa: <span className="text-saffron">0411 389 415</span></li>
                    <li>Ranga: <span className="text-saffron">0411 32 4303</span></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-maroon/50 font-bold uppercase tracking-widest mb-1 flex items-center gap-1"><Mail size={12}/> Email</p>
                    <a href="mailto:chcManager@hsvtemple.org.au" className="text-sm font-bold text-maroon hover:text-saffron break-all">chcManager@hsvtemple.org.au</a>
                  </div>
                  <div>
                    <p className="text-xs text-maroon/50 font-bold uppercase tracking-widest mb-1 flex items-center gap-1"><MapPin size={12}/> Location</p>
                    <p className="text-sm font-bold text-maroon">52 Boundary Road,<br/>Carrum Downs, Vic 3201</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
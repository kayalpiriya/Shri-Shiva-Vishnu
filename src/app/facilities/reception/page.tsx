"use client";
import SubPageHero from "@/components/SubPageHero"; 
import { motion } from "framer-motion";
import { Users, UtensilsCrossed, Car, Mic2, MapPin, Mail, Phone, CalendarHeart, Sparkles, Speaker } from "lucide-react";

export default function ReceptionCenter() {
  return (
    <main className="bg-cream min-h-screen">
      <SubPageHero 
        title="Reception Centre" 
        subtitle="HSV Cultural & Heritage Centre" 
      />

      {/* SECTION 1: INTRODUCTION & TWO MAIN EVENT TYPES */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-6 max-w-[1500px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={16} className="text-saffron" />
            <span className="text-maroon font-bold tracking-[0.3em] text-[10px] md:text-[11px] uppercase">A Grand Venue For Every Occasion</span>
            <Sparkles size={16} className="text-saffron" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-maroon leading-tight">
            Host Your Divine Celebrations in <span className="text-gold italic">Absolute Elegance</span>
          </h2>
          <p className="mt-4 md:mt-6 text-maroon/80 font-medium text-base md:text-lg px-4">
            Perfect for Weddings, Family Functions, Conferences, Meetings, Exhibitions, Music & Dance Concerts.
          </p>
        </motion.div>

        {/* The Two Mandatory Images - Images Visibility 100% Fixed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-8 h-auto md:h-[450px] lg:h-[550px]">
          
          {/* Image 1: Marriage / Reception */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-full cursor-pointer bg-black"
          >
            {/* Image (100% Visible Original Colors) */}
            <div className="absolute inset-0 bg-[url('/images/image13.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            
            {/* NEW GRADIENT: Strictly at the bottom 50% just for text readability. No maroon tint over the whole image. */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-10">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md border border-white/40 text-cream text-[10px] font-black uppercase tracking-widest rounded-full mb-3 md:mb-4">
                  Premium Events
                </span>
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-cream mb-2 drop-shadow-lg">Marriage & Reception</h3>
                <p className="text-cream/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm lg:text-base line-clamp-2 md:line-clamp-none drop-shadow-md">
                  Celebrate your sacred union in our grand, spacious hall designed for unforgettable memories.
                </p>
              </div>
            </div>
            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-[2rem] lg:rounded-[2.5rem] transition-colors duration-500 pointer-events-none z-20" />
          </motion.div>

          {/* Image 2: Cultural Programs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-full cursor-pointer bg-black"
          >
            {/* Image (100% Visible Original Colors) */}
            <div className="absolute inset-0 bg-[url('/images/image14.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
            
            {/* NEW GRADIENT: Strictly at the bottom 50% just for text readability. */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end z-10">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md border border-white/40 text-cream text-[10px] font-black uppercase tracking-widest rounded-full mb-3 md:mb-4">
                  Arts & Heritage
                </span>
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-cream mb-2 drop-shadow-lg">Cultural Programs</h3>
                <p className="text-cream/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm lg:text-base line-clamp-2 md:line-clamp-none drop-shadow-md">
                  The perfect stage for music, dance concerts, exhibitions, and community gatherings.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-saffron/50 rounded-[2rem] lg:rounded-[2.5rem] transition-colors duration-500 pointer-events-none z-20" />
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: PREMIUM FACILITIES BENTO GRID */}
      <section className="py-16 md:py-20 bg-maroon text-cream px-4 md:px-8 lg:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1500px] mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-center mb-12 lg:mb-16"
          >
            World-Class <span className="text-gold italic">Facilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Capacity - Large Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}
              className="md:col-span-2 lg:col-span-2 bg-[#2A0808] border border-gold/20 rounded-[2rem] p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 hover:border-gold/50 transition-colors"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gold text-maroon rounded-full flex items-center justify-center shrink-0">
                <Users size={36} className="lg:w-10 lg:h-10" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gold">Massive Seating Capacity</h3>
                <p className="text-cream/80 text-base lg:text-lg">Comfortably accommodates <span className="font-bold text-cream">500 guests in Dining style</span> or up to <span className="font-bold text-cream">800 guests in Theatre style</span>.</p>
              </div>
            </motion.div>

            {/* Stage & Audio - Tall Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.1 }}
              className="md:col-span-1 lg:row-span-2 bg-[#2A0808] border border-gold/20 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-center hover:border-gold/50 transition-colors"
            >
              <Mic2 size={36} className="text-saffron mb-4 lg:mb-6 lg:w-10 lg:h-10" />
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Grand Entrance & Stage</h3>
              <p className="text-cream/80 mb-6 text-sm lg:text-base">Equipped with state-of-the-art lighting and professional audio systems for flawless performances.</p>
              <Speaker size={36} className="text-gold opacity-50 lg:w-10 lg:h-10" />
            </motion.div>

            {/* Food Menu */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.2 }}
              className="md:col-span-1 bg-[#2A0808] border border-gold/20 rounded-[2rem] p-8 hover:border-gold/50 transition-colors"
            >
              <UtensilsCrossed size={28} className="text-gold mb-4" />
              <h3 className="text-lg lg:text-xl font-bold mb-2">Flexible Vegetarian Menu</h3>
              <p className="text-cream/70 text-sm">Delicious, pure vegetarian catering options customized to your event's needs.</p>
            </motion.div>

            {/* Parking */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.3 }}
              className="md:col-span-2 lg:col-span-1 bg-[#2A0808] border border-gold/20 rounded-[2rem] p-8 hover:border-gold/50 transition-colors"
            >
              <Car size={28} className="text-saffron mb-4" />
              <h3 className="text-lg lg:text-xl font-bold mb-2">Ample Onsite Parking</h3>
              <p className="text-cream/70 text-sm">Hassle-free, spacious parking available right at the venue for all your guests.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GRAND BOOKING BANNER */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-6 max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          className="bg-gradient-to-br from-cream to-white border border-maroon/10 shadow-2xl rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* BG Element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-saffron/10 rounded-full blur-[80px]" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-maroon/5 border border-maroon/20 px-5 py-2 rounded-full mb-6">
              <CalendarHeart size={16} className="text-maroon" />
              <span className="text-maroon font-black text-[10px] md:text-xs uppercase tracking-widest">Opening Times: By Appointment Only</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-maroon">
              Ready to Book Your <span className="text-gold italic">Event?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {/* Contacts */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-maroon/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-maroon text-gold rounded-full flex items-center justify-center mb-4">
                <Phone size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h4 className="font-bold text-maroon text-base lg:text-lg mb-2">Call Managers</h4>
              <p className="text-maroon/80 font-medium text-sm lg:text-base">Kirupa: <a href="tel:0411389415" className="text-saffron hover:underline">0411 389 415</a></p>
              <p className="text-maroon/80 font-medium text-sm lg:text-base">Ranga: <a href="tel:0411324303" className="text-saffron hover:underline">0411 32 4303</a></p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-maroon/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-maroon text-gold rounded-full flex items-center justify-center mb-4">
                <Mail size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h4 className="font-bold text-maroon text-base lg:text-lg mb-2">Email Us</h4>
              <a href="mailto:chcManager@hsvtemple.org.au" className="text-saffron font-medium hover:underline break-words text-sm lg:text-base text-center w-full">
                chcManager@hsvtemple.org.au
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-maroon/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-maroon text-gold rounded-full flex items-center justify-center mb-4">
                <MapPin size={20} className="lg:w-6 lg:h-6" />
              </div>
              <h4 className="font-bold text-maroon text-base lg:text-lg mb-2">Location</h4>
              <p className="text-maroon/80 font-medium text-sm lg:text-base">52 Boundary Road,<br/>Carrum Downs, Vic 3201</p>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
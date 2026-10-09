// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, Variants } from "framer-motion";
// import { Calendar, MapPin, Clock, ArrowRight, Stars, Bell } from "lucide-react";
// import Link from "next/link";

// const events = [
//   {
//     id: 1,
//     title: "Navarathri Festival 2026",
//     date: "Oct 03 - 12, 2026",
//     time: "All Day",
//     location: "Main Temple Hall",
//     desc: "Grand celebrations for Goddess Durga, Lakshmi, and Saraswathi with daily special Alankaram and cultural programs.",
//     status: "Highlight",
//     img: "/images/image10.png"
//   },
//   {
//     id: 2,
//     title: "Skanda Shashti Utsavam",
//     date: "Nov 15, 2026",
//     time: "6:00 PM onwards",
//     location: "Lord Murugan Sannidhi",
//     desc: "Commemorating the victory of Lord Muruga. Special Abishekam and Valli Kalyanam rituals.",
//     status: "Upcoming",
//     img: "/images/image11.png"
//   },
// ];

// export default function UpcomingEvents() {
//   // CORRECTED ANIMATION VARIANT
//   const cardAnim: Variants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="Upcoming Events" subtitle="Divine Traditions" />

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        
//         {/* RESPONSIVE ALERT BANNER */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: false }}
//           className="bg-maroon p-6 md:p-10 rounded-[2.5rem] mb-12 flex flex-col lg:flex-row items-center justify-between text-white border-b-4 md:border-b-8 border-gold shadow-2xl gap-8"
//         >
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
//             <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold shadow-inner">
//               <Bell size={32} />
//             </div>
//             <div>
//               <h3 className="text-xl md:text-2xl font-heading font-black text-gold italic uppercase tracking-tighter leading-none mb-2">Stay Notified</h3>
//               <p className="text-xs md:text-sm text-white/60 font-medium">Major festival alerts and pooja timings direct to your inbox.</p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
//             <input type="email" placeholder="Enter Email" className="bg-white/5 border border-white/20 p-4 rounded-xl text-sm outline-none focus:border-gold flex-1 md:w-64 font-bold text-gold" />
//             <button className="bg-gold text-maroon px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95">Join Now</button>
//           </div>
//         </motion.div>

//         {/* EVENTS LISTING */}
//         <div className="space-y-12 md:space-y-20">
//           {events.map((event, idx) => (
//             <motion.div
//               key={event.id}
//               variants={cardAnim}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: false, amount: 0.2 }} // Re-triggers on scroll
//               className={`flex flex-col lg:flex-row bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-maroon/5 shadow-sm group hover:shadow-2xl transition-all duration-700 ${
//                 idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Image Section */}
//               <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden">
//                 <img src={event.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-60" />
//                 <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-saffron text-maroon px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl z-20">
//                   <Stars size={14} /> {event.status}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-white">
//                 <div className="flex items-center gap-2 text-saffron font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
//                   <Calendar size={16} /> {event.date}
//                 </div>
                
//                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-maroon italic mb-6 leading-tight uppercase tracking-tighter">
//                   {event.title}
//                 </h3>
                
//                 <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
//                   {event.desc}
//                 </p>

//                 {/* Info Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pb-8 border-b border-gray-100">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-maroon shrink-0"><Clock size={20} /></div>
//                     <div className="flex flex-col">
//                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Time</span>
//                       <span className="text-sm font-bold text-maroon">{event.time}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-maroon shrink-0"><MapPin size={20} /></div>
//                     <div className="flex flex-col">
//                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Venue</span>
//                       <span className="text-sm font-bold text-maroon">{event.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link href="/pooja-events/bookings" className="bg-maroon text-gold px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold hover:text-maroon transition-all shadow-xl shadow-maroon/20 active:scale-95">
//                     Book Now <ArrowRight size={18} />
//                   </Link>
//                   <button className="border-2 border-maroon/10 text-maroon px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-maroon transition-all active:scale-95">
//                     Share Event
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Stars, Bell, Sparkles } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Navarathri Festival 2026",
    date: "Oct 03 - 12, 2026",
    dayStart: 3,
    dayEnd: 12,
    time: "All Day",
    location: "Main Temple Hall",
    desc: "Grand celebrations for Goddess Durga, Lakshmi, and Saraswathi with daily special Alankaram and cultural programs.",
    status: "Highlight",
    img: "/images/image10.png"
  },
  {
    id: 2,
    title: "Skanda Shashti Utsavam",
    date: "Nov 15, 2026",
    dayStart: 15,
    dayEnd: 15,
    time: "6:00 PM onwards",
    location: "Lord Murugan Sannidhi",
    desc: "Commemorating the victory of Lord Muruga. Special Abishekam and Valli Kalyanam rituals.",
    status: "Upcoming",
    img: "/images/image11.png"
  },
];

export default function UpcomingEvents() {
  const [selectedDate, setSelectedDate] = useState<number | null>(3);

  // Mini Calendar Logic (Oct 2026)
  const daysInMonth = 31;
  const startDayOffset = 4; 
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startDayOffset }, (_, i) => i);
  const eventDays = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15];

  const cardAnim: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Upcoming Events" subtitle="Divine Traditions" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        
        {/* --- TOP SECTION: SIDE-BY-SIDE LAYOUT --- */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 mb-12 items-stretch">
          
          {/* RIGHT SIDE: ALERT BANNER */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 bg-maroon p-6 md:p-8 rounded-[2rem] flex flex-col justify-center text-white border-b-4 md:border-b-8 border-gold shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <Bell size={28} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-black text-gold italic uppercase tracking-tighter leading-none mb-1">Stay Notified</h3>
                <p className="text-xs text-white/60 font-medium tracking-wide">Get festival alerts direct to your inbox.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter Email" className="bg-white/5 border border-white/20 p-4 rounded-xl text-sm outline-none focus:border-gold flex-1 font-bold text-gold placeholder:text-white/20" />
              <button className="bg-gold text-maroon px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95">Join Now</button>
            </div>
          </motion.div>

          {/* LEFT SIDE: MINI GRID CALENDAR */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-[320px] shrink-0"
          >
            <div className="h-full bg-white rounded-[2rem] shadow-xl border border-maroon/5 overflow-hidden flex flex-col">
              <div className="bg-maroon py-3 px-6 flex justify-center items-center gap-2">
                <Sparkles size={14} className="text-gold" />
                <h4 className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">October 2026</h4>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
                    <div key={idx} className="text-[9px] font-black text-maroon/30 text-center uppercase">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {emptyCells.map(c => <div key={`empty-${c}`} />)}
                  {calendarDays.map(day => {
                    const hasEvent = eventDays.includes(day);
                    const isSelected = selectedDate === day;
                    return (
                      <button 
                        key={day} 
                        onClick={() => hasEvent && setSelectedDate(day)}
                        className={`
                          aspect-square w-7 h-7 mx-auto flex items-center justify-center rounded-full text-[10px] font-bold transition-all
                          ${isSelected ? 'bg-maroon text-gold scale-110 shadow-md' : 
                            hasEvent ? 'bg-saffron/10 text-maroon hover:bg-saffron/20 border border-saffron/20 cursor-pointer' : 
                            'text-gray-200 cursor-default'}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- EVENTS LISTING --- */}
        <div className="space-y-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              variants={cardAnim}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              className={`flex flex-col lg:flex-row bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-maroon/5 shadow-sm group hover:shadow-2xl transition-all duration-700 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden">
                <img src={event.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={event.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 bg-saffron text-maroon px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl z-20">
                  <Stars size={12} /> {event.status}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-white">
                <div className="flex items-center gap-2 text-saffron font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
                  <Calendar size={14} /> {event.date}
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-maroon italic mb-6 leading-tight uppercase tracking-tighter">
                  {event.title}
                </h3>
                
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-medium">
                  {event.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-maroon shrink-0"><Clock size={20} /></div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Time</span>
                      <span className="text-sm font-bold text-maroon">{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center text-maroon shrink-0"><MapPin size={20} /></div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Venue</span>
                      <span className="text-sm font-bold text-maroon">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pooja-events/bookings?service=n-2026" className="bg-maroon text-gold px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold hover:text-maroon transition-all shadow-xl shadow-maroon/20">
                    Book Now <ArrowRight size={18} />
                  </Link>
                  <button className="border-2 border-maroon/10 text-maroon px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-maroon transition-all">
                    Share Event
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
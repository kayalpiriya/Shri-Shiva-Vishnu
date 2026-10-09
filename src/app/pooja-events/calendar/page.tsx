
// "use client";
// import { useState } from "react";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, Variants, AnimatePresence } from "framer-motion";
// import { Calendar, Stars, MapPin, X, ArrowRight, Sparkles } from "lucide-react";
// import Link from "next/link";

// const poojaSchedule = [
//   { date: "03 OCT 2026", event: "Puratasi Sani Homam", time: "8:00 AM", type: "Special Pooja", day: 3 },
//   { date: "05 OCT 2026", event: "Permal Thirumanjanam", time: "10:30 AM", type: "Abishekam", day: 5 },
//   { date: "10 OCT 2026", event: "Ekadasi Special Pooja", time: "6:30 PM", type: "Monthly Pooja", day: 10 },
//   { date: "15 OCT 2026", event: "Pradosam", time: "4:30 PM", type: "Special Pooja", day: 15 },
//   { date: "21 OCT 2026", event: "Amavasya", time: "9:00 AM", type: "Monthly Pooja", day: 21 },
//   { date: "26 OCT 2026", event: "Chaturthi Special", time: "6:00 PM", type: "Daily Pooja", day: 26 },
// ];

// const hasEvent = (day: number) => poojaSchedule.some(pooja => pooja.day === day);

// // Animation Variants for Scroll
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
// };

// export default function PoojaCalendar() {
//   const [filter, setFilter] = useState("All");
//   const [selectedDay, setSelectedDay] = useState<number | null>(null);

//   const daysInMonth = 31;
//   const startDayOffset = 4; 
//   const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//   const emptyCells = Array.from({ length: startDayOffset }, (_, i) => i);

//   const filteredSchedule = poojaSchedule.filter(p => {
//     const matchCategory = filter === "All" || p.type === filter;
//     const matchDate = selectedDay === null || p.day === selectedDay;
//     return matchCategory && matchDate;
//   });

//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="Pooja Calendar" subtitle="Divine Schedule of Worship - 2026" />

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 -mt-10">
        
//         {/* --- COMPACT MODERN CALENDAR --- */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInUp}
//           className="max-w-3xl mx-auto mb-16"
//         >
//           <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-maroon/5 border border-gold/20 overflow-hidden relative">
//             {/* Top Bar with Month */}
//             <div className="bg-maroon p-6 md:p-8 text-center relative overflow-hidden">
//                 <div className="absolute inset-0 opacity-10 flex justify-center items-center">
//                     <Sparkles size={120} className="text-gold" />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-heading font-black text-gold tracking-widest relative z-10 uppercase">
//                     October 2026
//                 </h2>
//                 <p className="text-[10px] text-gold/60 font-black tracking-[0.3em] uppercase mt-1">Select a date to filter</p>
//             </div>

//             <div className="p-4 md:p-8">
//               {/* Days Header */}
//               <div className="grid grid-cols-7 gap-1 mb-4">
//                 {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
//                   <div key={day} className="text-[10px] md:text-xs font-black text-maroon/40 uppercase tracking-widest text-center py-2">{day}</div>
//                 ))}
//               </div>

//               {/* Compact Dates Grid */}
//               <div className="grid grid-cols-7 gap-1 md:gap-3">
//                 {emptyCells.map(cell => <div key={`empty-${cell}`} />)}
                
//                 {calendarDays.map(day => {
//                   const isEventDay = hasEvent(day);
//                   const isSelected = selectedDay === day;

//                   return (
//                     <button 
//                       key={day}
//                       onClick={() => isEventDay ? setSelectedDay(isSelected ? null : day) : null}
//                       disabled={!isEventDay}
//                       className={`
//                         relative aspect-square flex items-center justify-center rounded-xl md:rounded-2xl text-xs md:text-lg font-black transition-all duration-300
//                         ${isSelected ? 'bg-maroon text-gold shadow-lg scale-110 z-10' : 
//                           isEventDay ? 'bg-saffron/5 text-maroon hover:bg-saffron/20 border border-saffron/10' : 
//                           'text-gray-200'}
//                       `}
//                     >
//                       {day}
//                       {isEventDay && !isSelected && (
//                         <span className="absolute bottom-1 md:bottom-2 w-1 h-1 md:w-1.5 md:h-1.5 bg-saffron rounded-full animate-pulse" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* --- FILTERS --- */}
//         <motion.div 
//             variants={fadeInUp} initial="hidden" whileInView="visible"
//             className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12"
//         >
//           {["All", "Special Pooja", "Monthly Pooja", "Abishekam", "Daily Pooja"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => { setFilter(tab); setSelectedDay(null); }}
//               className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest transition-all ${
//                 filter === tab && selectedDay === null ? "bg-maroon text-gold shadow-lg" : "bg-white text-maroon border border-maroon/5 hover:bg-cream shadow-sm"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </motion.div>

//         {/* --- TICKET-STYLE EVENT CARDS (ORIGINAL DESIGN) --- */}
//         <div className="max-w-6xl mx-auto">
//           <AnimatePresence>
//             {selectedDay !== null && (
//               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-center bg-saffron/10 px-6 py-4 rounded-2xl border border-saffron/20 mb-8 overflow-hidden">
//                 <span className="text-maroon font-bold text-sm">Events on <span className="font-black text-saffron">{selectedDay} OCT 2026</span></span>
//                 <button onClick={() => setSelectedDay(null)} className="flex items-center gap-1 text-[10px] font-black uppercase text-maroon/50 hover:text-maroon"><X size={14}/> Clear</button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div 
//             variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredSchedule.length > 0 ? (
//                 filteredSchedule.map((pooja, idx) => (
//                   <motion.div
//                     key={`${pooja.day}-${idx}`} layout variants={fadeInUp} exit={{ opacity: 0, scale: 0.8 }}
//                     className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-maroon/5 flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 w-full"
//                   >
//                     {/* Ticket Top (Date & Time) - Original Design */}
//                     <div className="bg-gradient-to-br from-maroon to-[#4A0000] p-5 md:p-6 text-center relative border-b-2 border-dashed border-white/20">
//                       <div className="absolute -bottom-2.5 -left-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
//                       <div className="absolute -bottom-2.5 -right-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
                      
//                       <span className="text-gold font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-2 block">{pooja.type}</span>
//                       <h4 className="text-2xl md:text-3xl font-heading font-black text-white">{pooja.date.split(" ")[0]} <span className="text-lg md:text-xl text-white/70">{pooja.date.split(" ")[1]}</span></h4>
//                       <div className="inline-flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-white mt-3 md:mt-4 border border-white/10">
//                         <Calendar size={12} className="text-saffron"/> {pooja.time}
//                       </div>
//                     </div>

//                     {/* Ticket Bottom (Details) - Original Design */}
//                     <div className="p-5 md:p-8 flex flex-col flex-1 bg-white relative">
//                       <div className="absolute top-0 left-4 right-4 h-px bg-maroon/5" />
//                       <h3 className="text-lg md:text-2xl font-heading font-black text-maroon italic mb-3 md:mb-4 flex-1">{pooja.event}</h3>
                      
//                       <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-maroon/50 uppercase tracking-widest mb-4 md:mb-6">
//                         <MapPin size={12} className="text-saffron"/> Main Temple Hall
//                       </div>

//                       <Link 
//                         href="/pooja-events/bookings?service=n-2026" 
//                         className="w-full flex items-center justify-center gap-2 bg-cream text-maroon border border-maroon/10 py-3 md:py-4 rounded-xl font-black text-[9px] md:text-[10px] tracking-widest uppercase hover:bg-maroon hover:text-gold transition-colors group/btn"
//                       >
//                         Book Now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-16 bg-white rounded-[2rem] border border-maroon/5 border-dashed">
//                   <Stars size={40} className="text-maroon/20 mx-auto mb-3" />
//                   <h3 className="text-xl font-heading font-black text-maroon">No Poojas Found</h3>
//                   <p className="text-xs text-gray-400 mt-2 font-medium">Try selecting a different date.</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>

//       </section>
//     </main>
//   );
// }


// "use client";
// import { useState } from "react";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, Variants, AnimatePresence } from "framer-motion";
// import { Calendar, Stars, MapPin, X, ArrowRight, Sparkles, Clock } from "lucide-react";
// import Link from "next/link";

// const poojaSchedule = [
//   { date: "03 OCT 2026", event: "Puratasi Sani Homam", time: "8:00 AM", type: "Special Pooja", day: 3 },
//   { date: "05 OCT 2026", event: "Permal Thirumanjanam", time: "10:30 AM", type: "Abishekam", day: 5 },
//   { date: "10 OCT 2026", event: "Ekadasi Special Pooja", time: "6:30 PM", type: "Monthly Pooja", day: 10 },
//   { date: "15 OCT 2026", event: "Pradosam", time: "4:30 PM", type: "Special Pooja", day: 15 },
//   { date: "21 OCT 2026", event: "Amavasya", time: "9:00 AM", type: "Monthly Pooja", day: 21 },
//   { date: "26 OCT 2026", event: "Chaturthi Special", time: "6:00 PM", type: "Daily Pooja", day: 26 },
// ];

// const hasEvent = (day: number) => poojaSchedule.some(pooja => pooja.day === day);

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
// };

// export default function PoojaCalendar() {
//   const [filter, setFilter] = useState("All");
//   const [selectedDay, setSelectedDay] = useState<number | null>(null);

//   const daysInMonth = 31;
//   const startDayOffset = 4; 
//   const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//   const emptyCells = Array.from({ length: startDayOffset }, (_, i) => i);

//   const filteredSchedule = poojaSchedule.filter(p => {
//     const matchCategory = filter === "All" || p.type === filter;
//     const matchDate = selectedDay === null || p.day === selectedDay;
//     return matchCategory && matchDate;
//   });

//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="Divine Schedule" subtitle="Pooja Calendar - 2026" />

//       {/* FIXED: Removed -mt-10 and added py-20 for better gap */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
//         {/* --- ULTRA MODERN FLOATING CALENDAR --- */}
//         <motion.div 
//           initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
//           variants={fadeInUp}
//           className="max-w-4xl mx-auto mb-20 relative px-2"
//         >
//           <div className="absolute -inset-4 bg-gradient-to-tr from-maroon/5 via-gold/5 to-saffron/5 blur-3xl rounded-[4rem]" />

//           <div className="relative bg-white/70 backdrop-blur-xl rounded-[3.5rem] shadow-[0_30px_100px_rgba(128,0,0,0.05)] border border-white overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-12">
              
//               {/* Left Side: Month Badge */}
//               <div className="md:col-span-4 bg-maroon p-10 flex flex-col justify-between text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
//                    <Sparkles size={180} />
//                 </div>
//                 <div className="relative z-10">
//                   <span className="text-gold font-black tracking-[0.4em] text-[10px] uppercase block mb-2">Sanctuary Schedule</span>
//                   <h2 className="text-5xl font-heading font-black italic text-white leading-none uppercase text-left">OCT<br/> <span className="text-gold not-italic">2026</span></h2>
//                 </div>
//                 <div className="relative z-10 mt-10 md:mt-0">
//                   <div className="h-1 w-12 bg-gold/50 rounded-full mb-4" />
//                   <p className="text-[11px] text-white/60 font-medium leading-relaxed uppercase tracking-widest text-left">
//                     Tap a marked date to <br/> reveal sacred rituals
//                   </p>
//                 </div>
//               </div>

//               {/* Right Side: Interactive Date Grid */}
//               <div className="md:col-span-8 p-6 md:p-12 bg-white/30">
//                 <div className="grid grid-cols-7 mb-8">
//                   {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
//                     <div key={i} className="text-[10px] font-black text-maroon/30 text-center uppercase tracking-widest">{day}</div>
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-7 gap-y-4 gap-x-2 md:gap-4">
//                   {emptyCells.map(cell => <div key={`empty-${cell}`} />)}
//                   {calendarDays.map(day => {
//                     const isEventDay = hasEvent(day);
//                     const isSelected = selectedDay === day;

//                     return (
//                       <div key={day} className="relative flex justify-center items-center">
//                         <button 
//                           onClick={() => isEventDay ? setSelectedDay(isSelected ? null : day) : null}
//                           disabled={!isEventDay}
//                           className={`
//                             relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-sm md:text-xl font-bold transition-all duration-500
//                             ${isSelected 
//                               ? 'bg-maroon text-gold shadow-2xl scale-110 z-20' 
//                               : isEventDay 
//                                 ? 'bg-saffron/10 text-maroon hover:bg-maroon hover:text-white border border-saffron/20' 
//                                 : 'text-gray-300 pointer-events-none'
//                             }
//                           `}
//                         >
//                           <span className="relative z-10">{day}</span>
//                           {isEventDay && !isSelected && (
//                             <motion.span className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/30 animate-[spin_8s_linear_infinite]" />
//                           )}
//                           {isSelected && (
//                             <motion.span className="absolute inset-[-4px] rounded-full border-2 border-gold/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
//                           )}
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* REMOVED: "Divine" text div was here */}
//         </motion.div>

//         {/* --- FILTERS --- */}
//         <motion.div 
//             variants={fadeInUp} initial="hidden" whileInView="visible"
//             className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
//         >
//           {["All", "Special Pooja", "Monthly Pooja", "Abishekam", "Daily Pooja"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => { setFilter(tab); setSelectedDay(null); }}
//               className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest transition-all ${
//                 filter === tab && selectedDay === null ? "bg-maroon text-gold shadow-lg" : "bg-white text-maroon border border-maroon/5 hover:bg-cream shadow-sm"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </motion.div>

//         {/* --- EVENT CARDS --- */}
//         <div className="max-w-6xl mx-auto">
//           <AnimatePresence>
//             {selectedDay !== null && (
//               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-center bg-saffron/10 px-6 py-4 rounded-2xl border border-saffron/20 mb-8 overflow-hidden">
//                 <span className="text-maroon font-bold text-sm">Events on <span className="font-black text-saffron">{selectedDay} OCT 2026</span></span>
//                 <button onClick={() => setSelectedDay(null)} className="flex items-center gap-1 text-[10px] font-black uppercase text-maroon/50 hover:text-maroon"><X size={14}/> Clear</button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <motion.div 
//             variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredSchedule.length > 0 ? (
//                 filteredSchedule.map((pooja, idx) => (
//                   <motion.div
//                     key={`${pooja.day}-${idx}`} layout variants={fadeInUp} exit={{ opacity: 0, scale: 0.8 }}
//                     className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-maroon/5 flex flex-col group hover:-translate-y-2 transition-all duration-500 w-full"
//                   >
//                     <div className="bg-gradient-to-br from-maroon to-[#4A0000] p-5 md:p-6 text-center relative border-b-2 border-dashed border-white/20">
//                       <div className="absolute -bottom-2.5 -left-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
//                       <div className="absolute -bottom-2.5 -right-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
//                       <span className="text-gold font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-2 block">{pooja.type}</span>
//                       <h4 className="text-2xl md:text-3xl font-heading font-black text-white italic">{pooja.date.split(" ")[0]} <span className="text-lg md:text-xl text-white/70">{pooja.date.split(" ")[1]}</span></h4>
//                       <div className="inline-flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-white mt-3 md:mt-4 border border-white/10">
//                         <Calendar size={12} className="text-saffron"/> {pooja.time}
//                       </div>
//                     </div>

//                     <div className="p-5 md:p-8 flex flex-col flex-1 bg-white relative">
//                       <h3 className="text-lg md:text-2xl font-heading font-black text-maroon italic mb-3 md:mb-4 flex-1">{pooja.event}</h3>
//                       <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-maroon/50 uppercase tracking-widest mb-4 md:mb-6">
//                         <MapPin size={12} className="text-saffron"/> Main Temple Hall
//                       </div>
//                       <Link 
//                         href="/pooja-events/bookings?service=n-2026" 
//                         className="w-full flex items-center justify-center gap-2 bg-cream text-maroon border border-maroon/10 py-3 md:py-4 rounded-xl font-black text-[9px] md:text-[10px] tracking-widest uppercase hover:bg-maroon hover:text-gold transition-colors group/btn shadow-none"
//                       >
//                         Book Now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))
//               ) : (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-20 bg-white rounded-[2rem] border border-maroon/5 border-dashed">
//                   <Stars size={40} className="text-maroon/20 mx-auto mb-4" />
//                   <h3 className="text-xl font-heading font-black text-maroon uppercase tracking-tighter italic">No Poojas Found</h3>
//                   <p className="text-xs text-gray-400 mt-2 font-medium">Try selecting a different date or filter.</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Stars, MapPin, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const poojaSchedule = [
  { date: "03 OCT 2026", event: "Puratasi Sani Homam", time: "8:00 AM", type: "Special Pooja", day: 3 },
  { date: "05 OCT 2026", event: "Permal Thirumanjanam", time: "10:30 AM", type: "Abishekam", day: 5 },
  { date: "10 OCT 2026", event: "Ekadasi Special Pooja", time: "6:30 PM", type: "Monthly Pooja", day: 10 },
  { date: "15 OCT 2026", event: "Pradosam", time: "4:30 PM", type: "Special Pooja", day: 15 },
  { date: "21 OCT 2026", event: "Amavasya", time: "9:00 AM", type: "Monthly Pooja", day: 21 },
  { date: "26 OCT 2026", event: "Chaturthi Special", time: "6:00 PM", type: "Daily Pooja", day: 26 },
];

const hasEvent = (day: number) => poojaSchedule.some(pooja => pooja.day === day);

export default function PoojaCalendar() {
  const [filter, setFilter] = useState("All");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = 31;
  const startDayOffset = 4; 
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startDayOffset }, (_, i) => i);

  const filteredSchedule = poojaSchedule.filter(p => {
    const matchCategory = filter === "All" || p.type === filter;
    const matchDate = selectedDay === null || p.day === selectedDay;
    return matchCategory && matchDate;
  });

  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden">
      <SubPageHero title="Divine Schedule" subtitle="Pooja Calendar - 2026" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* --- ULTRA MODERN FLOATING CALENDAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 relative px-2"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-maroon/5 via-gold/5 to-saffron/5 blur-3xl rounded-[4rem]" />

          <div className="relative bg-white/70 backdrop-blur-xl rounded-[3.5rem] shadow-[0_30px_100px_rgba(128,0,0,0.05)] border border-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Side: Month Badge */}
              <div className="md:col-span-4 bg-maroon p-10 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                   <Sparkles size={180} />
                </div>
                <div className="relative z-10">
                  <span className="text-gold font-black tracking-[0.4em] text-[10px] uppercase block mb-2">Sanctuary Schedule</span>
                  <h2 className="text-5xl font-heading font-black italic text-white leading-none uppercase text-left">OCT<br/> <span className="text-gold not-italic">2026</span></h2>
                </div>
                <div className="relative z-10 mt-10 md:mt-0">
                  <div className="h-1 w-12 bg-gold/50 rounded-full mb-4" />
                  <p className="text-[11px] text-white/60 font-medium leading-relaxed uppercase tracking-widest text-left">
                    Tap a marked date to <br/> reveal sacred rituals
                  </p>
                </div>
              </div>

              {/* Right Side: Interactive Date Grid */}
              <div className="md:col-span-8 p-6 md:p-12 bg-white/30">
                <div className="grid grid-cols-7 mb-8">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="text-[10px] font-black text-maroon/30 text-center uppercase tracking-widest">{day}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-y-4 gap-x-2 md:gap-4">
                  {emptyCells.map(cell => <div key={`empty-${cell}`} />)}
                  {calendarDays.map(day => {
                    const isEventDay = hasEvent(day);
                    const isSelected = selectedDay === day;

                    return (
                      <div key={day} className="relative flex justify-center items-center">
                        <button 
                          onClick={() => {
                            if (isEventDay) {
                              setSelectedDay(isSelected ? null : day);
                              setFilter("All");
                            }
                          }}
                          disabled={!isEventDay}
                          className={`
                            relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full text-sm md:text-xl font-bold transition-all duration-500
                            ${isSelected 
                              ? 'bg-maroon text-gold shadow-2xl scale-110 z-20' 
                              : isEventDay 
                                ? 'bg-saffron/10 text-maroon hover:bg-maroon hover:text-white border border-saffron/20' 
                                : 'text-gray-300 pointer-events-none'
                            }
                          `}
                        >
                          <span className="relative z-10">{day}</span>
                          {isEventDay && !isSelected && (
                            <motion.span className="absolute inset-0 rounded-full border-2 border-dashed border-saffron/30 animate-[spin_8s_linear_infinite]" />
                          )}
                          {isSelected && (
                            <motion.span className="absolute inset-[-4px] rounded-full border-2 border-gold/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- FILTERS --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {["All", "Special Pooja", "Monthly Pooja", "Abishekam", "Daily Pooja"].map((tab) => (
            <button
              key={tab}
              onClick={() => { setFilter(tab); setSelectedDay(null); }}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest transition-all ${
                filter === tab && selectedDay === null ? "bg-maroon text-gold shadow-lg" : "bg-white text-maroon border border-maroon/5 hover:bg-cream shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* --- EVENT CARDS --- */}
        <div className="max-w-6xl mx-auto">
          {/* Active Filter Banner */}
          <AnimatePresence>
            {selectedDay !== null && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex justify-between items-center bg-saffron/10 px-6 py-4 rounded-2xl border border-saffron/20 mb-8 overflow-hidden">
                <span className="text-maroon font-bold text-sm">Events on <span className="font-black text-saffron">{selectedDay} OCT 2026</span></span>
                <button onClick={() => setSelectedDay(null)} className="flex items-center gap-1 text-[10px] font-black uppercase text-maroon/50 hover:text-maroon"><X size={14}/> Clear</button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards Grid (FIXED ANIMATION LOGIC HERE) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSchedule.length > 0 ? (
                filteredSchedule.map((pooja) => (
                  <motion.div
                    key={pooja.event} // Unique key ensures proper render
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-maroon/5 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <div className="bg-gradient-to-br from-maroon to-[#4A0000] p-5 md:p-6 text-center relative border-b-2 border-dashed border-white/20">
                      <div className="absolute -bottom-2.5 -left-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
                      <div className="absolute -bottom-2.5 -right-3 w-5 h-5 md:w-6 md:h-6 bg-cream rounded-full" />
                      <span className="text-gold font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-2 block">{pooja.type}</span>
                      <h4 className="text-2xl md:text-3xl font-heading font-black text-white italic">{pooja.date.split(" ")[0]} <span className="text-lg md:text-xl text-white/70">{pooja.date.split(" ")[1]}</span></h4>
                      <div className="inline-flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold text-white mt-3 md:mt-4 border border-white/10">
                        <Calendar size={12} className="text-saffron"/> {pooja.time}
                      </div>
                    </div>

                    <div className="p-5 md:p-8 flex flex-col flex-1 bg-white relative">
                      <h3 className="text-lg md:text-2xl font-heading font-black text-maroon italic mb-3 md:mb-4 flex-1">{pooja.event}</h3>
                      <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-maroon/50 uppercase tracking-widest mb-4 md:mb-6">
                        <MapPin size={12} className="text-saffron"/> Main Temple Hall
                      </div>
                      <Link 
                        href="/pooja-events/bookings?service=n-2026" 
                        className="w-full flex items-center justify-center gap-2 bg-cream text-maroon border border-maroon/10 py-3 md:py-4 rounded-xl font-black text-[9px] md:text-[10px] tracking-widest uppercase hover:bg-maroon hover:text-gold transition-colors group/btn shadow-none"
                      >
                        Book Now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  key="empty-state"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="col-span-full text-center py-20 bg-white rounded-[2rem] border border-maroon/5 border-dashed"
                >
                  <Stars size={40} className="text-maroon/20 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-black text-maroon uppercase tracking-tighter italic">No Poojas Found</h3>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Try selecting a different date or filter.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
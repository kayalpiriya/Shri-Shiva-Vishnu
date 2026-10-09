// "use client";
// import { useState } from "react";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, AnimatePresence } from "framer-motion";
// import { Clock, Info, Calendar, Phone, Mail, CheckCircle, Sparkles } from "lucide-react";

// // --- DATA CATEGORIZATION ---
// const serviceCategories = [
//   { id: "general", name: "General Poojas" },
//   { id: "abishekam", name: "Abishekams" },
//   { id: "homam", name: "Homams & Special" },
//   { id: "sponsorship", name: "Sponsorships" },
// ];

// const servicesData = [
//   { cat: "general", name: "Archana", price: "$5 / $15 / $25", time: "Any day/time", booking: "No Booking", dur: "5 - 15 min", desc: "Nuts, Sultanas or Fruits offering to One deity." },
//   { cat: "general", name: "Car Pooja", price: "$61", time: "Any day/time", booking: "No Booking", dur: "15 min", desc: "Vehicle blessing with plate and 4 lemons." },
//   { cat: "general", name: "Navagraha Archana", price: "$51", time: "Any day/time", booking: "No Booking", dur: "20 min", desc: "For all 9 Grahas with fruits plate." },
  
//   { cat: "abishekam", name: "Milk Abishekam", price: "$101", time: "7:30 AM", booking: "Yes (1 day prior)", dur: "30 min", desc: "One deity milk only, includes Sangalpam." },
//   { cat: "abishekam", name: "Navakalasa Abishekam", price: "$301", time: "4:30 PM", booking: "Yes (1 day prior)", dur: "90 min", desc: "9 Kalasam, Homam, Panchamrutham & Prasadam." },
//   { cat: "abishekam", name: "Vishnu Kalasa Abishekam", price: "$201", time: "7:30 AM / 9:15 AM", booking: "Yes", dur: "60 min", desc: "Single Kalasam for Vishnu, Ramar or Krishnar." },

//   { cat: "homam", name: "Ganapathi Homam", price: "$351", time: "9:15 AM / 4:30 PM", booking: "Yes", dur: "2 hr", desc: "Navakalasam, Abishekam, Homam and 2 Prasadams." },
//   { cat: "homam", name: "Rudra Homam", price: "$301", time: "9:15 AM / 4:30 PM", booking: "Yes", dur: "2 hr", desc: "Sacred fire ritual for Lord Shiva." },
  
//   { cat: "sponsorship", name: "Pradosham Sponsorship", price: "$201", time: "5:00 PM", booking: "Yes", dur: "1 hr 15 min", desc: "Nandi, Sivan & Amman Abishekam, Pooja & Uthsavam." },
//   { cat: "sponsorship", name: "Ekadasi Sponsorship", price: "$251", time: "7:45 AM / 7:45 PM", booking: "Yes", dur: "45 min", desc: "Abishekam for Vishnu & Vasantha Mandapa Pooja." },
// ];

// export default function OtherServices() {
//   const [activeTab, setActiveTab] = useState("general");

//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Temple Services" subtitle="Sacred Poojas & Rituals" />

//       <section className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* IMPORTANT NOTES SECTION */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//           className="bg-white p-8 rounded-[3rem] border border-maroon/5 mb-16 shadow-sm flex flex-col md:flex-row gap-8 items-center"
//         >
//           <div className="w-20 h-20 bg-maroon/5 rounded-full flex items-center justify-center text-maroon shrink-0">
//             <Info size={32} />
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-heading font-bold text-maroon italic">Important Guidelines</h3>
//             <p className="text-xs text-gray-500 leading-relaxed font-medium">
//               All poojas are performed in Sanskrit by our priests. Required items are provided by the temple, but devotees may bring fruits, flowers, and garlands. Some rituals require prior booking.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-2">
//                <a href="mailto:manager@hsvtemple.org.au" className="flex items-center gap-2 text-[10px] font-black text-saffron uppercase"><Mail size={14}/> manager@hsvtemple.org.au</a>
//                <span className="flex items-center gap-2 text-[10px] font-black text-saffron uppercase"><Phone size={14}/> Contact Manager for Bookings</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* MODERN CATEGORY TABS */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {serviceCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveTab(cat.id)}
//               className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
//                 activeTab === cat.id ? "bg-maroon text-gold shadow-2xl" : "bg-white text-maroon border border-maroon/5 hover:bg-cream"
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence mode="wait">
//             {servicesData.filter(s => s.cat === activeTab).map((service, idx) => (
//               <motion.div
//                 key={service.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ delay: idx * 0.05 }}
//                 className="bg-white p-8 rounded-[2.5rem] border border-maroon/5 flex flex-col group hover:border-saffron transition-all duration-500"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-gold transition-colors">
//                     <Sparkles size={20} />
//                   </div>
//                   <span className="text-2xl font-black text-maroon tracking-tighter">{service.price}</span>
//                 </div>

//                 <h3 className="text-xl font-heading font-black text-maroon uppercase italic tracking-tighter mb-2">{service.name}</h3>
//                 <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-2 italic">{service.desc}</p>

//                 <div className="mt-auto space-y-3 pt-6 border-t border-gray-50">
//                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
//                     <span className="text-gray-400">Suitable Time</span>
//                     <span className="text-maroon">{service.time}</span>
//                   </div>
//                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
//                     <span className="text-gray-400">Duration</span>
//                     <span className="text-maroon flex items-center gap-1"><Clock size={12}/> {service.dur}</span>
//                   </div>
//                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
//                     <span className="text-gray-400">Booking</span>
//                     <span className={`flex items-center gap-1 ${service.booking.includes("Yes") ? "text-red-500" : "text-green-600"}`}>
//                       {service.booking}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* CALL TO ACTION */}
//         <div className="mt-20 text-center bg-[#1A0F0F] p-12 rounded-[3rem] text-white">
//           <h3 className="text-3xl font-heading font-bold text-gold italic mb-4 text-center">Ready to Book a Service?</h3>
//           <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto">Please call the Temple Manager during dharsan hours or send an email for all specialized bookings and homams.</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//              <button className="bg-maroon border border-gold/30 text-gold px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-maroon transition-all">Call Manager</button>
//              <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-maroon transition-all">Send Email</button>
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }


"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
// Added ArrowRight to imports
import { Clock, Info, Calendar, Phone, Mail, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- DATA CATEGORIZATION ---
const serviceCategories = [
  { id: "general", name: "General Poojas" },
  { id: "abishekam", name: "Abishekams" },
  { id: "homam", name: "Homams & Special" },
  { id: "sponsorship", name: "Sponsorships" },
];

const servicesData = [
  { cat: "general", name: "Archana", price: "$5 / $15 / $25", time: "Any day/time", booking: "No Booking", dur: "5 - 15 min", desc: "Nuts, Sultanas or Fruits offering to One deity." },
  { cat: "general", name: "Car Pooja", price: "$61", time: "Any day/time", booking: "No Booking", dur: "15 min", desc: "Vehicle blessing with plate and 4 lemons." },
  { cat: "general", name: "Navagraha Archana", price: "$51", time: "Any day/time", booking: "No Booking", dur: "20 min", desc: "For all 9 Grahas with fruits plate." },
  
  { cat: "abishekam", name: "Milk Abishekam", price: "$101", time: "7:30 AM", booking: "Yes (1 day prior)", dur: "30 min", desc: "One deity milk only, includes Sangalpam." },
  { cat: "abishekam", name: "Navakalasa Abishekam", price: "$301", time: "4:30 PM", booking: "Yes (1 day prior)", dur: "90 min", desc: "9 Kalasam, Homam, Panchamrutham & Prasadam." },
  { cat: "abishekam", name: "Vishnu Kalasa Abishekam", price: "$201", time: "7:30 AM / 9:15 AM", booking: "Yes", dur: "60 min", desc: "Single Kalasam for Vishnu, Ramar or Krishnar." },

  { cat: "homam", name: "Ganapathi Homam", price: "$351", time: "9:15 AM / 4:30 PM", booking: "Yes", dur: "2 hr", desc: "Navakalasam, Abishekam, Homam and 2 Prasadams." },
  { cat: "homam", name: "Rudra Homam", price: "$301", time: "9:15 AM / 4:30 PM", booking: "Yes", dur: "2 hr", desc: "Sacred fire ritual for Lord Shiva." },
  
  { cat: "sponsorship", name: "Pradosham Sponsorship", price: "$201", time: "5:00 PM", booking: "Yes", dur: "1 hr 15 min", desc: "Nandi, Sivan & Amman Abishekam, Pooja & Uthsavam." },
  { cat: "sponsorship", name: "Ekadasi Sponsorship", price: "$251", time: "7:45 AM / 7:45 PM", booking: "Yes", dur: "45 min", desc: "Abishekam for Vishnu & Vasantha Mandapa Pooja." },
];

export default function OtherServices() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Temple Services" subtitle="Sacred Poojas & Rituals" />

      <section className="max-w-7xl mx-auto px-6 py-12">
        
        {/* IMPORTANT NOTES SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-[3rem] border border-maroon/5 mb-16 shadow-sm flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-20 h-20 bg-maroon/5 rounded-full flex items-center justify-center text-maroon shrink-0">
            <Info size={32} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-heading font-bold text-maroon italic">Important Guidelines</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              All poojas are performed in Sanskrit by our priests. Required items are provided by the temple, but devotees may bring fruits, flowers, and garlands. Some rituals require prior booking.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
               <a href="mailto:manager@hsvtemple.org.au" className="flex items-center gap-2 text-[10px] font-black text-saffron uppercase"><Mail size={14}/> manager@hsvtemple.org.au</a>
               <span className="flex items-center gap-2 text-[10px] font-black text-saffron uppercase"><Phone size={14}/> Contact Manager for Bookings</span>
            </div>
          </div>
        </motion.div>

        {/* MODERN CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat.id ? "bg-maroon text-gold shadow-2xl scale-105" : "bg-white text-maroon border border-maroon/5 hover:bg-cream shadow-sm"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {servicesData.filter(s => s.cat === activeTab).map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-[2.5rem] border border-maroon/5 flex flex-col group hover:border-gold/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-gold transition-colors">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-2xl font-black text-maroon tracking-tighter">{service.price}</span>
                </div>

                <h3 className="text-xl font-heading font-black text-maroon uppercase italic tracking-tighter mb-2">{service.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-2 italic">{service.desc}</p>

                <div className="mt-auto space-y-3 pt-6 border-t border-gray-50">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-gray-400">Suitable Time</span>
                    <span className="text-maroon">{service.time}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-maroon flex items-center gap-1"><Clock size={12}/> {service.dur}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-gray-400">Booking Status</span>
                    <span className={`flex items-center gap-1 ${service.booking.includes("Yes") ? "text-saffron" : "text-green-600"}`}>
                      {service.booking}
                    </span>
                  </div>
                </div>

                {/* CONDITIONAL BOOKING BUTTON */}
                {service.booking.includes("Yes") && (
                  <Link 
                    href="/pooja-events/bookings?service=n-2026"
                    className="mt-6 w-full py-4 rounded-2xl bg-maroon text-gold text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold hover:text-maroon transition-all shadow-lg active:scale-95"
                  >
                    Book This Service <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 text-center bg-[#1A0F0F] p-8 md:p-16 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
          <h3 className="text-3xl font-heading font-bold text-gold italic mb-4 text-center">Ready to Book a Service?</h3>
          <p className="text-white/60 text-sm mb-10 max-w-xl mx-auto">Please call the Temple Manager during dharsan hours or send an email for all specialized bookings and homams.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:+6100000000" className="bg-maroon border border-gold/30 text-gold px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-maroon transition-all shadow-xl flex items-center justify-center gap-2">
               <Phone size={16} /> Call Manager
             </a>
             <a href="mailto:manager@hsvtemple.org.au" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-maroon transition-all flex items-center justify-center gap-2">
               <Mail size={16} /> Send Email
             </a>
          </div>
        </div>

      </section>
    </main>
  );
}
// "use client";
// import { useState } from "react";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, Lock, Stars, CheckCircle2, ArrowRight, ArrowLeft, User, Users, CreditCard, ChevronDown, AlertCircle } from "lucide-react";

// // --- CUSTOM COMPONENTS ---

// // 1. Custom Dropdown (Native badhila modern design)
// const CustomSelect = ({ label, options, value, onChange, error }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="relative space-y-2 w-full">
//       <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">{label}</label>
//       <button 
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full p-4 rounded-2xl bg-cream/20 border flex justify-between items-center text-sm font-bold transition-all ${error ? 'border-red-500' : 'border-gray-100 focus:border-maroon'}`}
//       >
//         <span className={value ? "text-maroon" : "text-gray-400"}>{value || `Select ${label}`}</span>
//         <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
//             className="absolute z-50 w-full mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 max-h-48 overflow-y-auto no-scrollbar p-2"
//           >
//             {options.map((opt: string) => (
//               <div 
//                 key={opt} 
//                 onClick={() => { onChange(opt); setIsOpen(false); }}
//                 className="p-3 hover:bg-maroon hover:text-white rounded-xl cursor-pointer text-xs font-bold transition-colors"
//               >
//                 {opt}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {error && <p className="text-[10px] text-red-500 font-bold ml-2 flex items-center gap-1"><AlertCircle size={10}/> {error}</p>}
//     </div>
//   );
// };

// // 2. Custom Input with Validation
// const CustomInput = ({ label, placeholder, value, onChange, error, type = "text" }: any) => (
//   <div className="space-y-2 w-full">
//     <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">{label}</label>
//     <input 
//       type={type} placeholder={placeholder} value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className={`w-full p-4 rounded-2xl bg-cream/20 border text-sm font-bold focus:outline-none transition-all ${error ? 'border-red-500' : 'border-gray-100 focus:border-maroon'}`}
//     />
//     {error && <p className="text-[10px] text-red-500 font-bold ml-2 flex items-center gap-1"><AlertCircle size={10}/> {error}</p>}
//   </div>
// );

// // --- MAIN COMPONENT ---

// export default function PoojaBookings() {
//   const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
//   const [formStep, setFormStep] = useState(1);
//   const [formData, setFormData] = useState({
//     title: "", name: "", email: "", mobile: "", gotra: "", star: "", consent: false
//   });
//   const [errors, setErrors] = useState<any>({});

//   const validateStep1 = () => {
//     let newErrors: any = {};
//     if (!formData.title) newErrors.title = "Required";
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Invalid email";
//     if (!formData.mobile) newErrors.mobile = "Mobile required";
//     if (!formData.star) newErrors.star = "Select a star";
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const poojaEvents = [
//     { id: "v-2026", title: "SHRI VISHNU PAVITHROTSAVAM", date: "Aug 24-26, 2026", status: "Closed", img: "/images/image9.png" },
//     { id: "n-2026", title: "NAVARATHRI FESTIVAL 2026", date: "Oct 03-12, 2026", status: "Open", img: "/images/image10.png" }
//   ];

//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Sacred Services" subtitle="Online Event Bookings" />

//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <AnimatePresence mode="wait">
          
//           {!selectedEvent ? (
//             <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {poojaEvents.map((event) => (
//                 <motion.div 
//                   key={event.id} whileHover={{ y: -10 }}
//                   className="bg-white rounded-[3.5rem] overflow-hidden border border-maroon/5 flex flex-col relative group"
//                 >
//                   <div className="h-80 relative overflow-hidden">
//                     <img src={event.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
//                     <div className={`absolute top-8 right-8 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${event.status === "Open" ? "bg-saffron text-maroon" : "bg-red-500 text-white"}`}>
//                       {event.status}
//                     </div>
//                   </div>
//                   <div className="p-10 -mt-10 bg-white rounded-[3.5rem] relative z-10 flex-1">
//                     <h3 className="text-2xl font-heading font-black text-maroon italic mb-4">{event.title}</h3>
//                     <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-8"><Calendar size={14}/> {event.date}</div>
//                     {event.status === "Open" ? (
//                       <button onClick={() => setSelectedEvent(event)} className="w-full bg-maroon text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-saffron transition-all">Book Now</button>
//                     ) : (
//                       <div className="w-full bg-gray-100 text-gray-400 py-5 rounded-2xl text-center font-black text-xs uppercase cursor-not-allowed italic">Bookings Closed</div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div key="form" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] shadow-2xl border border-maroon/5 overflow-hidden">
//               <div className="bg-[#2D0A0A] p-8 flex justify-between items-center">
//                 <button onClick={() => setSelectedEvent(null)} className="text-gold font-bold text-xs flex items-center gap-2"><ArrowLeft size={16}/> BACK</button>
//                 <h4 className="text-white font-heading font-bold italic text-xl uppercase text-right">{selectedEvent.title}</h4>
//               </div>

//               <div className="p-8 md:p-12">
//                 <AnimatePresence mode="wait">
//                   {formStep === 1 ? (
//                     <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-8">
//                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                           <CustomSelect label="Title" options={["Mr", "Mrs", "Ms"]} value={formData.title} onChange={(v: any) => setFormData({...formData, title: v})} error={errors.title} />
//                           <CustomInput label="Full Name" placeholder="Your Name" value={formData.name} onChange={(v: any) => setFormData({...formData, name: v})} error={errors.name} />
//                           <CustomInput label="Email Address" type="email" placeholder="example@mail.com" value={formData.email} onChange={(v: any) => setFormData({...formData, email: v})} error={errors.email} />
//                           <CustomInput label="Mobile Number" placeholder="+61 XXX XXX XXX" value={formData.mobile} onChange={(v: any) => setFormData({...formData, mobile: v})} error={errors.mobile} />
//                           <CustomInput label="Gotra" placeholder="Optional" value={formData.gotra} onChange={(v: any) => setFormData({...formData, gotra: v})} />
//                           <CustomSelect label="Birth Star" options={["Aswini", "Bharani", "Krithika", "Rohini"]} value={formData.star} onChange={(v: any) => setFormData({...formData, star: v})} error={errors.star} />
//                        </div>
                       
//                        <div className="bg-cream/10 p-8 rounded-3xl border border-dashed border-maroon/10">
//                           <h4 className="text-maroon font-black text-xs uppercase mb-6 flex items-center gap-2"><Users size={16}/> Family Members (Optional)</h4>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {[1, 2, 3, 4, 5].map(i => (
//                               <div key={i} className="bg-white p-4 rounded-xl border border-gray-100"><input type="text" placeholder={`Member ${i} Name`} className="w-full text-xs font-bold bg-transparent outline-none border-b border-gray-100" /></div>
//                             ))}
//                           </div>
//                        </div>

//                        <button onClick={() => validateStep1() && setFormStep(2)} className="w-full bg-maroon text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl">Continue to Payment</button>
//                     </motion.div>
//                   ) : (
//                     <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="max-w-md mx-auto space-y-8">
//                        <div className="bg-[#1A0F0F] p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden">
//                           <CreditCard className="absolute top-0 right-0 p-8 opacity-10" size={150} />
//                           <h3 className="text-xl font-heading text-gold italic">Secure Payment</h3>
//                           <div className="space-y-4 relative z-10">
//                              <input type="text" placeholder="Card Number" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl font-mono text-sm focus:border-gold outline-none" />
//                              <div className="grid grid-cols-2 gap-4">
//                                 <input type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" />
//                                 <input type="text" placeholder="CVC" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" />
//                              </div>
//                           </div>
//                        </div>
//                        <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 accent-maroon" /> <span className="text-[10px] text-gray-400 font-bold uppercase">I accept the terms & conditions</span></label>
//                        <div className="flex gap-4">
//                           <button onClick={() => setFormStep(1)} className="w-1/3 border-2 border-maroon text-maroon py-5 rounded-2xl font-black text-xs uppercase">BACK</button>
//                           <button className="w-2/3 bg-saffron text-maroon py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl">Complete Booking</button>
//                        </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>
//     </main>
//   );
// }


// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation"; 
// import SubPageHero from "@/components/SubPageHero";
// import BookingForm from "@/components/BookingForm"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar } from "lucide-react";

// const poojaEvents = [
//   { id: "v-2026", title: "SHRI VISHNU PAVITHROTSAVAM", date: "Aug 24-26, 2026", status: "Closed", img: "/images/image9.png" },
//   { id: "n-2026", title: "NAVARATHRI FESTIVAL 2026", date: "Oct 03-12, 2026", status: "Open", img: "/images/image10.png" }
// ];

// function BookingContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
  
//   const serviceId = searchParams.get("service");
//   const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

//   useEffect(() => {
//     if (serviceId) {
//       const found = poojaEvents.find(e => e.id === serviceId);
//       if (found) {
//         setSelectedEvent(found);
//       }
//     } else {
//       setSelectedEvent(null);
//     }
//   }, [serviceId]);

//   // BOOK NOW: Inga router.push panrathu naala history-la oru item add aagum
//   const handleBookNow = (event: any) => {
//     router.push(`/pooja-events/bookings?service=${event.id}`);
//   };

//   // BACK: Inga thaan logic change! router.back() browser history-ah follow pannum
//   const handleBack = () => {
//     router.back(); 
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16">
//       <AnimatePresence mode="wait">
//         {!selectedEvent ? (
//           <motion.div 
//             key="list" 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10"
//           >
//             {poojaEvents.map((event) => (
//               <div key={event.id} className="bg-white rounded-[3.5rem] overflow-hidden border border-maroon/5 shadow-lg flex flex-col group">
//                 <div className="h-80 relative overflow-hidden">
//                   <img src={event.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
//                   <div className={`absolute top-8 right-8 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${event.status === "Open" ? "bg-saffron text-maroon" : "bg-red-500 text-white"}`}>
//                     {event.status}
//                   </div>
//                 </div>
                
//                 <div className="p-10 -mt-10 bg-white rounded-[3.5rem] relative z-10 flex-1">
//                   <h3 className="text-2xl font-heading font-black text-maroon italic mb-4">{event.title}</h3>
//                   <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-8"><Calendar size={14}/> {event.date}</div>
                  
//                   {event.status === "Open" ? (
//                     <button 
//                       onClick={() => handleBookNow(event)}
//                       className="w-full bg-maroon text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-saffron hover:text-maroon transition-all shadow-xl"
//                     >
//                       Book Now
//                     </button>
//                   ) : (
//                     <div className="w-full bg-gray-100 text-gray-400 py-5 rounded-2xl text-center font-black text-xs uppercase italic">Bookings Closed</div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         ) : (
//           <BookingForm 
//             selectedItem={selectedEvent} 
//             onBack={handleBack} // router.back() will be triggered
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default function PoojaBookings() {
//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Sacred Services" subtitle="Online Event Bookings" />
      
//       <Suspense fallback={<div className="text-center py-20 font-bold text-maroon uppercase tracking-widest text-xs">Accessing Divine Portal...</div>}>
//         <BookingContent />
//       </Suspense>
//     </main>
//   );
// }


// "use client";
// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation"; 
// import SubPageHero from "@/components/SubPageHero";
// import BookingForm from "@/components/BookingForm"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, Stars, Lock } from "lucide-react";

// const poojaEvents = [
//   { id: "v-2026", title: "SHRI VISHNU PAVITHROTSAVAM", date: "Aug 24-26, 2026", status: "Closed", img: "/images/image9.png" },
//   { id: "n-2026", title: "NAVARATHRI FESTIVAL 2026", date: "Oct 03-12, 2026", status: "Open", img: "/images/image10.png" }
// ];

// function BookingContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
  
//   const serviceId = searchParams.get("service");
//   const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

//   useEffect(() => {
//     if (serviceId) {
//       // 1. Check if ID exists in our local list
//       const found = poojaEvents.find(e => e.id === serviceId);
      
//       if (found) {
//         setSelectedEvent(found);
//       } else {
//         // 2. LOGIC FIX: Calendar-la irundhu vera ID vanthaalum Form-a open pannu
//         // Intha fallback title-a URL-la irunthe set panniduvom
//         setSelectedEvent({ 
//           id: serviceId, 
//           title: serviceId.replace(/-/g, ' ').toUpperCase(), // ID-a title-ah mathurathu
//           status: "Open" 
//         });
//       }
//     } else {
//       setSelectedEvent(null);
//     }
//   }, [serviceId]);

//   const handleBookNow = (id: string) => {
//     router.push(`/pooja-events/bookings?service=${id}`);
//   };

//   const handleBack = () => {
//     // List-ku thirumba poga URL-a clear panrom
//     router.push('/pooja-events/bookings');
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16">
//       <AnimatePresence mode="wait">
//         {!selectedEvent ? (
//           <motion.div 
//             key="list" 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10"
//           >
//             {poojaEvents.map((event) => (
//               <div key={event.id} className="bg-white rounded-[3.5rem] overflow-hidden border border-maroon/5 shadow-lg flex flex-col group h-full">
//                 <div className="h-80 relative overflow-hidden">
//                   <img src={event.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={event.title} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
//                   <div className={`absolute top-8 right-8 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${event.status === "Open" ? "bg-saffron text-maroon" : "bg-red-500 text-white"}`}>
//                     {event.status === "Open" ? <Stars size={12}/> : <Lock size={12}/>} {event.status}
//                   </div>
//                 </div>
                
//                 <div className="p-10 -mt-10 bg-white rounded-[3.5rem] relative z-10 flex-1 flex flex-col">
//                   <h3 className="text-2xl font-heading font-black text-maroon italic mb-4 uppercase tracking-tighter leading-tight">{event.title}</h3>
//                   <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-8"><Calendar size={14}/> {event.date}</div>
                  
//                   <div className="mt-auto">
//                     {event.status === "Open" ? (
//                       <button 
//                         onClick={() => handleBookNow(event.id)}
//                         className="w-full bg-maroon text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-saffron hover:text-maroon transition-all shadow-xl active:scale-95"
//                       >
//                         Book Now
//                       </button>
//                     ) : (
//                       <div className="w-full bg-gray-100 text-gray-400 py-5 rounded-2xl text-center font-black text-[10px] uppercase tracking-widest border border-gray-100 cursor-not-allowed">Bookings Closed</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div key="form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
//             <BookingForm 
//               selectedItem={selectedEvent} 
//               onBack={handleBack} 
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default function PoojaBookings() {
//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Sacred Services" subtitle="Online Event Bookings" />
      
//       <Suspense fallback={<div className="text-center py-20 font-black text-maroon uppercase text-xs tracking-widest animate-pulse">Loading Divine Portal...</div>}>
//         <BookingContent />
//       </Suspense>
//     </main>
//   );
// }



"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import SubPageHero from "@/components/SubPageHero";
import BookingForm from "@/components/BookingForm"; 
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Stars, Lock } from "lucide-react";

const poojaEvents = [
  { id: "v-2026", title: "SHRI VISHNU PAVITHROTSAVAM", date: "Aug 24-26, 2026", status: "Closed", img: "/images/image9.png" },
  { id: "n-2026", title: "NAVARATHRI FESTIVAL 2026", date: "Oct 03-12, 2026", status: "Open", img: "/images/image10.png" }
];

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const serviceId = searchParams.get("service");
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    if (serviceId) {
      const found = poojaEvents.find(e => e.id === serviceId);
      if (found) {
        setSelectedEvent(found);
      } else {
        // Calendar-la irunthu vara dynamic ID-kkum form open aagum
        setSelectedEvent({ 
          id: serviceId, 
          title: serviceId.replace(/-/g, ' ').toUpperCase(), 
          status: "Open" 
        });
      }
    } else {
      setSelectedEvent(null);
    }
  }, [serviceId]);

  const handleBookNow = (id: string) => {
    router.push(`/pooja-events/bookings?service=${id}`);
  };

  // --- THE FIX IS HERE ---
  const handleBack = () => {
    // router.push use pannaama router.back() use pannunaa, 
    // neenga entha page-la irunthu vantheengalo anthe page-kkae sariyaa kootitu pogum.
    router.back(); 
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <AnimatePresence mode="wait">
        {!selectedEvent ? (
          <motion.div 
            key="list" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {poojaEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-[3.5rem] overflow-hidden border border-maroon/5 shadow-lg flex flex-col group h-full">
                <div className="h-80 relative overflow-hidden">
                  <img src={event.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={event.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
                  <div className={`absolute top-8 right-8 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${event.status === "Open" ? "bg-saffron text-maroon" : "bg-red-500 text-white"}`}>
                    {event.status === "Open" ? <Stars size={12}/> : <Lock size={12}/>} {event.status}
                  </div>
                </div>
                
                <div className="p-10 -mt-10 bg-white rounded-[3.5rem] relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-black text-maroon italic mb-4 uppercase tracking-tighter leading-tight">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-8"><Calendar size={14}/> {event.date}</div>
                  <div className="mt-auto">
                    {event.status === "Open" ? (
                      <button 
                        onClick={() => handleBookNow(event.id)}
                        className="w-full bg-maroon text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-saffron hover:text-maroon transition-all shadow-xl active:scale-95"
                      >
                        Book Now
                      </button>
                    ) : (
                      <div className="w-full bg-gray-100 text-gray-400 py-5 rounded-2xl text-center font-black text-[10px] uppercase tracking-widest border border-gray-100 cursor-not-allowed">Bookings Closed</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <BookingForm 
              selectedItem={selectedEvent} 
              onBack={handleBack} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function PoojaBookings() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Sacred Services" subtitle="Online Event Bookings" />
      
      <Suspense fallback={<div className="text-center py-20 font-black text-maroon uppercase text-xs tracking-widest animate-pulse">Loading Divine Portal...</div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}
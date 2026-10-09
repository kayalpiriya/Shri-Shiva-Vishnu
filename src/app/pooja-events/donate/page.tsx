
// "use client";
// import { useState } from "react";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft, Lock, ShieldCheck, CreditCard, Sparkles, CalendarDays, HeartHandshake, Landmark, CheckCircle2 } from "lucide-react";
// import Image from "next/image";

// // --- REUSABLE CUSTOM COMPONENTS ---
// const CustomSelect = ({ label, options, value, onChange, error }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="relative space-y-1.5 w-full">
//       <label className="text-[10px] font-bold text-maroon/70 uppercase ml-1 tracking-widest flex items-center gap-1">
//         {label} {error && <span className="text-red-500">*</span>}
//       </label>
//       <button 
//         type="button" onClick={() => setIsOpen(!isOpen)}
//         className={`w-full p-4 rounded-2xl bg-maroon/[0.03] border flex justify-between items-center text-sm font-semibold transition-all hover:bg-maroon/[0.05]
//           ${error ? 'border-red-400 bg-red-50/50' : 'border-maroon/10 hover:border-gold/50 focus:border-gold focus:bg-white'}
//         `}
//       >
//         <span className={value ? "text-maroon" : "text-maroon/40"}>{value || `Select ${label}`}</span>
//         <ChevronDown size={16} className={`text-maroon/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: 0.98 }} transition={{ duration: 0.2 }}
//             className="absolute z-50 w-full mt-2 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl border border-maroon/10 max-h-48 overflow-y-auto p-1.5 no-scrollbar"
//           >
//             {options.map((opt: string) => (
//               <div key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} className="p-3 hover:bg-maroon/5 hover:text-maroon text-maroon/70 rounded-xl cursor-pointer text-sm font-semibold transition-colors">
//                 {opt}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const CustomInput = ({ label, placeholder, value, onChange, error }: any) => (
//   <div className="space-y-1.5 w-full">
//     <label className="text-[10px] font-bold text-maroon/70 uppercase ml-1 tracking-widest flex items-center gap-1">
//       {label} {error && <span className="text-red-500">*</span>}
//     </label>
//     <input 
//       type="text" placeholder={placeholder} value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className={`w-full p-4 rounded-2xl bg-maroon/[0.03] border text-sm font-semibold text-maroon placeholder:text-maroon/30 transition-all hover:bg-maroon/[0.05] focus:outline-none focus:bg-white focus:ring-4 focus:ring-gold/10
//         ${error ? 'border-red-400 bg-red-50/50 focus:ring-red-100' : 'border-maroon/10 focus:border-gold hover:border-gold/50'}
//       `}
//     />
//   </div>
// );

// export default function ProjectDonation() {
//   const [step, setStep] = useState(0); 
//   const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'counter'
//   const [formData, setFormData] = useState<any>({ amount: null, title: "", name: "", email: "", mobile: "", star: "", consent: false });
//   const [errors, setErrors] = useState<any>({});

//   const validateDetails = () => {
//     let err: any = {};
//     if (!formData.title) err.title = "Required";
//     if (!formData.name) err.name = "Full name required";
//     if (!formData.email.includes("@")) err.email = "Enter valid email";
//     if (!formData.mobile) err.mobile = "Mobile required";
//     if (!formData.star) err.star = "Select birth star";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const amounts = [51, 101, 501, 1001];

//   return (
//     <main className="bg-cream min-h-screen pb-20 relative overflow-hidden">
//       <div className="absolute top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      
//       <SubPageHero title="Project Offerings" subtitle="Be a part of our divine journey" />

//       <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-20">
        
//         <AnimatePresence mode="wait">
//           {/* STEP 0: PROJECT PREVIEW CARD */}
//           {step === 0 ? (
//             <motion.div 
//               key="project-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
//               className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-maroon/5 border border-maroon/10 overflow-hidden flex flex-col md:flex-row"
//             >
//               <div className="md:w-1/2 relative min-h-[300px] bg-maroon/5">
//                 <Image src="/images/image19.png" alt="Athma Lingam Project" fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent md:hidden" />
//               </div>

//               <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
//                   <CalendarDays size={14} /> Started Sept 19, 2025
//                 </div>
//                 <h2 className="text-3xl md:text-5xl font-heading font-black text-maroon leading-tight italic mb-6 text-left">Athma Lingam <br />Project Donations</h2>
//                 <p className="text-maroon/60 text-sm md:text-base leading-relaxed mb-10 font-medium text-left">Join us in this monumental spiritual journey. Your contribution helps us build a lasting divine legacy for generations to come.</p>
//                 <button onClick={() => setStep(1)} className="group flex items-center justify-center gap-3 bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/30 transition-all hover:-translate-y-1">Contribute Now <HeartHandshake size={18} className="group-hover:scale-110 transition-transform"/></button>
//               </div>
//             </motion.div>
//           ) : (
            
//             /* DONATION FORM */
//             <motion.div 
//               key="donation-form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
//               className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-maroon/5 border border-maroon/10 flex flex-col overflow-hidden"
//             >
//               {/* Progress Header */}
//               <div className="bg-[#2D0A0A] p-6 md:p-8 flex justify-between items-center relative overflow-hidden">
//                 <button onClick={() => setStep(step - 1)} className="absolute left-6 text-gold/50 hover:text-gold transition-colors z-20"><ArrowLeft size={20} /></button>
//                 <div className="flex gap-2 md:gap-4 mx-auto relative z-10">
//                     {[1, 2, 3].map(s => (
//                       <div key={s} className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${step >= s ? 'bg-gradient-to-r from-gold to-saffron w-10 md:w-16' : 'bg-white/10 w-6 md:w-10'}`} />
//                     ))}
//                 </div>
//               </div>

//               <div className="p-6 md:p-12 lg:p-16">
//                 <AnimatePresence mode="wait">
//                   {step === 1 && (
//                     <motion.div key="s1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}>
//                       <div className="text-center mb-10"><Sparkles className="text-gold mx-auto mb-3" size={24} /><h3 className="text-2xl md:text-3xl font-heading font-black text-maroon uppercase">Select Offering Amount</h3></div>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//                         {amounts.map(amt => (
//                           <button key={amt} onClick={() => setFormData({...formData, amount: amt})} className={`p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center ${formData.amount === amt ? 'border-gold bg-gold/5 shadow-lg' : 'border-maroon/5 bg-white hover:border-gold/30'}`}>
//                             <span className="text-3xl md:text-4xl font-heading font-black text-maroon">${amt}</span>
//                           </button>
//                         ))}
//                       </div>
//                       <button onClick={() => setStep(2)} disabled={!formData.amount} className="w-full mt-12 bg-maroon text-cream py-5 rounded-full font-black text-xs uppercase tracking-widest disabled:opacity-30">Continue to Details</button>
//                     </motion.div>
//                   )}

//                   {step === 2 && (
//                     <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
//                       <div className="mb-8 flex justify-between items-end border-b border-maroon/5 pb-4"><h3 className="text-2xl font-heading font-black text-maroon uppercase">Devotee Details</h3><span className="text-xl font-black text-gold">${formData.amount}</span></div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//                         <CustomSelect label="Title" options={["Mr", "Mrs", "Ms"]} value={formData.title} onChange={(v:any)=>setFormData({...formData, title:v})} error={errors.title} />
//                         <CustomInput label="Full Name" placeholder="e.g. Ramachandran" value={formData.name} onChange={(v:any)=>setFormData({...formData, name:v})} error={errors.name} />
//                         <CustomInput label="Email" placeholder="mail@example.com" value={formData.email} onChange={(v:any)=>setFormData({...formData, email:v})} error={errors.email} />
//                         <CustomInput label="Mobile" placeholder="+61 400 000 000" value={formData.mobile} onChange={(v:any)=>setFormData({...formData, mobile:v})} error={errors.mobile} />
//                         <CustomSelect label="Birth Star" options={["Aswini", "Bharani", "Krithika"]} value={formData.star} onChange={(v:any)=>setFormData({...formData, star:v})} error={errors.star} />
//                       </div>
//                       <button onClick={()=>validateDetails() && setStep(3)} className="w-full bg-maroon text-cream py-5 rounded-full font-black text-xs uppercase tracking-widest">Proceed to Payment</button>
//                     </motion.div>
//                   )}

//                   {step === 3 && (
//                     <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto">
                      
//                       {/* PAYMENT TOGGLE */}
//                       <div className="flex p-1.5 bg-maroon/[0.05] rounded-2xl gap-1 mb-8 border border-maroon/5">
//                         <button onClick={() => setPaymentMethod("card")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod === "card" ? "bg-white text-maroon shadow-sm" : "text-maroon/40"}`}>Card Payment</button>
//                         <button onClick={() => setPaymentMethod("counter")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod === "counter" ? "bg-white text-maroon shadow-sm" : "text-maroon/40"}`}>Counter Payment</button>
//                       </div>

//                       <AnimatePresence mode="wait">
//                         {paymentMethod === "card" ? (
//                           <motion.div key="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
//                             <div className="bg-maroon text-white p-8 rounded-[2.5rem] mb-8 relative overflow-hidden">
//                                <CreditCard className="absolute top-0 right-0 p-6 opacity-10" size={120} />
//                                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Secure Contribution</p>
//                                <h4 className="text-4xl font-heading font-black text-gold mb-6">${formData.amount}</h4>
//                                <div className="space-y-4">
//                                   <input type="text" placeholder="Card Number" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl font-mono text-sm placeholder:text-white/20 outline-none" />
//                                   <div className="grid grid-cols-2 gap-4">
//                                      <input type="text" placeholder="MM/YY" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-sm placeholder:text-white/20 outline-none" />
//                                      <input type="text" placeholder="CVC" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-sm placeholder:text-white/20 outline-none" />
//                                   </div>
//                                </div>
//                             </div>
//                           </motion.div>
//                         ) : (
//                           <motion.div key="counter" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-saffron/5 border-2 border-dashed border-saffron/20 p-10 rounded-[2.5rem] text-center space-y-4 mb-8">
//                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-saffron mx-auto shadow-sm"><Landmark size={32} /></div>
//                              <h4 className="text-xl font-heading font-black text-maroon uppercase">Pledge at Counter</h4>
//                              <p className="text-sm text-maroon/60 font-medium leading-relaxed italic">Unga contribution pledge reserved aayiduchi. Neenga temple manager counter-la unga details solli contribute pannikalam.</p>
//                              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gold/20 text-maroon text-[10px] font-black uppercase tracking-widest"><CheckCircle2 size={14} className="text-green-500" /> Reserved Offering</div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       <button className="w-full bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-maroon/20 hover:-translate-y-1 transition-all">
//                         {paymentMethod === "card" ? `Confirm & Pay $${formData.amount}` : "Confirm Pledge"}
//                       </button>
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


"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ShieldCheck, CreditCard, Sparkles, CalendarDays, HeartHandshake, Landmark, CheckCircle2, AlertCircle, X } from "lucide-react";
import Image from "next/image";

// --- REUSABLE CUSTOM COMPONENTS ---
const CustomSelect = ({ label, options, value, onChange, error }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative space-y-1.5 w-full">
      <label className="text-[10px] font-bold text-maroon/70 uppercase ml-1 tracking-widest flex items-center gap-1">
        {label} {error && <span className="text-red-500">*</span>}
      </label>
      <button 
        type="button" onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 rounded-2xl bg-maroon/[0.03] border flex justify-between items-center text-sm font-semibold transition-all hover:bg-maroon/[0.05]
          ${error ? 'border-red-400 bg-red-50/50' : 'border-maroon/10 hover:border-gold/50 focus:border-gold focus:bg-white'}
        `}
      >
        <span className={value ? "text-maroon" : "text-maroon/40"}>{value || `Select ${label}`}</span>
        <ChevronDown size={16} className={`text-maroon/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: 0.98 }} transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl border border-maroon/10 max-h-48 overflow-y-auto p-1.5 no-scrollbar"
          >
            {options.map((opt: string) => (
              <div key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} className="p-3 hover:bg-maroon/5 hover:text-maroon text-maroon/70 rounded-xl cursor-pointer text-sm font-semibold transition-colors">
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</motion.p>}
    </div>
  );
};

// Added "dark" prop exactly from your BookingForm
const CustomInput = ({ label, placeholder, value, onChange, error, type = "text", dark = false }: any) => (
  <div className="space-y-1.5 w-full text-left">
    <label className={`text-[10px] font-bold uppercase ml-1 tracking-widest flex items-center gap-1 ${dark ? 'text-white/40' : 'text-maroon/70'}`}>
      {label} {error && <span className="text-red-500">*</span>}
    </label>
    <input 
      type={type} placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-4 rounded-2xl border text-sm font-semibold focus:outline-none transition-all ${
        dark 
        ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-gold focus:bg-white/10' 
        : `bg-maroon/[0.03] placeholder:text-maroon/30 text-maroon hover:bg-maroon/[0.05] focus:bg-white focus:ring-4 focus:ring-gold/10 ${error ? 'border-red-400 bg-red-50/50 focus:ring-red-100' : 'border-maroon/10 focus:border-gold hover:border-gold/50'}`
      }`}
    />
    {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</motion.p>}
  </div>
);

export default function ProjectDonation() {
  const [step, setStep] = useState(0); 
  const [paymentMethod, setPaymentMethod] = useState("card"); 
  const [isSuccess, setIsSuccess] = useState(false); // Success Modal State

  // cardName field added for step 3
  const [formData, setFormData] = useState<any>({ amount: null, title: "", name: "", email: "", mobile: "", star: "", cardName: "" });
  const [errors, setErrors] = useState<any>({});

  const validateDetails = () => {
    let err: any = {};
    if (!formData.title) err.title = "Required";
    if (!formData.name) err.name = "Full name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) err.email = "Email is required";
    else if (!emailRegex.test(formData.email)) err.email = "Enter a valid email address";

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!formData.mobile) err.mobile = "Mobile number is required";
    else if (!phoneRegex.test(formData.mobile) || formData.mobile.length < 8) err.mobile = "Enter a valid phone number";

    if (!formData.star) err.star = "Select birth star";
    
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Payment Validation & Success
  const handleFinalSubmit = () => {
    if (paymentMethod === 'card' && !formData.cardName) {
      setErrors({ cardName: "Cardholder name required" });
      return;
    }
    setErrors({});
    setIsSuccess(true);
  };

  const amounts = [51, 101, 501, 1001];

  return (
    <main className="bg-cream min-h-screen pb-20 relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      
      <SubPageHero title="Project Offerings" subtitle="Be a part of our divine journey" />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-20">
        
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div 
              key="project-list" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-maroon/5 border border-maroon/10 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 relative min-h-[300px] bg-maroon/5">
                <Image src="/images/image19.png" alt="Athma Lingam Project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent md:hidden" />
              </div>

              <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                  <CalendarDays size={14} /> Started Sept 19, 2025
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-maroon leading-tight italic mb-6 text-left">Athma Lingam <br />Project Donations</h2>
                <p className="text-maroon/60 text-sm md:text-base leading-relaxed mb-10 font-medium text-left">Join us in this monumental spiritual journey. Your contribution helps us build a lasting divine legacy for generations to come.</p>
                <button onClick={() => setStep(1)} className="group flex items-center justify-center gap-3 bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/30 transition-all hover:-translate-y-1">Contribute Now <HeartHandshake size={18} className="group-hover:scale-110 transition-transform"/></button>
              </div>
            </motion.div>
          ) : (
            
            <motion.div 
              key="donation-form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-maroon/5 border border-maroon/10 flex flex-col overflow-hidden"
            >
              {/* Progress Header */}
              <div className="bg-[#2D0A0A] p-6 md:p-8 flex justify-between items-center relative overflow-hidden">
                <button onClick={() => setStep(step - 1)} className="absolute left-6 text-gold/50 hover:text-gold transition-colors z-20"><ArrowLeft size={20} /></button>
                <div className="flex gap-2 md:gap-4 mx-auto relative z-10">
                    {[1, 2, 3].map(s => (
                      <div key={s} className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${step >= s ? 'bg-gradient-to-r from-gold to-saffron w-10 md:w-16' : 'bg-white/10 w-6 md:w-10'}`} />
                    ))}
                </div>
              </div>

              <div className="p-6 md:p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="text-center mb-10"><Sparkles className="text-gold mx-auto mb-3" size={24} /><h3 className="text-2xl md:text-3xl font-heading font-black text-maroon uppercase">Select Offering Amount</h3></div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {amounts.map(amt => (
                          <button key={amt} onClick={() => setFormData({...formData, amount: amt})} className={`p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center ${formData.amount === amt ? 'border-gold bg-gold/5 shadow-lg' : 'border-maroon/5 bg-white hover:border-gold/30'}`}>
                            <span className="text-3xl md:text-4xl font-heading font-black text-maroon">${amt}</span>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setStep(2)} disabled={!formData.amount} className="w-full mt-12 bg-maroon text-cream py-5 rounded-full font-black text-xs uppercase tracking-widest disabled:opacity-30">Continue to Details</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="mb-8 flex justify-between items-end border-b border-maroon/5 pb-4"><h3 className="text-2xl font-heading font-black text-maroon uppercase">Devotee Details</h3><span className="text-xl font-black text-gold">${formData.amount}</span></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <CustomSelect label="Title" options={["Mr", "Mrs", "Ms"]} value={formData.title} onChange={(v:any)=>setFormData({...formData, title:v})} error={errors.title} />
                        <CustomInput label="Full Name" placeholder="e.g. Ramachandran" value={formData.name} onChange={(v:any)=>setFormData({...formData, name:v})} error={errors.name} />
                        <CustomInput label="Email" placeholder="mail@example.com" value={formData.email} onChange={(v:any)=>setFormData({...formData, email:v})} error={errors.email} />
                        <CustomInput label="Mobile" placeholder="+61 400 000 000" value={formData.mobile} onChange={(v:any)=>setFormData({...formData, mobile:v})} error={errors.mobile} />
                        <CustomSelect label="Birth Star" options={["Aswini", "Bharani", "Krithika"]} value={formData.star} onChange={(v:any)=>setFormData({...formData, star:v})} error={errors.star} />
                      </div>
                      <button onClick={()=>validateDetails() && setStep(3)} className="w-full bg-maroon text-cream py-5 rounded-full font-black text-xs uppercase tracking-widest">Proceed to Payment</button>
                    </motion.div>
                  )}

                  {/* EXACT PAYMENT SECTION FROM BOOKING FORM */}
                  {step === 3 && (
                    <motion.div key="s3" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="max-w-xl mx-auto space-y-10">
                      
                      <div className="flex p-1.5 bg-gray-100 rounded-2xl gap-1">
                          <button onClick={()=>setPaymentMethod("card")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod==="card"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Card Payment</button>
                          <button onClick={()=>setPaymentMethod("counter")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod==="counter"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Counter Payment</button>
                      </div>

                      {paymentMethod === "card" ? (
                        <div className="bg-[#1A0F0F] p-8 md:p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden shadow-2xl border border-white/5">
                            <CreditCard className="absolute top-0 right-0 p-8 opacity-5" size={150} />
                            <h3 className="text-xl font-heading text-gold italic flex items-center gap-2 tracking-tighter uppercase">Secure Checkout <ShieldCheck size={20}/></h3>
                            <div className="space-y-5 relative z-10">
                              
                              <CustomInput dark label="Cardholder Name" placeholder="AS ON CARD" value={formData.cardName} onChange={(v:any)=>setFormData({...formData, cardName:v})} error={errors.cardName} />
                              
                              <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-white/40 ml-1">Card Number</label>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl font-mono text-sm outline-none focus:border-gold text-white" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase text-white/40 ml-1">Expiry</label>
                                    <input type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white" />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase text-white/40 ml-1">CVC</label>
                                    <input type="text" placeholder="XXX" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white" />
                                  </div>
                              </div>
                            </div>
                        </div>
                      ) : (
                        <div className="bg-saffron/5 border-2 border-dashed border-saffron/20 p-12 rounded-[3rem] text-center space-y-5">
                            <div className="w-16 h-16 bg-saffron text-white rounded-full flex items-center justify-center mx-auto shadow-lg"><Landmark size={30} /></div>
                            <h4 className="text-2xl font-heading font-black text-maroon uppercase">Counter Pledge</h4>
                            <p className="text-sm text-gray-500 italic max-w-xs mx-auto">Sacred service reserved. Please provide your name or reference at the counter to pay.</p>
                        </div>
                      )}

                      <div className="flex gap-4">
                          <button onClick={()=>setStep(2)} className="w-1/3 border-2 border-maroon text-maroon py-5 rounded-2xl font-black text-xs uppercase hover:bg-maroon/5 transition-all">Back</button>
                          <button onClick={handleFinalSubmit} className="w-2/3 bg-saffron text-maroon py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-gold transition-all">
                            {paymentMethod === "card" ? `Pay $${formData.amount}` : "Confirm Pledge"}
                          </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- EXACT SUCCESS POPUP FROM BOOKING FORM --- */}
        <AnimatePresence>
          {isSuccess && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-maroon/40 backdrop-blur-md"
                onClick={() => setIsSuccess(false)}
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] max-w-lg w-full border border-gold/20"
              >
                <button onClick={() => setIsSuccess(false)} className="absolute top-6 right-6 text-gray-400 hover:text-maroon transition-colors"><X size={24}/></button>
                
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner">
                  <CheckCircle2 size={50} />
                </div>
                
                <h2 className="text-3xl font-heading font-black text-maroon italic">Divine Confirmation</h2>
                <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                  {paymentMethod === "card" 
                    ? "Your payment was successful. A sacred receipt has been sent to your email." 
                    : "Your pledge is confirmed. Please visit the Temple counter with your Ref ID to complete the payment."}
                </p>
                
                <div className="mt-8 p-5 bg-cream rounded-3xl border border-gold/20 inline-block font-mono font-bold text-maroon text-lg tracking-widest shadow-sm">
                  REF-HSV{Math.floor(10000 + Math.random() * 90000)}
                </div>

                <div className="mt-10">
                  <button 
                    onClick={() => { 
                      setIsSuccess(false); 
                      setStep(0); // Go back to beginning after success
                      setFormData({ amount: null, title: "", name: "", email: "", mobile: "", star: "", cardName: "" });
                    }} 
                    className="w-full bg-maroon text-gold px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl"
                  >
                    Done & Back
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </section>
    </main>
  );
}
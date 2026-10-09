

// "use client";
// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Users, CreditCard, ChevronDown, ShieldCheck, Landmark, CheckCircle2, AlertCircle, X } from "lucide-react";

// // --- 1. CUSTOM DROPDOWN ---
// const CustomSelect = ({ label, options, value, onChange, error }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="relative space-y-2 w-full text-left" ref={dropdownRef}>
//       <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">{label}</label>
//       <div 
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full p-4 rounded-2xl bg-maroon/[0.03] border-2 flex justify-between items-center text-sm font-bold cursor-pointer transition-all ${
//           isOpen ? 'border-gold bg-white' : error ? 'border-red-400' : 'border-transparent hover:border-maroon/10'
//         }`}
//       >
//         <span className={value ? "text-maroon" : "text-gray-400"}>{value || "Select Option"}</span>
//         <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-maroon/30'}`} />
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
//             className="absolute z-[100] w-full mt-2 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
//           >
//             <div className="max-h-48 overflow-y-auto p-2">
//               {options.map((opt: string) => (
//                 <div 
//                   key={opt} 
//                   onClick={() => { onChange(opt); setIsOpen(false); }}
//                   className="p-3 hover:bg-maroon hover:text-white rounded-xl cursor-pointer text-xs font-black uppercase tracking-tighter transition-colors"
//                 >
//                   {opt}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {error && <p className="text-[10px] text-red-500 font-bold ml-2 mt-1 flex items-center gap-1"><AlertCircle size={12}/> {error}</p>}
//     </div>
//   );
// };

// // --- 2. CUSTOM INPUT (Enhanced for Dark Mode) ---
// const CustomInput = ({ label, placeholder, value, onChange, error, type = "text", dark = false }: any) => (
//   <div className="space-y-2 w-full text-left">
//     <label className={`text-[10px] font-black uppercase ml-2 tracking-widest ${dark ? 'text-white/40' : 'text-maroon'}`}>{label}</label>
//     <input 
//       type={type} placeholder={placeholder} value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className={`w-full p-4 rounded-2xl border-2 text-sm font-bold focus:outline-none transition-all ${
//         dark 
//         ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-gold focus:bg-white/10' 
//         : `bg-maroon/[0.03] ${error ? 'border-red-400' : 'border-transparent focus:border-gold focus:bg-white text-maroon'}`
//       }`}
//     />
//     {error && <p className="text-[10px] text-red-500 font-bold ml-2 mt-1">{error}</p>}
//   </div>
// );

// export default function BookingForm({ selectedItem, onBack }: { selectedItem: any, onBack: () => void }) {
//   const [formStep, setFormStep] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [formData, setFormData] = useState<any>({ title: "", name: "", email: "", mobile: "", gotra: "", star: "", cardName: "", family: [{name: "", star: ""}, {name: "", star: ""}, {name: "", star: ""}] });
//   const [errors, setErrors] = useState<any>({});

//   const validateStep1 = () => {
//     let err: any = {};
//     if (!formData.title) err.title = "Required";
//     if (!formData.name) err.name = "Required";
//     if (!formData.email.includes("@")) err.email = "Invalid Email";
//     if (!formData.mobile) err.mobile = "Required";
//     if (!formData.star) err.star = "Required";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleFinalSubmit = () => {
//     if (paymentMethod === 'card' && !formData.cardName) {
//       setErrors({ cardName: "Cardholder name required" });
//       return;
//     }
//     setIsSuccess(true);
//   };

//   return (
//     <div className="relative">
//       <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3.5rem] shadow-2xl border border-maroon/5 overflow-hidden">
//         <div className="bg-[#1a0505] p-8 flex justify-between items-center text-white border-b border-gold/10">
//           <button onClick={onBack} className="text-gold font-bold text-xs flex items-center gap-2 hover:-translate-x-1 transition-transform"><ArrowLeft size={16}/> BACK</button>
//           <h4 className="text-xl font-heading font-black italic text-gold uppercase tracking-tighter">{selectedItem?.title}</h4>
//         </div>

//         <div className="p-8 md:p-14">
//           <AnimatePresence mode="wait">
//             {formStep === 1 ? (
//               <motion.div key="s1" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="space-y-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <CustomSelect label="Title" options={["Mr", "Mrs", "Ms"]} value={formData.title} onChange={(v:any)=>setFormData({...formData, title:v})} error={errors.title} />
//                     <CustomInput label="Full Name" placeholder="Full Name *" value={formData.name} onChange={(v:any)=>setFormData({...formData, name:v})} error={errors.name} />
//                     <CustomInput label="Email" placeholder="mail@example.com *" value={formData.email} onChange={(v:any)=>setFormData({...formData, email:v})} error={errors.email} />
//                     <CustomInput label="Phone" placeholder="Numbers only *" value={formData.mobile} onChange={(v:any)=>setFormData({...formData, mobile:v})} error={errors.mobile} />
//                     <CustomInput label="Gotra" placeholder="Gotra name" value={formData.gotra} onChange={(v:any)=>setFormData({...formData, gotra:v})} />
//                     <CustomSelect label="Birth Star" options={["Aswini", "Bharani", "Krithika", "Rohini"]} value={formData.star} onChange={(v:any)=>setFormData({...formData, star:v})} error={errors.star} />
//                 </div>

//                 <div className="bg-cream/10 p-8 rounded-[2.5rem] border-2 border-dashed border-maroon/10">
//                     <h4 className="text-maroon font-black text-xs uppercase mb-8 flex items-center gap-2 tracking-widest"><Users size={18}/> Family Members</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                       {formData.family.map((member: any, i: number) => (
//                         <div key={i} className="space-y-4">
//                           <div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 bg-maroon text-white text-[10px] font-black rounded-lg flex items-center justify-center">{i+1}</div><span className="text-[10px] font-black text-maroon/40 uppercase tracking-widest">Member</span></div>
//                           <input 
//                             type="text" placeholder="Member Name" 
//                             className="w-full bg-white border-b-2 border-gray-100 p-2 text-xs font-bold focus:border-maroon outline-none transition-all"
//                             onChange={(e) => {
//                               let newFam = [...formData.family];
//                               newFam[i].name = e.target.value;
//                               setFormData({...formData, family: newFam});
//                             }}
//                           />
//                           <CustomSelect label={`Member ${i+1} Star`} options={["Aswini", "Bharani", "Krithika"]} value={member.star} onChange={(v:any) => {
//                               let newFam = [...formData.family];
//                               newFam[i].star = v;
//                               setFormData({...formData, family: newFam});
//                           }} />
//                         </div>
//                       ))}
//                     </div>
//                 </div>
//                 <button onClick={() => validateStep1() && setFormStep(2)} className="w-full bg-maroon text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all">Proceed to Payment</button>
//               </motion.div>
//             ) : (
//               <motion.div key="s2" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="max-w-xl mx-auto space-y-10">
//                 <div className="flex p-1.5 bg-gray-100 rounded-2xl gap-1">
//                     <button onClick={()=>setPaymentMethod("card")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod==="card"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Card Payment</button>
//                     <button onClick={()=>setPaymentMethod("counter")} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${paymentMethod==="counter"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Counter Payment</button>
//                 </div>

//                 {paymentMethod === "card" ? (
//                   <div className="bg-[#1A0F0F] p-8 md:p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden shadow-2xl border border-white/5">
//                       <CreditCard className="absolute top-0 right-0 p-8 opacity-5" size={150} />
//                       <h3 className="text-xl font-heading text-gold italic flex items-center gap-2 tracking-tighter uppercase">Secure Checkout <ShieldCheck size={20}/></h3>
//                       <div className="space-y-5 relative z-10">
//                         {/* Ippo ithu thalaivara nalla theriyum */}
//                         <CustomInput dark label="Cardholder Name" placeholder="AS ON CARD" value={formData.cardName} onChange={(v:any)=>setFormData({...formData, cardName:v})} error={errors.cardName} />
                        
//                         <div className="space-y-2">
//                           <label className="text-[9px] font-black uppercase text-white/40 ml-1">Card Number</label>
//                           <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl font-mono text-sm outline-none focus:border-gold text-white" />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                               <label className="text-[9px] font-black uppercase text-white/40 ml-1">Expiry</label>
//                               <input type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white" />
//                             </div>
//                             <div className="space-y-2">
//                               <label className="text-[9px] font-black uppercase text-white/40 ml-1">CVC</label>
//                               <input type="text" placeholder="XXX" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none text-white" />
//                             </div>
//                         </div>
//                       </div>
//                   </div>
//                 ) : (
//                   <div className="bg-saffron/5 border-2 border-dashed border-saffron/20 p-12 rounded-[3rem] text-center space-y-5">
//                       <div className="w-16 h-16 bg-saffron text-white rounded-full flex items-center justify-center mx-auto shadow-lg"><Landmark size={30} /></div>
//                       <h4 className="text-2xl font-heading font-black text-maroon uppercase">Counter Pledge</h4>
//                       <p className="text-sm text-gray-500 italic max-w-xs mx-auto">Sacred service reserved. Please provide your name or reference at the counter to pay.</p>
//                   </div>
//                 )}

//                 <div className="flex gap-4">
//                     <button onClick={()=>setFormStep(1)} className="w-1/3 border-2 border-maroon text-maroon py-5 rounded-2xl font-black text-xs uppercase hover:bg-maroon/5 transition-all">Back</button>
//                     <button onClick={handleFinalSubmit} className="w-2/3 bg-saffron text-maroon py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-gold transition-all">Confirm & Book</button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>

//       {/* --- SUCCESS POPUP (MODAL) --- */}
//       <AnimatePresence>
//         {isSuccess && (
//           <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
//             <motion.div 
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-maroon/40 backdrop-blur-md"
//               onClick={() => setIsSuccess(false)}
//             />
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="relative bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] max-w-lg w-full border border-gold/20"
//             >
//               <button onClick={() => setIsSuccess(false)} className="absolute top-6 right-6 text-gray-400 hover:text-maroon transition-colors"><X size={24}/></button>
              
//               <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner">
//                 <CheckCircle2 size={50} />
//               </div>
              
//               <h2 className="text-3xl font-heading font-black text-maroon italic">Divine Confirmation</h2>
//               <p className="text-gray-500 mt-4 text-sm leading-relaxed">
//                 {paymentMethod === "card" 
//                   ? "Your payment was successful. A sacred receipt has been sent to your email." 
//                   : "Your reservation is confirmed. Please visit the Temple counter with your Ref ID to complete the payment."}
//               </p>
              
//               <div className="mt-8 p-5 bg-cream rounded-3xl border border-gold/20 inline-block font-mono font-bold text-maroon text-lg tracking-widest shadow-sm">
//                 REF-HSV{Math.floor(10000 + Math.random() * 90000)}
//               </div>

//               <div className="mt-10">
//                 <button 
//                   onClick={() => { setIsSuccess(false); onBack(); }} 
//                   className="w-full bg-maroon text-gold px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl"
//                 >
//                   Done & Back to Home
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Users, CreditCard, ChevronDown, ShieldCheck, Landmark, CheckCircle2, AlertCircle, X } from "lucide-react";

// --- 1. CUSTOM DROPDOWN ---
const CustomSelect = ({ label, options, value, onChange, error }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative space-y-1.5 md:space-y-2 w-full text-left" ref={dropdownRef}>
      <label className="text-[9px] md:text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-maroon/[0.03] border-2 flex justify-between items-center text-xs md:text-sm font-bold cursor-pointer transition-all ${
          isOpen ? 'border-gold bg-white' : error ? 'border-red-400' : 'border-transparent hover:border-maroon/10'
        }`}
      >
        <span className={value ? "text-maroon" : "text-gray-400"}>{value || "Select Option"}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-maroon/30'}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="absolute z-[100] w-full mt-2 bg-white shadow-2xl rounded-xl md:rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="max-h-48 overflow-y-auto p-1.5 md:p-2">
              {options.map((opt: string) => (
                <div 
                  key={opt} 
                  onClick={() => { onChange(opt); setIsOpen(false); }}
                  className="p-3 hover:bg-maroon hover:text-white rounded-lg md:rounded-xl cursor-pointer text-[11px] md:text-xs font-black uppercase tracking-tighter transition-colors"
                >
                  {opt}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-[9px] md:text-[10px] text-red-500 font-bold ml-2 mt-1 flex items-center gap-1"><AlertCircle size={10} className="md:w-3 md:h-3"/> {error}</p>}
    </div>
  );
};

// --- 2. CUSTOM INPUT ---
const CustomInput = ({ label, placeholder, value, onChange, error, type = "text", dark = false }: any) => (
  <div className="space-y-1.5 md:space-y-2 w-full text-left">
    <label className={`text-[9px] md:text-[10px] font-black uppercase ml-2 tracking-widest ${dark ? 'text-white/40' : 'text-maroon'}`}>{label}</label>
    <input 
      type={type} placeholder={placeholder} value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-3.5 md:p-4 rounded-xl md:rounded-2xl border-2 text-xs md:text-sm font-bold focus:outline-none transition-all ${
        dark 
        ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-gold focus:bg-white/10' 
        : `bg-maroon/[0.03] ${error ? 'border-red-400' : 'border-transparent focus:border-gold focus:bg-white text-maroon'}`
      }`}
    />
    {error && <p className="text-[9px] md:text-[10px] text-red-500 font-bold ml-2 mt-1">{error}</p>}
  </div>
);

export default function BookingForm({ selectedItem, onBack }: { selectedItem: any, onBack: () => void }) {
  const [formStep, setFormStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<any>({ title: "", name: "", email: "", mobile: "", gotra: "", star: "", cardName: "", family: [{name: "", star: ""}, {name: "", star: ""}, {name: "", star: ""}] });
  const [errors, setErrors] = useState<any>({});

  const validateStep1 = () => {
    let err: any = {};
    if (!formData.title) err.title = "Required";
    if (!formData.name) err.name = "Required";
    if (!formData.email.includes("@")) err.email = "Invalid Email";
    if (!formData.mobile) err.mobile = "Required";
    if (!formData.star) err.star = "Required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleFinalSubmit = () => {
    if (paymentMethod === 'card' && !formData.cardName) {
      setErrors({ cardName: "Cardholder name required" });
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="relative">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-maroon/5 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1a0505] p-5 sm:p-6 md:p-8 flex justify-between items-center text-white border-b border-gold/10">
          <button onClick={onBack} className="text-gold font-bold text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2 hover:-translate-x-1 transition-transform"><ArrowLeft size={16}/> BACK</button>
          <h4 className="text-sm sm:text-lg md:text-xl font-heading font-black italic text-gold uppercase tracking-tighter truncate max-w-[60%] text-right">{selectedItem?.title}</h4>
        </div>

        <div className="p-5 sm:p-8 md:p-14">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Details */}
            {formStep === 1 ? (
              <motion.div key="s1" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <CustomSelect label="Title" options={["Mr", "Mrs", "Ms"]} value={formData.title} onChange={(v:any)=>setFormData({...formData, title:v})} error={errors.title} />
                    <CustomInput label="Full Name" placeholder="Full Name *" value={formData.name} onChange={(v:any)=>setFormData({...formData, name:v})} error={errors.name} />
                    <CustomInput label="Email" placeholder="mail@example.com *" value={formData.email} onChange={(v:any)=>setFormData({...formData, email:v})} error={errors.email} />
                    <CustomInput label="Phone" placeholder="Numbers only *" value={formData.mobile} onChange={(v:any)=>setFormData({...formData, mobile:v})} error={errors.mobile} />
                    <CustomInput label="Gotra" placeholder="Gotra name" value={formData.gotra} onChange={(v:any)=>setFormData({...formData, gotra:v})} />
                    <CustomSelect label="Birth Star" options={["Aswini", "Bharani", "Krithika", "Rohini"]} value={formData.star} onChange={(v:any)=>setFormData({...formData, star:v})} error={errors.star} />
                </div>

                <div className="bg-cream/10 p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-dashed border-maroon/10">
                    <h4 className="text-maroon font-black text-[10px] md:text-xs uppercase mb-6 md:mb-8 flex items-center gap-2 tracking-widest"><Users size={16} className="md:w-[18px] md:h-[18px]"/> Family Members</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                      {formData.family.map((member: any, i: number) => (
                        <div key={i} className="space-y-3 md:space-y-4">
                          <div className="flex items-center gap-2 mb-1 md:mb-2"><div className="w-5 h-5 md:w-6 md:h-6 bg-maroon text-white text-[9px] md:text-[10px] font-black rounded-md md:rounded-lg flex items-center justify-center">{i+1}</div><span className="text-[9px] md:text-[10px] font-black text-maroon/40 uppercase tracking-widest">Member</span></div>
                          <input 
                            type="text" placeholder="Member Name" 
                            className="w-full bg-white border-b-2 border-gray-100 p-2 text-[11px] md:text-xs font-bold focus:border-maroon outline-none transition-all"
                            onChange={(e) => {
                              let newFam = [...formData.family];
                              newFam[i].name = e.target.value;
                              setFormData({...formData, family: newFam});
                            }}
                          />
                          <CustomSelect label={`Member ${i+1} Star`} options={["Aswini", "Bharani", "Krithika"]} value={member.star} onChange={(v:any) => {
                              let newFam = [...formData.family];
                              newFam[i].star = v;
                              setFormData({...formData, family: newFam});
                          }} />
                        </div>
                      ))}
                    </div>
                </div>
                <button onClick={() => validateStep1() && setFormStep(2)} className="w-full bg-maroon text-gold py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all">Proceed to Payment</button>
              </motion.div>
            ) : (
              
              /* STEP 2: Payment */
              <motion.div key="s2" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} className="max-w-xl mx-auto space-y-8 md:space-y-10">
                <div className="flex p-1 md:p-1.5 bg-gray-100 rounded-xl md:rounded-2xl gap-1">
                    <button onClick={()=>setPaymentMethod("card")} className={`flex-1 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase transition-all ${paymentMethod==="card"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Card Payment</button>
                    <button onClick={()=>setPaymentMethod("counter")} className={`flex-1 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase transition-all ${paymentMethod==="counter"?"bg-white text-maroon shadow-sm":"text-gray-400"}`}>Counter Payment</button>
                </div>

                {paymentMethod === "card" ? (
                  <div className="bg-[#1A0F0F] p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white space-y-5 md:space-y-6 relative overflow-hidden shadow-2xl border border-white/5">
                      <CreditCard className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 w-24 h-24 sm:w-[150px] sm:h-[150px]" />
                      <h3 className="text-lg md:text-xl font-heading text-gold italic flex items-center gap-2 tracking-tighter uppercase">Secure Checkout <ShieldCheck size={18} className="md:w-5 md:h-5"/></h3>
                      <div className="space-y-4 md:space-y-5 relative z-10">
                        <CustomInput dark label="Cardholder Name" placeholder="AS ON CARD" value={formData.cardName} onChange={(v:any)=>setFormData({...formData, cardName:v})} error={errors.cardName} />
                        
                        <div className="space-y-1.5 md:space-y-2">
                          <label className="text-[8px] md:text-[9px] font-black uppercase text-white/40 ml-1">Card Number</label>
                          <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white/5 border border-white/10 p-3.5 md:p-4 rounded-xl font-mono text-xs md:text-sm outline-none focus:border-gold text-white" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="space-y-1.5 md:space-y-2">
                              <label className="text-[8px] md:text-[9px] font-black uppercase text-white/40 ml-1">Expiry</label>
                              <input type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 p-3.5 md:p-4 rounded-xl outline-none text-xs md:text-sm text-white" />
                            </div>
                            <div className="space-y-1.5 md:space-y-2">
                              <label className="text-[8px] md:text-[9px] font-black uppercase text-white/40 ml-1">CVC</label>
                              <input type="text" placeholder="XXX" className="w-full bg-white/5 border border-white/10 p-3.5 md:p-4 rounded-xl outline-none text-xs md:text-sm text-white" />
                            </div>
                        </div>
                      </div>
                  </div>
                ) : (
                  <div className="bg-saffron/5 border-2 border-dashed border-saffron/20 p-8 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center space-y-4 md:space-y-5">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-saffron text-white rounded-full flex items-center justify-center mx-auto shadow-lg"><Landmark size={24} className="md:w-[30px] md:h-[30px]" /></div>
                      <h4 className="text-xl md:text-2xl font-heading font-black text-maroon uppercase">Counter Pledge</h4>
                      <p className="text-xs md:text-sm text-gray-500 italic max-w-xs mx-auto">Sacred service reserved. Please provide your name or reference at the counter to pay.</p>
                  </div>
                )}

                <div className="flex gap-2.5 sm:gap-4">
                    <button onClick={()=>setFormStep(1)} className="w-1/3 border-2 border-maroon text-maroon py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] sm:text-[10px] md:text-xs uppercase hover:bg-maroon/5 transition-all">Back</button>
                    <button onClick={handleFinalSubmit} className="w-2/3 bg-saffron text-maroon py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest shadow-2xl hover:bg-gold transition-all truncate px-2">Confirm & Book</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- SUCCESS POPUP (MODAL) --- */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-maroon/40 backdrop-blur-md"
              onClick={() => setIsSuccess(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2rem] md:rounded-[3rem] p-8 sm:p-10 md:p-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] max-w-lg w-full border border-gold/20"
            >
              <button onClick={() => setIsSuccess(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-maroon transition-colors"><X size={20} className="md:w-6 md:h-6"/></button>
              
              <div className="w-16 h-16 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-green-500 shadow-inner">
                <CheckCircle2 size={32} className="md:w-[50px] md:h-[50px]" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-heading font-black text-maroon italic">Divine Confirmation</h2>
              <p className="text-gray-500 mt-3 md:mt-4 text-xs md:text-sm leading-relaxed">
                {paymentMethod === "card" 
                  ? "Your payment was successful. A sacred receipt has been sent to your email." 
                  : "Your reservation is confirmed. Please visit the Temple counter with your Ref ID to complete the payment."}
              </p>
              
              <div className="mt-6 md:mt-8 p-4 md:p-5 bg-cream rounded-2xl md:rounded-3xl border border-gold/20 inline-block font-mono font-bold text-maroon text-base md:text-lg tracking-widest shadow-sm">
                REF-HSV{Math.floor(10000 + Math.random() * 90000)}
              </div>

              <div className="mt-8 md:mt-10">
                <button 
                  onClick={() => { setIsSuccess(false); onBack(); }} 
                  className="w-full bg-maroon text-gold px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl"
                >
                  Done & Back to Home
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
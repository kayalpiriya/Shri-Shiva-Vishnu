// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion } from "framer-motion";
// import { FileDown, Mail, Info, CheckCircle2, ShieldCheck, UserPlus } from "lucide-react";

// export default function MembershipPage() {
//   return (
//     <main className="bg-cream min-h-screen pb-20 overflow-hidden">
//       <SubPageHero title="HSV Membership" subtitle="Join the Hindu Society of Victoria" />

//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
//           {/* LEFT: CONTENT AREA */}
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 space-y-8">
//             <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-maroon/5 shadow-sm">
//               <h2 className="text-3xl font-heading font-black text-maroon mb-6 italic">Life Membership Only</h2>
//               <p className="text-gray-500 font-medium leading-relaxed mb-8">
//                 HSV now accepts applications for **Life Membership** only. The annual membership option is no longer available for new applicants.
//               </p>
              
//               <div className="bg-saffron/5 border border-saffron/20 rounded-3xl p-6 flex gap-4 items-start">
//                 <Info className="text-saffron shrink-0" size={24} />
//                 <p className="text-sm font-bold text-maroon/70 leading-relaxed italic">
//                   Important: Applications must be submitted before **28th February** to be eligible for voting rights during that calendar year.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-maroon rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold"><Mail size={24}/></div>
//                 <div>
//                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Enquiries Only</p>
//                    <a href="mailto:secretary@hsvtemple.org.au" className="text-lg font-bold text-gold hover:underline">secretary@hsvtemple.org.au</a>
//                 </div>
//               </div>
//               <ShieldCheck className="text-white/10 hidden md:block" size={60} />
//             </div>
//           </motion.div>

//           {/* RIGHT: DOWNLOAD AREA */}
//           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5">
//             <div className="bg-white rounded-[3.5rem] p-10 border border-maroon/5 shadow-2xl text-center flex flex-col items-center">
//               <div className="w-20 h-20 bg-cream rounded-[2rem] flex items-center justify-center text-maroon mb-8 shadow-inner"><UserPlus size={40}/></div>
//               <h3 className="text-2xl font-heading font-black text-maroon mb-4">Ready to Apply?</h3>
//               <p className="text-gray-400 text-xs font-bold leading-relaxed mb-10 uppercase tracking-widest px-4">Download, complete, and submit the form at the Temple Office.</p>
              
//               <a 
//                 href="/pdfs/membership-form-2025.pdf" 
//                 target="_blank" 
//                 className="w-full bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/30 transition-all flex items-center justify-center gap-3 active:scale-95"
//               >
//                 <FileDown size={18}/> Download Form 2025
//               </a>
//               <p className="mt-6 text-[9px] font-black text-maroon/30 uppercase tracking-widest">Application Form _Rev 2025</p>
//             </div>
//           </motion.div>

//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Mail, Info, ShieldCheck, UserPlus, MonitorSmartphone, X, UploadCloud, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

// --- 1. CUSTOM INPUT (NO NATIVE DATE PICKER) ---
const Input = ({ label, type = "text", value, onChange, error, placeholder = "" }: any) => (
  <div className="space-y-1.5 w-full text-left">
    <label className="text-[10px] font-bold text-maroon uppercase ml-1 tracking-widest flex items-center gap-1">
      {label} {error && <span className="text-red-500">*</span>}
    </label>
    <input 
      type={type} value={value} onChange={onChange} placeholder={placeholder}
      className={`w-full p-4 rounded-2xl bg-white text-sm font-semibold focus:outline-none transition-all ${
        error ? 'border-2 border-red-400 bg-red-50' : 'border border-maroon/10 focus:border-gold focus:ring-4 focus:ring-gold/10'
      }`} 
    />
    {error && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</p>}
  </div>
);

// --- 2. 100% CUSTOM DROPDOWN (NO NATIVE OS SELECT) ---
const CustomSelect = ({ label, options, value, onChange, error }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click Outside to Close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative space-y-1.5 w-full text-left" ref={dropdownRef}>
      <label className="text-[10px] font-bold text-maroon uppercase ml-1 tracking-widest flex items-center gap-1">
        {label} {error && <span className="text-red-500">*</span>}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 rounded-2xl bg-white cursor-pointer flex justify-between items-center text-sm font-semibold transition-all ${
          error ? 'border-2 border-red-400 bg-red-50' : isOpen ? 'border border-gold ring-4 ring-gold/10' : 'border border-maroon/10 hover:border-gold'
        }`}
      >
        <span className={value ? "text-black" : "text-gray-400"}>{value || `Select Option`}</span>
        <ChevronDown size={18} className={`text-maroon/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white shadow-2xl rounded-2xl border border-maroon/10 overflow-hidden"
          >
            <div className="max-h-48 overflow-y-auto p-2 no-scrollbar">
              {options.map((opt: string) => (
                <div 
                  key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} 
                  className={`p-3 rounded-xl cursor-pointer text-sm font-semibold transition-colors ${value === opt ? 'bg-maroon text-gold' : 'hover:bg-maroon/5 text-gray-700'}`}
                >
                  {opt}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-[10px] text-red-500 font-bold ml-1 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {error}</p>}
    </div>
  );
};


export default function MembershipPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FORM STATE
  const [formData, setFormData] = useState({
    appFirstName: "", appSurname: "",
    spouseFirstName: "", spouseSurname: "",
    address: "", postCode: "", mob: "", email: "",
    paymentMethod: "", paymentAmount: "", newsletter: "",
    introducerName: "", introducerNo: "",
    dec1: false, dec2: false, dec3: false, dec4: false,
    appSignature: "", appDate: "", spouseSignature: "", spouseDate: ""
  });

  const [errors, setErrors] = useState<any>({});

  // PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    if (isFormOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isFormOpen]);

  // VALIDATION LOGIC
  const validateForm = () => {
    let err: any = {};
    if (!formData.appFirstName) err.appFirstName = "First Name Required";
    if (!formData.appSurname) err.appSurname = "Surname Required";
    if (!formData.address) err.address = "Address Required";
    if (!formData.postCode) err.postCode = "Post Code Required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) err.email = "Email Required";
    else if (!emailRegex.test(formData.email)) err.email = "Invalid Email";

    if (!formData.mob) err.mob = "Mobile Required";
    else if (formData.mob.length < 8) err.mob = "Invalid Mobile Number";

    if (!formData.paymentMethod) err.paymentMethod = "Selection Required";
    if (!formData.newsletter) err.newsletter = "Selection Required";
    if (!formData.paymentAmount) err.paymentAmount = "Amount Required";
    if (!formData.introducerName) err.introducerName = "Introducer Name Required";
    if (!formData.introducerNo) err.introducerNo = "Introducer No Required";

    if (!formData.dec1) err.dec1 = "You must agree to this";
    if (!formData.dec2) err.dec2 = "You must agree to this";
    if (!formData.dec3) err.dec3 = "You must agree to this";
    if (!formData.dec4) err.dec4 = "You must agree to this";
    if (!formData.appSignature) err.appSignature = "Signature Required";
    if (!formData.appDate) err.appDate = "Date Required";

    setErrors(err);
    
    if (Object.keys(err).length > 0) {
      const modalBody = document.getElementById('modal-body');
      if(modalBody) modalBody.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
    }
  };

  return (
    <main className="bg-cream min-h-screen pb-20 overflow-hidden relative">
      <SubPageHero title="HSV Membership" subtitle="Join the Hindu Society of Victoria" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: CONTENT AREA */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-maroon/5 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-maroon mb-4 md:mb-6 italic">Life Membership Only</h2>
              <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed mb-6 md:mb-8">
                HSV now accepts applications for **Life Membership** only. The annual membership option is no longer available for new applicants.
              </p>
              
              <div className="bg-saffron/5 border border-saffron/20 rounded-[1.5rem] p-4 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <Info className="text-saffron shrink-0" size={24} />
                <p className="text-xs sm:text-sm font-bold text-maroon/70 leading-relaxed italic">
                  Important: Applications must be submitted before **28th February** to be eligible for voting rights during that calendar year.
                </p>
              </div>
            </div>

            <div className="bg-maroon rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold"><Mail size={24}/></div>
                <div>
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Enquiries Only</p>
                   <a href="mailto:secretary@hsvtemple.org.au" className="text-base sm:text-lg font-bold text-gold hover:underline break-all">secretary@hsvtemple.org.au</a>
                </div>
              </div>
              <ShieldCheck className="text-white/10 hidden sm:block" size={60} />
            </div>
          </motion.div>

          {/* RIGHT: ACTION AREA */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-6 sm:p-10 border border-maroon/5 shadow-2xl text-center flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cream rounded-2xl sm:rounded-[2rem] flex items-center justify-center text-maroon mb-4 sm:mb-6 shadow-inner"><UserPlus className="w-8 h-8 sm:w-10 sm:h-10"/></div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-maroon mb-3 sm:mb-4">Ready to Apply?</h3>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold leading-relaxed mb-6 sm:mb-8 uppercase tracking-widest px-2">
                Choose to apply entirely online or download the form to submit in person.
              </p>
              
              <button 
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/30 transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-95 mb-4"
              >
                <MonitorSmartphone size={18}/> Apply Online Now
              </button>

              <div className="flex items-center gap-4 w-full my-2">
                <div className="flex-1 h-px bg-maroon/10"></div>
                <span className="text-[10px] font-black text-maroon/30 uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-maroon/10"></div>
              </div>

              <a 
                href="/pdfs/membership-form-2025.pdf" 
                target="_blank" 
                className="w-full bg-white text-maroon border-2 border-maroon/10 hover:bg-cream py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-95"
              >
                <FileDown size={18}/> Download PDF Form
              </a>
              <p className="mt-4 sm:mt-6 text-[9px] font-black text-maroon/30 uppercase tracking-widest">Application Form _Rev 2025</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- ONLINE APPLICATION MODAL --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-cream w-full max-w-4xl h-full max-h-[90vh] md:max-h-[85vh] rounded-[1.5rem] md:rounded-[3rem] shadow-2xl relative z-10 flex flex-col overflow-hidden border border-gold/20"
            >
              {/* Modal Header */}
              <div className="bg-[#2D0A0A] text-white p-5 md:p-8 flex justify-between items-center shrink-0 border-b border-gold/20">
                <div>
                  <h3 className="text-lg md:text-2xl font-heading font-black italic text-gold leading-tight">Life Membership Application</h3>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 mt-1">Hindu Society of Victoria (Aust.) Inc.</p>
                </div>
                <button onClick={() => setIsFormOpen(false)} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-maroon transition-colors shrink-0"><X size={20}/></button>
              </div>

              {/* Modal Body (Scrollable Form) */}
              <div id="modal-body" className="p-4 sm:p-6 md:p-10 overflow-y-auto no-scrollbar flex-1 relative">
                
                {/* Global Error Banner */}
                {Object.keys(errors).length > 0 && !isSuccess && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl flex items-start gap-3">
                    <AlertCircle className="shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-bold text-sm">Form Incomplete</h4>
                      <p className="text-xs font-medium mt-1">Please fill in all the required fields marked with * before submitting.</p>
                    </div>
                  </div>
                )}

                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 pb-10">
                    
                    {/* SECTION 1 & 2 */}
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-maroon/5 shadow-sm">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest border-b border-maroon/10 pb-2 mb-6">1. Applicant & Spouse Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                        <Input label="Applicant's First Name" value={formData.appFirstName} onChange={(e:any)=>setFormData({...formData, appFirstName: e.target.value})} error={errors.appFirstName} />
                        <Input label="Applicant's Surname" value={formData.appSurname} onChange={(e:any)=>setFormData({...formData, appSurname: e.target.value})} error={errors.appSurname} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <Input label="Spouse's First Name (Optional)" value={formData.spouseFirstName} onChange={(e:any)=>setFormData({...formData, spouseFirstName: e.target.value})} />
                        <Input label="Spouse's Surname (Optional)" value={formData.spouseSurname} onChange={(e:any)=>setFormData({...formData, spouseSurname: e.target.value})} />
                      </div>
                    </div>

                    {/* SECTION 3 */}
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-maroon/5 shadow-sm">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest border-b border-maroon/10 pb-2 mb-6">2. Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="md:col-span-2">
                          <Input label="Full Address" value={formData.address} onChange={(e:any)=>setFormData({...formData, address: e.target.value})} error={errors.address} />
                        </div>
                        <Input label="Post Code" value={formData.postCode} onChange={(e:any)=>setFormData({...formData, postCode: e.target.value})} error={errors.postCode} />
                        <Input label="Mobile Number" value={formData.mob} onChange={(e:any)=>setFormData({...formData, mob: e.target.value})} error={errors.mob} />
                        <div className="md:col-span-2">
                          <Input label="Email Address" type="email" value={formData.email} onChange={(e:any)=>setFormData({...formData, email: e.target.value})} error={errors.email} />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4: Proof Upload */}
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-maroon/5 shadow-sm">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest mb-2">3. Proof of Residential Address *</h4>
                      <p className="text-[10px] md:text-xs text-gray-500 font-medium mb-4 italic">Submit your recent telephone, gas or electricity bill with your name and address.</p>
                      <div className="border-2 border-dashed border-maroon/20 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center bg-cream/50 cursor-pointer hover:bg-maroon/5 transition-colors">
                        <UploadCloud className="text-maroon/40 mb-2" size={32} />
                        <span className="text-xs md:text-sm font-bold text-maroon">Click to Upload Document</span>
                        <span className="text-[9px] md:text-[10px] text-gray-400 mt-1">PDF, JPG or PNG (Max 5MB)</span>
                      </div>
                    </div>

                    {/* SECTION 5: Payment Info (CUSTOM DROPDOWNS USED HERE) */}
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-maroon/5 shadow-sm">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest border-b border-maroon/10 pb-2 mb-6">4. Membership Payment</h4>
                      
                      <div className="bg-saffron/10 p-4 md:p-5 rounded-2xl border border-saffron/20 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div>
                          <p className="text-sm font-bold text-maroon">Life Member Fee (Single/Family)</p>
                          <p className="text-[10px] md:text-xs text-maroon/70 mt-1">Can be paid in full ($1000) or 5 instalments of $200 over 1 year.</p>
                        </div>
                        <span className="text-xl md:text-2xl font-black text-maroon">$1000.00</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        
                        <CustomSelect 
                          label="Intended Payment Method" 
                          options={["EFT (Bank Transfer)", "Credit Card (At Temple)", "Cash (At Temple)", "Cheque"]} 
                          value={formData.paymentMethod} 
                          onChange={(v:any)=>setFormData({...formData, paymentMethod: v})} 
                          error={errors.paymentMethod} 
                        />
                        
                        <Input label="Enclosed Amount ($)" placeholder="e.g. 1000 or 200" value={formData.paymentAmount} onChange={(e:any)=>setFormData({...formData, paymentAmount: e.target.value})} error={errors.paymentAmount} />
                        
                        <div className="md:col-span-2">
                          <CustomSelect 
                            label="Receive Newsletter by" 
                            options={["Email", "Mail (Post)"]} 
                            value={formData.newsletter} 
                            onChange={(v:any)=>setFormData({...formData, newsletter: v})} 
                            error={errors.newsletter} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 6 */}
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-maroon/5 shadow-sm">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest border-b border-maroon/10 pb-2 mb-6">5. Introducer Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <Input label="Introducer Full Name" value={formData.introducerName} onChange={(e:any)=>setFormData({...formData, introducerName: e.target.value})} error={errors.introducerName} />
                        <Input label="Membership No." value={formData.introducerNo} onChange={(e:any)=>setFormData({...formData, introducerNo: e.target.value})} error={errors.introducerNo} />
                      </div>
                    </div>

                    {/* SECTION 7: Declarations & Custom Text Dates */}
                    <div className="bg-maroon/5 p-5 md:p-8 rounded-3xl border border-maroon/10">
                      <h4 className="text-xs md:text-sm font-black text-maroon uppercase tracking-widest mb-6">6. Declarations & Signatures</h4>
                      
                      <div className="space-y-3 mb-8">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 bg-white transition-colors ${errors.dec1 ? 'border-red-500' : 'border-maroon/30 group-hover:border-maroon'}`}>
                            <input type="checkbox" checked={formData.dec1} onChange={(e)=>setFormData({...formData, dec1: e.target.checked})} className="w-full h-full opacity-0 absolute cursor-pointer peer" />
                            <CheckCircle2 size={14} className="text-maroon opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className={`text-xs font-medium leading-snug select-none ${errors.dec1 ? 'text-red-500' : 'text-maroon/80'}`}>I / We wish to become a Life Member of the Hindu Society of Victoria (Aust.) Inc.</span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 bg-white transition-colors ${errors.dec2 ? 'border-red-500' : 'border-maroon/30 group-hover:border-maroon'}`}>
                            <input type="checkbox" checked={formData.dec2} onChange={(e)=>setFormData({...formData, dec2: e.target.checked})} className="w-full h-full opacity-0 absolute cursor-pointer peer" />
                            <CheckCircle2 size={14} className="text-maroon opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className={`text-xs font-medium leading-snug select-none ${errors.dec2 ? 'text-red-500' : 'text-maroon/80'}`}>I / We agree to abide by the HSV's constitution and policies.</span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 bg-white transition-colors ${errors.dec3 ? 'border-red-500' : 'border-maroon/30 group-hover:border-maroon'}`}>
                            <input type="checkbox" checked={formData.dec3} onChange={(e)=>setFormData({...formData, dec3: e.target.checked})} className="w-full h-full opacity-0 absolute cursor-pointer peer" />
                            <CheckCircle2 size={14} className="text-maroon opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className={`text-xs font-medium leading-snug select-none ${errors.dec3 ? 'text-red-500' : 'text-maroon/80'}`}>I / We understand that our details can be used for HSV's business matters.</span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 bg-white transition-colors ${errors.dec4 ? 'border-red-500' : 'border-maroon/30 group-hover:border-maroon'}`}>
                            <input type="checkbox" checked={formData.dec4} onChange={(e)=>setFormData({...formData, dec4: e.target.checked})} className="w-full h-full opacity-0 absolute cursor-pointer peer" />
                            <CheckCircle2 size={14} className="text-maroon opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className={`text-xs font-medium leading-snug select-none ${errors.dec4 ? 'text-red-500' : 'text-maroon/80'}`}>I declare the above information is true and correct.</span>
                        </label>
                      </div>

                      {/* NO NATIVE DATE PICKER - REPLACED WITH FORMATTED TEXT INPUT */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <Input label="Applicant's Digital Signature" placeholder="Type Full Name" value={formData.appSignature} onChange={(e:any)=>setFormData({...formData, appSignature: e.target.value})} error={errors.appSignature} />
                        <Input label="Date" placeholder="DD / MM / YYYY" value={formData.appDate} onChange={(e:any)=>setFormData({...formData, appDate: e.target.value})} error={errors.appDate} />
                        <Input label="Spouse's Digital Signature (Optional)" placeholder="Type Full Name" value={formData.spouseSignature} onChange={(e:any)=>setFormData({...formData, spouseSignature: e.target.value})} />
                        <Input label="Date (Spouse)" placeholder="DD / MM / YYYY" value={formData.spouseDate} onChange={(e:any)=>setFormData({...formData, spouseDate: e.target.value})} />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-maroon to-[#4A0000] text-gold py-5 md:py-6 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all">
                      Submit Application
                    </button>
                  </form>
                ) : (
                  /* SUCCESS STATE */
                  <div className="flex flex-col items-center justify-center text-center py-10 md:py-20 h-full">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-inner"><CheckCircle2 size={40} className="md:w-[50px] md:h-[50px]"/></div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-maroon mb-4">Application Submitted!</h2>
                    <p className="text-gray-500 text-sm max-w-md">Your Life Membership application has been successfully sent to the HSV Committee. You will receive an email with further instructions.</p>
                    <button onClick={() => {setIsSuccess(false); setIsFormOpen(false);}} className="mt-8 md:mt-10 bg-maroon text-cream px-8 md:px-10 py-3 md:py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest">Close Window</button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
"use client";
import { useState } from "react";
import SubPageHero from "@/components/SubPageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, User, Building, Utensils, Library, AlertCircle, ChevronDown } from "lucide-react";

// --- 1. CUSTOM DROPDOWN (Defined Look) ---
const CustomSelect = ({ label, options, value, onChange, error }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative space-y-2 w-full">
      <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-[0.2em]">{label} *</label>
      <button 
        type="button" onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-5 rounded-2xl bg-[#F2EDE9] border-2 flex justify-between items-center text-sm font-bold transition-all duration-300 ${error ? 'border-red-500 shadow-md' : 'border-transparent hover:border-maroon/20 focus:border-maroon'}`}
      >
        <span className={value ? "text-maroon" : "text-gray-500"}>{value || "Select Target Manager"}</span>
        <ChevronDown size={18} className={`transition-transform duration-500 text-maroon/40 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 5 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 5 }}
            className="absolute z-[100] w-full mt-2 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.15)] rounded-3xl border border-gray-100 p-2 overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto no-scrollbar grid gap-1">
              {options.map((opt: string) => (
                <div 
                  key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} 
                  className="p-4 hover:bg-maroon hover:text-white rounded-2xl cursor-pointer text-xs font-black uppercase tracking-widest transition-all"
                >
                  {opt}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-[10px] text-red-500 font-bold ml-2 flex items-center gap-1 mt-1"><AlertCircle size={10}/> {error}</p>}
    </div>
  );
};

// --- 2. MAIN PAGE ---
export default function ContactUs() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", phone: "", manager: "", message: "" });
  const [errors, setErrors] = useState<any>({});

  const managers = [
    { title: "Temple Manager", name: "Mr. Jiva", email: "Manager@hsvtemple.org.au", phone: "03 9782 0878", icon: <User size={20}/> },
    { title: "Hall Bookings", name: "Kirupa / Rangarajan", email: "CHCManager@hsvtemple.org.au", phone: "0411 389 415", icon: <Building size={20}/> },
    { title: "Cafe & Catering", name: "Annapoorani Support", email: "Catering@hsvtemple.org.au", phone: "(03) 9783 0520", icon: <Utensils size={20}/> },
    { title: "Library & School", name: "Kugen Kugathasan", phone: "0430 366 909", icon: <Library size={20}/> }
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let e_list: any = {};
    if (!formData.fname) e_list.fname = "First name required";
    if (!formData.email.includes("@")) e_list.email = "Invalid email";
    if (!formData.manager) e_list.manager = "Choose manager";
    if (!formData.message) e_list.message = "Message required";
    setErrors(e_list);
    if (Object.keys(e_list).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kayalpiriya09@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("success"); else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <main className="bg-[#FDFBF7] min-h-screen pb-24 overflow-hidden">
      <SubPageHero title="Contact Hub" subtitle="Direct access to our Temple Management" />

      <section className="max-w-[1400px] mx-auto px-6 py-16">
        
        {/* TOP DIRECTORY SECTION - Spacing Reduced (mb-16) */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
            className="text-center mb-10"
          >
            <span className="text-gold font-black tracking-[0.4em] text-[9px] uppercase block mb-2">Sacred Administration</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-maroon italic">Temple Directory</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {managers.map((m, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="bg-white p-7 rounded-[2rem] border border-maroon/5 flex flex-col items-center text-center group hover:bg-maroon transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon group-hover:bg-white/10 group-hover:text-gold transition-colors mb-4">{m.icon}</div>
                <h4 className="text-[9px] font-black text-saffron group-hover:text-gold/60 uppercase tracking-widest mb-1">{m.title}</h4>
                <h3 className="text-lg font-heading font-bold text-maroon group-hover:text-white italic mb-4">{m.name}</h3>
                <div className="space-y-1">
                   {m.email && <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/40">{m.email}</p>}
                   <p className="text-xs font-black text-maroon group-hover:text-gold">{m.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* THE MESSAGE CENTER SECTION */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-[3.5rem] border border-maroon/5 shadow-2xl relative z-10"
          >
            <div className="text-center mb-12">
               <h3 className="text-3xl font-heading font-black text-maroon italic uppercase tracking-tighter">Send Inquiry</h3>
               <div className="w-16 h-1 bg-gold/30 mx-auto mt-4 rounded-full" />
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-20 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 mb-6 shadow-inner"><CheckCircle2 size={40} /></div>
                  <h3 className="text-2xl font-bold text-maroon">Message Sent Successfully</h3>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-saffron font-black text-[10px] uppercase underline underline-offset-8">New Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Inputs with Defined Muted Backgrounds */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" placeholder="John" value={formData.fname} onChange={(v:any)=>setFormData({...formData, fname:v})} error={errors.fname} />
                    <InputField label="Last Name" placeholder="Doe" value={formData.lname} onChange={(v:any)=>setFormData({...formData, lname:v})} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Email Address" placeholder="john@mail.com" value={formData.email} onChange={(v:any)=>setFormData({...formData, email:v})} error={errors.email} />
                    <InputField label="Phone" placeholder="+61 XXX XXX XXX" value={formData.phone} onChange={(v:any)=>setFormData({...formData, phone:v})} />
                  </div>

                  <CustomSelect label="Target Recipient" options={["Temple Manager", "Hall Booking", "Catering", "Library"]} value={formData.manager} onChange={(v:any)=>setFormData({...formData, manager:v})} error={errors.manager} />

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">Message Content *</label>
                    <textarea 
                      rows={4} placeholder="How can we assist you today?" 
                      className={`w-full bg-[#F2EDE9] p-6 rounded-3xl outline-none font-bold text-sm transition-all resize-none border-2 ${errors.message ? 'border-red-500':'border-transparent focus:border-maroon'}`} 
                      onChange={(e)=>setFormData({...formData, message: e.target.value})} 
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold ml-2">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" disabled={status === "submitting"}
                    className="w-full bg-maroon text-gold py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl disabled:opacity-50"
                  >
                    {status === "submitting" ? "PROCESSING..." : <><Send size={18}/> Transmit Inquiry</>}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// --- HELPER COMPONENT: Defined Input Field ---
function InputField({ label, placeholder, value, onChange, error }: any) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-[10px] font-black text-maroon uppercase ml-2 tracking-widest">{label} *</label>
      <input 
        type="text" placeholder={placeholder} value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#F2EDE9] p-5 rounded-2xl outline-none font-bold text-sm transition-all border-2 ${error ? 'border-red-500' : 'border-transparent focus:border-maroon'}`}
      />
      {error && <p className="text-[10px] text-red-500 font-bold ml-2 mt-1">{error}</p>}
    </div>
  );
}
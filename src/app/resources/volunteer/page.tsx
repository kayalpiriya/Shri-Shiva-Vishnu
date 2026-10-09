// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion } from "framer-motion";
// import { FileDown, ShieldCheck, UserPlus, Info, Mail } from "lucide-react";

// const formCards = [
//   { 
//     title: "General & Volunteer Policy", 
//     desc: "Please download the form and read the policy manual thoroughly.", 
//     file: "volunteer-policy.pdf",
//     updated: "25/12/2022",
//     icon: <ShieldCheck size={28} className="text-saffron"/>,
//     color: "bg-emerald-50 text-emerald-900 border-emerald-100"
//   },
//   { 
//     title: "Workplace Behavior Policy", 
//     desc: "Understand our workplace standards and behavioral expectations.", 
//     file: "Workplace_Behavior_Policy.pdf",
//     updated: "25/12/2022",
//     icon: <Info size={28} className="text-maroon"/>,
//     color: "bg-blue-50 text-blue-900 border-blue-100"
//   },
//   { 
//     title: "Volunteer Registration Form", 
//     desc: "Fill out the information and email it to the Secretary.", 
//     file: "Volunteer_Registration_Form_V1.pdf",
//     updated: "25/12/2022",
//     icon: <UserPlus size={28} className="text-gold"/>,
//     color: "bg-amber-50 text-amber-900 border-amber-100"
//   }
// ];

// export default function VolunteerForms() {
//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Volunteer Forms" subtitle="Join Our Divine Service Community" />

//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {formCards.map((item, idx) => (
//             <motion.div 
//               key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
//               className={`rounded-[3rem] p-10 border flex flex-col items-center text-center shadow-lg transition-all hover:-translate-y-2 ${item.color}`}
//             >
//               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">{item.icon}</div>
//               <h3 className="text-xl font-heading font-black uppercase tracking-tight mb-4">{item.title}</h3>
//               <p className="text-xs font-medium opacity-70 mb-8 leading-relaxed italic">{item.desc}</p>
              
//               <div className="mt-auto w-full space-y-4">
//                 <a href={`/pdfs/${item.file}`} target="_blank" className="w-full bg-white/80 backdrop-blur-sm border border-black/5 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
//                   <FileDown size={14}/> Download Manual
//                 </a>
//                 <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Updated: {item.updated}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* EMAIL SUBMISSION BOX */}
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 bg-white rounded-[3rem] p-10 md:p-16 border border-maroon/5 text-center shadow-sm">
//            <div className="w-16 h-16 bg-cream rounded-full mx-auto mb-6 flex items-center justify-center text-maroon"><Mail size={28}/></div>
//            <h3 className="text-2xl font-heading font-black text-maroon italic mb-4">How to Submit?</h3>
//            <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-8">
//              Once you have filled out the registration form, please send a scanned copy to our Secretary via email. Make sure you have read all policy manuals before sending.
//            </p>
//            <a href="mailto:Secretary@hsvtemple.org.au" className="text-saffron font-black text-lg tracking-tight underline underline-offset-8">Secretary@hsvtemple.org.au</a>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import { FileDown, ShieldCheck, UserPlus, Info, Mail } from "lucide-react";

const formCards = [
  { 
    title: "General & Volunteer Policy", 
    desc: "Please download the form and read the policy manual thoroughly.", 
    file: "volunteer-policy.pdf", // Sidebar-layum ithe name vaiyunga
    updated: "25/12/2022",
    icon: <ShieldCheck size={28} className="text-saffron"/>,
    color: "bg-emerald-50 text-emerald-900 border-emerald-100"
  },
  { 
    title: "Workplace Behavior Policy", 
    desc: "Understand our workplace standards and behavioral expectations.", 
    file: "workplace-policy.pdf", // Naan pera mathirukaen (Simple lowercase)
    updated: "25/12/2022",
    icon: <Info size={28} className="text-maroon"/>,
    color: "bg-blue-50 text-blue-900 border-blue-100"
  },
  { 
    title: "Volunteer Registration Form", 
    desc: "Fill out the information and email it to the Secretary.", 
    file: "registration-form.pdf", // Naan pera mathirukaen
    updated: "25/12/2022",
    icon: <UserPlus size={28} className="text-gold"/>,
    color: "bg-amber-50 text-amber-900 border-amber-100"
  }
];

export default function VolunteerForms() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Volunteer Forms" subtitle="Join Our Divine Service Community" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formCards.map((item, idx) => (
            <motion.div 
              key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className={`rounded-[3rem] p-10 border flex flex-col items-center text-center shadow-lg transition-all hover:-translate-y-2 ${item.color}`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">{item.icon}</div>
              <h3 className="text-xl font-heading font-black uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-xs font-medium opacity-70 mb-8 leading-relaxed italic">{item.desc}</p>
              
              <div className="mt-auto w-full space-y-4">
                {/* PDF Link - Ensure public/pdfs folder has these names */}
                <a href={`/pdfs/${item.file}`} target="_blank" rel="noopener noreferrer" className="w-full bg-white/80 backdrop-blur-sm border border-black/5 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
                  <FileDown size={14}/> Download Manual
                </a>
                <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Updated: {item.updated}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 bg-white rounded-[3rem] p-10 md:p-16 border border-maroon/5 text-center shadow-sm">
           <div className="w-16 h-16 bg-cream rounded-full mx-auto mb-6 flex items-center justify-center text-maroon"><Mail size={28}/></div>
           <h3 className="text-2xl font-heading font-black text-maroon italic mb-4">How to Submit?</h3>
           <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-8">
             Once you have filled out the registration form, please send a scanned copy to our Secretary via email. Make sure you have read all policy manuals before sending.
           </p>
           <a href="mailto:Secretary@hsvtemple.org.au" className="text-saffron font-black text-lg tracking-tight underline underline-offset-8">Secretary@hsvtemple.org.au</a>
        </motion.div>
      </section>
    </main>
  );
}
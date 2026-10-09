// "use client";
// import SubPageHero from "@/components/SubPageHero";
// import { motion, Variants } from "framer-motion";
// import { User, Mail, ShieldCheck } from "lucide-react";

// const managementData = {
//   president: { name: "Mrs. Inthirai Parameswaran", role: "President" },
//   vicePresidents: [
//     { name: "Mr. Aiyathurai Kirupakaran", role: "Vice President" },
//     { name: "Prof. Rajiv Padhye", role: "Vice President" }
//   ],
//   keyOfficials: [
//     { name: "Mr. Thayananthan Sujanthan", role: "Secretary" },
//     { name: "Mr. Selliah Nalliah", role: "Treasurer" },
//     { name: "Mr. Dorai Subramaniam", role: "Asst. Secretary" },
//     { name: "Mr. Kugaths Navaneetharajah", role: "Asst. Treasurer" }
//   ],
//   members: [
//     "Prof. Abbi Sharma", "Mrs. Geetha Rangarajan", "Mr. Kandasamy Arunakirinathan",
//     "Mr. Neelahari Ratnasothy", "Mr. Niroshan Rajakulendran", "Mrs. Ranjini Somasundaram",
//     "Mr. Rao Ram Munuganti", "Mr. Thevan San"
//   ]
// };

// export default function ManagementCommittee() {
//   const cardAnim: Variants = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <main className="bg-cream min-h-screen pb-20">
//       <SubPageHero title="Management Committee" subtitle="Divine Governance & Harmony" />

//       <section className="max-w-7xl mx-auto px-6 py-16">
//         {/* Intro Text */}
//         <motion.div 
//           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
//           className="max-w-3xl mx-auto text-center mb-20 bg-white p-8 rounded-[2rem] border-l-8 border-maroon shadow-sm"
//         >
//           <p className="text-gray-700 italic leading-relaxed">
//             "Our Management Committee oversees the spiritual and operational harmony of our temple. We are committed to serve our rich traditions, maintaining transparent governance and fostering a vibrant community."
//           </p>
//           <a href="mailto:committee@hsvtemple.org.au" className="mt-4 inline-block text-saffron font-black text-[10px] uppercase tracking-widest hover:text-maroon transition-colors">
//             committee@hsvtemple.org.au
//           </a>
//         </motion.div>

//         {/* President - Highlighted */}
//         <div className="flex justify-center mb-12">
//           <motion.div variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-maroon text-white p-8 rounded-[3rem] w-full max-w-sm text-center shadow-2xl relative overflow-hidden group">
//             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><ShieldCheck size={100} /></div>
//             <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-gold"><User size={40} /></div>
//             <h3 className="text-2xl font-heading font-bold italic text-gold">{managementData.president.name}</h3>
//             <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 text-white/60">{managementData.president.role}</p>
//           </motion.div>
//         </div>

//         {/* Vice Presidents & Officials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {[...managementData.vicePresidents, ...managementData.keyOfficials].map((person, idx) => (
//             <motion.div key={idx} variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-white p-8 rounded-[2.5rem] border border-maroon/5 text-center group hover:bg-cream transition-all">
//               <div className="w-16 h-16 bg-maroon/5 rounded-xl mx-auto mb-4 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all"><User size={28} /></div>
//               <h4 className="font-heading font-bold text-lg text-maroon">{person.name}</h4>
//               <p className="text-[9px] font-black text-saffron uppercase tracking-widest mt-1">{person.role}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Committee Members - Clean Grid */}
//         <h3 className="text-center text-2xl font-heading font-black text-maroon mb-10 uppercase italic">Committee Members</h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {managementData.members.map((name, idx) => (
//             <motion.div key={idx} variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-white/50 p-4 rounded-2xl border border-gray-100 text-center hover:bg-maroon hover:text-white transition-all cursor-default">
//               <p className="text-sm font-bold tracking-tight">{name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion, Variants } from "framer-motion";
import { User, Mail, ShieldCheck } from "lucide-react";

// Image paths-ai inga update pannikonga. E.g: "/images/president.jpg"
const managementData = {
  president: { 
    name: "Mrs. Inthirai Parameswaran", 
    role: "President", 
    image: "/images/image17.png" // Add image path here
  },
  vicePresidents: [
    { name: "Mr. Aiyathurai Kirupakaran", role: "Vice President", image: "/images/image18.png" },
    { name: "Prof. Rajiv Padhye", role: "Vice President", image: "/images/image18.png" }
  ],
  keyOfficials: [
    { name: "Mr. Thayananthan Sujanthan", role: "Secretary", image: "/images/image18.png" },
    { name: "Mr. Selliah Nalliah", role: "Treasurer", image: "/images/image18.png" },
    { name: "Mr. Dorai Subramaniam", role: "Asst. Secretary", image: "/images/image18.png" },
    { name: "Mr. Kugaths Navaneetharajah", role: "Asst. Treasurer", image: "/images/image18.png" }
  ],
  members: [
    { name: "Prof. Abbi Sharma", image: "/images/image18.png" }, 
    { name: "Mrs. Geetha Rangarajan", image: "/images/image17.png" }, 
    { name: "Mr. Kandasamy Arunakirinathan", image: "/images/image18.png" },
    { name: "Mr. Neelahari Ratnasothy", image: "/images/image18.png" }, 
    { name: "Mr. Niroshan Rajakulendran", image: "/images/image18.png" }, 
    { name: "Mrs. Ranjini Somasundaram", image: "/images/image18.png" },
    { name: "Mr. Rao Ram Munuganti", image: "/images/image18.png" }, 
    { name: "Mr. Thevan San", image: "/images/image18.png" }
  ]
};

export default function ManagementCommittee() {
  const cardAnim: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Management Committee" subtitle="Divine Governance & Harmony" />

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}
          className="max-w-3xl mx-auto text-center mb-20 bg-white p-8 rounded-[2rem] border-l-8 border-maroon shadow-sm"
        >
          <p className="text-gray-700 italic leading-relaxed">
            "Our Management Committee oversees the spiritual and operational harmony of our temple. We are committed to serve our rich traditions, maintaining transparent governance and fostering a vibrant community."
          </p>
          <a href="mailto:committee@hsvtemple.org.au" className="mt-4 inline-block text-saffron font-black text-[10px] uppercase tracking-widest hover:text-maroon transition-colors">
            committee@hsvtemple.org.au
          </a>
        </motion.div>

        {/* President - Highlighted */}
        <div className="flex justify-center mb-12">
          <motion.div variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-maroon text-white p-8 rounded-[3rem] w-full max-w-sm text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform"><ShieldCheck size={100} /></div>
            
            {/* Profile Image Added Here */}
            <div className="w-24 h-24 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-gold overflow-hidden border-2 border-gold/20 relative z-10">
              {managementData.president.image ? (
                <img src={managementData.president.image} alt={managementData.president.name} className="w-full h-full object-cover" />
              ) : (
                <User size={40} />
              )}
            </div>

            <h3 className="text-2xl font-heading font-bold italic text-gold relative z-10">{managementData.president.name}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 text-white/60 relative z-10">{managementData.president.role}</p>
          </motion.div>
        </div>

        {/* Vice Presidents & Officials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[...managementData.vicePresidents, ...managementData.keyOfficials].map((person, idx) => (
            <motion.div key={idx} variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-white p-8 rounded-[2.5rem] border border-maroon/5 text-center group hover:bg-cream transition-all">
              
              {/* Profile Image Added Here */}
              <div className="w-20 h-20 bg-maroon/5 rounded-2xl mx-auto mb-4 flex items-center justify-center text-maroon group-hover:border-maroon/20 transition-all overflow-hidden border border-transparent">
                {person.image ? (
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={32} className="group-hover:scale-110 transition-transform" />
                )}
              </div>

              <h4 className="font-heading font-bold text-lg text-maroon">{person.name}</h4>
              <p className="text-[9px] font-black text-saffron uppercase tracking-widest mt-1">{person.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Committee Members - Clean Grid */}
        <h3 className="text-center text-2xl font-heading font-black text-maroon mb-10 uppercase italic">Committee Members</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {managementData.members.map((member, idx) => (
            <motion.div key={idx} variants={cardAnim} initial="initial" whileInView="whileInView" viewport={{ once: false }} className="bg-white/50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 hover:bg-maroon hover:text-white transition-all cursor-default group">
              
              {/* Small Avatar Added for Members */}
              <div className="w-10 h-10 rounded-full bg-maroon/10 shrink-0 flex items-center justify-center text-maroon overflow-hidden group-hover:bg-white/20 group-hover:text-white transition-colors">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={16} />
                )}
              </div>

              <p className="text-sm font-bold tracking-tight text-left leading-tight">{member.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
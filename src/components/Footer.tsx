// "use client";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Heart, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#2D0A0A] text-white pt-20 pb-10 px-6 border-t border-gold/10">
//       <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-10">
        
//         {/* LOGO - iPad: 1 Col | Desktop: 3 Cols */}
//         <div className="md:col-span-1 lg:col-span-3 space-y-6">
//           <div className="flex items-center gap-3">
//             <div className="w-14 h-14 bg-maroon rounded-2xl flex items-center justify-center text-gold font-bold border-2 border-gold/30 shadow-2xl">HSV</div>
//             <h3 className="text-xl font-heading font-black text-gold tracking-tight italic uppercase">SHRI SHIVA VISHNU</h3>
//           </div>
//           <p className="text-white/50 text-xs leading-relaxed max-w-xs">Preserving traditions and serving the Victorian Hindu community since 1982.</p>
//         </div>

//         {/* EXPLORE - iPad: 1 Col | Desktop: 2 Cols */}
//         <div className="md:col-span-1 lg:col-span-2">
//           <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Explore</h4>
//           <ul className="grid gap-4 text-[11px] font-bold text-white/40 uppercase tracking-widest">
//             {['Home', 'About', 'Pooja', 'Facilities', 'Gallery', 'Contact'].map(l => (
//               <li key={l}><Link href="#" className="hover:text-gold transition-colors">{l}</Link></li>
//             ))}
//           </ul>
//         </div>

//         {/* CONTACT - iPad: 1 Col | Desktop: 3 Cols */}
//         <div className="md:col-span-1 lg:col-span-3 space-y-8">
//           <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Contact</h4>
//           <div className="space-y-6 text-xs text-white/60">
//             <div className="flex gap-3 items-start"><MapPin size={18} className="text-saffron shrink-0" /> <span>52 Boundary Rd, Carrum Downs <br/> Victoria 3201</span></div>
//             <div className="flex gap-3 items-center"><Phone size={18} className="text-saffron shrink-0" /> +61 3 9782 0878</div>
//             {/* <button className="w-full bg-saffron text-maroon py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-saffron/10">
//               <Heart size={16} fill="currentColor" /> Donate to Temple
//             </button> */}
//           </div>
//         </div>

//         {/* MAP - iPad: FULL WIDTH (3 cols) | Desktop: 4 Cols */}
//         <div className="md:col-span-3 lg:col-span-4 mt-8 lg:mt-0">
//           <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Temple Location</h4>
//           <div className="w-full h-64 rounded-[3rem] overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity shadow-2xl grayscale hover:grayscale-0 duration-1000">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.758410058356!2d145.18788477649534!3d-38.0759999719114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61175c2e1f4d9%3A0xc3c9b7e77840130!2sShri%20Shiva%20Vishnu%20Temple!5e0!3m2!1sen!2sau!4v1711200000000!5m2!1sen!2sau"
//               className="w-full h-full"
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//       </div>

//       <div className="max-w-[1500px] mx-auto pt-10 border-t border-white/5 text-center text-[9px] text-white/20 font-black uppercase tracking-[0.3em]">
//         © 2024 Hindu Society of Victoria. All Sacred Rights Reserved.
//       </div>
//     </footer>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // Links-ah array-va define panni paths-ah add pannirukaen
  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/management' },
    { name: 'Pooja', path: '/pooja-events/calendar' },
    { name: 'Facilities', path: '/facilities/reception' },
    { name: 'Gallery', path: '/resources/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#2D0A0A] text-white pt-20 pb-10 px-6 border-t border-gold/10">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-10">
        
        {/* LOGO - iPad: 1 Col | Desktop: 3 Cols */}
        <div className="md:col-span-1 lg:col-span-3 space-y-6">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="w-14 h-14 bg-maroon rounded-2xl flex items-center justify-center text-gold font-bold border-2 border-gold/30 shadow-2xl">HSV</div>
            <h3 className="text-xl font-heading font-black text-gold tracking-tight italic uppercase">SHRI SHIVA VISHNU</h3>
          </Link>
          <p className="text-white/50 text-xs leading-relaxed max-w-xs">Preserving traditions and serving the Victorian Hindu community since 1982.</p>
        </div>

        {/* EXPLORE - iPad: 1 Col | Desktop: 2 Cols */}
        <div className="md:col-span-1 lg:col-span-2">
          <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Explore</h4>
          <ul className="grid gap-4 text-[11px] font-bold text-white/40 uppercase tracking-widest">
            {exploreLinks.map((item) => (
              <li key={item.name}>
                {/* Ippo path correctly work aagum */}
                <Link href={item.path} className="hover:text-gold transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT - iPad: 1 Col | Desktop: 3 Cols */}
        <div className="md:col-span-1 lg:col-span-3 space-y-8">
          <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Contact</h4>
          <div className="space-y-6 text-xs text-white/60">
            <div className="flex gap-3 items-start hover:text-white transition-colors">
              <MapPin size={18} className="text-saffron shrink-0" /> 
              <span>52 Boundary Rd, Carrum Downs <br/> Victoria 3201</span>
            </div>
            <div className="flex gap-3 items-center hover:text-white transition-colors">
              <Phone size={18} className="text-saffron shrink-0" /> 
              <a href="tel:+61397820878">+61 3 9782 0878</a>
            </div>
          </div>
        </div>

        {/* MAP - iPad: FULL WIDTH (3 cols) | Desktop: 4 Cols */}
        <div className="md:col-span-3 lg:col-span-4 mt-8 lg:mt-0">
          <h4 className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-8 underline underline-offset-8 decoration-gold/30">Temple Location</h4>
          <div className="w-full h-64 rounded-[3rem] overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity shadow-2xl grayscale hover:grayscale-0 duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.758410058356!2d145.18788477649534!3d-38.0759999719114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61175c2e1f4d9%3A0xc3c9b7e77840130!2sShri%20Shiva%20Vishnu%20Temple!5e0!3m2!1sen!2sau!4v1711200000000!5m2!1sen!2sau"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="max-w-[1500px] mx-auto pt-10 border-t border-white/5 text-center text-[9px] text-white/20 font-black uppercase tracking-[0.3em]">
        © 2024 Hindu Society of Victoria. All Sacred Rights Reserved.
      </div>
    </footer>
  );
}
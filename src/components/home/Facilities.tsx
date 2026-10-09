"use client";
import { motion, Variants } from "framer-motion";
import { Coffee, BookOpen, Heart, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const facilities = [
  { name: "Café Annapoorani", desc: "Authentic South Indian vegetarian delicacies.", icon: <Coffee size={24} />, img: "/images/image5.png", link: "/facilities/cafe" },
  { name: "Museum & Library", desc: "Explore sacred texts and Vedic history.", icon: <BookOpen size={24} />, img: "/images/image6.png", link: "/facilities/museum" },
  { name: "Yoga & Meditation", desc: "Spiritual wellness in a serene environment.", icon: <Heart size={24} />, img: "/images/image7.png", link: "/facilities/yoga" },
  { name: "HSV Children School", desc: "Cultivating values and culture in young minds.", icon: <Users size={24} />, img: "/images/image8.png", link: "/facilities/school" }
];

export default function Facilities() {
  // Scroll panna panna thirumba thirumba animate aagum
  const cardAnim: Variants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-heading font-black text-maroon mb-10 text-center uppercase italic"
        >
          Sacred Facilities
        </motion.h2>

        {/* 
           SCROLL LOGIC (TOUCH PANNAVILLAI):
           sm:flex-row (iPhone Rotate & iPad scroll) | lg:grid (Desktop Grid)
        */}
        <div className="flex flex-col sm:flex-row sm:overflow-x-auto lg:grid lg:grid-cols-4 no-scrollbar gap-6 pb-6 sm:snap-x sm:snap-mandatory items-stretch">
          {facilities.map((item) => (
            <motion.div
              key={item.name}
              variants={cardAnim}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, amount: 0.2 }}
              // FIXED HEIGHT: h-[520px] kuduthirukaen, flex-shrink-0 height-a lock pannum
              className="w-full sm:w-[85%] md:w-[45%] lg:w-full h-[520px] flex-shrink-0 sm:snap-center relative rounded-[2.5rem] overflow-hidden group border border-gray-100"
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0 h-full w-full">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/20 to-transparent z-10 opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 h-full p-8 flex flex-col justify-end text-white text-left">
                <div className="w-14 h-14 bg-saffron rounded-2xl flex items-center justify-center text-maroon mb-4 shadow-lg transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-gold italic transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-sm text-white/70 leading-relaxed mb-6 line-clamp-2">
                  {item.desc}
                </p>

                <Link 
                  href={item.link} 
                  className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-saffron group-hover:gap-4 transition-all"
                >
                  Explore Facility <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
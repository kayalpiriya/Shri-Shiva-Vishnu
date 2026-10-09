"use client";
import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Preethika Padmanabhan", text: "Divine place, pandits are very down to earth. Canteen food is superbly priced.", tag: "Local Guide" },
  { name: "Bhagya Jayawardana", text: "Loved the place! The food was delicious, clean and tidy too. Highly recommended.", tag: "Frequent Visitor" },
  { name: "Sidarth Sentray", text: "Peaceful and wonderful experience. Calm atmosphere and delicious Prasad.", tag: "Local Guide" }
];

export default function Reviews() {
  const reviewAnim: Variants = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-cream/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-heading font-black text-maroon mb-12 uppercase italic tracking-tighter">What People Say</h2>
        
        {/* FIXED PEEK LOGIC FOR REVIEWS */}
        <div className="flex flex-col sm:flex-row sm:overflow-x-auto lg:grid lg:grid-cols-3 no-scrollbar gap-6 pb-10 sm:snap-x sm:snap-mandatory">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              variants={reviewAnim}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, amount: 0.2 }}
              // Card width 45% for iPad to show peek of 3rd card
              className="w-full sm:w-[85%] md:w-[45%] lg:w-full flex-shrink-0 sm:snap-center bg-white p-10 rounded-[2.5rem] border border-maroon/5 relative shadow-none"
            >
              <Quote className="text-maroon/5 absolute top-6 right-6" size={50} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FF9933" className="text-saffron" />)}
              </div>
              <p className="text-gray-600 italic text-sm mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-maroon text-gold rounded-2xl flex items-center justify-center font-black">{rev.name[0]}</div>
                <div>
                  <h4 className="font-black text-maroon text-sm uppercase">{rev.name}</h4>
                  <span className="text-[10px] text-saffron font-bold uppercase">{rev.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
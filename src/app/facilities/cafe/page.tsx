"use client";
import SubPageHero from "@/components/SubPageHero"; 
import { motion } from "framer-motion";
import { Utensils, InfoIcon, Coffee, ChefHat, Sparkles } from "lucide-react";

// --- MENU DATA EXTRACTION ---
const dosaVarieties = [
  { id: "1", name: "Plain Dosa", price: "$8.00" },
  { id: "2", name: "Masala Dosa", price: "$9.50" },
  { id: "3", name: "Ghee Rst Plain Dosa", price: "$9.00" },
  { id: "4", name: "Ghee Rst Masala Dosa", price: "$10.00" },
  { id: "5", name: "Mysore Plain Dosa", price: "$9.50" },
  { id: "6", name: "Mysore Masala Dosa", price: "$11.00" },
  { id: "7", name: "Onion Dosa", price: "$10.00" },
  { id: "8", name: "Cheese Dosa", price: "$10.00" },
  { id: "9", name: "Cheese dosa with Tomato/Capsicum", price: "$11.00" },
  { id: "10", name: "Set Dosa", price: "$11.00" },
  { id: "11", name: "Utthappam", price: "$10.00" },
];

const classicTiffins = [
  { id: "12", name: "Poori with Potato and Korma", price: "$11.00" },
  { id: "13", name: "Iddly (2)", price: "$7.00" },
  { id: "14", name: "Iddly (3)", price: "$9.00" },
  { id: "15", name: "Iddly (2) Vada (1)", price: "$9.00" },
  { id: "16", name: "Ghee Podi Iddly", price: "$8.50" },
  { id: "17", name: "Dahi Vada", price: "$7.50" },
  { id: "18", name: "Sambar Vada", price: "$6.50" },
];

const mealsAndSpecials = [
  { id: "19", name: "Chapatti With Korma", price: "$9.00" },
  { id: "20", name: "Parotta With Korma", price: "$8.50" },
  { id: "21", name: "Veg Biryani With Korma", price: "$12.50" },
  { id: "22", name: "Pongal with Vada", price: "$9.00", tag: "Weekend Lunch Only" },
  { id: "23", name: "Thali Meal", price: "$12.50", tag: "Weekend Lunch Only" },
  { id: "24", name: "Special Thali Meal", price: "$15.00", tag: "Weekend Lunch Only" },
];

const snacksAndDrinks = [
  { name: "Ulunthu Vadai", price: "$2.00" },
  { name: "Aloo Tikki/Aloo papdi Chaat", price: "$7.00" },
  { name: "Veg Rolls", price: "$3.00" },
  { name: "Veg Samosa", price: "$3.00" },
  { name: "Kachori", price: "$3.50" },
  { name: "Momos (3 pcs)", price: "$6.00" },
  { name: "Variety of Sweets", price: "$2.50/pcs" },
  { name: "Boondi Laddu/ Motichur Laddu", price: "$1.75" },
  { name: "Set Gulab Jamun (2)", price: "$5.00" },
  { name: "Mixture (250gm)", price: "$5.50" },
  { name: "Mixture (500 gm)", price: "$11.00" },
  { name: "Masala Tea", price: "$4.00" },
  { name: "Filtered Coffee", price: "$4.00" },
  { name: "Iced Coffee", price: "$4.00" },
  { name: "Rose milk", price: "$4.00" },
  { name: "Lassi-Mango/Plain", price: "$4.00" },
  { name: "Boondi Dana/Panjabi Chana Murki", price: "$5.00" },
  { name: "Canned drinks/Water bottle", price: "$2.50" },
  { name: "Kulfi- Mango, Pistachio, Rainbow", price: "$4.00" },
];

// Reusable Card Component for Main Menu Items
const MenuCard = ({ item, index }: { item: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.1 }} 
    className="bg-white rounded-3xl p-6 pt-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-maroon/5 hover:border-gold/50 hover:shadow-lg transition-all flex flex-col justify-between h-full relative group overflow-hidden"
  >
    <div className="absolute top-0 left-0 bg-maroon text-gold font-black px-4 py-1.5 rounded-br-2xl text-sm shadow-sm group-hover:bg-gold group-hover:text-maroon transition-colors">
      #{item.id}
    </div>

    <div>
      {item.tag && (
        <span className="inline-block bg-saffron/10 text-saffron text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-3 border border-saffron/20">
          {item.tag}
        </span>
      )}
      <h3 className="text-lg md:text-xl font-bold text-maroon leading-tight mt-1">{item.name}</h3>
    </div>
    
    <div className="mt-6 flex items-center justify-between border-t border-maroon/10 pt-4">
      <span className="text-maroon/50 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
        <Utensils size={12} /> Pure Veg
      </span>
      <span className="text-xl font-black text-saffron">{item.price}</span>
    </div>
  </motion.div>
);

export default function CafeAnnapoorani() {
  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero 
        title="Café Annapoorani" 
        subtitle="Divine Pure Vegetarian Cuisine" 
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-6 pt-12 relative z-20">
        
        {/* CUSTOMER NOTICE BANNER - Added sm: classes for iPhone Landscape */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-r from-maroon via-maroon to-[#4A0000] rounded-3xl p-6 md:p-8 shadow-xl border border-gold/30 flex flex-col sm:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto mb-20"
        >
          <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0 border border-gold/30">
            <InfoIcon className="text-gold w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-gold font-bold text-lg md:text-xl mb-2 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles size={16} /> Dear Customer
            </h3>
            <p className="text-cream/90 text-sm md:text-base font-medium leading-relaxed">
              We would appreciate if you could please <span className="text-gold font-bold">decide your order before reaching our counter.</span> This will save time for all customers and allow us to serve you better. Thank you so much!
            </p>
          </div>
        </motion.div>

        {/* MENU SECTIONS */}
        <div className="space-y-24">
          
          {/* CATEGORY 1: Dosas */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <ChefHat className="text-saffron w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-black text-maroon">Dosa <span className="text-gold italic">Varieties</span></h2>
              <div className="flex-1 h-px bg-gradient-to-r from-maroon/20 to-transparent ml-4" />
            </motion.div>
            {/* ADDED sm:grid-cols-2 for iPhone Landscape layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {dosaVarieties.map((item, idx) => (
                <MenuCard key={item.id} item={item} index={idx} />
              ))}
            </div>
          </section>

          {/* CATEGORY 2: Tiffins */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <Utensils className="text-saffron w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-black text-maroon">Classic <span className="text-gold italic">Tiffins</span></h2>
              <div className="flex-1 h-px bg-gradient-to-r from-maroon/20 to-transparent ml-4" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {classicTiffins.map((item, idx) => (
                <MenuCard key={item.id} item={item} index={idx} />
              ))}
            </div>
          </section>

          {/* CATEGORY 3: Meals & Specials */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <Sparkles className="text-saffron w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-black text-maroon">Meals & <span className="text-gold italic">Specials</span></h2>
              <div className="flex-1 h-px bg-gradient-to-r from-maroon/20 to-transparent ml-4" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {mealsAndSpecials.map((item, idx) => (
                <MenuCard key={item.id} item={item} index={idx} />
              ))}
            </div>
          </section>

          {/* CATEGORY 4: Snacks, Sweets & Beverages */}
          <section>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <Coffee className="text-saffron w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-black text-maroon">Snacks & <span className="text-gold italic">Beverages</span></h2>
              <div className="flex-1 h-px bg-gradient-to-r from-maroon/20 to-transparent ml-4" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-maroon/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                {snacksAndDrinks.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-maroon/5 hover:bg-maroon/5 px-4 rounded-xl transition-colors">
                    <span className="font-bold text-maroon/90 text-sm md:text-base">{item.name}</span>
                    <span className="font-black text-saffron">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </main>
  );
}
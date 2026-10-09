
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, User, Users, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20) setIsOpen(false); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-white border-b border-gray-100"
    }`}>
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LOGO SECTION - CORRECTED FOR BETTER VISIBILITY */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-maroon rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-maroon">
            <img 
              src="/images/image1.png" 
              alt="HSV Logo" 
              className="w-full h-full object-cover scale-110" // Scale koncham kootunaa emblem nalla theriyaum
              onError={(e) => e.currentTarget.style.display='none'} 
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-xl font-heading font-black text-maroon leading-tight tracking-tighter uppercase">
              Shri Shiva Vishnu
            </h1>
            <p className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-saffron uppercase leading-none mt-0.5">
              Hindu Society of Victoria
            </p>
          </div>
        </Link>

        {/* DESKTOP & IPAD LANDSCAPE MENU */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          <Link href="/" className="text-[11px] xl:text-[13px] font-bold text-gray-700 hover:text-maroon transition-colors uppercase">HOME</Link>
          {NAV_LINKS.map((item) => (
            <div 
              key={item.name} 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[11px] xl:text-[13px] font-bold text-gray-700 hover:text-maroon transition-all uppercase tracking-tight">
                {item.name} <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 w-60 pt-2"
                  >
                    <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2">
                      {item.subLinks.map((sub: any) => (
                        <div key={sub.name} className="relative group/nested">
                          {sub.nestedLinks ? (
                            <div className="flex items-center justify-between px-4 py-2.5 text-[12px] text-gray-600 hover:bg-maroon hover:text-white rounded-xl font-semibold transition-all cursor-pointer">
                              <Link href={sub.href} className="flex-1 uppercase">{sub.name}</Link>
                              <ChevronRight size={14} />
                              
                              <div className="absolute left-full top-0 pl-2 hidden group-hover/nested:block">
                                <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 min-w-[200px]">
                                  {sub.nestedLinks.map((nested: any) => (
                                    <Link key={nested.name} href={nested.href} className="block px-4 py-2.5 text-[11px] text-gray-600 hover:bg-maroon hover:text-white rounded-xl font-semibold uppercase">
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link href={sub.href} className="block px-4 py-2.5 text-[12px] text-gray-600 hover:bg-maroon hover:text-white rounded-xl font-semibold transition-all uppercase">
                              {sub.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link href="/contact" className="text-[11px] xl:text-[13px] font-bold text-gray-700 hover:text-maroon transition-colors uppercase">CONTACT</Link>
        </div>

        {/* ACTIONS & TOGGLE */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Link href="/login">
              <button className="bg-maroon text-white px-4 py-2 rounded-full text-[10px] xl:text-[12px] font-bold hover:bg-saffron transition-all active:scale-95"><Users size={14} className="inline mr-1"/> JOIN</button>
            </Link>
            <Link href="/login">
              <button className="border-2 border-maroon text-maroon px-4 py-2 rounded-full text-[10px] xl:text-[12px] font-bold hover:bg-maroon hover:text-white transition-all active:scale-95"><User size={14} className="inline mr-1"/> LOGIN</button>
            </Link>
          </div>
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-maroon active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE & IPAD PORTRAIT: FLOATING CARD MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} 
              className="fixed inset-0 top-[70px] bg-black/20 backdrop-blur-[2px] z-[90] lg:hidden" 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[94%] max-h-[75vh] bg-white z-[100] shadow-2xl rounded-[2rem] border border-gray-100 p-6 flex flex-col overflow-y-auto no-scrollbar lg:hidden"
            >
              <div className="space-y-4">
                <Link href="/" className="block text-base font-bold text-gray-800 border-b border-gray-50 pb-2 uppercase" onClick={() => setIsOpen(false)}>HOME</Link>
                {NAV_LINKS.map((item) => (
                   <MobileAccordion key={item.name} item={item} closeMenu={() => setIsOpen(false)} />
                ))}
                <Link href="/contact" className="block text-base font-bold text-gray-800 border-b border-gray-50 pb-2 uppercase" onClick={() => setIsOpen(false)}>CONTACT US</Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3">
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full bg-maroon text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest active:scale-95">JOIN US</button>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full border-2 border-maroon text-maroon py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest active:scale-95">LOGIN</button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Custom Mobile Accordion Component
const MobileAccordion = ({ item, closeMenu }: any) => {
  const [active, setActive] = useState(false);
  return (
    <div className="border-b border-gray-50 pb-2">
      <button onClick={() => setActive(!active)} className="w-full flex justify-between items-center text-base font-bold text-gray-800 uppercase text-left py-1">
        {item.name} <ChevronDown size={18} className={`transition-transform duration-300 ${active ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 mt-2 space-y-1 overflow-hidden">
            {item.subLinks.map((sub: any) => (
              <div key={sub.name}>
                {sub.nestedLinks ? (
                  <div className="py-1">
                     <p className="text-[12px] font-black text-maroon uppercase mb-1">{sub.name}</p>
                     {sub.nestedLinks.map((n: any) => (
                       <Link key={n.name} href={n.href} onClick={closeMenu} className="block pl-3 py-1.5 text-[14px] text-gray-500 font-semibold hover:text-maroon uppercase">{n.name}</Link>
                     ))}
                  </div>
                ) : (
                  <Link href={sub.href} onClick={closeMenu} className="block text-[14px] text-gray-500 font-semibold py-2 hover:text-maroon uppercase">{sub.name}</Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
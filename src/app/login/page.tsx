"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Phone, ArrowRight, Sparkles, ShieldCheck, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    // FIXED: Increased Padding Top (pt-40) and used a container that allows scrolling
    <main className="min-h-screen bg-cream relative overflow-y-auto overflow-x-hidden pt-32 md:pt-40 pb-20 px-4 md:px-8">
      
      {/* Background Decor - Made subtle for responsiveness */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-maroon/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-saffron/[0.07] rounded-full blur-[100px] pointer-events-none" />

      {/* --- MAIN SLIDING CONTAINER --- */}
      <motion.div 
        layout
        className={`mx-auto w-full max-w-5xl bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col 
          ${mode === 'login' ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
          border border-maroon/5 transition-all duration-700 ease-in-out min-h-[600px]`}
      >
        
        {/* --- VISUAL SIDE (MAROON BOX) --- */}
        <motion.div 
          layout
          className="w-full lg:w-1/2 bg-maroon relative p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden min-h-[300px] lg:min-h-full"
        >
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/p6-for-air.png')]" />
          
          {/* Header Link */}
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-gold transition-colors">
                <Sparkles className="text-gold" size={18} />
              </div>
              <span className="text-white font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                HSV Temple
              </span>
            </Link>
          </div>

          {/* Dynamic Content */}
          <div className="relative z-10 my-8 lg:my-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: mode === 'login' ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: mode === 'login' ? 30 : -30 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
              >
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white italic leading-tight mb-4">
                  {mode === 'login' ? (
                    <>Welcome to the <br/> <span className="text-gold">Divine Portal.</span></>
                  ) : (
                    <>Join our Sacred <br/> <span className="text-gold">Community.</span></>
                  )}
                </h2>
                <p className="text-white/60 font-medium leading-relaxed max-w-sm italic border-l-2 border-gold/30 pl-4 text-xs md:text-sm">
                  {mode === 'login' 
                    ? "Manage your spiritual offerings and stay connected with temple events."
                    : "Create an account to gain access to exclusive devotee services and historical archives."
                  }
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Security Badge */}
          <div className="relative z-10 flex items-center gap-3 text-[9px] font-black text-gold/60 uppercase tracking-widest">
            <ShieldCheck size={14} /> End-to-End Secure
          </div>
        </motion.div>

        {/* --- FORM SIDE (WHITE BOX) --- */}
        <motion.div layout className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {mode === 'login' ? (
                /* --- LOGIN FORM --- */
                <motion.div 
                  key="login-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-maroon italic mb-2 tracking-tight">Sign In</h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Devotee Access</p>
                  </div>

                  <form className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="email" placeholder="example@mail.com" className="w-full bg-cream/30 border border-maroon/5 p-4 pl-11 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-maroon/5 transition-all text-sm font-bold text-maroon" /></div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center px-1">
                        <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest">Password</label>
                        <button type="button" className="text-[9px] font-black text-saffron uppercase hover:underline">Forgot?</button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                        <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-cream/30 border border-maroon/5 p-4 pl-11 pr-11 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-maroon/5 transition-all text-sm font-bold text-maroon" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-maroon transition-colors">
                           {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    <button className="w-full bg-maroon text-gold py-4.5 md:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                      Access Portal <ArrowRight size={14} />
                    </button>
                  </form>

                  <div className="mt-10 text-center">
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mb-3">No account yet?</p>
                    <button onClick={() => setMode('signup')} className="text-maroon font-black text-[10px] uppercase tracking-widest hover:underline decoration-gold underline-offset-4">Create New Account</button>
                  </div>
                </motion.div>
              ) : (
                /* --- SIGNUP FORM --- */
                <motion.div 
                  key="signup-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-maroon italic mb-2 tracking-tight">Get Started</h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Join our divine community</p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="text" className="w-full bg-cream/30 border border-maroon/5 p-3.5 pl-11 rounded-2xl outline-none text-sm font-bold text-maroon" /></div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest ml-1">Phone</label>
                        <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="text" className="w-full bg-cream/30 border border-maroon/5 p-3.5 pl-11 rounded-2xl outline-none text-sm font-bold text-maroon" /></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="email" className="w-full bg-cream/30 border border-maroon/5 p-3.5 pl-11 rounded-2xl outline-none text-sm font-bold text-maroon" /></div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-maroon/60 uppercase tracking-widest ml-1">Password</label>
                      <div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="password" placeholder="••••••••" className="w-full bg-cream/30 border border-maroon/5 p-3.5 pl-11 rounded-2xl outline-none text-sm font-bold text-maroon" /></div>
                    </div>

                    <button className="w-full bg-maroon text-gold py-4.5 md:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                      Create My Account <ArrowRight size={14} />
                    </button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mb-3">Already a member?</p>
                    <button onClick={() => setMode('login')} className="text-maroon font-black text-[10px] uppercase tracking-widest hover:underline decoration-gold underline-offset-4">Sign In to Account</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
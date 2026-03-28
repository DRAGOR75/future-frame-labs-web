"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[var(--color-ffl-purple-dark)] text-white flex items-center justify-center relative overflow-hidden">
      
      {/* Bouncy Decorative Backgrounds */}
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 border-8 border-black bg-[var(--color-ffl-pink)] rounded-full z-0 opacity-80 mix-blend-screen mix-blend-color-dodge shadow-[8px_8px_0_#000]"
      />
      <motion.div 
        animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 border-8 border-black bg-[var(--color-ffl-purple-light)] rounded-full z-0 opacity-80 mix-blend-color-dodge shadow-[8px_8px_0_#000]"
      />

      <div className="max-w-2xl w-full z-10 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="high-impact bg-white p-8 md:p-12 text-black"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight">Let's <span className="text-[var(--color-ffl-pink)]">Talk</span></h1>
            <p className="text-lg md:text-xl font-bold text-zinc-600">No boring forms. We promise.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <motion.div whileTap={{ scale: 0.98 }}>
              <label className="block text-xl font-bold mb-2">What do we call you?</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full high-impact p-4 bg-[var(--color-ffl-purple-light)] text-xl font-bold placeholder-black/50 focus:outline-none focus:bg-white"
              />
            </motion.div>
            
            <motion.div whileTap={{ scale: 0.98 }}>
              <label className="block text-xl font-bold mb-2">Where can we reach you?</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full high-impact p-4 bg-[var(--color-ffl-pink)] text-white text-xl font-bold placeholder-white/70 focus:outline-none focus:bg-white focus:text-black"
              />
            </motion.div>
            
            <motion.div whileTap={{ scale: 0.98 }}>
              <label className="block text-xl font-bold mb-2">What's the big idea?</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your brand..." 
                className="w-full high-impact p-4 bg-[#fdf2f8] text-xl font-bold placeholder-black/50 focus:outline-none focus:bg-white"
              />
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="w-full impact-button py-4 md:py-5 text-xl md:text-2xl bg-[var(--color-ffl-purple)] text-white mt-6 md:mt-8 uppercase tracking-widest"
            >
              Send It 🔥
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

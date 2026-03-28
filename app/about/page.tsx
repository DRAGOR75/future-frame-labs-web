"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white text-black min-h-screen">
      {/* Infinite Marquee Top */}
      <div className="w-full bg-[var(--color-ffl-pink)] text-black py-4 transform -rotate-2 scale-105 border-y-4 border-black mb-20 z-10 relative shadow-[0_8px_0_#000]">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap text-5xl font-black uppercase tracking-widest gap-8"
        >
           {Array(6).fill(["INNOVATE OR DIE •", "DESIGN OUTLOUD •", "DATA DRIVEN DREAMS •", "STAY HUNGRY •"]).flat().map((text, i) => (
             <span key={i}>{text}</span>
           ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-32">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter text-center"
        >
          We Are <br/> <span className="text-[var(--color-ffl-purple)] high-impact bg-[var(--color-ffl-purple-light)] px-4 pb-2 mt-4 inline-block">Future Frame Labs</span>
        </motion.h1>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="high-impact bg-[var(--color-ffl-pink)] text-white p-8 md:p-12 mb-16 text-2xl font-bold leading-relaxed transform rotate-1"
        >
          <p>
            Started by a team of rebellious creatives and data nerds, Future Frame Labs was built on a simple premise: Most brands are boring. We fix that.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="high-impact bg-[var(--color-ffl-purple-light)] text-black p-8 md:p-12 text-2xl font-bold leading-relaxed transform -rotate-1"
        >
          <p>
            We don't do "safe." Safe doesn't get clicks. Safe doesn't go viral. Safe certainly doesn't maximize your ROI in an ecosystem where human attention spans are shorter than ever. We combine wildly imaginative aesthetics with relentless, data-driven performance.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Bottom */}
      <div className="w-full bg-[var(--color-ffl-purple)] text-white py-4 transform rotate-1 scale-105 border-y-4 border-black mt-20 z-10 relative shadow-[0_8px_0_#000]">
        <motion.div 
          animate={{ x: [-2000, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap text-5xl font-black uppercase tracking-widest gap-8"
        >
           {Array(6).fill(["STOP SCROLLING. START SCALING. •", "ATTENTION IS CURRENCY •", "MAKE THEM LOOK •", "CONVERT BROWSERS TO BUYERS •"]).flat().map((text, i) => (
             <span key={i}>{text}</span>
           ))}
        </motion.div>
      </div>
    </div>
  );
}

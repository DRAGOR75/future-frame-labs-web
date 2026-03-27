"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = ["🔥 EXPLOSIVE GROWTH", "✨ VIRAL CAMPAIGNS", "📈 DATA-DRIVEN", "🎨 NEO-BRUTAL DESIGN", "🚀 HYPER-SCALING"];
  return (
    <div className="w-full bg-[var(--color-ffl-pink)] text-black py-5 border-y-4 border-black relative shadow-[0_8px_0_#000] z-20 overflow-hidden transform rotate-1 scale-105 my-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex whitespace-nowrap text-3xl md:text-5xl font-black uppercase tracking-widest gap-12"
      >
        {Array(10).fill(items).flat().map((text, i) => (
          <span key={i}>{text} •</span>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const FloatingShape = ({ d, color, delay, className }: any) => (
  <motion.div
    animate={{ y: [0, -40, 0], rotate: [0, 20, -10, 0] }}
    transition={{ repeat: Infinity, duration: 7, delay, ease: "easeInOut" }}
    className={`absolute ${className} drop-shadow-[8px_8px_0_#000] z-0 pointer-events-none hidden md:block`}
  >
    <svg viewBox="0 0 100 100" className="w-24 h-24 lg:w-32 lg:h-32 overflow-visible">
      <path d={d} fill={color} stroke="#000" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  </motion.div>
);

const StarPath = "M 50 5 L 61 35 L 95 35 L 67 54 L 78 85 L 50 65 L 22 85 L 33 54 L 5 35 L 39 35 Z";
const CirclePath = "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z";
const PillPath = "M 30 20 l 40 0 a 30 30 0 0 1 0 60 l -40 0 a 30 30 0 0 1 0 -60 Z";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden relative">
      <FloatingShape d={StarPath} color="var(--color-ffl-pink)" className="top-1/4 left-[10%]" delay={0} />
      <FloatingShape d={PillPath} color="var(--color-ffl-purple-light)" className="bottom-1/3 left-[15%]" delay={1.5} />
      <FloatingShape d={CirclePath} color="var(--color-ffl-purple)" className="top-1/3 right-[10%]" delay={0.8} />
      <FloatingShape d={StarPath} color="#FFF" className="bottom-1/4 right-[15%]" delay={2.5} />

      <div className="max-w-4xl z-10 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="inline-block mb-6 high-impact bg-[var(--color-ffl-purple-light)] text-black px-6 py-2 font-bold transform -rotate-2"
        >
          Welcome to Future Frame Labs ✨
        </motion.div>
        
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight text-black dark:text-white"
        >
          {["We", "build"].map((word, i) => (
            <motion.span key={i} variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4 } } }} className="inline-block mr-4 md:mr-6">
              {word}
            </motion.span>
          ))}
          <br className="hidden md:block" />
          <motion.span variants={{ hidden: { scale: 0.5, opacity: 0, rotate: -15 }, visible: { scale: 1, opacity: 1, rotate: -2, transition: { type: "spring", bounce: 0.6 } } }} className="inline-block text-[var(--color-ffl-pink)] drop-shadow-[6px_6px_0_#171717] dark:drop-shadow-[6px_6px_0_#fff] mr-4 md:mr-6">
            brands
          </motion.span>
          {["that", "pop."].map((word, i) => (
            <motion.span key={i} variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4 } } }} className="inline-block mr-4 md:mr-6">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-medium"
        >
          Expert digital marketing, scalable ad campaigns, and wildly beautiful websites that convert like crazy.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#services" className="impact-button text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-[var(--color-ffl-pink)] text-white hover:-translate-y-1 hover:scale-105 hover:bg-[var(--color-ffl-purple)] transition-all">
            See What We Do
          </a>
          <a href="/contact" className="impact-button text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-white text-black hover:-translate-y-1 hover:scale-105 transition-all">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

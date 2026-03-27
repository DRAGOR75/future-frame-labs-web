"use client";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="py-32 px-6 bg-white text-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="neo-brutal bg-[var(--color-ffl-purple-light)] p-8 md:p-16 transform -rotate-1 shadow-[12px_12px_0_#000]"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            Stop blending in. <br/> <span className="text-[var(--color-ffl-purple)] bg-white px-4 neo-brutal inline-block mt-4 transform rotate-2">Stand out.</span>
          </h2>
          <div className="text-xl md:text-2xl font-medium space-y-6 max-w-3xl text-zinc-900">
            <p>The digital space is incredibly noisy. If your brand looks and sounds exactly like everyone else, you're completely invisible.</p>
            <p>At Future Frame Labs, we combine wildly creative "bubble gummy" aesthetics with brutal, undeniable performance data. We don't just make you look good—we make you impossible to ignore and incredibly profitable.</p>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="neo-brutal bg-[var(--color-ffl-pink)] text-white p-8 flex-1 transform rotate-2">
              <h3 className="text-4xl md:text-6xl font-black mb-2">150%</h3>
              <p className="font-bold text-xl uppercase tracking-wider">Average ROI Bump</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="neo-brutal bg-[var(--color-ffl-purple)] text-white p-8 flex-1 transform -rotate-2">
              <h3 className="text-4xl md:text-6xl font-black mb-2">24/7</h3>
              <p className="font-bold text-xl uppercase tracking-wider">Relentless Optimization</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

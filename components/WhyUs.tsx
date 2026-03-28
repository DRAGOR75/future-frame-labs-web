"use client";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-white text-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="high-impact bg-[var(--color-ffl-purple-light)] p-6 md:p-12 transform -rotate-1 shadow-[8px_8px_0_#000]"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            Stop blending in. <br/> <span className="text-[var(--color-ffl-purple)] bg-white px-3 md:px-4 high-impact inline-block mt-3 md:mt-4 transform rotate-2">Stand out.</span>
          </h2>
          <div className="text-lg md:text-xl font-medium space-y-6 max-w-3xl text-zinc-900">
            <p>The digital space is incredibly noisy. If your brand looks and sounds exactly like everyone else, you're completely invisible.</p>
            <p>At Future Frame Labs, we combine vibrant, high-engagement aesthetics with relentless, data-driven performance. We don't just make you look good—we make you impossible to ignore and incredibly profitable.</p>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="high-impact bg-[var(--color-ffl-pink)] text-white p-8 flex-1 transform rotate-2">
              <h3 className="text-4xl md:text-6xl font-black mb-2">150%</h3>
              <p className="font-bold text-xl uppercase tracking-wider">Average ROI Bump</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="high-impact bg-[var(--color-ffl-purple)] text-white p-8 flex-1 transform -rotate-2">
              <h3 className="text-4xl md:text-6xl font-black mb-2">24/7</h3>
              <p className="font-bold text-xl uppercase tracking-wider">Relentless Optimization</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

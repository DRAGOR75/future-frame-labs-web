"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const allServices = [
  { img: "/ads.png", title: "Digital Marketing", detail: "Hyper-targeted campaigns across Meta, TikTok, and Google. We don't just chase clicks; we chase revenue." },
  { img: "/web.png", title: "Web Engineering", detail: "Blazing fast, highly interactive applications built with Next.js, Framer Motion, and GSAP. Your site will feel alive." },
  { img: "/brand.png", title: "Brand Ecosystems", detail: "Creating visual language that speaks volumes. Logos, guidelines, and an identity that competitors fear." },
  { img: "/social.png", title: "Content & Community", detail: "Viral short-form content, expert community management, and relentless brand engagement to own your niche." },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[var(--color-ffl-purple-light)]">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-16 text-center high-impact inline-block px-10 py-6 bg-white transform rotate-2"
        >
          Our <span className="text-[var(--color-ffl-pink)]">Services</span>.
        </motion.h1>

        <div className="space-y-32">
          {allServices.map((svc, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <motion.div 
                whileHover={{ rotateY: i % 2 === 0 ? 15 : -15, rotateX: 10, scale: 1.05 }}
                className="w-full md:w-1/2 perspective-1000"
              >
                <div className="relative w-full aspect-square high-impact overflow-hidden bg-[var(--color-ffl-purple)] border-8 border-black shadow-[12px_12px_0_#000]">
                  <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="w-full md:w-1/2 p-8 high-impact bg-white"
              >
                <h2 className="text-5xl font-black mb-6 tracking-tight text-black">{svc.title}</h2>
                <p className="text-2xl font-medium mb-8 text-zinc-700 leading-relaxed">{svc.detail}</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="impact-button px-8 py-4 bg-[var(--color-ffl-pink)] text-white text-xl"
                >
                  Start {svc.title.split(' ')[0]}
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

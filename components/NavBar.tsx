"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto w-full bg-transparent"
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:-translate-y-1 transition-transform inline-block relative z-50">
          <div className="bg-white border-[3px] border-black p-1 shadow-[4px_4px_0_rgba(0,0,0,1)]">
            <Image 
              src="/ffl_logo_final.png" 
              alt="Future Frame Labs Logo" 
              width={120} 
              height={75} 
              className="object-contain w-[80px] md:w-[110px]"
            />
          </div>
        </Link>
        <div className="hidden md:flex gap-2 md:gap-4 items-center font-bold">
          <Link href="/about" className="impact-button px-4 md:px-6 py-2 bg-white text-zinc-900 border-black shadow-[4px_4px_0px_#171717]">
            About
          </Link>
          <Link href="/services" className="impact-button px-4 md:px-6 py-2 bg-[var(--color-ffl-purple-light)] text-zinc-900 border-black shadow-[4px_4px_0px_#171717]">
            Services
          </Link>
          <Link href="/contact" className="impact-button px-4 md:px-6 py-2 bg-[var(--color-ffl-pink)] text-white border-black shadow-[4px_4px_0px_#171717]">
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden impact-button p-3 bg-white text-black relative z-50 border-[3px] shadow-[3px_3px_0px_#171717]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--color-ffl-pink)] flex flex-col items-center justify-center gap-6 p-6"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-black impact-button bg-white w-full py-6 transform -rotate-1 shadow-[5px_5px_0_rgba(0,0,0,1)]">
              <span className="text-black">Home</span>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl font-black impact-button bg-[var(--color-ffl-purple-light)] w-full py-6 transform rotate-1 shadow-[5px_5px_0_rgba(0,0,0,1)]">
              <span className="text-black">About</span>
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-3xl font-black impact-button bg-white w-full py-6 transform -rotate-2 shadow-[5px_5px_0_rgba(0,0,0,1)]">
              <span className="text-black">Services</span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-black impact-button bg-[var(--color-ffl-purple)] w-full py-6 transform rotate-2 shadow-[5px_5px_0_rgba(0,0,0,1)]">
              <span className="text-white">Contact</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

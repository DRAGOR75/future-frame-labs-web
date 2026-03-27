"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto w-full bg-transparent"
    >
      <Link href="/" className="hover:-translate-y-1 transition-transform inline-block">
        <Image 
          src="/ffl_logo_final.png" 
          alt="Future Frame Labs Logo" 
          width={120} 
          height={75} 
          className="neo-brutal object-cover bg-white"
        />
      </Link>
      <div className="flex gap-2 md:gap-4 items-center font-bold">
        <Link href="/about" className="hover:text-[var(--color-ffl-pink)] transition-colors px-2 hidden sm:block">
          About
        </Link>
        <Link href="/services" className="neo-brutal-btn px-4 md:px-6 py-2 bg-[var(--color-ffl-purple-light)] text-zinc-900 border-black shadow-[4px_4px_0px_#171717]">
          Services
        </Link>
        <Link href="/contact" className="neo-brutal-btn px-4 md:px-6 py-2 bg-[var(--color-ffl-pink)] text-white border-black shadow-[4px_4px_0px_#171717]">
          Let's Talk
        </Link>
      </div>
    </motion.nav>
  );
}

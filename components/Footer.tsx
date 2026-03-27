import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-16 px-6 relative overflow-hidden text-center">
      {/* Neo-brutal top border effect */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[var(--color-ffl-pink)]"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <Link href="/" className="mb-6 hover:-translate-y-2 transition-transform cursor-pointer inline-block">
          <Image 
            src="/ffl_logo_final.png" 
            alt="Future Frame Labs Logo" 
            width={180} 
            height={112} 
            className="neo-brutal object-cover bg-white"
          />
        </Link>
        <p className="text-xl md:text-2xl mb-12 font-medium max-w-lg">
          Future Frame Labs. <br/>
          Building brands that pop.
        </p>
        
        <div className="flex gap-4 neo-brutal p-4 px-6 bg-[#25D366] text-white inline-block transform rotate-1 mb-8 hover:-translate-y-1 transition-transform cursor-pointer border-[3px] border-black drop-shadow-[5px_5px_0_rgba(0,0,0,1)]">
          <a href="https://wa.me/916299667147" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-black text-2xl tracking-wider uppercase">
            <MessageCircle fill="white" size={28} />
            WhatsApp Us
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a href="https://in.linkedin.com/company/future-frames-labs" target="_blank" rel="noopener noreferrer" className="neo-brutal px-8 py-4 bg-[var(--color-ffl-purple)] text-white hover:-translate-y-1 transition-transform cursor-pointer drop-shadow-[5px_5px_0_rgba(0,0,0,1)]">
            <span className="font-bold text-xl tracking-wider uppercase">LinkedIn</span>
          </a>
        </div>
        
        <div className="mt-16 text-zinc-400 font-medium">
          © {new Date().getFullYear()} Future Frame Labs. All rights reserved. Bubble gummy & brutal.
        </div>
      </div>
    </footer>
  );
}

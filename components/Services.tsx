"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const services = [
  {
    title: "Ads & Digital Marketing",
    desc: "We run data-driven, high-ROI ad campaigns that stop the scroll. Social media ads, search marketing... we make your sales go UP.",
    img: "/ads.png",
    color: "bg-[var(--color-ffl-pink)]",
    textColor: "text-white"
  },
  {
    title: "Beautiful Websites",
    desc: "Your digital storefront. We build blazing-fast web experiences that look like magic and convert browsers into buyers.",
    img: "/web.png",
    color: "bg-[var(--color-ffl-purple-light)]",
    textColor: "text-black"
  },
  {
    title: "Brand Identity",
    desc: "We don't just design logos; we craft entire brand ecosystems that make you unforgettable in a crowded market.",
    img: "/brand.png",
    color: "bg-white",
    textColor: "text-black"
  },
  {
    title: "Social Media Growth",
    desc: "Dominate your niche with viral content strategies, community management, and relentless audience engagement.",
    img: "/social.png",
    color: "bg-[var(--color-ffl-purple)]",
    textColor: "text-white"
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".service-card");
    
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-zinc-950 text-white selection:bg-[var(--color-ffl-pink)] selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8 neo-brutal inline-block px-8 py-4 bg-[var(--color-ffl-purple-light)] text-zinc-900 transform -rotate-1">
            Our Arsenal
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-zinc-300">
            We don't just do one thing. We provide an entire ecosystem of growth for your brand. Stop settling for less.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-10">
          {services.map((svc, i) => (
            <div key={i} className={`service-card neo-brutal ${svc.color} ${svc.textColor} p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300`}>
              <div className="w-48 h-48 flex-shrink-0 neo-brutal overflow-hidden border-4 border-black group relative">
                <Image src={svc.img} alt={svc.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col h-full flex-grow">
                <h3 className="text-3xl font-black mb-4 tracking-tight">{svc.title}</h3>
                <p className="text-lg font-medium mb-6 flex-grow">{svc.desc}</p>
                <Link href="/services" className={`neo-brutal-btn w-fit px-6 py-3 border-2 border-black ${svc.textColor === 'text-white' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

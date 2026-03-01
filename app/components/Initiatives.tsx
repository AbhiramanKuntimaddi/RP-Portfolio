"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, HeartHandshake, ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "ADSXCELL",
    role: "Founder",
    description:
      "A performance-driven digital advertising agency helping brands scale through data-backed campaigns, creative strategy, and measurable growth.",
    icon: Briefcase,
    link: "https://adsxcell.com",
  },
  {
    title: "HridaySpandana",
    role: "Founder",
    description:
      "A social initiative dedicated to helping the needy through organized blood donation drives, organ donation awareness, and community support programs.",
    icon: HeartHandshake,
    link: "https://hridayspandana.org/",
  },
];

export default function Initiatives() {
  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section id="initiatives" className="relative bg-brand-paper py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t border-brand-onyx/5">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-20 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent font-sans"
          >
            Initiatives
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="font-display text-4xl md:text-6xl tracking-tight text-brand-onyx leading-[1.1] mb-8 uppercase font-black"
          >
            Beyond Wealth <span className="italic font-light text-brand-accent/90 lowercase">Management</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeExpo }}
            className="text-lg leading-relaxed text-brand-muted font-sans max-w-2xl"
          >
            I channel my entrepreneurial drive into specialized ventures that create 
            meaningful impact—both commercially through digital scale and socially 
            through grassroots empowerment.
          </motion.p>
        </div>

        {/* INITIATIVES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: easeExpo }}
              className="group relative flex flex-col p-10 bg-white border border-brand-onyx/5 rounded-2xl transition-all duration-500 hover:border-brand-accent/40 hover:shadow-2xl"
            >
              <div className="mb-8 flex items-center gap-4 relative z-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-muted">
                  {item.role}
                </span>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="mb-4 text-2xl md:text-3xl font-display font-black text-brand-onyx uppercase group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm md:text-base leading-relaxed text-brand-muted font-sans opacity-80 group-hover:opacity-100 transition-opacity mb-10">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-onyx transition-all duration-300 group-hover:text-brand-accent"
                >
                  <span className="relative overflow-hidden inline-block h-[14px]">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                      Visit Initiative
                    </span>
                    <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-brand-accent">
                      Visit Initiative
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
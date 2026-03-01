"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "IRDAI Licensed",
    description:
      "Certified by the Insurance Regulatory and Development Authority of India to offer compliant insurance solutions.",
  },
  {
    icon: Award,
    title: "AMFI Registered",
    description:
      "Registered with the Association of Mutual Funds in India for professional mutual fund distribution.",
  },
  {
    icon: TrendingUp,
    title: "MDRT Qualified",
    description:
      "Recognized globally as a Million Dollar Round Table qualifier, a mark of the top financial professionals.",
  },
];

export default function About() {
  // Using your ease-expo from the CSS theme
  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section id="about" className="relative bg-brand-onyx py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="mb-20 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent"
          >
            About
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="font-display text-4xl md:text-6xl tracking-tight text-brand-paper leading-[1.1] mb-8"
          >
            A trusted partner for your <br />
            <span className="italic font-light text-brand-accent/90 lowercase">financial journey</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeExpo }}
            className="text-lg leading-relaxed text-brand-muted font-sans max-w-2xl"
          >
            With deep expertise across insurance, mutual funds, and wealth
            planning, Raghav brings a disciplined, client-first approach to every
            engagement. Every strategy is tailored — never templated.
          </motion.p>
        </div>

        {/* CREDENTIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: easeExpo }}
              className="group relative flex flex-col p-10 bg-brand-onyx border border-brand-light/10 rounded-2xl transition-all duration-500 hover:border-brand-accent/40 hover:bg-brand-onyx/50 shadow-2xl"
            >
              {/* Icon Container */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-onyx">
                <item.icon className="h-5 w-5" />
              </div>

              {/* Text Content */}
              <h3 className="mb-4 text-xl font-display font-bold text-brand-paper group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-brand-muted group-hover:text-brand-light transition-colors">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
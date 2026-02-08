"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Header() {
    const easeExpo = [0.19, 1, 0.22, 1] as const;

    return (
        <nav className="relative w-full bg-brand-paper py-10 px-6 md:px-16 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Logo Identity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: easeExpo }}>
                    <Link href="/" className="group block">
                        <h1 className="text-xl md:text-2xl font-display font-black tracking-tighter text-brand-onyx leading-none">
                            RAGHAV PUPPALA<span className="text-brand-accent group-hover:opacity-50 transition-opacity">.</span>
                        </h1>
                    </Link>
                </motion.div>

                {/* Navigation / CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: easeExpo, delay: 0.1 }}
                    className="flex items-center gap-4 md:gap-8">
                    
                    <div className="hidden lg:flex gap-10 mr-4">
                        <a
                            href="#services"
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-onyx/40 hover:text-brand-accent transition-colors">
                            Expertise
                        </a>
                        <a
                            href="#about"
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-onyx/40 hover:text-brand-accent transition-colors">
                            About
                        </a>
                    </div>

                    {/* New: Open Demat Account Button */}
                    <a
                        href="#" // Add the actual referral/opening link here
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] border border-brand-onyx/10 px-6 py-4 hover:border-brand-accent hover:text-brand-accent transition-all duration-500">
                        Open Demat Account
                        <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>

                    <a
                        href="#contact"
                        className="text-[10px] font-black uppercase tracking-[0.3em] bg-brand-onyx text-brand-paper px-8 py-4 hover:bg-brand-accent transition-all duration-500 shadow-xl shadow-brand-onyx/5">
                        Connect
                    </a>
                </motion.div>
            </div>
        </nav>
    );
}
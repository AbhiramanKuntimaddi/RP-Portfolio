"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const easeExpo = [0.19, 1, 0.22, 1] as const;

    const navLinks = [
        { name: "Expertise", href: "#services" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav className="relative w-full bg-brand-paper py-8 md:py-10 px-6 md:px-16 z-50">
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

                {/* Desktop Navigation */}
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden lg:flex gap-10 mr-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-onyx/40 hover:text-brand-accent transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] border border-brand-onyx/10 px-6 py-4 hover:border-brand-accent hover:text-brand-accent transition-all duration-500">
                        Open Demat Account
                        <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>

                    <a
                        href="#contact"
                        className="hidden md:flex text-[10px] font-black uppercase tracking-[0.3em] bg-brand-onyx text-brand-paper px-8 py-4 hover:bg-brand-accent transition-all duration-500 shadow-xl shadow-brand-onyx/5">
                        Connect
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-brand-onyx focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: easeExpo }}
                        className="absolute top-full left-0 w-full bg-brand-paper border-b border-brand-onyx/5 py-8 px-6 flex flex-col gap-6 shadow-2xl lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-black uppercase tracking-[0.3em] text-brand-onyx/60 hover:text-brand-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px bg-brand-onyx/5 w-full my-2" />
                        <a
                            href="#"
                            className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent"
                        >
                            Open Demat Account
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-brand-onyx text-brand-paper text-center py-4 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            Connect
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
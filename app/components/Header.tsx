"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const easeExpo = [0.19, 1, 0.22, 1] as const;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Expertise", href: "#services" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav className="relative w-full bg-brand-paper py-8 md:py-10 px-6 md:px-16 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: easeExpo }}>
                    <Link href="/" className="group block relative z-[70]">
                        <h1 className={`text-xl md:text-2xl font-display font-black tracking-tighter transition-colors duration-500 ${isOpen ? 'text-brand-onyx' : 'text-brand-onyx'}`}>
                            RAGHAV PUPPALA<span className="text-brand-accent group-hover:opacity-50 transition-opacity">.</span>
                        </h1>
                    </Link>
                </motion.div>

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

                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-brand-onyx z-[70] focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: easeExpo }}
                        className="fixed inset-0 bg-brand-paper z-[60] flex flex-col justify-center px-8 lg:hidden"
                    >
                        <div className="space-y-12">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent"
                            >
                                Navigation
                            </motion.p>
                            
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1), ease: easeExpo }}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-display font-black tracking-tighter text-brand-onyx hover:text-brand-accent transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="pt-12 border-t border-brand-onyx/5 flex flex-col gap-8"
                            >
                                <a
                                    href="#"
                                    className="text-xs font-black uppercase tracking-[0.2em] text-brand-onyx/40 flex items-center gap-2"
                                >
                                    Demat Account <ExternalLink className="w-3 h-3" />
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-brand-onyx text-brand-paper text-center py-5 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl"
                                >
                                    Connect
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
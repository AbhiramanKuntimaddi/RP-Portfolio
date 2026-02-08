"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    const easeExpo = [0.19, 1, 0.22, 1] as const;

    const containerVars = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.15, 
                delayChildren: 0.2,
                ease: easeExpo 
            },
        },
    };

    const fieldVars = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: easeExpo } 
        },
    };

    return (
        <section
            id="contact"
            className="relative bg-brand-paper py-32 md:py-48 px-6 md:px-16 overflow-hidden">
            
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: easeExpo }}
                    className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
                    <p className="text-brand-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-4 font-sans">
                        Get in Touch
                    </p>
                    <h2 className="text-5xl md:text-8xl font-display text-brand-onyx font-black leading-[0.9] mb-8">
                        Let&apos;s{" "}
                        <span className="italic font-light text-brand-accent lowercase block md:inline">
                            Connect
                        </span>
                    </h2>
                    <p className="text-brand-muted text-sm md:text-lg font-sans leading-relaxed">
                        Inquiries regarding financial consulting, digital strategy, or
                        philanthropic partnerships.
                    </p>
                </motion.div>

                <motion.form
                    variants={containerVars}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-12 md:gap-16 bg-white/40 backdrop-blur-md border border-brand-onyx/5 p-8 md:p-20 shadow-2xl shadow-brand-onyx/5">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        <motion.div variants={fieldVars} className="relative group">
                            <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted transition-all duration-500 group-focus-within:-translate-y-4 group-focus-within:text-brand-accent">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                className="w-full bg-transparent border-b border-brand-onyx/10 py-6 text-lg md:text-xl outline-none font-sans text-brand-onyx focus:border-brand-accent transition-all duration-700 placeholder:opacity-0 focus:placeholder:opacity-30"
                            />
                            <div className="absolute bottom-0 left-0 h-px bg-brand-accent w-0 group-focus-within:w-full transition-all duration-700 ease-out" />
                        </motion.div>

                        <motion.div variants={fieldVars} className="relative group">
                            <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted transition-all duration-500 group-focus-within:-translate-y-4 group-focus-within:text-brand-accent">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-brand-onyx/10 py-6 text-lg md:text-xl outline-none font-sans text-brand-onyx focus:border-brand-accent transition-all duration-700 placeholder:opacity-0 focus:placeholder:opacity-30"
                            />
                            <div className="absolute bottom-0 left-0 h-px bg-brand-accent w-0 group-focus-within:w-full transition-all duration-700 ease-out" />
                        </motion.div>
                    </div>

                    <motion.div variants={fieldVars} className="relative group">
                        <label className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted transition-all duration-500 group-focus-within:-translate-y-4 group-focus-within:text-brand-accent">
                            Your Message
                        </label>
                        <textarea
                            rows={4}
                            required
                            placeholder="How can I help?"
                            className="w-full bg-transparent border-b border-brand-onyx/10 py-6 text-lg md:text-xl outline-none font-sans text-brand-onyx focus:border-brand-accent transition-all duration-700 resize-none placeholder:opacity-0 focus:placeholder:opacity-30"
                        />
                        <div className="absolute bottom-0 left-0 h-px bg-brand-accent w-0 group-focus-within:w-full transition-all duration-700 ease-out" />
                    </motion.div>

                    <motion.div
                        variants={fieldVars}
                        className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em] font-black">
                                Response Time
                            </p>
                            <p className="text-xs text-brand-onyx/60 font-sans italic">
                                Expect a response within 24-48 business hours.
                            </p>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center justify-center bg-brand-onyx text-brand-paper px-16 py-6 font-black uppercase tracking-[0.5em] text-[11px] overflow-hidden transition-all duration-500 hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-accent/20 min-w-full md:min-w-70">
                            <span className="relative z-10 flex items-center gap-4">
                                Send Inquiry
                                <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
}
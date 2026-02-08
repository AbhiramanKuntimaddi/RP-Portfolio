"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { ROLES } from "@/app/constants/roles";

export default function Expertise() {
	const icons = [ShieldCheck, Zap, Globe];
	const easeExpo = [0.19, 1, 0.22, 1] as const;

	const containerVars = {
		initial: { opacity: 1 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVars = {
		initial: { opacity: 0, y: 40 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: easeExpo },
		},
	};

	return (
		<section
			id="expertise"
			className="relative bg-brand-paper py-32 md:py-48 px-6 md:px-16">
			<div className="max-w-400 mx-auto flex flex-col items-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 1.2, ease: easeExpo }}
					className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
					<p className="text-brand-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-4 font-sans">
						Strategic Expertise
					</p>
					<h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-brand-onyx font-black leading-none mb-8">
						The{" "}
						<span className="relative inline-block">
							<span className="italic font-light text-brand-accent lowercase relative z-10">
								Foundation
							</span>
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								viewport={{ once: true }}
								transition={{ duration: 1.5, delay: 0.8, ease: easeExpo }}
								className="absolute bottom-2 left-0 h-px bg-brand-accent/30"
							/>
						</span>{" "}
						of Value
					</h2>
					<p className="text-brand-muted text-sm md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
						Bridging financial security and digital growth through three focused
						professional pillars.
					</p>
				</motion.div>

				<motion.div
					variants={containerVars}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true, margin: "-50px" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
					{ROLES.map((role, index) => {
						const Icon = icons[index] || Zap;
						return (
							<motion.div
								key={role.id}
								variants={cardVars}
								whileHover={{ y: -10 }}
								className="group relative flex flex-col p-10 md:p-14 bg-white/50 hover:bg-white border border-brand-onyx/10 transition-colors duration-700 rounded-none overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

								<div className="flex flex-col mb-10 relative z-10">
									<div className="w-12 h-12 flex items-center justify-center bg-brand-paper border border-brand-onyx/5 group-hover:bg-brand-accent transition-all duration-500 mb-6">
										<Icon className="w-5 h-5 text-brand-accent group-hover:text-brand-paper transition-colors" />
									</div>

									<h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-muted group-hover:text-brand-accent transition-colors duration-500">
										{role.title}
									</h3>
								</div>

								<div className="text-3xl md:text-4xl font-display font-black text-brand-onyx leading-[0.9] mb-6 uppercase tracking-tighter relative z-10">
									{role.role.split(" ").map((word, i) => {
										const isAccent = [
											"Consultant",
											"Advertiser",
											"Founder",
											"Strategist",
										].includes(word);
										return (
											<span
												key={i}
												className={
													isAccent
														? "italic font-light text-brand-accent block lowercase mt-2 tracking-normal"
														: "block"
												}>
												{word}{" "}
											</span>
										);
									})}
								</div>

								<p className="text-brand-muted text-sm md:text-base leading-relaxed font-sans mb-10 opacity-80 group-hover:opacity-100 transition-opacity relative z-10">
									{role.description}
								</p>

								<div className="mt-auto relative z-10">
									<button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-brand-onyx group-hover:text-brand-accent transition-all duration-300">
										<span className="relative overflow-hidden inline-block">
											<span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
												Explore
											</span>
											<span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
												Explore
											</span>
										</span>
										<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
									</button>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

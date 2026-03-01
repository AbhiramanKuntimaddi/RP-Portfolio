"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Umbrella, Megaphone } from "lucide-react";

const services = [
	{
		icon: Heart,
		name: "HDFC Life",
		tag: "Life Insurance",
		description:
			"Comprehensive life insurance solutions including term plans, endowment policies, and ULIPs for long-term financial security.",
	},
	{
		icon: Shield,
		name: "TATA AIG",
		tag: "General Insurance",
		description:
			"Motor, health, travel, and property insurance backed by TATA AIG's trusted claims network and rapid settlements.",
	},
	{
		icon: Umbrella,
		name: "Star Health",
		tag: "Health Insurance",
		description:
			"Individual and family health plans with cashless hospitalization, comprehensive coverage, and hassle-free claim processes.",
	},
	{
		icon: Megaphone,
		name: "Digital Advertising",
		tag: "Marketing & Growth",
		description:
			"Strategic digital campaigns through ADSXCELL — performance marketing, brand building, and audience growth for businesses.",
	},
];

export default function Services() {
	const easeExpo = [0.19, 1, 0.22, 1] as const;

	return (
		<section
			id="services"
			className="relative bg-brand-paper py-24 md:py-32 px-6 md:px-16 overflow-hidden border-t border-brand-onyx/5">
			<div className="max-w-6xl mx-auto">
				{/* HEADER SECTION - Synchronized with About spacing */}
				<div className="mb-20 max-w-3xl">
					<motion.p
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent font-sans">
						Services
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: easeExpo }}
						className="font-display text-4xl md:text-6xl tracking-tight text-brand-onyx leading-[1.1] mb-8 uppercase font-black">
						My Core{" "}
						<span className="italic font-light text-brand-accent/90 lowercase">
							Focus
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.1, ease: easeExpo }}
						className="text-lg leading-relaxed text-brand-muted font-sans max-w-2xl">
						I specialize in two key pillars: personal financial resilience and
						business growth. My goal is to bridge the gap between where you are
						and where you need to be through disciplined, tailored strategies.
					</motion.p>
				</div>

				{/* 2x2 GRID - Consistent Card Design */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: index * 0.1, ease: easeExpo }}
							className="group relative flex flex-col p-10 bg-white border border-brand-onyx/5 rounded-2xl transition-all duration-500 hover:border-brand-accent/40 hover:shadow-2xl">
							<div className="mb-8 flex items-center gap-4 relative z-10">
								{/* Standardized Icon Box */}
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white">
									<service.icon className="h-5 w-5" />
								</div>

								{/* Service Tag */}
								<span className="rounded-full border border-brand-onyx/5 bg-brand-onyx/3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
									{service.tag}
								</span>
							</div>

							{/* Typography matched to Credentials heading */}
							<h3 className="mb-4 text-xl md:text-2xl font-display font-bold text-brand-onyx uppercase group-hover:text-brand-accent transition-colors relative z-10">
								{service.name}
							</h3>

							<p className="text-sm leading-relaxed text-brand-muted font-sans opacity-80 group-hover:opacity-100 transition-opacity relative z-10">
								{service.description}
							</p>

							{/* Hover Decorative Glow */}
							<div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

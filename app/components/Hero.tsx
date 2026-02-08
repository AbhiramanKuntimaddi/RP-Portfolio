"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowUpRight, Award } from "lucide-react";

export default function Hero() {
	const easeExpo = [0.19, 1, 0.22, 1] as const;

	const containerVars = {
		animate: {
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.2,
			},
		},
	};

	const itemVars = {
		initial: { opacity: 0, y: 40 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, ease: easeExpo },
		},
	};

	const maskVars = {
		initial: { width: "100%" },
		animate: {
			width: "0%",
			transition: { duration: 1.5, ease: easeExpo, delay: 0.4 },
		},
	};

	return (
		<section className="relative min-h-screen bg-brand-paper overflow-hidden flex items-center pt-32 pb-24 md:pt-0 md:pb-0">
			<div className="absolute inset-0 bg-brand-paper pointer-events-none" />

			<div className="max-w-400 mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-16 relative z-10 gap-16 md:gap-0">
				<div className="order-1 md:order-2 md:col-span-4 lg:col-span-5 relative flex items-center justify-center md:justify-end">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.8, ease: easeExpo }}
						className="relative w-[85%] md:w-[105%] lg:w-[95%] aspect-[3.2/4] md:aspect-[3.2/5]">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
							className="absolute inset-0 bg-brand-light -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6 -z-10"
						/>

						<div className="relative w-full h-full z-10 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
							<Image
								src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
								alt="Raghav Puppala"
								fill
								priority
								className="object-cover"
							/>
							<motion.div
								variants={maskVars}
								initial="initial"
								animate="animate"
								className="absolute inset-0 bg-brand-paper z-20"
							/>
						</div>
					</motion.div>
				</div>

				<div className="order-2 md:order-1 md:col-span-8 lg:col-span-7 relative z-30">
					<motion.div
						variants={containerVars}
						initial="initial"
						animate="animate">
						<motion.div variants={itemVars} className="relative mb-8">
							<h1 className="font-display text-[15vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85] md:leading-[0.8] tracking-[-0.04em] text-brand-onyx font-black uppercase">
								Raghav <br />
								<span className="text-brand-accent inline-block">Puppala</span>
							</h1>
						</motion.div>

						<motion.div
							variants={itemVars}
							className="flex flex-wrap items-center gap-4 mb-10 md:mb-14">
							<div className="bg-brand-onyx px-5 py-3 md:px-6 md:py-4">
								<p className="text-brand-paper text-[10px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold font-sans">
									Wealth,{" "}
									<span className="italic font-light text-brand-accent">
										handled
									</span>{" "}
									properly.
								</p>
							</div>

							<div className="border border-brand-accent px-4 py-3 md:px-6 md:py-4 flex items-center gap-3">
								<Award className="w-4 h-4 text-brand-accent" />
								<span className="text-brand-onyx text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-bold font-sans">
									MDRT Qualified
								</span>
							</div>
						</motion.div>

						<div className="md:ml-[1vw] max-w-xl space-y-10 md:space-y-12">
							<motion.div
								variants={itemVars}
								className="space-y-6 border-l-2 border-brand-accent/30 pl-6 md:pl-8">
								<p className="text-lg md:text-xl text-brand-onyx/80 leading-relaxed font-light font-sans">
									IRDAI & AMFI Licensed{" "}
									<span className="text-brand-onyx font-medium italic font-display">
										Wealth Strategist
									</span>{" "}
									& MDRT Qualified Financial Consultant. Founder of ADSXCELL &
									HridaySpandana.
								</p>

								<div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-sans">
									{[
										"HDFC Life",
										"TATA AIG",
										"Star Health",
										"Digital Advertising",
									].map((brand, i) => (
										<React.Fragment key={brand}>
											<p className="text-[10px] md:text-sm text-brand-muted uppercase tracking-[0.15em] font-bold">
												{brand}
											</p>
											{i !== 3 && (
												<span className="w-1.5 h-1.5 bg-brand-accent/30 rounded-full" />
											)}
										</React.Fragment>
									))}
								</div>
							</motion.div>

							<motion.div
								variants={itemVars}
								className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 md:gap-12 pt-4 font-sans">
								<a
									href="#contact"
									className="group relative flex justify-center items-center gap-6 px-10 py-5 bg-brand-accent text-brand-paper text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-onyx transition-all duration-500 shadow-xl shadow-brand-accent/20">
									<span className="relative z-10">Request Consultation</span>
									<ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:rotate-45" />
								</a>

								<a
									href="tel:+91XXXXXXXXXX"
									className="group flex items-center justify-center sm:justify-start gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-onyx transition-all py-4">
									<Phone className="w-4 h-4 text-brand-accent group-hover:scale-110 transition-transform" />
									<span className="group-hover:text-brand-accent transition-colors">
										Initiate Contact
									</span>
								</a>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

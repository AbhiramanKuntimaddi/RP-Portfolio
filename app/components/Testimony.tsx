"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/app/constants/testimonials";

export default function Testimony() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const easeExpo = [0.19, 1, 0.22, 1] as const;

	const isSlider = TESTIMONIALS.length > 1;

	const paginate = useCallback((newDirection: number) => {
		if (!TESTIMONIALS || TESTIMONIALS.length <= 1) return;
		setDirection(newDirection);
		setIndex(
			(prev) =>
				(prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length,
		);
	}, []);

	useEffect(() => {
		if (!isSlider) return;

		const timer = setInterval(() => {
			paginate(1);
		}, 8000);

		return () => clearInterval(timer);
	}, [isSlider, paginate]);

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
			filter: "blur(10px)",
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
			filter: "blur(0px)",
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 100 : -100,
			opacity: 0,
			filter: "blur(10px)",
		}),
	};

	return (
		<section
			id="testimony"
			className="relative bg-brand-paper py-24 md:py-40 px-6 md:px-16 overflow-hidden">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: easeExpo }}
					className="text-center mb-16 md:mb-24">
					<p className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 font-sans">
						Success Stories
					</p>
					<h2 className="text-4xl md:text-7xl font-display text-brand-onyx font-black">
						The{" "}
						<span className="italic font-light text-brand-accent">Impact</span>
					</h2>
				</motion.div>

				<div className="relative min-h-112.5 md:min-h-100 flex items-center justify-center">
					<AnimatePresence initial={false} custom={direction} mode="wait">
						<motion.div
							key={index}
							custom={direction}
							variants={isSlider ? variants : {}}
							initial={isSlider ? "enter" : { opacity: 0, y: 20 }}
							animate={isSlider ? "center" : { opacity: 1, y: 0 }}
							exit={isSlider ? "exit" : { opacity: 0 }}
							transition={{
								x: { type: "spring", stiffness: 200, damping: 25 },
								opacity: { duration: 0.5 },
								filter: { duration: 0.5 },
								y: { duration: 0.8, ease: easeExpo },
							}}
							className="absolute w-full flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-16 p-10 md:p-16 lg:p-20 bg-white/60 border border-brand-onyx/10 backdrop-blur-sm">
							<Quote className="w-12 h-12 md:w-16 md:h-16 text-brand-accent/20 shrink-0" />

							<div className="flex-1 text-center md:text-left">
								{/* Fallback to prevent undefined error if array is empty */}
								{TESTIMONIALS[index] && (
									<>
										<p className="text-xl md:text-2xl lg:text-3xl font-display text-brand-onyx leading-tight italic mb-10">
											&ldquo;{TESTIMONIALS[index].message}&rdquo;
										</p>

										<div className="flex items-center justify-center md:justify-start gap-6">
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: 40 }}
												transition={{ delay: 0.4, duration: 0.8 }}
												className="h-px bg-brand-accent"
											/>
											<p className="font-sans font-black text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-onyx">
												{TESTIMONIALS[index].name}
											</p>
										</div>
									</>
								)}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{isSlider && (
					<div className="flex items-center justify-center gap-12 mt-12 md:mt-20">
						<button
							onClick={() => paginate(-1)}
							className="group p-4 border border-brand-onyx/5 hover:border-brand-accent transition-all duration-300">
							<ChevronLeft className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors" />
						</button>

						<div className="flex items-baseline gap-1 font-display">
							<span className="text-xl font-black text-brand-onyx">
								{(index + 1).toString().padStart(2, "0")}
							</span>
							<span className="text-xs text-brand-muted uppercase tracking-widest font-sans font-bold">
								/ {TESTIMONIALS.length.toString().padStart(2, "0")}
							</span>
						</div>

						<button
							onClick={() => paginate(1)}
							className="group p-4 border border-brand-onyx/5 hover:border-brand-accent transition-all duration-300">
							<ChevronRight className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors" />
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

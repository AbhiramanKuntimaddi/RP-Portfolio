"use client";
import React from "react";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
	const socials = [
		{
			icon: <Facebook className="w-4 h-4" />,
			href: "https://www.facebook.com/raghavpuppala/",
			label: "Facebook",
		},
		{
			icon: <Instagram className="w-4 h-4" />,
			href: "https://www.instagram.com/raghavpuppala",
			label: "Instagram",
		},
		{
			icon: <Twitter className="w-4 h-4" />,
			href: "https://x.com/raghav366",
			label: "X (Twitter)",
		},
		{
			icon: <Linkedin className="w-4 h-4" />,
			href: "https://in.linkedin.com/in/raghavpuppala",
			label: "LinkedIn",
		},
	];

	return (
		<footer className="bg-brand-onyx text-brand-paper py-16 px-6 md:px-16 border-t border-brand-paper/5">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
				{/* Identity & Credits */}
				<div className="space-y-8">
					<div className="space-y-4">
						<h3 className="text-xl font-display font-black tracking-tighter">
							RAGHAV PUPPALA<span className="text-brand-accent">.</span>
						</h3>
						<div className="flex gap-6">
							{socials.map((social, i) => (
								<a
									key={i}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-paper/30 hover:text-brand-accent transition-colors duration-300"
									aria-label={social.label}>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					<div className="text-[9px] font-sans text-brand-paper/20 uppercase tracking-[0.3em] space-y-2">
						<div>
							<p>© {new Date().getFullYear()} Raghav Puppala</p>
							<p>All Rights Reserved</p>
						</div>
						<p className="pt-2 text-brand-paper/40">
							Website brought to life by{" "}
							<a
								href="https://akport26.vercel.app"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-paper/60 hover:text-brand-accent transition-colors underline-offset-4 hover:underline">
								Abhiraman Kuntimaddi
							</a>
						</p>
					</div>
				</div>

				{/* Essential Contact */}
				<div className="flex flex-col md:flex-row gap-8 md:gap-20">
					<div className="space-y-2">
						<p className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-accent">
							Call / Whatsapp
						</p>
						<p className="text-base font-display text-brand-paper/90 whitespace-nowrap">
							+91 73553 66366{" "}
							<span className="text-brand-paper/20 px-2">/</span> +91 98494
							37374
						</p>
					</div>
					<div className="space-y-2">
						<p className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-accent">
							Email
						</p>
						<a
							href="mailto:hello@raghavpuppala.com"
							className="text-base font-display hover:text-brand-accent transition-colors block">
							hello@raghavpuppala.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

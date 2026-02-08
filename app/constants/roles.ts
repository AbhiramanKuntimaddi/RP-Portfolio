export interface Role {
	id: string;
	title: string;
	role: string;
	description: string;
}

export const ROLES: Role[] = [
	{
		id: "finance",
		title: "Wealth Management",
		role: "MDRT Financial Consultant",
		description:
			"Architecting sustainable financial legacies through disciplined strategic planning and global expertise.",
	},
	{
		id: "digital",
		title: "Growth & Scale",
		role: "Digital Advertiser",
		description:
			"Harnessing data-driven advertising to scale brands and dominate modern digital landscapes.",
	},
	{
		id: "foundation",
		title: "Social Legacy",
		role: "Founder, HridaySpandana",
		description:
			"Leading philanthropic initiatives focused on heart-health and humanitarian support.",
	},
];

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Raghav Puppala | Strategic Consulting & Digital Growth",
    template: "%s | Raghav Puppala",
  },
  description:
    "Boutique financial consulting and digital strategy for the modern era. Bridging financial security with philanthropic partnerships.",
  keywords: ["Consulting", "Finance", "Digital Strategy", "Raghav Puppala", "Portfolio"],
  authors: [{ name: "Raghav Puppala" }],
  creator: "Raghav Puppala",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-paper selection:bg-brand-accent/20 selection:text-brand-onyx`}
      >
        {children}
      </body>
    </html>
  );
}
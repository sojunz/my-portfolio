import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "So Hyung | Full-Stack Developer",
  description: "Full-stack developer based in New Zealand, building clean and functional web applications.",
  openGraph: {
    title: "So Hyung | Full-Stack Developer based in New Zealand",
    description: "Full-stack developer based in New Zealand, building clean and functional web applications with React, Next.js, Node.js, and MongoDB. Open to new opportunities.",
    url: "https://my-portfolio-eight-gamma-68.vercel.app",
    siteName: "So Hyung Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "So Hyung",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "So Hyung | Full-Stack Developer",
    description: "Full-stack developer based in New Zealand, building clean and functional web applications.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
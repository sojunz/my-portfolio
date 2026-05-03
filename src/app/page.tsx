"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">
      <div className="max-w-2xl w-full">
        <motion.p
          className="text-sm text-gray-400 mb-2 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Full-Stack Developer
        </motion.p>
        <motion.h1
          className="text-6xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m<br />SoHyung.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-500 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build clean, functional web applications with a focus on great user experience.
          Based in New Zealand
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/projects" className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-500 transition">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

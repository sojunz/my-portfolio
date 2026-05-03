"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const skills = [
    "TypeScript", "JavaScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "Tailwind CSS",
  ];

  return (
    <main className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="flex items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profile.png"
            alt="So Hyung"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-gray-400 mb-1 tracking-widest uppercase">About Me</p>
            <h1 className="text-4xl font-bold text-gray-900">Who I am</h1>
          </div>
        </motion.div>
        <motion.p
          className="text-gray-500 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m a full-stack developer based in New Zealand, currently studying web development
          and building projects with the MERN stack and Next.js.
        </motion.p>
        <motion.p
          className="text-gray-500 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I enjoy creating clean, user-friendly applications and I&apos;m always looking to learn
          new technologies and improve my craft.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

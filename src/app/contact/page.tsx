"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Get In Touch</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-gray-500 leading-relaxed mb-12">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </motion.div>
        <div className="flex flex-col gap-4">
          <motion.a
            href="mailto:sinchonblues@gmail.com"
            className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-900 font-medium">sinchonblues@gmail.com</p>
            </div>
          </motion.a>
          <motion.a
            href="https://github.com/sojunz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-2xl">🐙</span>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-900 font-medium">github.com/sojunz</p>
            </div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sohyung-chang-35625a292/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-2xl">💼</span>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-gray-900 font-medium">linkedin.com/in/sohyung-chang</p>
            </div>
          </motion.a>
        </div>
      </div>
    </main>
  );
}

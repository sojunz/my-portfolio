"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ForgetMeNot",
    description:
      "A focus and task management app with AI-driven task prioritization using the Anthropic API. Features real JWT authentication and MongoDB user data.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Anthropic API"],
    live: "https://forgetmenot-fixed.vercel.app",
    github: "https://github.com/sojunz/forgetmenot-fixed",
  },
  {
    title: "HARU Todo App",
    description:
      "A clean todo app built while learning full-stack development. Note: authentication is currently placeholder-based — a proper JWT system is planned for a future update!",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://todo-app-rho-five-49.vercel.app",
    github: "https://github.com/sojunz/todo-app",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">My Work</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>
        </motion.div>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">
                    Live →
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

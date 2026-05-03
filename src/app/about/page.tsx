export default function About() {
    const skills = [
      "TypeScript", "JavaScript", "React", "Next.js",
      "Node.js", "Express", "MongoDB", "Tailwind CSS",
    ];
  
    return (
      <main className="min-h-screen px-8 py-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">About Me</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Who I am</h1>
          <p className="text-gray-500 leading-relaxed mb-4">
            I&apos;m a full-stack developer based in New Zealand, currently studying web development
            and building projects with the MERN stack and Next.js.
          </p>
          <p className="text-gray-500 leading-relaxed mb-12">
            I enjoy creating clean, user-friendly applications and I&apos;m always looking to learn
            new technologies and improve my craft.
          </p>
  
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
        </div>
      </main>
    );
  }
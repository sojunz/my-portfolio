export default function Contact() {
  return (
    <main className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Get In Touch</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
        <p className="text-gray-500 leading-relaxed mb-12">
          I&apos;m always open to new opportunities and collaborations.
          Feel free to reach out!
        </p>
        <div className="flex flex-col gap-4">
          <a href="mailto:sinchonblues@gmail.com" className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition">
            <span className="text-2xl">✉️</span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-900 font-medium">sinchonblues@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/sojunz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition">
            <span className="text-2xl">🐙</span>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-900 font-medium">github.com/sojunz</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sohyung-chang-35625a292/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-md transition">
            <span className="text-2xl">💼</span>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-gray-900 font-medium">linkedin.com/in/sohyung-chang</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

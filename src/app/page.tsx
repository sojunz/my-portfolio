export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">
      <div className="max-w-2xl w-full">
        <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Full-Stack Developer</p>
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Hi, I&apos;m<br />So Hyung.
        </h1>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          I build clean, functional web applications with a focus on great user experience.
          Based in New Zealand
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/projects" className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition">
            View Projects
          </a>
          <a href="/contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-gray-500 transition">
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}

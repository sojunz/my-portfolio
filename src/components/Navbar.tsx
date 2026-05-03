import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-white">
      <Link href="/" className="font-bold text-lg text-gray-900 hover:opacity-70 transition">
        So Hyung
      </Link>
      <ul className="flex gap-8 text-sm text-gray-500">
        <li><Link href="/about" className="hover:text-gray-900 transition">About</Link></li>
        <li><Link href="/projects" className="hover:text-gray-900 transition">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

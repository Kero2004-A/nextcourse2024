import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
  <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
  <nav className="flex justify-between items-center">
    <Link href="/">Home</Link>
  </nav>
  </header>
  );
}

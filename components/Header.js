"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow z-50">
      <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 animate-pulse drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-300">
        Artistly
      </h1>

      <nav className="space-x-4 text-base font-semibold">
        <Link
          href="/"
          className="text-black hover:text-blue-600 transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/artists"
          className="text-black hover:text-blue-600 transition duration-200"
        >
          Artists
        </Link>
        <Link
          href="/onboard"
          className="text-black hover:text-blue-600 transition duration-200"
        >
          Onboard
        </Link>
        <Link
          href="/dashboard"
          className="text-black hover:text-blue-600 transition duration-200"
        >
          Dashboard
        </Link>
         <ThemeToggle />
      </nav>
    </header>
  );
}
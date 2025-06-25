'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 animate-pulse drop-shadow hover:scale-105 transition duration-300"
        >
          Artistly
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-semibold">
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
          >
            Home
          </Link>
          <Link
            href="/artists"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
          >
            Artists
          </Link>
          <Link
            href="/onboard"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
          >
            Onboard
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-900 dark:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 font-semibold text-base shadow-inner">
          <Link
            href="/"
            className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/artists"
            className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Artists
          </Link>
          <Link
            href="/onboard"
            className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Onboard
          </Link>
          <Link
            href="/dashboard"
            className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-pink-400 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}

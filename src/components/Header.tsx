"use client";

import { useState } from "react";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            SavePay
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Acasă</Link>
            <Link href="/cum-functioneaza" className="hover:text-blue-600 dark:hover:text-blue-400">Cum funcționează</Link>
            <Link href="/preturi" className="hover:text-blue-600 dark:hover:text-blue-400">Prețuri</Link>
            <Link href="/despre" className="hover:text-blue-600 dark:hover:text-blue-400">Despre</Link>
            <Link href="/parteneri" className="hover:text-blue-600 dark:hover:text-blue-400">Parteneri</Link>
            <Link href="/roadmap" className="hover:text-blue-600 dark:hover:text-blue-400">Roadmap</Link>
          </nav>

          {/* Right side (dark mode + burger) */}
          <div className="flex items-center gap-3">
            <DarkToggle />

            {/* Burger button */}
            <button 
              onClick={() => setOpen(true)} 
              className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h20M4 14h20M4 21h20" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" 
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-[#161b22] shadow-xl z-50 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 mt-8 text-lg font-medium text-gray-700 dark:text-gray-300">

          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l14 14M20 6l-14 14" />
            </svg>
          </button>

          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Acasă</Link>
          <Link href="/cum-functioneaza" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Cum funcționează</Link>
          <Link href="/preturi" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Prețuri</Link>
            <Link href="/despre" className="hover:text-blue-600 dark:hover:text-blue-400">Despre</Link>
          <Link href="/parteneri" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Parteneri</Link>
          <Link href="/roadmap" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Roadmap</Link>
        </div>
      </div>
    </>
  );
}

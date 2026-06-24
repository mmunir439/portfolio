"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOpenSharp } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home", icon: <AiOutlineHome className="w-4 h-4" /> },
  { href: "/projects", label: "Projects", icon: <IoFolderOpenSharp className="w-4 h-4" /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb] shadow-sm">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="text-xl font-bold text-heading tracking-tight">
            M.<span className="text-primary">Munir</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link flex items-center gap-2 ${
                    isActive(href) ? "nav-link-active" : ""
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <Link href="/hire-me" className="btn-primary text-sm py-2.5 px-5">
                Hire Me
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <ul className="md:hidden pb-4 flex flex-col gap-1 border-t border-[#e5e7eb] pt-3">
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link flex items-center gap-2 ${
                    isActive(href) ? "nav-link-active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/hire-me" className="btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>
                Hire Me
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

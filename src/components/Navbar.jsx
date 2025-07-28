"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { IoFolderOpenSharp } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: <AiOutlineHome className="w-5 h-5 mr-2" />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <IoFolderOpenSharp className="w-5 h-5 mr-2" />,
  },
  {
    href: "/hire-me",
    label: "Hire Me",
    icon: null,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <nav className="bg-white px-6 py-4 shadow flex items-center justify-between relative">
      {/* Logo/Name */}
      <Link
        href="/"
        className="font-bold text-2xl text-gray-800 ml-[60px]"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        Muhmmmad M .
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-4 mr-[60px]">
        {navLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
                isActive(href)
                  ? "bg-green-50 text-green-700"
                  : "text-green-700 hover:bg-green-50"
              }`}
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 text-green-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-2 py-4 md:hidden z-50">
          {navLinks.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
                  isActive(href)
                    ? "bg-green-50 text-green-700"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
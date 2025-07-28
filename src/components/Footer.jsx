"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 px-8  text-sm bg-gray-100 text-gray-700 shadow-md">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          © 2025 Muhmmmad M. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/mmunir439"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/munirdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/hire-me", label: "Hire Me" },
  { href: "/certificates/resume", label: "Resume" },
];

const socialLinks = [
  { href: "https://github.com/mmunir439", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/munirdev/", label: "LinkedIn", icon: <FaLinkedin /> },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-[#e5e7eb]">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold text-heading mb-3">
              Muhammad <span className="text-primary">Munir</span>
            </h3>
            <p className="text-sm text-body leading-relaxed max-w-xs">
              Full Stack Developer building responsive web applications with React, Node.js, and modern deployment tools.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-body hover:text-primary transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#e8f5e6] text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-body mt-4">munir.webdev@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] mt-10 pt-6 text-center text-sm text-body">
          © {new Date().getFullYear()} Muhammad Munir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

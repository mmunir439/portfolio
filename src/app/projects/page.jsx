import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const projects = [
  {
    title: "SMART SCHOLARSHIP",
    subtitle: "Smart Scholarship Guidance System",
    description:
      "AI-powered platform helping Pakistani students discover, qualify, and apply to fully-funded scholarships in the USA and Europe with profile-based matching and application guidance.",
    image: null,
    tags: ["React", "Next.js", "Tailwind CSS", "AI", "Vercel"],
    href: "https://smart-scholarship-finder-frontend.vercel.app/",
  },
  {
    title: "RENTISTAAN",
    subtitle: "Rentistaan E-Commerce Store",
    description:
      "A full-featured, modern e-commerce application for premium rentals, built with React, Next.js, and Node.js.",
    image: "/assets/rent_logo.jpg",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    href: "https://rentistaan-front.vercel.app/",
  },
  {
    title: "MUNIRBOOKSTORE",
    subtitle: "Book E-Commerce Store",
    description:
      "Online booking store where people can browse and book their favorite items. Built with React and Tailwind CSS.",
    image: "/assets/books.jpg",
    tags: ["React", "Tailwind CSS"],
    href: "https://munirbookstore.example.com/",
  },
  {
    title: "BLOGSAPP",
    subtitle: "Blogs Application",
    description:
      "A platform for creating and sharing blogs with user authentication, comments, and tags.",
    image: "/assets/blogsapp.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://blogs-app-sigma-five.vercel.app/",
  },
  {
    title: "TODOAPP",
    subtitle: "Todo Application",
    description:
      "A simple and intuitive todo application for managing tasks, built with Next.js and MongoDB.",
    image: "/assets/todoapp.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://todoapp-frontend-beryl.vercel.app/",
  },
  {
    title: "CRIMINAL RECORD",
    subtitle: "Criminal Record Application",
    description:
      "Application for managing criminal records with user authentication and a robust backend.",
    image: "/assets/criminal.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://crime-checker-ai-2025-frontend-zeta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1 className="section-title mb-4">My Projects</h1>
            <p className="section-subtitle mx-auto">
              A collection of full-stack applications I&apos;ve built  from e-commerce to task management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1e0a52] to-[#599553] group-hover:scale-105 transition-transform duration-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e0a52]/85 via-[#34652c]/50 to-transparent flex flex-col justify-end p-4">
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <span className="text-white/80 text-sm">{project.subtitle}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-body text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

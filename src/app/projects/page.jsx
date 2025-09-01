import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// Dummy project data (add your real data and links)
const projects = [
  {
    title: "RENTISTAAN",
    subtitle: "Rentistaan E-Commerce Store",
    description:
      "A full-featured, modern e-commerce application for premium rentals, built with React, Next.js, and Node.js. Robust backend, seamless UX, and cloud asset management.",
    image: "/assets/rent_logo.jpg",  
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    href: "https://rentistaan-front.vercel.app/",
  },
  {
    title: "MUNIRBOOKSTORE",
    subtitle: "Book E-Commerce Store",
    description:
      "Online Booking Store where people can come and book their favorite shoes. Built with React and Tailwind CSS.",
    image: "/assets/books.jpg",
    tags: ["React", "Tailwind CSS"],
    href: "https://munirbookstore.example.com/", // Updated href
  },
  {
    title: "BlOGSAPP",
    subtitle: "Blogs Application",
    description:
      "A platform for creating and sharing blogs, with features like user authentication, comments, and tags. Built with Next.js and MongoDB.",
    image: "/assets/blogsapp.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://blogs-app-sigma-five.vercel.app/",
  },
  {
    title: "Todoapp",
    subtitle: "Todo Application",
    description:
      "A simple and intuitive todo application for managing tasks, built with Next.js and MongoDB.",
    image: "/assets/todoapp.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://todoapp-frontend-beryl.vercel.app/",
  },
  {
    title: "Criminal Record app",
    subtitle: "Criminal Record Application",
    description:
      "A simple and intuitive application for managing criminal records, built with Next.js and MongoDB.",
    image: "/assets/criminal.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://crime-checker-ai-2025-frontend-zeta.vercel.app/",
  },
  {
    title: "EBricks",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce platform for buying and selling products, with features like user authentication, product reviews, and a shopping cart. Built with Next.js and MongoDB.",
    image: "/assets/bricks.avif",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    href: "https://ebricks-pied.vercel.app/",
  },
  {
    title: "Eelectronics",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce platform for electronics products. Where user can buy online electronics products.",
    image: "/electronics.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "postman", "firebase", "shadcnui"],
    href: "https://ebricks-pied.vercel.app/",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div>  
      <Navbar />
    <div className="min-h-screen bg-[#f7faf7] py-10 px-2 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2e1a] mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <Link
              href={project.href}
              key={idx}
              target="_blank"
              className="bg-white rounded-2xl shadow hover:shadow-lg transition group flex flex-col overflow-hidden"
            >
              {/* Image with overlay and text */}
              <div className="relative rounded-xl overflow-hidden h-56 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-orange-900/60 flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-wide text-center px-2">
                    {project.title}
                  </h2>
                  <span className="text-lg text-white font-medium mt-1 text-center px-2">
                    {project.subtitle}
                  </span>
                </div>
              </div>
              {/* Project Title and Description */}
              <div className="flex flex-col justify-between flex-1 px-4 pb-4">
                <h3 className="font-bold text-lg text-[#1a2e1a] mb-2">
                  {project.title} | {project.subtitle}
                </h3>
                <p className="text-[#2C662C] text-sm mb-3">
                  {project.description}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
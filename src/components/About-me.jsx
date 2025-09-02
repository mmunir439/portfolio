"use client";
import { FaLeaf, FaGithub, FaHotel, FaLinkedin, FaEnvelope, FaDatabase, FaCloud, FaTools, FaProjectDiagram, FaQuoteRight, FaBook, FaBlog } from "react-icons/fa";
import React from "react";
// import { useSession } from "next-auth/react";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import Link from "next/link";

// SkillBar component
function SkillBar({ label, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-[#1a2e1a]">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-600 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

// Rotating questions for Q&A card
const questions = [
  "When building a MERN stack project, how do MongoDB, Express.js, React, and Node.js communicate with each other, and why is this combination widely used for full-stack development?",
  "In a MERN application, how should we structure the backend APIs in Express.js and connect them with the frontend React components to ensure smooth communication and scalability?",
  "What are some best practices for securing a MERN project, especially when using JWT for authentication and handling sensitive user data across frontend and backend?",
  "How can we optimize React performance in a MERN app by using techniques such as code-splitting, lazy loading, memoization, and state management with Redux or Context API?",
  "When deploying a MERN project, how do we handle server-side rendering with Next.js or React frameworks to improve SEO, performance, and user experience?",
  "In a real-world MERN stack project, how can developers collaborate effectively using Git, GitHub, project management tools, and proper communication practices to ensure smooth teamwork?",
];

export default function AboutMe() {
  const [currentQ, setCurrentQ] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQ((prev) => (prev + 1) % questions.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f7faf7] min-h-screen py-12 px-2 md:px-8">
      <div className="max-w-6xl mx-auto">
        

        <h1 className="font-roboto text-5xl md:text-6xl font-extrabold text-[#1a2e1a] mb-2">
          Muhammad Munir
        </h1>
        <h2 className="text-xl md:text-2xl text-[#2C662C] mb-8 font-roboto">
          MERN Stack Developer & Nature + Cooking Enthusiast
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* About Card */}
          <div className="bg-white rounded-2xl shadow p-8 flex-1 flex flex-col justify-center">
            <div>
              <div className="flex items-center mb-3">
                <FaLeaf className="text-[#2C662C] mr-2" />
                <span className="text-xl font-bold text-[#1a2e1a]">About Me</span>
              </div>
              <p className="text-[#2C662C] text-base md:text-lg">
                I'm a passionate web developer specializing in the MERN stack, crafting responsive and interactive websites. With a deep appreciation for nature and a love for cooking, I bring organic design principles and creativity to digital experiences.
              </p>
            </div>
          </div>
          {/* Photo Card with Social Icons */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-80 h-72 rounded-2xl overflow-hidden shadow">
              <img
                src="/assets/aboutme.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Social Icons Overlay */}
              <div className="absolute bottom-4 left-4 flex gap-4">
                <Link href={process.env.NEXT_PUBLIC_GITHUB_URL} className="text-white hover:text-green-200 text-2xl" aria-label="GitHub">
                  <FaGithub />
                </Link>
                <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL} className="text-white hover:text-green-200 text-2xl" aria-label="LinkedIn">
                  <FaLinkedin />
                </Link>
                <Link href={process.env.NEXT_PUBLIC_EMAIL_URL} className="text-white hover:text-green-200 text-2xl" aria-label="Email">
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Skills */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <span className="mr-2">{"</>"}</span>
              <span className="text-lg font-bold text-[#1a2e1a]">Frontend Skills</span>
            </div>
            <SkillBar label="React.js" percent={90} />
            <SkillBar label="Next.js" percent={85} />
            <SkillBar label="Tailwind CSS" percent={90} />
            <SkillBar label="Bootstrap" percent={85} />
            <SkillBar label="Responsive Design" percent={95} />
          </div>
          {/* Backend Skills */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <span className="mr-2">&#123;DB&#125;</span>
              <span className="text-lg font-bold text-[#1a2e1a]">Backend Skills</span>
            </div>
            <SkillBar label="Node.js" percent={90} />
            <SkillBar label="Express.js" percent={85} />
            <SkillBar label="MongoDB" percent={80} />
            <SkillBar label="MySQL" percent={75} />
            <SkillBar label="Deployments" percent={80} />
          </div>
          {/* Other Skills */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <span className="mr-2">🎨</span>
              <span className="text-lg font-bold text-[#1a2e1a]">Other Skills</span>
            </div>
            <SkillBar label="Teamwork" percent={90} />
            <SkillBar label="Problem Solving" percent={90} />
            <SkillBar label="API Integration" percent={85} />
            <SkillBar label="UI/UX Basics" percent={75} />
          </div>
        </div>
        {/* Projects & Q&A Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Project Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between min-h-[220px] h-full">
            <div>
              <div className="flex items-center mb-2 text-green-700 text-2xl">
                <FaProjectDiagram className="mr-2" />
                <span className="text-lg font-bold text-[#1a2e1a]">Featured Project</span>
              </div>
              <div className="mb-3">
                <span className="font-bold text-lg">Rentistaan</span>
                <p className="text-[#2C662C] mt-1">
                  A modern rental platform developed using ReactJS, Next.js, Node.js, and MongoDB. Integrated with Cloudinary for asset management and deployed on Vercel & Railway. Focused on seamless user experience and robust backend.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">ReactJS</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Next.js</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">MongoDB</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Cloudinary</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Vercel</span>
                <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Railway</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://rentistaan-front.vercel.app/"
                target="_blank"
                className="inline-flex items-center text-green-700 font-semibold hover:underline"
              >
                View Project
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Rotating Questions Card */}
          <div className="bg-green-700 rounded-2xl shadow p-6 flex flex-col justify-between min-h-[220px] h-full text-white relative overflow-hidden">
            <div className="flex items-center mb-2 text-2xl">
              <FaQuoteRight className="mr-2" />
              <span className="text-lg font-bold">Interview Q&A</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg italic text-white/90 transition-all duration-500">{questions[currentQ]}</p>
            </div>
            <div className="absolute right-4 bottom-4 opacity-10 text-7xl">
              <FaQuoteRight />
            </div>
          </div>
        </div>
        {/* Other Projects Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Booking Store Project */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <FaBook className="mr-2" />
              <span className="text-lg font-bold text-[#1a2e1a]">Booking Store</span>
            </div>
            <p className="text-[#2C662C] mb-2">
              A full-featured booking platform with real-time availability, secure payments, and user dashboards. Built with React, Node.js, and MySQL.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">ReactJS</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">MySQL</span>
            </div>
          </div>
          {/* Blog Project */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <FaBlog className="mr-2" />
              <span className="text-lg font-bold text-[#1a2e1a]">Blog Platform</span>
            </div>
            <p className="text-[#2C662C] mb-2">
              A modern blog platform supporting markdown, comments, and user authentication. Built with Next.js, MongoDB, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Next.js</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">MongoDB</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
            </div>
          </div>
          {/* Database & API Experience */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <FaDatabase className="mr-2" />
              <span className="text-lg font-bold text-[#1a2e1a]">Database & API Experience</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Databases:</span> <span className="text-[#2C662C]">MongoDB, MySQL, Cloudinary</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold">API Development:</span> <span className="text-[#2C662C]">RESTful APIs, GraphQL</span>
            </div>
            <div>
              <span className="font-semibold">Tools & Deployment:</span> <span className="text-[#2C662C]">Vercel, Railway, Postman, MongoDB Atlas</span>
            </div>
          </div>
        </div>
       {/* Currently Working On Section */}
<div className="mt-10">
  <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
    <div className="flex items-center mb-3 text-xl font-semibold">
      <span className="mr-2">🛒</span>
      Currently Working On
    </div>
    <p className="mb-4">
      Building <span className="font-bold">eGrocery</span>, an innovative e-commerce platform designed to simplify grocery shopping. The platform allows users to browse and order groceries online, track their orders in real-time, and enjoy a seamless shopping experience. With a focus on user convenience, secure payments, and efficient delivery, eGrocery aims to modernize the grocery industry.
    </p>
    <div className="flex flex-wrap gap-2">
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">ReactJS</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">Node.js</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">MongoDB</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">JWT Auth</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">APIS With Postman</span>
      <span className="bg-green-800/80 text-white px-3 py-1 rounded-full text-xs">Stripe Payment gateway</span>
    </div>
    {/* Decorative circle */}
    <span className="absolute right-8 bottom-0 w-40 h-40 rounded-full bg-green-900 opacity-20"></span>
  </div>
</div>
        {/* Other Projects Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Criminal Record App */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <FaDatabase className="mr-2" />
              <span className="text-lg font-bold text-[#1a2e1a]">Criminal Record App</span>
            </div>
            <p className="text-[#2C662C] mb-2">
              A secure application to find criminal records based on CNIC. Features user authentication and a robust backend for data management.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">ReactJS</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">MongoDB</span>
            </div>
          </div>
          {/* Todo App */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <div className="flex items-center mb-2 text-green-700 text-2xl">
              <FaBook className="mr-2" />
              <span className="text-lg font-bold text-[#1a2e1a]">Todo App</span>
            </div>
            <p className="text-[#2C662C] mb-2">
              A simple and efficient task management app to organize daily activities. Built with a focus on user-friendly design and functionality.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">ReactJS</span>
              <span className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
            </div>
          </div>
        </div>
        {/* Certifications Section */}
        <div className="mt-10">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="text-green-700 mr-2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 12l2 2l4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-xl font-bold text-[#1a2e1a]">Certifications</span>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Certification 1 */}
              <div>
                <div className="flex items-center mb-1 text-green-700">
                  <svg className="mr-1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 10l2 2l4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="font-semibold">Full Stack MERN</span>
                </div>
                <div className="text-green-900 text-sm">NAVTTC (Islamabad), 2025</div>
              </div>
              {/* Certification 2 */}
              <div>
                <div className="flex items-center mb-1 text-green-700">
                  <svg className="mr-1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 10l2 2l4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="font-semibold">Advanced React & Redux</span>
                </div>
                <div className="text-green-900 text-sm">Frontend Masters, 2024</div>
              </div>
              {/* Certification 3 */}
              <div>
                <div className="flex items-center mb-1 text-green-700">
                  <svg className="mr-1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 10l2 2l4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="font-semibold">UI/UX Design Fundamentals</span>
                </div>
                <div className="text-green-900 text-sm">freeCodeCamp, 2023</div>
              </div>
              {/* Certification 4 */}
              <div>
                <div className="flex items-center mb-1 text-green-700">
                  <svg className="mr-1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M6 10l2 2l4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="font-semibold">Responsive Web Design</span>
                </div>
                <div className="text-green-900 text-sm">freeCodeCamp, 2024</div>
              </div>
            </div>
          </div>
        </div>
        {/* When I'm Not Coding Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a2e1a] mb-6">When I'm Not Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hiking Card */}
            <div className="relative rounded-2xl overflow-hidden h-56 shadow group">
              <img
                src="/assets/centourus.jpeg"
                alt="Touring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <div className="flex items-center mb-1 text-white text-lg font-semibold">
                  <FaHotel className="mr-2" /> Touring
                </div>
                <div className="text-white text-sm">Exploring Centaurus in Islamabad with my foreign friends was an exciting adventure—we strolled through the trails, uncovered hidden waterfalls, and shared the beauty of the city together.</div>
              </div>
            </div>
            {/* Photography Card */}
            <div className="relative rounded-2xl overflow-hidden h-56 shadow group">
              <img
                src="/assets/pizzaparty.jpeg"
                alt="Photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <div className="flex items-center mb-1 text-white text-lg font-semibold">
                  {/* Icon placeholder */}
                  {/* You can use FaUtensils here if you want a food icon */}
                  Dining
                </div>
                <div className="text-white text-sm">Spending a wonderful day at the restaurant with my teacher and friends—great food, meaningful conversations, and lots of laughs. Truly a refreshing break!</div>
              </div>
            </div>
            {/* Food Explorer Card */}
            <div className="relative rounded-2xl overflow-hidden h-56 shadow group">
              <img
                src="/assets/history.jpeg"
                alt="Food Explorer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <div className="flex items-center mb-1 text-white text-lg font-semibold">
                  <MdOutlineHistoryToggleOff className="mr-2" /> Heritage Seeker
                </div>
                <div className="text-white text-sm">As a history explorer, I visited a place in Islamabad that brought Pakistan’s past to life—from Quaid-e-Azam to the British era, Islamic leaders, and the spirit of 14th August 1947.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="mt-10">
          <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-10 shadow-lg text-white text-center relative overflow-hidden flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Work Together?</h2>
            <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link
              href="/hire-me"
              className="inline-flex items-center bg-white text-green-800 font-semibold px-8 py-3 rounded-full shadow hover:bg-green-50 transition text-lg"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {/* Decorative circles */}
            <span className="absolute left-8 bottom-0 w-48 h-48 rounded-full bg-green-900 opacity-20"></span>
            <span className="absolute right-8 top-0 w-32 h-32 rounded-full bg-green-800 opacity-20"></span>
          </div>
        </div>
      </div>
    </main>
  );
}
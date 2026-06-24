"use client";


import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaProjectDiagram,
  FaBlog,
  FaHotel,
  FaCode,
  FaServer,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import InterviewQA from "@/components/InterviewQA";

const skillCards = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "shadcn", "Responsive Design"],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST & GraphQL APIs"],
  },
  {
    icon: <FaTools />,
    title: "Tools & Deployment",
    items: ["Vercel", "Railway", "Postman", "MongoDB Atlas", "Cloudinary", "Git & GitHub"],
  },
];

const certifications = [
  { title: "Full Stack MERN", org: "NAVTTC (Islamabad), 2025", href: "/certificates/navvtac" },
  { title: "Complete Intro to Web Dev v3", org: "Frontend Master, 2025", href: "/certificates/completewebdev" },
  { title: "CSS & Responsive Web Design", org: "Frontend Master, 2025", href: "/certificates/responsive" },
  { title: "Async JavaScript", org: "YouTube Codevolution", href: null },
];

const interests = [
  {
    image: "/assets/centourus.jpeg",
    title: "Touring",
    description: "Exploring Centaurus in Islamabad  strolling trails, uncovering hidden spots, and sharing the city with friends.",
  },
  {
    image: "/assets/pizzaparty.jpeg",
    title: "Dining",
    description: "Meaningful conversations and great food at the education center in H-8, Islamabad  a refreshing break from coding.",
  },
  {
    image: "/assets/history.jpeg",
    title: "Heritage Seeker",
    description: "Visiting historical places in Islamabad that bring Pakistan's past to life  from Quaid-e-Azam to independence.",
  },
];

export default function AboutMe() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Full Stack Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-heading leading-tight tracking-tight mb-6">
                M. Munir
              </h1>
              <p className="text-body text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Software Engineer in my final year at IIUI. I build responsive web applications
                with JavaScript, Node.js, MongoDB, and Tailwind  solving problems and shipping
                impactful full-stack solutions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary">
                  View My Projects
                </Link>
                <Link href="/hire-me" className="btn-outline">
                  Work With Me
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/assets/munir.jpeg"
                  alt="M. Munir"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 justify-center mt-5">
                <a
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/mmunir439"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="icon-box hover:bg-[#599553] hover:text-white transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/munirdev/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="icon-box hover:bg-[#599553] hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4">Who Am I?</h2>
            <p className="section-subtitle mx-auto">
              Hi there! I&apos;m M.Munir  a Full Stack Developer and nature enthusiast.
              I enjoy solving problems, creating impactful solutions, and continuously learning
              in web development and data analysis. Based in Islamabad, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="section-title text-center mb-3">How I Build</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            End-to-end development skills from UI to deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCards.map(({ icon, title, items }) => (
              <div key={title} className="card p-6">
                <div className="icon-box mb-4">{icon}</div>
                <h3 className="text-dark font-bold text-lg mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body">
                      <BsCheck2Circle className="text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + Q&A */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box"><FaProjectDiagram /></div>
                <h3 className="text-dark font-bold text-xl">Featured Project</h3>
              </div>
              <h4 className="font-bold text-lg text-heading mb-2">Smart Scholarship Guidance</h4>
              <p className="text-body text-sm leading-relaxed mb-4 flex-1">
                AI-powered scholarship platform helping Pakistani students discover and apply to
                fully-funded opportunities in the USA and Europe  with profile-based matching
                and step-by-step application guidance.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["React", "Next.js", "Tailwind CSS", "AI", "Vercel"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <Link
                href="https://smart-scholarship-finder-frontend.vercel.app/"
                target="_blank"
                className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                View Project →
              </Link>
            </div>

            <InterviewQA />
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="py-16">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Recent Work</h2>
            <Link href="/projects" className="text-primary font-semibold text-sm hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaGraduationCap />,
                title: "Smart Scholarship",
                desc: "AI-powered platform for Pakistani students to find and apply to international scholarships.",
                tags: ["React", "Next.js", "AI"],
                href: "https://smart-scholarship-finder-frontend.vercel.app/",
              },
              {
                icon: <FaBlog />,
                title: "Blog Platform",
                desc: "Modern blog with markdown, comments, and user authentication.",
                tags: ["Next.js", "MongoDB", "Tailwind"],
              },
              {
                icon: <FaDatabase />,
                title: "Database & APIs",
                desc: "Experience with MongoDB, MySQL, RESTful APIs, GraphQL, and Postman testing.",
                tags: ["MongoDB", "GraphQL", "Postman"],
              },
            ].map(({ icon, title, desc, tags, href }) => (
              <div key={title} className="card p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box text-base">{icon}</div>
                  <h3 className="text-dark font-bold">{title}</h3>
                </div>
                <p className="text-body text-sm mb-4 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {href && (
                  <Link
                    href={href}
                    target="_blank"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently working on */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="cta-banner p-8 md:p-10">
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">
              Currently Working On
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Intelligent Search & Accommodation Recommendation
            </h2>
            <p className="text-white/90 leading-relaxed mb-6 max-w-2xl">
              A smart platform that helps users find and compare accommodations using intelligent
              search and personalized recommendations  matching preferences, location, and budget
              to surface the best options faster.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "MongoDB", "AI Search", "Tailwind CSS"].map((tag) => (
                <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="section-title text-center mb-10">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map(({ title, org, href }) => (
              <div key={title} className="card p-5">
                <GiGiftOfKnowledge className="text-primary text-xl mb-2" />
                <h3 className="text-dark font-semibold text-sm mb-1">{title}</h3>
                <p className="text-body text-xs mb-3">{org}</p>
                {href && (
                  <Link href={href} className="text-primary text-xs font-semibold hover:underline">
                    View Certificate →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <h2 className="section-title mb-8">When I&apos;m Not Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map(({ image, title, description }) => (
              <div key={title} className="relative rounded-2xl overflow-hidden h-56 group">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0a52]/90 via-[#1e0a52]/40 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white font-semibold mb-1">
                    {title === "Touring" && <FaHotel />}
                    {title === "Heritage Seeker" && <MdOutlineHistoryToggleOff />}
                    {title}
                  </div>
                  <p className="text-white/80 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-main">
          <div className="cta-banner p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/hire-me" className="inline-flex items-center bg-white text-[#34652c] font-semibold px-8 py-3 rounded-[14px] hover:bg-[#e8f5e6] transition">
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import { BsCheck2Circle } from "react-icons/bs";
import { DiCodeBadge } from "react-icons/di";
import { CgDatabase } from "react-icons/cg";
import { LuSquareSplitHorizontal } from "react-icons/lu";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { VscScreenFull } from "react-icons/vsc";
import { GiTeamIdea } from "react-icons/gi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: <DiCodeBadge />,
    title: "Frontend Development",
    description:
      "Responsive websites and web applications with React and Next.js  intuitive interfaces and smooth interactions.",
  },
  {
    icon: <CgDatabase />,
    title: "Backend Development",
    description:
      "Robust server-side solutions using Node.js, Express, and MongoDB with efficient APIs and data management.",
  },
  {
    icon: <LuSquareSplitHorizontal />,
    title: "Responsive Optimization",
    description:
      "Flawless performance across all devices with tailored responsive design approaches.",
  },
  {
    icon: <LiaNetworkWiredSolid />,
    title: "Cloud Deployment",
    description:
      "Deployment on Vercel, Railway, and other platforms  accessible and performant worldwide.",
  },
  {
    icon: <VscScreenFull />,
    title: "Team Collaboration",
    description:
      "Scalable team solutions for enterprise projects with coordinated specialists.",
  },
  {
    icon: <GiTeamIdea />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end integration between frontend and backend for robust, scalable applications.",
  },
];

const approach = [
  {
    title: "Collaborative Process",
    description: "Working closely with clients throughout development to ensure your vision is realized.",
  },
  {
    title: "Clean Code",
    description: "Maintainable, well-structured code that grows with your business and adapts to change.",
  },
  {
    title: "User-Centered Design",
    description: "Interfaces focused on clarity, accessibility, and engaging user experiences.",
  },
  {
    title: "Ongoing Support",
    description: "Maintenance and support after launch to ensure continued success.",
  },
];

const faqs = [
  {
    q: "How do we start working together?",
    a: "After you contact me, we'll schedule a consultation call to discuss scope, timeline, and cost.",
  },
  {
    q: "What's your typical turnaround time?",
    a: "Small websites take 2–3 weeks; complex applications can take 1–3 months. I'll provide a detailed timeline in my proposal.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes  I offer maintenance packages to keep your site secure, up-to-date, and running smoothly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer, Easypaisa, and JazzCash. Typically 50% upfront, remainder upon completion.",
  },
];

export default function HireMe() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16">
        <div className="container-main">
          {/* Hero */}
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Services
            </p>
            <h1 className="section-title mb-4">Work With Me</h1>
            <p className="section-subtitle mx-auto">
              Looking for a developer who combines technical expertise with design sensibility?
              Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(({ icon, title, description }) => (
              <div key={title} className="card p-6">
                <div className="icon-box text-2xl mb-4">{icon}</div>
                <h3 className="text-dark font-bold text-lg mb-2">{title}</h3>
                <p className="text-body text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Approach */}
          <div className="cta-banner p-8 md:p-10 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approach.map(({ title, description }) => (
                <div key={title}>
                  <div className="flex items-center gap-2 font-bold mb-2">
                    <BsCheck2Circle className="text-[#e8f5e6]" />
                    {title}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 className="section-title mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="text-dark font-bold mb-2">{q}</h3>
                <p className="text-body text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="cta-banner p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get started?</h2>
            <p className="text-white/90 mb-2">
              Whether you need individual expertise or a full team, let&apos;s build something great.
            </p>
            <p className="text-white/80 text-sm mb-6">
              munir.webdev@gmail.com · +92 319 5803212
            </p>
            <a href="mailto:munir.webdev@gmail.com" className="inline-flex items-center bg-white text-[#34652c] font-semibold px-8 py-3 rounded-[14px] hover:bg-[#e8f5e6] transition">
              Email Me Directly →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

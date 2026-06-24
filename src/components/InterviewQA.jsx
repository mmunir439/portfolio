"use client";

import React, { useState } from "react";
import { FaChevronDown, FaLayerGroup, FaReact, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const topics = [
  {
    id: "mern",
    label: "MERN Stack",
    icon: <FaLayerGroup />,
    items: [
      {
        q: "How do MongoDB, Express, React, and Node.js work together?",
        a: "React handles the UI and calls REST APIs. Express on Node.js defines routes, business logic, and auth. MongoDB stores documents via Mongoose. JSON over HTTP connects every layer in a clear client → server → database flow.",
      },
      {
        q: "How do you structure APIs for scalability?",
        a: "Routes, controllers, and services stay separated. Validation runs at the boundary, errors use a consistent format, and the frontend uses dedicated API modules with React Query or Context for shared state.",
      },
    ],
  },
  {
    id: "react",
    label: "React & Performance",
    icon: <FaReact />,
    items: [
      {
        q: "How do you optimize React performance?",
        a: "Code-splitting and lazy loading cut initial bundle size. Memoization avoids unnecessary re-renders. Lists get stable keys, heavy work moves off the main thread, and state stays as local as possible.",
      },
      {
        q: "Why use Next.js for production apps?",
        a: "SSR and SSG improve SEO and first paint. File-based routing, API routes, and image optimization ship faster. Ideal when discoverability and performance both matter.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: <FaShieldAlt />,
    items: [
      {
        q: "How do you secure a MERN app with JWT?",
        a: "Passwords are hashed with bcrypt. JWTs are short-lived and stored in httpOnly cookies when possible. Protected routes use middleware, inputs are validated, and secrets never touch the client.",
      },
    ],
  },
  {
    id: "deploy",
    label: "Deployment",
    icon: <FaRocket />,
    items: [
      {
        q: "How do you deploy full-stack projects?",
        a: "Frontend on Vercel, backend on Railway or similar. Environment variables stay in platform config, CI runs build checks, and MongoDB Atlas handles the database with proper network access rules.",
      },
    ],
  },
  {
    id: "team",
    label: "Collaboration",
    icon: <FaUsers />,
    items: [
      {
        q: "How do you work effectively in a dev team?",
        a: "Feature branches, clear PR descriptions, and consistent commit messages. Issues track scope before code starts. Regular syncs and code reviews keep everyone aligned on architecture and deadlines.",
      },
    ],
  },
];

export default function InterviewQA() {
  const [activeTopic, setActiveTopic] = useState("mern");
  const [openIndex, setOpenIndex] = useState(0);

  const current = topics.find((t) => t.id === activeTopic);

  const handleTopicChange = (id) => {
    setActiveTopic(id);
    setOpenIndex(0);
  };

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="card p-6 md:p-8 flex flex-col h-full min-h-[320px]">
      <div className="mb-5">
        <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">
          Interview Ready
        </p>
        <h3 className="text-dark font-bold text-xl mb-1">Technical Q&A</h3>
        <p className="text-body text-sm">
          Topics I&apos;m confident discussing  click any question to explore.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {topics.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleTopicChange(id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition ${
              activeTopic === id
                ? "bg-[#e8f5e6] text-[#487a42] border border-[#599553]/30"
                : "bg-[#f3f4ff] text-body border border-[#e5e7eb] hover:border-[#599553]/40"
            }`}
          >
            <span className="text-sm">{icon}</span>
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 space-y-2">
        {current?.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className={`rounded-xl border transition-colors ${
                isOpen ? "border-[#599553]/40 bg-[#f8fdf7]" : "border-[#e5e7eb] bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full flex items-start justify-between gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <span className={`text-sm font-semibold leading-snug ${isOpen ? "text-heading" : "text-dark"}`}>
                  {item.q}
                </span>
                <FaChevronDown
                  className={`w-3.5 h-3.5 text-primary mt-1 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm text-body leading-relaxed border-t border-[#e8f5e6] pt-3">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

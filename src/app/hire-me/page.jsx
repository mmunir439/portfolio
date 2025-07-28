import { BsCheck2Circle } from "react-icons/bs";
import { DiCodeBadge } from "react-icons/di";
import { CgDatabase } from "react-icons/cg";
import { LuSquareSplitHorizontal } from "react-icons/lu";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { VscScreenFull } from "react-icons/vsc";
import { GiTeamIdea } from "react-icons/gi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Hireme() {
  return (
    <div>
      <Navbar />
      <main className="bg-[#F8FAF8] min-h-screen py-12 px-2 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-roboto text-3xl md:text-5xl font-extrabold mb-4">
            Work With Me
          </h1>
          <div className="text-[#2C662C] text-lg md:text-xl mb-8">
            <p>
              Looking for a developer who combines technical expertise with design sensibility? Let's
            </p>
            <p>create something amazing together.</p>
          </div>
          <h2 className="font-roboto text-2xl md:text-1xl font-bold mb-6">
            Services I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <DiCodeBadge className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Frontend Development</h3>
              <p className="text-[#2C662C] text-sm">
                Responsive websites and web applications with modern frameworks like React, featuring intuitive interfaces and smooth animations.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <CgDatabase className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Backend Development</h3>
              <p className="text-[#2C662C] text-sm">
                Robust server-side solutions using Node.js, Express, and MongoDB to power your applications with efficient APIs and data management.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <LuSquareSplitHorizontal className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Responsive Optimization</h3>
              <p className="text-[#2C662C] text-sm">
                Ensure your website performs flawlessly across all devices, from desktop to mobile, with tailored responsive approaches.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <LiaNetworkWiredSolid className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Deployments on Internet</h3>
              <p className="text-[#2C662C] text-sm">
                Seamless deployment of applications on cloud platforms like AWS, Azure, Railway, and Vercel. Ensuring your application is accessible and performant for users worldwide.
              </p>
            </div>
            {/* Card 5: Team Collaboration */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <VscScreenFull className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Team Collaboration</h3>
              <p className="text-[#2C662C] text-sm">
                Scalable team solutions for enterprise-level projects requiring multiple specialists working in coordination.
              </p>
            </div>
            {/* Card 6: Full-Stack Teams */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <GiTeamIdea className="text-3xl text-[#2C662C] mb-2" />
              <h3 className="font-bold text-lg mb-1">Full-Stack Teams</h3>
              <p className="text-[#2C662C] text-sm">
                Empowering your business with a dedicated full-stack team, delivering seamless integration between frontend and backend for robust, scalable, and innovative solutions.
              </p>
            </div>
          </div>

          {/* My Approach Section */}
          <div className="mt-12">
            <div className="border border-green-200 rounded-2xl py-4 px-4 mb-8 text-center text-green-900 bg-white/50">
              Need specialized services? <span className="font-bold">Contact me directly</span> to discuss how our team can help with your larger projects.
            </div>
            <div className="relative bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-4 md:p-6 text-white overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">My Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {/* Collaborative Process */}
                <div>
                  <div className="flex items-center font-bold text-lg mb-1">
                    <BsCheck2Circle className="mr-2 text-green-200" />
                    Collaborative Process
                  </div>
                  <p className="text-green-100">
                    I believe in working closely with clients throughout the development process, ensuring your vision is realized.
                  </p>
                </div>
                {/* Sustainable Development */}
                <div className="relative">
                  <div className="flex items-center font-bold text-lg mb-1">
                    <BsCheck2Circle className="mr-2 text-green-200" />
                    Sustainable Development
                  </div>
                  <p className="text-green-100">
                    Clean, maintainable code that grows with your business and adapts to changing requirements.
                  </p>
                  {/* Animated Circle */}
                  <span className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-0">
                    <span className="block w-32 h-32 rounded-full bg-green-300 opacity-30 animate-rise-fade"></span>
                  </span>
                </div>
                {/* Nature-Inspired Design */}
                <div>
                  <div className="flex items-center font-bold text-lg mb-1">
                    <BsCheck2Circle className="mr-2 text-green-200" />
                    Nature-Inspired Design
                  </div>
                  <p className="text-green-100">
                    Bringing organic aesthetics to digital interfaces for more engaging, human-centered experiences.
                  </p>
                </div>
                {/* Ongoing Support */}
                <div>
                  <div className="flex items-center font-bold text-lg mb-1">
                    <BsCheck2Circle className="mr-2 text-green-200" />
                    Ongoing Support
                  </div>
                  <p className="text-green-100">
                    Your project doesn't end at launch. I provide maintenance and support to ensure continued success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mt-12">
  <h2 className="font-roboto text-2xl font-bold mb-6">Frequently Asked Questions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
      <h3 className="font-bold mb-2">How do we start working together?</h3>
      <p>After you contact me, we'll schedule a consultation call to discuss your scope, timeline, and cost.</p>
    </div>
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
      <h3 className="font-bold mb-2">What's your typical turnaround time?</h3>
      <p>It depends on project complexity. Small websites may take 2-3 weeks, while complex applications can take 1-3 months. I'll provide a detailed timeline in my proposal.</p>
    </div>
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
      <h3 className="font-bold mb-2">Do you provide ongoing support?</h3>
      <p>Yes! I offer maintenance packages to keep your site secure, up-to-date, and running smoothly. We can discuss these options once your project is nearing completion.</p>
    </div>
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
      <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
      <p>I accept bank transfers, PayPal, and major credit cards. For projects, I typically require a 50% deposit upfront, with the remainder due upon completion.</p>
    </div>
  </div>
</div>
{/* here is end of FAQ Section */}
<div className="mt-12"> 
  <div className="relative bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 md:p-10 text-white shadow-lg overflow-hidden">
    <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get started?</h2>
    <p className="mb-2 text-white/90">
      Whether you need my individual expertise or the power of our full team, let's create something amazing together.
    </p>
    <p className="mb-6 text-white/90">
      Reach out directly at <span className="font-semibold">munir.webdev@gmail.com</span>.
    </p>
<button
  type="button"
  className="inline-flex items-center bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-50 transition mb-2"
>
  Email Me Directly
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>
    {/* Decorative circles */}
    <span className="absolute left-24 top-8 w-10 h-10 rounded-full bg-green-300 opacity-20"></span>
    <span className="absolute right-8 top-4 w-8 h-8 rounded-full bg-green-300 opacity-20"></span>
    <span className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-green-300 opacity-10"></span>
  </div>
</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
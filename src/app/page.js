import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/About-me";
export default function Home() {
  return (
   <div>
       <Navbar />
       <AboutMe />
       <Footer />
   </div>
  );
}


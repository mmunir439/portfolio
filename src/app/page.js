import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/About-me";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}

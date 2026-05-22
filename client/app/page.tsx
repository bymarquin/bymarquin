import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorSpotlight from "@/components/CursorSpotlight";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(255,255,255,0.05),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%)]" />
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

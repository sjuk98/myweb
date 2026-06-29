"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] bg-accent/8 rounded-full blur-[140px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-accent-light/4 rounded-full blur-[160px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />
      <div className="absolute top-[65%] left-[-5%] w-[55vw] h-[55vw] bg-accent/6 rounded-full blur-[180px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />
      <div className="absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] bg-accent-light/5 rounded-full blur-[150px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />

      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

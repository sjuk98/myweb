"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Expertise = dynamic(() => import("@/components/Expertise"));
const Services = dynamic(() => import("@/components/Services"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Blog = dynamic(() => import("@/components/Blog"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-accent-light/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[65%] left-[-5%] w-[55vw] h-[55vw] bg-accent/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] bg-accent-light/5 rounded-full blur-[150px] pointer-events-none" />

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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Background Moss" 
          fill 
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={STAGGER}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={FADE_UP} className="flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
          Senior Full Stack Developer
        </motion.div>
        
        <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-medium text-foreground mb-8 tracking-tight leading-[1.15]">
          Building Scalable <br/>
          <span className="text-accent-light not-italic font-sans font-extrabold bg-gradient-to-r from-accent-light via-accent-light to-foreground bg-clip-text text-transparent">
            Digital Products
          </span> & Enterprise Solutions
        </motion.h1>
        
        <motion.p variants={FADE_UP} className="text-foreground/75 text-lg md:text-xl max-w-3xl font-light mb-12 leading-relaxed">
          I'm Shiju, a Senior Full Stack Developer specializing in Next.js, React, Node.js, Django, Firebase, Cloud Infrastructure, API Development, and Digital Transformation.
        </motion.p>
        
        <motion.div variants={FADE_UP} className="flex flex-wrap justify-center items-center gap-6 mb-20">
          <Link href="#works" className="bg-accent hover:bg-accent/90 border border-accent hover:border-accent/90 text-foreground px-8 py-4 transition-all flex items-center gap-2 rounded-sm font-bold tracking-[0.15em] text-xs uppercase shadow-lg shadow-accent/20">
            View My Work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#contact" className="border border-border/60 hover:border-accent-light hover:bg-accent-light/5 text-foreground px-8 py-4 transition-all flex items-center gap-2 rounded-sm font-bold tracking-[0.15em] text-xs uppercase backdrop-blur-sm">
            Let's Build Together
          </Link>
        </motion.div>

        {/* Trust Metrics Dashboard */}
        <motion.div 
          variants={FADE_UP}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl border border-border/30 bg-muted/40 backdrop-blur-md p-8 rounded-sm divide-y lg:divide-y-0 lg:divide-x divide-border/20 text-left"
        >
          <div className="flex flex-col justify-center p-4">
            <div className="text-3xl md:text-4xl font-serif italic text-accent-light mb-1 font-semibold">3+</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-foreground/50 uppercase">Years Experience</div>
          </div>
          <div className="flex flex-col justify-center p-4 pt-6 lg:pt-4">
            <div className="text-3xl md:text-4xl font-serif italic text-accent-light mb-1 font-semibold">50+</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-foreground/50 uppercase">Projects Delivered</div>
          </div>
          <div className="flex flex-col justify-center p-4 pt-6 lg:pt-4">
            <div className="text-3xl md:text-4xl font-serif italic text-accent-light mb-1 font-semibold">12+</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-foreground/50 uppercase">Technologies Mastered</div>
          </div>
          <div className="flex flex-col justify-center p-4 pt-6 lg:pt-4">
            <div className="text-3xl md:text-4xl font-serif italic text-accent-light mb-1 font-semibold">Senior</div>
            <div className="text-[10px] font-bold tracking-[0.15em] text-foreground/50 uppercase">Engineering Focus</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/45 hover:text-accent-light transition-colors pointer-events-none">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

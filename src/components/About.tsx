"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto w-full relative z-10 border-t border-border/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">PHILOSOPHY & PROFILE</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Engineering Scalable Systems with a Team-First Mindset</h2>
          <div className="space-y-6 text-foreground/75 font-light text-base md:text-lg leading-relaxed">
            <p>
              My professional journey is centered around solving complex digital architecture challenges and steering high-performance engineering teams. As a Senior Full Stack Developer, I bridge the gap between heavy-duty server mechanics and seamless, premium user interfaces.
            </p>
            <p>
              I thrive on structural problem-solving and maintaining clean codebases. I've successfully delivered business applications, APIs, dashboards, ERP solutions, CRM systems, and eCommerce platforms across multiple industries.
            </p>
            <p className="border-l-2 border-accent-light/50 pl-4 italic text-foreground/90 font-serif">
              "A modular, secure, and resilient architecture is the foundation of any digital transformation. I focus on building products that stand the test of load, security, and time."
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden bg-muted shadow-2xl border border-border/30">
            <Image 
              src="/profile.jpg" 
              alt="Shiju UK" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top brightness-75 contrast-125 grayscale-[30%] group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -left-8 md:-left-12 bg-muted/95 backdrop-blur-md border border-accent-light/30 p-8 shadow-2xl max-w-xs z-10 rounded-sm"
          >
            <h3 className="font-serif text-2xl mb-3 italic text-accent-light">Architect First.</h3>
            <p className="text-xs text-foreground/60 leading-relaxed font-light">
              Designing microservices, database schemas, API wrappers, and server processes engineered to scale smoothly under heavy requests.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20 py-5 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="#" className="font-serif text-2xl tracking-wide text-foreground italic font-semibold hover:text-accent-light transition-colors">
          Shiju UK
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/80">
          <Link href="#about" className="hover:text-accent-light transition-colors">About</Link>
          <Link href="#expertise" className="hover:text-accent-light transition-colors">Expertise</Link>
          <Link href="#services" className="hover:text-accent-light transition-colors">Services</Link>
          <Link href="#works" className="hover:text-accent-light transition-colors">Works</Link>
          <Link href="#experience" className="hover:text-accent-light transition-colors">Experience</Link>
          <Link href="#blog" className="hover:text-accent-light transition-colors">Blog</Link>
          <Link href="#contact" className="hover:text-accent-light transition-colors">Contact</Link>
        </div>
        <Link href="#contact" className="border border-accent-light/30 hover:border-accent-light hover:bg-accent-light/5 text-xs font-bold tracking-wider px-5 py-2.5 transition-all rounded-sm uppercase">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}

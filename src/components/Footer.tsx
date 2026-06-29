"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-border/20 bg-background text-[10px] tracking-[0.2em] uppercase text-foreground/50 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-lg tracking-wide text-foreground normal-case italic">Shiju UK</span>
          <span>A PREMIUM SOFTWARE ENGINEERING PORTFOLIO</span>
        </div>
        <div className="flex gap-8">
          <Link href="https://www.linkedin.com/in/shiju-uk-1a320620a" target="_blank" className="hover:text-accent-light transition-colors">LINKEDIN</Link>
          <Link href="mailto:shijuuk98@gmail.com" className="hover:text-accent-light transition-colors">EMAIL</Link>
        </div>
      </div>
    </footer>
  );
}

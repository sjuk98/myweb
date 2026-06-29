"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  CheckCircle, 
  Send, 
  Mail, 
  MessageSquare 
} from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto w-full border-t border-border/20 text-center relative z-10">
      <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">GET IN TOUCH</div>
      <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Let's Build Something Exceptional</h2>
      
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full text-xs font-bold tracking-wide text-accent-light mb-16">
        <span className="w-2.5 h-2.5 rounded-full bg-accent-light animate-pulse" />
        Available for Freelance Projects, Consulting, and Full-Time Opportunities
      </div>

      <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto flex flex-col gap-12 text-left bg-muted/20 p-8 md:p-12 rounded-sm border border-border/30 backdrop-blur-sm shadow-xl relative overflow-hidden">
        {formSubmitted && (
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-20">
            <CheckCircle className="w-16 h-16 text-accent-light mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl text-foreground mb-2">Message Sent!</h3>
            <p className="text-xs text-foreground/60 leading-relaxed max-w-xs">
              Thank you for reaching out. I will get back to you shortly to discuss your project.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Full Name</label>
          <input required type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Email Address</label>
          <input required type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Message</label>
          <textarea required placeholder="Tell me about your project..." rows={3} className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20 resize-none"></textarea>
        </div>

        <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-foreground py-6 tracking-[0.2em] uppercase text-xs font-bold transition-colors mt-8 rounded-sm flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          SEND MESSAGE
        </button>
      </form>

      {/* Directory Links */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 text-xs tracking-widest text-foreground/60 uppercase font-bold">
        <Link href="mailto:shijuuk98@gmail.com" className="flex items-center gap-2 hover:text-accent-light transition-colors">
          <Mail className="w-4 h-4" /> shijuuk98@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/shiju-uk-1a320620a" target="_blank" className="flex items-center gap-2 hover:text-accent-light transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg> LinkedIn
        </Link>
        <Link href="https://github.com" target="_blank" className="flex items-center gap-2 hover:text-accent-light transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg> GitHub
        </Link>
        <Link href="https://wa.me/919074159289" target="_blank" className="flex items-center gap-2 hover:text-accent-light transition-colors">
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </Link>
      </div>
    </section>
  );
}

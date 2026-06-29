"use client";

import { ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">TECHNICAL WRITING</div>
        <h2 className="text-4xl md:text-5xl font-serif">Featured Articles</h2>
        <p className="text-foreground/60 font-light text-sm mt-4 tracking-wider uppercase">
          Sharing engineering insights and architecture best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Post 1 */}
        <div className="border border-border/30 bg-muted/10 hover:border-accent-light/25 hover:bg-muted/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group">
          <div className="p-8">
            <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-accent-light uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Backend Engineering</span>
              <span className="text-foreground/30">•</span>
              <span>6 min read</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-light transition-colors">
              Building Scalable APIs with Node.js
            </h3>
            <p className="text-foreground/60 text-xs font-light leading-relaxed">
              Learn best practices for structuring Node.js controllers, TypeORM database connections, and middleware strategies.
            </p>
          </div>
          <div className="border-t border-border/20 p-8 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Post 2 */}
        <div className="border border-border/30 bg-muted/10 hover:border-accent-light/25 hover:bg-muted/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group">
          <div className="p-8">
            <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-accent-light uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Frontend Frameworks</span>
              <span className="text-foreground/30">•</span>
              <span>8 min read</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-light transition-colors">
              Next.js Best Practices
            </h3>
            <p className="text-foreground/60 text-xs font-light leading-relaxed">
              Exploring server component data fetching, hydration patterns, search engine optimization layouts, and rendering methods.
            </p>
          </div>
          <div className="border-t border-border/20 p-8 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Post 3 */}
        <div className="border border-border/30 bg-muted/10 hover:border-accent-light/25 hover:bg-muted/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group">
          <div className="p-8">
            <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-accent-light uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Backend as a Service</span>
              <span className="text-foreground/30">•</span>
              <span>5 min read</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-light transition-colors">
              Firebase Authentication Guide
            </h3>
            <p className="text-foreground/60 text-xs font-light leading-relaxed">
              Securely configure email/password authentication, third-party credentials, and custom JWT tokens.
            </p>
          </div>
          <div className="border-t border-border/20 p-8 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

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
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-border/30 bg-muted/10 hover:border-accent-light/25 hover:bg-muted/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group cursor-pointer"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-accent-light uppercase mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{post.category}</span>
                <span className="text-foreground/30">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-light transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-foreground/60 text-xs font-light leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>
            <div className="border-t border-border/20 p-8 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

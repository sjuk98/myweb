import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Shiju UK - Technical Writing & Engineering Insights",
  description: "Read the latest engineering articles, architecture deep dives, and front-end best practices from Shiju UK.",
};

export default function BlogListPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-accent-light/3 rounded-full blur-[160px] pointer-events-none" />

      <Navbar />

      <section className="py-40 px-6 max-w-7xl mx-auto w-full relative z-10 flex-grow">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">TECHNICAL WRITING</div>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">The Engineering Log</h1>
          <p className="text-foreground/75 font-light text-lg md:text-xl leading-relaxed">
            Deep dives into architectural design patterns, modern frontend frameworks, and best practices for building high-performance systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-border/30 bg-muted/10 hover:border-accent-light/25 hover:bg-muted/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 text-[9px] font-bold tracking-widest text-accent-light uppercase mb-6">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                  <span className="text-foreground/20">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="text-foreground/20">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-serif mb-6 group-hover:text-accent-light transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-border/20 p-8 md:px-12 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-foreground/50 group-hover:text-foreground transition-colors">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

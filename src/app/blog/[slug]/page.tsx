import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog";
import { BookOpen, Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Helper to render paragraph or markdown-like content blocks
  const renderContentBlock = (block: string, index: number) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="text-3xl md:text-[38px] font-serif font-medium text-foreground mt-20 mb-8 leading-tight tracking-tight border-l-4 border-accent-light/60 pl-6">
          {block.replace("## ", "")}
        </h2>
      );
    }
    
    if (block.startsWith("### ")) {
      return (
        <h3 key={index} className="text-2xl md:text-[28px] font-serif italic text-accent-light mt-12 mb-6 leading-snug tracking-tight">
          {block.replace("### ", "")}
        </h3>
      );
    }

    if (block.includes("\n* ") || block.startsWith("* ")) {
      const items = block
        .split("\n")
        .map(item => item.trim().replace(/^\*\s*/, ""))
        .filter(Boolean);
        
      return (
        <ul key={index} className="my-8 space-y-4 pl-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3.5 text-[17px] md:text-[19px] font-sans font-light leading-[1.75] text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light mt-3 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="text-[17px] md:text-[19px] font-sans font-light leading-[1.8] text-foreground/75 mb-8">
        {block}
      </p>
    );
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[-15%] w-[70vw] h-[70vw] bg-accent/6 rounded-full blur-[140px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />
      <div className="absolute bottom-[20%] right-[-15%] w-[60vw] h-[60vw] bg-accent-light/4 rounded-full blur-[160px] pointer-events-none" style={{ transform: "translate3d(0,0,0)", willChange: "transform" }} />

      <Navbar />

      <article className="py-40 px-6 max-w-4xl mx-auto w-full relative z-10 flex-grow">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-foreground/50 hover:text-accent-light transition-colors uppercase mb-16"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* Post Header */}
        <header className="mb-20 border-b border-border/20 pb-14">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.25em] font-bold text-accent-light uppercase bg-accent-light/10 border border-accent-light/20 px-4 py-2 rounded-full flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="text-foreground/20">•</span>
            <span className="text-[11px] font-medium tracking-wider text-foreground/50 uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-foreground/20">•</span>
            <span className="text-[11px] font-medium tracking-wider text-foreground/50 uppercase">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-medium tracking-tight text-foreground leading-[1.15] mb-8">
            {post.title}
          </h1>

          <div className="text-xs text-foreground/50 font-light max-w-2xl leading-relaxed mt-6">
            Written by <span className="text-foreground font-medium">Shiju UK</span> • Senior Full Stack Developer & Architecture Consultant
          </div>
        </header>

        {/* Post Content */}
        <div className="max-w-3xl">
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {/* Keywords / Tags */}
        <footer className="mt-20 pt-10 border-t border-border/20 max-w-3xl">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.keywords.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-mono bg-muted/40 border border-border/50 text-foreground/75 px-3 py-1 rounded-sm uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      <Footer />
    </main>
  );
}

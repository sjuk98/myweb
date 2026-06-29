import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/lib/blog";
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
        <h2 key={index} className="text-3xl font-serif mt-12 mb-6 text-foreground leading-tight tracking-tight">
          {block.replace("## ", "")}
        </h2>
      );
    }
    
    if (block.startsWith("### ")) {
      return (
        <h3 key={index} className="text-2xl font-serif mt-8 mb-4 text-foreground leading-tight tracking-tight">
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
        <ul key={index} className="list-disc pl-6 my-6 space-y-3 text-foreground/80 font-light text-base leading-relaxed">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="text-foreground/80 font-light text-base md:text-lg leading-relaxed mb-6">
        {block}
      </p>
    );
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[-15%] w-[70vw] h-[70vw] bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[60vw] h-[60vw] bg-accent-light/4 rounded-full blur-[160px] pointer-events-none" />

      <Navbar />

      <article className="py-40 px-6 max-w-3xl mx-auto w-full relative z-10 flex-grow">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-foreground/50 hover:text-accent-light transition-colors uppercase mb-16"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* Post Header */}
        <header className="mb-16 border-b border-border/20 pb-12">
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-8 leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <div className="text-xs text-foreground/50 font-light max-w-2xl leading-relaxed">
            By <span className="text-foreground font-medium">Shiju UK</span> • Senior Full Stack Developer & Architecture Consultant
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {/* Keywords / Tags */}
        <footer className="mt-16 pt-8 border-t border-border/20">
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

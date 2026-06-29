"use client";

import { 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  Key, 
  Zap 
} from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">WHAT I EXCEL IN</div>
        <h2 className="text-4xl md:text-5xl font-serif">Core Technical Capabilities</h2>
        <p className="text-foreground/60 font-light text-sm mt-4 tracking-wider uppercase">
          A comprehensive overview of my current technology stack, systems tooling, and frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">Frontend Development</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Building dynamic, highly responsive components with modular state and clean animations.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">Backend Development</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Constructing logical services, data brokers, pipelines, and server-side components.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "Django", "Python", "TypeORM", "Microservices"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">Databases & BaaS</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Structuring efficient schemas, handling relational consistency, indexes, and queries.
          </p>
          <div className="flex flex-wrap gap-2">
            {["PostgreSQL", "MySQL", "Supabase", "Firebase", "MongoDB"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Cloud className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">Cloud & DevOps</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Configuring live servers, managing proxies, custom redirects, process runtimes, and hosting.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Linux Servers", "Nginx", "PM2", "Firebase Hosting", "VPS Management", "Domain & SSL"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>

        {/* API Development */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Key className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">API Development</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Designing standard restful layers, secure JWT user permissions, webhooks, and controllers.
          </p>
          <div className="flex flex-wrap gap-2">
            {["REST APIs", "JWT Auth", "Payment Gateways", "Stripe API", "API Security"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>

        {/* Third Party Integrations */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/20 transition-all duration-300 rounded-sm">
          <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent-light/20 flex items-center justify-center text-accent-light mb-6">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-foreground font-semibold">Specialized Integrations</h3>
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6">
            Connecting external broker nodes, financial dashboards, messaging engines, and verifying systems.
          </p>
          <div className="flex flex-wrap gap-2">
            {["WhatsApp API", "MT5 API", "Sumsub KYC", "OAuth Providers", "Webhook Integrations"].map((s) => (
              <span key={s} className="px-2.5 py-1 bg-background/50 border border-border/40 text-[9px] tracking-wider font-bold text-foreground/80 rounded-sm uppercase">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { 
  Database, 
  Users, 
  ShieldCheck 
} from "lucide-react";

export default function Projects() {
  return (
    <section id="works" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-4">PRODUCTION CASE STUDIES</div>
          <h2 className="text-4xl md:text-5xl font-serif">Selected Shipped Systems</h2>
        </div>
        <p className="text-foreground/60 text-sm tracking-wider max-w-xs font-light text-left md:text-right">
          A deep-dive review of custom modules and systems architected for reliable scale and clear real-world performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {/* Project 1: Warehouse Management System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-muted/20 border border-border/30 p-8 md:p-12 rounded-sm relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">ENTERPRISE INVENTORY</div>
            <h3 className="text-3xl font-serif italic text-foreground mb-4">Warehouse Management System</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Challenge:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Managing and coordinating warehouse inventory logs manually, resulting in structural data errors, supply delays, and untraceable workflow logs.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Solution:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Developed a robust real-time warehouse registry system with automated workflow triggers, dynamic stock checklists, and synchronized API queries.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Results:</h4>
                <ul className="list-disc pl-5 text-foreground/70 text-sm leading-relaxed font-light space-y-1">
                  <li>Reduced manual administrative effort by over 70%</li>
                  <li>Drastically improved real-time inventory tracking accuracy</li>
                  <li>Structured automatic reports generation with dynamic database sync</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Next.js", "Node.js", "PostgreSQL", "TypeORM", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-background/50 border border-border/50 text-[9px] tracking-widest font-bold text-foreground/70 uppercase rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted/40 border border-border/40 p-2 rounded-sm overflow-hidden hover:border-accent-light/20 transition-all duration-300">
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center p-8">
              <div className="text-center space-y-3">
                <Database className="w-12 h-12 text-accent-light mx-auto" />
                <span className="block text-xs uppercase tracking-widest font-bold text-foreground/40">Real-Time Core Engine</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: HRMS & CRM Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-muted/20 border border-border/30 p-8 md:p-12 rounded-sm relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">ENTERPRISE SAAS</div>
            <h3 className="text-3xl font-serif italic text-foreground mb-4">HRMS & CRM Modules</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Challenge:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Siloed workflows and data mismatches between sales pipelines and internal human resources logs, causing manual transfer bottlenecks.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Solution:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Decoupled backend operations into standalone modular CRM (lead tracking) and HRMS (payroll, logs) components, synchronizing workflows in real time.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Results:</h4>
                <ul className="list-disc pl-5 text-foreground/70 text-sm leading-relaxed font-light space-y-1">
                  <li>Completely eliminated manual CSV formatting and imports</li>
                  <li>Decreased general administrative processing times by 35%</li>
                  <li>Established real-time role-based access for team leads</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Next.js", "Node.js", "Tailwind CSS", "MySQL", "Docker"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-background/50 border border-border/50 text-[9px] tracking-widest font-bold text-foreground/70 uppercase rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted/40 border border-border/40 p-2 rounded-sm overflow-hidden hover:border-accent-light/20 transition-all duration-300">
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center p-8">
              <div className="text-center space-y-3">
                <Users className="w-12 h-12 text-accent-light mx-auto" />
                <span className="block text-xs uppercase tracking-widest font-bold text-foreground/40">Multi-Module Sync</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Wallet Management System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-muted/20 border border-border/30 p-8 md:p-12 rounded-sm relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">FINANCE & TRADING</div>
            <h3 className="text-3xl font-serif italic text-foreground mb-4">Wallet Management System</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Challenge:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Synchronizing user digital balances securely with volatile, real-time external trading platforms while preventing negative ledger states.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Solution:</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  Built a secure ledger server communicating directly with the MetaTrader 5 API, backed by automated KYC flows using Sumsub.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-accent-light uppercase tracking-wider mb-2">Results:</h4>
                <ul className="list-disc pl-5 text-foreground/70 text-sm leading-relaxed font-light space-y-1">
                  <li>Eliminated double-spend and balances reconciliation mismatches</li>
                  <li>Automated user validation checks, speeding up approvals</li>
                  <li>Secure transaction registries handling high throughput</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Node.js", "React.js", "PostgreSQL", "Sumsub KYC", "MT5 API"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-background/50 border border-border/50 text-[9px] tracking-widest font-bold text-foreground/70 uppercase rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted/40 border border-border/40 p-2 rounded-sm overflow-hidden hover:border-accent-light/20 transition-all duration-300">
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center p-8">
              <div className="text-center space-y-3">
                <ShieldCheck className="w-12 h-12 text-accent-light mx-auto" />
                <span className="block text-xs uppercase tracking-widest font-bold text-foreground/40">Secure FinTech Ledger</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Project Directory */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {/* Project Card A */}
        <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">ENTERPRISE ERP</div>
          <h3 className="text-2xl font-serif italic mb-4">Maxtron ERP</h3>
          <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
            Architected secure inventory controllers, supplier validation systems, and custom dashboard components with robust permissions.
          </p>
          <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
            <span>Next.js</span> <span>Supabase</span> <span>Node.js</span>
          </div>
        </div>

        {/* Project Card B */}
        <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">ED-TECH & LOGISTICS</div>
          <h3 className="text-2xl font-serif italic mb-4">Inland Uniform</h3>
          <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
            Measurement records directory and school custom size registry. Structured with dynamic client grids and lightweight API calls.
          </p>
          <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
            <span>Next.js</span> <span>Express.js</span> <span>Vercel</span>
          </div>
        </div>

        {/* Project Card C */}
        <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
          <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">MARKETPLACE & E-COMMERCE</div>
          <h3 className="text-2xl font-serif italic mb-4">Tharacart</h3>
          <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
            Integrated seller registration components, custom tax validation hooks, and dynamic OTP authentication structures.
          </p>
          <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
            <span>Node.js</span> <span>EJS</span> <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

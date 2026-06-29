"use client";

import { 
  Layout, 
  Code2, 
  Cpu, 
  Zap, 
  Cloud, 
  Compass 
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">OFFERINGS</div>
        <h2 className="text-4xl md:text-5xl font-serif">Professional Services</h2>
        <p className="text-foreground/60 font-light text-sm mt-4 tracking-wider uppercase">
          Specialized solutions for startups, agencies, and enterprise organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Layout className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">Full Stack Development</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Building customized end-to-end web applications, scaling structures from conceptual database modeling to fully responsive interfaces.
          </p>
        </div>

        {/* Service 2 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Code2 className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">API Development</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Developing high-throughput, secure REST and GraphQL backend architectures. Incorporating robust middle layers and webhooks.
          </p>
        </div>

        {/* Service 3 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Cpu className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">SaaS Development</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Architecting modular, multi-tenant software as a service engines with complex subscription tiers, analytics panels, and dashboard widgets.
          </p>
        </div>

        {/* Service 4 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Zap className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">Firebase Development</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Designing application backends utilizing Firebase Auth, structured Firestore datasets, Cloud Functions, and CDN distribution networks.
          </p>
        </div>

        {/* Service 5 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Cloud className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">Server & Domain Setup</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Deploying production runtimes, managing live server clusters, setting up reverse proxy networks, SSL routes, and automated maintenance tasks.
          </p>
        </div>

        {/* Service 6 */}
        <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/25 hover:shadow-xl hover:shadow-accent-light/[0.01] transition-all duration-300 rounded-sm">
          <Compass className="w-6 h-6 text-accent-light mb-6" />
          <h3 className="text-xl font-serif mb-3 text-foreground font-semibold">Technical Consulting</h3>
          <p className="text-foreground/60 text-sm leading-relaxed font-light">
            Providing clear structural guidance, code review practices, database query reviews, schema layouts, and scaling system blueprints.
          </p>
        </div>
      </div>
    </section>
  );
}

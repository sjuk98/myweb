"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Layout, Code2, Compass, Cpu, Globe, Users, ExternalLink } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground font-sans relative">
      {/* Decorative Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] bg-accent-light/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20 py-5 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-serif text-2xl tracking-wide text-foreground italic font-semibold">
            Shiju UK
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/80">
            <Link href="#about" className="hover:text-accent-light transition-colors">About</Link>
            <Link href="#works" className="hover:text-accent-light transition-colors">Works</Link>
            <Link href="#services" className="hover:text-accent-light transition-colors">Capabilities</Link>
            <Link href="#engagements" className="hover:text-accent-light transition-colors">Engagements</Link>
            <Link href="#contact" className="hover:text-accent-light transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Background Moss"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={STAGGER}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={FADE_UP} className="text-[10px] font-bold tracking-[0.3em] text-accent-light uppercase mb-8">
            FULL STACK ENGINEER
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-6xl md:text-8xl font-serif italic font-medium text-foreground mb-8 tracking-tight">
            Architecting <span className="text-accent-light not-italic font-sans font-extrabold block md:inline">Digital Foundations</span>
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-foreground/75 text-lg md:text-xl max-w-2xl font-light mb-12 leading-relaxed">
            Full Stack Engineer specializing in architecting resilient backend systems, optimized database architectures, and high-performance user interfaces.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            <Link href="#works" className="border border-border/60 hover:border-accent-light hover:bg-accent-light/5 text-foreground px-8 py-4 transition-all flex items-center gap-2 rounded-sm backdrop-blur-sm">
              EXPLORE WORKS <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#contact" className="text-foreground hover:text-accent-light transition-colors flex items-center gap-2">
              LET'S TALK <ChevronDown className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About & Stats */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto w-full relative z-10 border-t border-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">PHILOSOPHY & PROFILE</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Engineering Reliable, <br />Scalable Systems</h2>
            <div className="space-y-6 text-foreground/70 font-light text-lg">
              <p>
                Approaching web engineering through the lens of performance, security, and longevity. With over 3.4 years of professional experience, my focus is on designing robust backend infrastructures and optimized data schemes that support growing enterprises.
              </p>
              <p>
                Highly proficient in microservices, database tuning, robust API integration, and cloud environments. Holding a BSc in Computer Science, I bridge low-level logic with modern frontend layers.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden bg-muted shadow-2xl border border-border/30">
              <Image
                src="/profile.jpg"
                alt="Shiju UK"
                fill
                className="object-cover object-top brightness-75 contrast-125 grayscale-[30%] group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-muted/90 backdrop-blur-md border border-accent-light/30 p-8 shadow-2xl max-w-xs z-10 rounded-sm"
            >
              <h3 className="font-serif text-2xl mb-3 italic text-accent-light">Backend First.</h3>
              <p className="text-xs text-foreground/60 leading-relaxed font-light">
                Architecting resilient server-side systems, optimized databases, and secure, high-throughput APIs that scale effortlessly under load.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          <div className="bg-muted/30 backdrop-blur-sm border border-border/30 p-10 flex flex-col items-center justify-center text-center rounded-sm hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300">
            <div className="text-4xl md:text-5xl font-serif italic text-accent-light mb-3">3.5+</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase">Years of Experience</div>
          </div>
          <div className="bg-muted/30 backdrop-blur-sm border border-border/30 p-10 flex flex-col items-center justify-center text-center rounded-sm hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300">
            <div className="text-4xl md:text-5xl font-serif italic text-accent-light mb-3">50K+</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase">Requests Handled / Mo</div>
          </div>
          <div className="bg-muted/30 backdrop-blur-sm border border-border/30 p-10 flex flex-col items-center justify-center text-center rounded-sm hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300">
            <div className="text-4xl md:text-5xl font-serif italic text-accent-light mb-3">12+</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/60 uppercase">Production Systems Built</div>
          </div>
        </div>
      </section>

      {/* Featured Works (Moved Up) */}
      <section id="works" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-4">PRODUCTION DEPLOYMENTS</div>
            <h2 className="text-4xl md:text-5xl font-serif">Selected Shipped <br /> Systems</h2>
          </div>
          <p className="text-foreground/60 text-sm tracking-wider max-w-xs font-light text-left md:text-right">
            A showcase of high-end software products and custom modules built for modern scale and clean interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-muted/20 border border-border/30 p-8 md:p-12 rounded-sm relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">FINANCE & TRADING</div>
              <h3 className="text-3xl font-serif italic text-foreground mb-4">Wallet Management System</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">PROJECT OVERVIEW:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    A comprehensive secure balance register, wallet management system, and transactional gateway designed for high reliability.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">PROBLEM SOLVED:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Orchestrated reliable balance updates between users and volatile external trading platforms while enforcing verification structures to prevent negative balance states.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">KEY FEATURES:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Real-time transaction registers, automatic reports generation, Sumsub KYC integration, and MT5 server-side API communication.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">BUSINESS IMPACT:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Increased KYC onboarding speed and eliminated reconciliation errors, leading to frictionless trader operations.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-foreground hover:text-accent-light transition-colors uppercase">
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO (PRIVATE PORTAL)
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["NODE.JS", "REACT.JS", "MT5 API", "POSTGRESQL", "SUMSUB KYC"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-background/50 border border-border/50 text-[9px] tracking-widest font-bold text-foreground/70 uppercase rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted/40 border border-border/40 p-2 rounded-sm overflow-hidden hover:border-accent-light/20 transition-all duration-300">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/project1.png" alt="Wallet Management System" fill className="object-cover hover:scale-[1.03] transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Project 2 (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-muted/20 border border-border/30 p-8 md:p-12 rounded-sm relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">ENTERPRISE SAAS</div>
              <h3 className="text-3xl font-serif italic text-foreground mb-4">HRMS & CRM Modules</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">PROJECT OVERVIEW:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Integrated modular components for employee management, dynamic payroll logs, and sales funnel workflows.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">PROBLEM SOLVED:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Unified separate workflows for sales agents and internal hr teams, eliminating manual CSV transfers and system delays.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">KEY FEATURES:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Role-based dashboards, automated time sheets, pipeline status charts, and ERP database synchronization.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground/90 uppercase tracking-wider mb-1">BUSINESS IMPACT:</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    Improved internal communication and decreased administrative times by 35% within the first two quarters.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-foreground hover:text-accent-light transition-colors uppercase">
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO (INTRANET)
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["NEXT.JS", "NODE.JS", "TAILWIND CSS", "MYSQL", "DOCKER"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-background/50 border border-border/50 text-[9px] tracking-widest font-bold text-foreground/70 uppercase rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] w-full bg-muted/40 border border-border/40 p-2 rounded-sm overflow-hidden hover:border-accent-light/20 transition-all duration-300">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/project2.png" alt="HRMS & CRM Modules" fill className="object-cover hover:scale-[1.03] transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">ENTERPRISE ERP</div>
              <h3 className="text-2xl font-serif italic mb-4">Maxtron ERP</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Architected financial controllers, supplier validation systems, and responsive dashboards with granular access controls.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>Next.js</span> <span>Supabase</span> <span>Node.js</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">ED-TECH & SIZE METRICS</div>
              <h3 className="text-2xl font-serif italic mb-4">Inland Uniform</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Measurement registry and size hubs for schools. Features template-driven data entries and serverless API structures.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>Next.js</span> <span>Express.js</span> <span>Vercel</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">MARKETPLACE & E-COMMERCE</div>
              <h3 className="text-2xl font-serif italic mb-4">Tharacart</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Integrated seller registers, GST verify hooks, email/mobile OTP APIs, and managed hosting deployment.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>Node.js</span> <span>EJS</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">EDUCATION & ARCHITECTURE</div>
              <h3 className="text-2xl font-serif italic mb-4">Atrium School of Design</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Deployed full-stack operations dashboards enhancing operational workflow and administration efficiency.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>Python</span> <span>Django</span> <span>Bootstrap</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">STATIC PLATFORMS</div>
              <h3 className="text-2xl font-serif italic mb-4">369WEB and OWA</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Engineered highly responsive landing pages with high load performance and optimized modern layouts.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>HTML/CSS</span> <span>JavaScript</span> <span>Bootstrap</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">HOSPITALITY</div>
              <h3 className="text-2xl font-serif italic mb-4">Brook Valley</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                Dynamic resort site featuring admin panels for bookings, reservation registries, and guest logs.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>Python Django</span> <span>JavaScript</span>
              </div>
            </div>

            <div className="border border-border/40 bg-muted/10 p-8 rounded-sm hover:border-accent-light/30 transition-all duration-300">
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-3">LIFESTYLE BRANDING</div>
              <h3 className="text-2xl font-serif italic mb-4">Beauty World</h3>
              <p className="text-foreground/60 font-light text-sm mb-6 leading-relaxed">
                High-fidelity e-commerce portal tailored for modern lifestyle products with optimized client interactions.
              </p>
              <div className="flex gap-4 text-[10px] tracking-[0.1em] text-foreground/50 uppercase">
                <span>React.js</span> <span>Tailwind</span> <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Core Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Layout className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">Full Stack Development</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Building highly scalable, responsive, and maintainable web applications from front to back, using production-ready architectures.
            </p>
          </div>

          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Code2 className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">API Development</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Designing secure, RESTful, and real-time APIs. Integrating third-party platforms and broker networks with maximum security compliance.
            </p>
          </div>

          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Compass className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">Technical Consulting</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Providing architecture design recommendations, structural reviews, database optimization, and high-performance server migration planning.
            </p>
          </div>

          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Cpu className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">Infrastructure Management</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Setting up robust Linux environments, securing applications via SSL/Nginx, handling cron tasks, and setting up Docker deployment pipelines.
            </p>
          </div>

          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Globe className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">Domain & Hosting Management</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Managing comprehensive DNS records, migrating hosts without downtime, configuring SSL, mail systems, and routing setups.
            </p>
          </div>

          <div className="border border-border/30 bg-muted/20 p-8 hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/[0.02] transition-all duration-300 relative group rounded-sm">
            <Users className="w-6 h-6 text-accent-light mb-6" />
            <h3 className="text-xl font-serif mb-4 text-foreground">Team Leadership</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Supervising sprint planning, executing code reviews, mentoring junior engineers, and aligning development tasks with business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Engagements & Timeline */}
      <section id="engagements" className="py-32 px-6 max-w-4xl mx-auto w-full text-center border-t border-border/20 relative z-10">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">SELECTED ROLES</div>
        <h2 className="text-4xl md:text-5xl font-serif mb-24">Professional Journey</h2>

        <div className="relative text-left border-l border-border/50 pl-10 md:pl-16 space-y-24">

          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-accent-light rounded-full -left-[45px] md:-left-[70px] top-3.5 shadow-[0_0_12px_rgba(196,215,147,0.7)]"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <h3 className="text-2xl font-serif mb-2 md:mb-0">Full Stack Developer</h3>
              <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">JUL 2025 - Present</div>
            </div>
            <div className="text-xs font-bold tracking-widest text-foreground/45 mb-3 uppercase">THINK FORGE GLOBAL</div>
            <p className="text-foreground/70 font-light leading-relaxed">
              Developing modern, responsive frontend interfaces utilizing Next.js, React.js, and Tailwind.
              Collaborating with cross-functional teams to deliver end-to-end solutions with a strong focus on performance and security.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-foreground/20 rounded-full -left-[45px] md:-left-[70px] top-3.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <h3 className="text-2xl font-serif mb-2 md:mb-0 text-foreground/80">Senior Software Developer</h3>
              <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 uppercase">JUN 2023 - APR 2025</div>
            </div>
            <div className="text-xs font-bold tracking-widest text-foreground/45 mb-3 uppercase">FIRSTLOGIC META LAB</div>
            <p className="text-foreground/60 font-light leading-relaxed">
              Built 10+ high-performance APIs handling over 50,000 monthly requests. Reduced server costs by 20% through database optimization.
              Implemented JWT authentication for enterprise apps, reducing unauthorized access by 90%. Led server migrations to cPanel cutting setup time by 40%.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-foreground/20 rounded-full -left-[45px] md:-left-[70px] top-3.5"></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
              <h3 className="text-2xl font-serif mb-2 md:mb-0 text-foreground/80">Junior Software Developer</h3>
              <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 uppercase">OCT 2022 - MAY 2023</div>
            </div>
            <div className="text-xs font-bold tracking-widest text-foreground/45 mb-3 uppercase">FIRSTLOGIC META LAB</div>
            <p className="text-foreground/60 font-light leading-relaxed">
              Developed 2 full-stack Django applications with custom admin dashboards, improving workflow efficiency by 35%.
              Integrated Stripe payment gateway and collaborated on responsive UIs, reducing bounce rates by 25%.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto w-full border-t border-border/20 text-center relative z-10">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">LET'S TALK NEXT</div>
        <h2 className="text-5xl md:text-7xl font-serif italic mb-16">Let's build <br /> something <br /> lasting.</h2>

        <p className="text-foreground/60 font-light max-w-xl mx-auto mb-16 uppercase tracking-[0.1em] text-xs">
          Open to architectural engineering challenges, remote positions, and consultations.
        </p>

        <form className="max-w-2xl mx-auto flex flex-col gap-12 text-left bg-muted/10 p-8 md:p-12 rounded-sm border border-border/30 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase">Message</label>
            <textarea placeholder="Tell me about your project..." rows={3} className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-accent-light transition-colors text-foreground font-serif text-xl placeholder:text-foreground/20 resize-none"></textarea>
          </div>

          <button type="button" className="w-full bg-accent hover:bg-accent/90 text-foreground py-6 tracking-[0.2em] uppercase text-xs font-bold transition-colors mt-8 rounded-sm">
            SEND MESSAGE
          </button>
        </form>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-xs tracking-widest text-foreground/50 uppercase font-bold">
          <Link href="mailto:shijuuk98@gmail.com" className="hover:text-accent-light transition-colors">shijuuk98@gmail.com</Link>
          <Link href="tel:+919074159289" className="hover:text-accent-light transition-colors">+91 9074159289</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-border/20 bg-background text-[10px] tracking-[0.2em] uppercase text-foreground/50 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-lg tracking-wide text-foreground normal-case italic">Shiju UK</span>
            <span>A HIGH-END DIGITAL ENGINEERING PORTFOLIO</span>
          </div>
          <div className="flex gap-8">
            <Link href="https://www.linkedin.com/in/shiju-uk-1a320620a" target="_blank" className="hover:text-accent-light transition-colors">LINKEDIN</Link>
            <Link href="mailto:shijuuk98@gmail.com" className="hover:text-accent-light transition-colors">EMAIL</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

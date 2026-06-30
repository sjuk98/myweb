"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-24">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">CAREER ARCHITECTURE</div>
        <h2 className="text-4xl md:text-5xl font-serif">Professional Journey</h2>
      </div>

      <div className="relative border-l border-border/50 pl-10 md:pl-16 space-y-24">
        {/* Role 1 */}
        <div className="relative">
          <div className="absolute w-2.5 h-2.5 bg-accent-light rounded-full -left-[45px] md:-left-[70px] top-3.5 shadow-[0_0_12px_rgba(196,215,147,0.7)]" />
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
            <h3 className="text-2xl font-serif mb-2 md:mb-0">Senior Full Stack Developer</h3>
            <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase">JUL 2025 - Present</div>
          </div>
          <p className="text-foreground/75 font-light leading-relaxed mb-4">
            Leading development teams, designing robust microservices architecture decisions, mentoring developers, and delivering highly scalable software solutions.
          </p>
          <ul className="list-disc pl-5 text-foreground/60 text-xs space-y-1 font-light leading-relaxed">
            <li>Manage and coordinate engineering workflows and code quality metrics</li>
            <li>Architected custom integration bridges for WhatsApp and external fintech APIs</li>
            <li>Collaborate directly with stakeholders to align design with business scalability</li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="relative">
          <div className="absolute w-2.5 h-2.5 bg-foreground/20 rounded-full -left-[45px] md:-left-[70px] top-3.5" />
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
            <h3 className="text-2xl font-serif mb-2 md:mb-0 text-foreground/80">Full Stack Developer</h3>
            <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 uppercase">JUN 2023 - APR 2025</div>
          </div>
          <p className="text-foreground/75 font-light leading-relaxed mb-4">
            Building enterprise applications, database schemas, dashboards, and cloud-based systems.
          </p>
          <ul className="list-disc pl-5 text-foreground/60 text-xs space-y-1 font-light leading-relaxed">
            <li>Built over 10+ high-performance APIs handling substantial monthly traffic</li>
            <li>Optimized transactional SQL engines, reducing latency spikes by 30%</li>
            <li>Structured secure access layers using OAuth and strict JWT parameters</li>
          </ul>
        </div>

        {/* Role 3 */}
        <div className="relative">
          <div className="absolute w-2.5 h-2.5 bg-foreground/20 rounded-full -left-[45px] md:-left-[70px] top-3.5" />
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
            <h3 className="text-2xl font-serif mb-2 md:mb-0 text-foreground/80">Junior Developer</h3>
            <div className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 uppercase">OCT 2022 - MAY 2023</div>
          </div>
          <p className="text-foreground/75 font-light leading-relaxed mb-4">
            Developing application templates, custom dashboard routines, and handling responsive UI builds.
          </p>
          <ul className="list-disc pl-5 text-foreground/60 text-xs space-y-1 font-light leading-relaxed">
            <li>Integrated Stripe payment portals and verified webhook callback configurations</li>
            <li>Designed and shipped reusable components using React and Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

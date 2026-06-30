"use client";

export default function Testimonials() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full border-t border-border/20 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="text-[10px] font-bold tracking-[0.2em] text-accent-light uppercase mb-6">CLIENT SUCCESS</div>
        <h2 className="text-4xl md:text-5xl font-serif">What Clients Say</h2>
        <p className="text-foreground/60 font-light text-sm mt-4 tracking-wider uppercase">
          Feedback from agency partners, startup founders, and project leads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="border border-border/30 bg-muted/30 backdrop-blur-sm p-8 rounded-sm flex flex-col justify-between hover:border-accent-light/20 transition-all duration-300">
          <p className="text-foreground/80 font-light text-sm italic leading-relaxed mb-8">
            "Shiju brought structural clarity to our core backend system. He built our custom HRMS modules on schedule and decoupled our complex payroll database correctly, which optimized operational speeds significantly."
          </p>
          <div>
            <div className="font-serif italic text-base text-accent-light">Siddharth N.</div>
            <div className="text-[10px] tracking-widest uppercase font-bold text-foreground/50 mt-1">Founder & CEO</div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border border-border/30 bg-muted/30 backdrop-blur-sm p-8 rounded-sm flex flex-col justify-between hover:border-accent-light/20 transition-all duration-300">
          <p className="text-foreground/80 font-light text-sm italic leading-relaxed mb-8">
            "His ability to architect a reliable wallet integration utilizing MetaTrader APIs saved us months of development. The Sumsub KYC pipeline runs beautifully without manual bottlenecks."
          </p>
          <div>
            <div className="font-serif italic text-base text-accent-light">Ramanan K.</div>
            <div className="text-[10px] tracking-widest uppercase font-bold text-foreground/50 mt-1">Lead Solutions Architect</div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="border border-border/30 bg-muted/30 backdrop-blur-sm p-8 rounded-sm flex flex-col justify-between hover:border-accent-light/20 transition-all duration-300">
          <p className="text-foreground/80 font-light text-sm italic leading-relaxed mb-8">
            "A brilliant senior full stack developer who understands both database limits and front-end response times. He helped mentor our junior engineers while building high-converting customer portals."
          </p>
          <div>
            <div className="font-serif italic text-base text-accent-light">Adarsh M.</div>
            <div className="text-[10px] tracking-widest uppercase font-bold text-foreground/50 mt-1">Director of Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}

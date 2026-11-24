import React from 'react';
import { 
  Award, 
  Linkedin, 
  Twitter, 
  Briefcase, 
  ShieldCheck, 
  Factory,
  BarChart,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function Speaker() {
  const expertiseTags = [
    'Predictive Maintenance',
    'Computer Vision in QA',
    'Industrial IoT & Edge AI',
    'Digital Twins & Simulation',
    'Smart Factory Architecture',
    'Six Sigma & OEE Optimization',
    'OT/IT Cybersecurity'
  ];

  const speakerStats = [
    { value: '12+', label: 'Years Field Experience', icon: Briefcase },
    { value: '40+', label: 'Smart Factories Modernized', icon: Factory },
    { value: '$18M+', label: 'Downtime Losses Prevented', icon: BarChart },
    { value: '99.4%', label: 'QA Model Precision Achieved', icon: ShieldCheck },
  ];

  return (
    <section id="speaker" className="relative py-24 bg-navy-950 overflow-hidden transition-colors duration-300">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-emerald text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Featured Industry Expert</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Meet Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Speaker
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Learn directly from a veteran consultant who has deployed machine learning and computer vision pipelines across mission-critical manufacturing facilities worldwide.
          </p>
        </div>

        {/* Speaker Profile Showcase */}
        <div className="max-w-5xl mx-auto glass-panel-luxury rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Speaker Portrait with Tech Framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm">
                
                {/* Glow border halo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-emerald/40 to-accent-blue/40 opacity-50 blur-xl" />

                {/* Portrait Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-950 aspect-[4/5] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Arjun Mehta - Industrial AI & Automation Consultant"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/speaker-arjun.svg';
                    }}
                  />

                  {/* Gradient shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Corner Tech Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-navy-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
                    <span className="flex items-center gap-1.5 text-accent-emerald font-semibold">
                      <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                      Verified Keynote Speaker
                    </span>
                    <span className="text-slate-400 font-mono">12+ Yrs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Speaker Bio & Track Record */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Badge & Name */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 px-3 py-1 rounded-md font-bold">
                  Principal Consultant
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Global Industry 4.0 Advisor
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-1">
                Arjun Mehta
              </h3>

              <div className="text-base sm:text-lg font-semibold text-accent-blue mb-4 font-mono">
                Industrial AI & Automation Consultant
              </div>

              {/* Speaker Biography */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Arjun helps manufacturing organizations adopt AI-driven technologies to improve operational efficiency, optimize production processes, and build intelligent factories. With over 12 years of hands-on shop-floor and engineering consulting experience, he has bridged the gap between legacy PLC machinery and modern cloud/edge AI systems across automotive, precision machining, and electronics manufacturing facilities.
              </p>

              {/* Core Expertise Tags */}
              <div className="w-full mb-8">
                <div className="text-xs font-mono uppercase text-slate-400 mb-2.5 tracking-wider">
                  Domains of Expertise:
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertiseTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-navy-950 border border-white/[0.08] text-slate-300 hover:border-accent-emerald/40 hover:text-white transition-colors font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Track Record Stats */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]">
                {speakerStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="p-3 rounded-xl bg-navy-950/70 border border-white/[0.06]">
                      <div className="text-lg sm:text-xl font-bold font-mono text-accent-emerald mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-sans leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quote Bar & Socials */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-slate-400 gap-3">
                <span className="italic text-slate-400">
                  "AI is not here to replace manufacturing workers; it's here to give them superpowers."
                </span>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-navy-950 hover:bg-navy-900 text-slate-300 hover:text-accent-blue border border-white/10 transition-colors"
                    aria-label="Speaker LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-navy-950 hover:bg-navy-900 text-slate-300 hover:text-accent-blue border border-white/10 transition-colors"
                    aria-label="Speaker Twitter / X Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

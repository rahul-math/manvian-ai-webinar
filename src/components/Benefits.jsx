import React from 'react';
import { 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  MessageSquare, 
  FileCheck2, 
  Sparkles, 
  ShieldCheck,
  Cpu,
  Download,
  BookOpen
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Practical Industrial AI Knowledge',
      tag: 'Field Proven',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      description: 'Cut through marketing buzzwords. Understand exactly which machine learning algorithms run reliably on noisy shop-floor vibration telemetry and how to handle harsh industrial plant environments.'
    },
    {
      icon: Target,
      title: 'Real-World Manufacturing Use Cases',
      tag: 'Measurable ROI',
      color: 'text-accent-emerald',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      description: 'Explore verified implementation blueprints from automotive assembly, precision CNC machining, and semiconductor fabs that achieved 30%+ unplanned downtime reductions.'
    },
    {
      icon: Cpu,
      title: 'Insights into Emerging Technologies',
      tag: 'Next-Gen Edge AI',
      color: 'text-accent-blue',
      bgColor: 'bg-sky-500/10 border-sky-500/30',
      description: 'Get an exclusive look at neuromorphic sensors, edge TPUs, vision-language robotics models, and real-time digital twins transforming production cells in 2026 and beyond.'
    },
    {
      icon: FileCheck2,
      title: 'Actionable Implementation Strategies',
      tag: '90-Day Blueprint',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30',
      description: 'Walk away with a concrete 90-day pilot framework. Learn how to scope a high-ROI proof-of-concept, select high-impact pilot machinery, and avoid expensive vendor lock-in.'
    },
    {
      icon: MessageSquare,
      title: 'Opportunity to Interact During Q&A',
      tag: 'Live Floor Q&A',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/30',
      description: 'Ask specific questions about your facility’s unique machinery, brownfield PLC constraints, or sensor telemetry bottlenecks during a dedicated 15-minute live interactive Q&A session.'
    }
  ];

  const attendeePerks = [
    {
      title: 'Smart Factory AI Architecture Guide',
      type: 'PDF Technical Blueprint (42 Pages)',
      desc: 'Complete industrial reference architecture for connecting shop-floor edge nodes to cloud AI.'
    },
    {
      title: 'Verified Certificate of Attendance',
      type: 'Digital Credential',
      desc: 'Showcase your Industry 4.0 continuing education credential on LinkedIn and professional resumes.'
    },
    {
      title: 'Full 1080p Replay + Slide Deck',
      type: 'On-Demand Access',
      desc: 'Rewatch anytime with your plant operations, automation, and leadership engineering teams.'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-navy-900 border-t border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-blue text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span>Executive Value Proposition</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Attend?
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you manage a single assembly facility or oversee multi-site manufacturing plants, this webinar equips you with proven strategies to modernize faster and mitigate operational risk.
          </p>
        </div>

        {/* 5 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isFullSpan = index === 4;

            return (
              <div
                key={benefit.title}
                className={`glass-panel-luxury p-6 sm:p-7 rounded-3xl border border-white/[0.08] glass-card-hover group relative overflow-hidden ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl border ${benefit.bgColor}`}>
                    <Icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-navy-950 border border-white/10 text-slate-300 font-bold">
                    {benefit.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-accent-emerald transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-xs font-mono text-accent-emerald">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Session Deliverable</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Guaranteed Free Access */}
          <div className="glass-panel-luxury p-6 sm:p-7 rounded-3xl border border-accent-emerald/30 bg-gradient-to-br from-emerald-950/20 via-navy-900/90 to-navy-950/90 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-emerald uppercase tracking-wider mb-2 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Free Virtual Registration</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Limited Capacity Virtual Stream
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                To keep the live Q&A interactive and impactful, registrations are capped. Reserve your pass now before capacity is reached.
              </p>
            </div>

            <a
              href="#register"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent-emerald text-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-lg shadow-accent-emerald/20"
            >
              <span>Claim Free Seat Now</span>
            </a>
          </div>
        </div>

        {/* Free Attendee Deliverables Box */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-luxury border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-4">
            <div>
              <span className="text-xs font-mono text-accent-emerald uppercase tracking-wider font-bold">
                Free Registration Bonuses
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Included with Your Free Pass
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 self-start sm:self-auto">
              Delivered post-webinar via email
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attendeePerks.map((perk, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-navy-950/70 border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-accent-blue font-bold mb-1">
                    {perk.type}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 font-display">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Complimentary</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  Activity, 
  Scan, 
  Network, 
  TrendingUp, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Eye,
  Cpu,
  Layers
} from 'lucide-react';

export default function LearningOutcomes() {
  const learningModules = [
    {
      number: '01',
      title: 'Predictive Maintenance',
      subtitle: 'Early Anomaly Detection & Zero Unplanned Downtime',
      icon: Activity,
      accentColor: 'text-accent-emerald',
      borderColor: 'hover:border-accent-emerald/50',
      iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-accent-emerald',
      tag: 'Core Session 1',
      description: 'Understand how AI predicts machine failures before they happen through multi-sensor vibration, thermal, and acoustic spectral telemetry.',
      keyTakeaways: [
        'Time-series vibration FFT spectral analysis using ML anomaly models',
        'Calculating Remaining Useful Life (RUL) with 95%+ confidence intervals',
        'Automated work order creation in CMMS before mechanical failure occurs'
      ],
      metric: '35% Downtime Cut',
      techPill: 'FFT SPECTRAL TELEMETRY'
    },
    {
      number: '02',
      title: 'AI-Powered Quality Inspection',
      subtitle: 'Sub-Millimeter Computer Vision',
      icon: Scan,
      accentColor: 'text-accent-blue',
      borderColor: 'hover:border-accent-blue/50',
      iconBg: 'bg-sky-500/15 border-sky-500/30 text-accent-blue',
      tag: 'Core Session 2',
      description: 'Discover computer vision for detecting manufacturing defects at full line speeds, replacing inconsistent manual spot-checks with continuous automated optical inspection.',
      keyTakeaways: [
        'High-speed deep learning object detection (YOLOv8 & Vision Transformers)',
        'Classifying microscopic surface cracks, weld porosity & misalignments',
        'Sub-15ms edge inference on industrial GPU accelerators'
      ],
      metric: '99.4% Defect Accuracy',
      techPill: 'VISION TRANSFORMERS'
    },
    {
      number: '03',
      title: 'Smart Factory Automation',
      subtitle: 'Cyber-Physical OT & IT Convergence',
      icon: Network,
      accentColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
      tag: 'Core Session 3',
      description: 'Learn how AI, IoT, and automation work together to interconnect sensors, robotic arms, PLC controllers, and enterprise manufacturing execution systems (MES).',
      keyTakeaways: [
        'Bridging legacy brownfield machinery via OPC UA and MQTT gateways',
        'Autonomous mobile robot (AMR) fleet routing and line dispatch',
        'Building dynamic digital twins of multi-stage assembly lines'
      ],
      metric: 'OT/IT Interoperability',
      techPill: 'OPC UA • MQTT BUS'
    },
    {
      number: '04',
      title: 'Production Optimization',
      subtitle: 'Algorithmic Yield & Waste Reduction',
      icon: TrendingUp,
      accentColor: 'text-teal-400',
      borderColor: 'hover:border-teal-500/50',
      iconBg: 'bg-teal-500/15 border-teal-500/30 text-teal-400',
      tag: 'Core Session 4',
      description: 'Understand how AI improves productivity and reduces waste by modeling line constraints, dynamically balancing workloads, and optimizing energy consumption.',
      keyTakeaways: [
        'AI-driven Overall Equipment Effectiveness (OEE) tracking',
        'Dynamic parameter auto-tuning to reduce thermal scrap & rework',
        'Reinforcement learning for real-time assembly line balancing'
      ],
      metric: '18% OEE Increase',
      techPill: 'REINFORCEMENT LEARNING'
    }
  ];

  return (
    <section id="learning" className="relative py-24 bg-navy-950 overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-emerald text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curriculum & Technical Syllabus</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
              What You'll{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
                Learn
              </span>
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
              Four technical and operational master modules packed into an intensive 90-minute live session designed for actionable industrial deployment.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 border border-white/10 hover:border-accent-emerald text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-navy-800"
            >
              <span>Download Syllabus & Register</span>
              <ArrowUpRight className="w-4 h-4 text-accent-emerald" />
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningModules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.number}
                className={`group relative rounded-3xl glass-panel-luxury p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-white/[0.08] ${module.borderColor}`}
              >
                <div className="relative z-10">
                  
                  {/* Top Bar with Number & Module Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-2xl border ${module.iconBg} shadow-inner`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-accent-emerald font-bold">
                          {module.tag}
                        </span>
                        <div className="text-xs font-mono text-slate-400">MODULE {module.number}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-navy-950 border border-white/10 text-white block mb-1">
                        {module.metric}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">
                        {module.techPill}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-accent-emerald transition-colors">
                    {module.title}
                  </h3>
                  <div className="text-xs font-mono text-accent-blue mb-4 font-semibold">
                    {module.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {module.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Engineering Competencies Acquired:
                    </span>
                    {module.keyTakeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 p-0.5 rounded-full bg-accent-emerald/20 text-accent-emerald shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

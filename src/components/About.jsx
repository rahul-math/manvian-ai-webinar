import React, { useState } from 'react';
import { 
  TrendingDown, 
  Activity, 
  Zap, 
  Scan, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  ChevronRight,
  Gauge,
  Sliders,
  ShieldCheck,
  Radio
} from 'lucide-react';

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'cost',
      title: 'Reduce Operational Costs',
      short: 'Energy & Scrap Savings',
      icon: TrendingDown,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      stat: '-28%',
      statLabel: 'Scrap & Unplanned Rework Cost',
      description: 'Eliminate expensive scrap, optimize machine kilowatt hours during peak grid tariffs, and balance consumable tooling wear across automated cells.',
      telemetry: {
        title: 'Energy & Waste Telemetry',
        metric1: 'Peak Load Shift: -22%',
        metric2: 'Scrap Volume: 0.4% (vs 3.8% Industry Avg)',
        status: 'Optimal Energy Dispatch'
      },
      details: [
        'Algorithmic load-shedding during peak industrial tariff windows',
        'Raw material yield optimization with dynamic feed-rate adjustment',
        'Elimination of manual rework loops on high-speed stamping & CNC cells'
      ]
    },
    {
      id: 'predict',
      title: 'Predict Equipment Failures',
      short: 'Zero Unplanned Stops',
      icon: Activity,
      color: 'text-accent-blue',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
      stat: '35%',
      statLabel: 'Decrease in Unplanned Stoppages',
      description: 'Shift from calendar-based maintenance to precision condition-based monitoring utilizing multi-axis vibration, acoustics, and motor flux signatures.',
      telemetry: {
        title: 'Vibration & Thermal Telemetry',
        metric1: 'Bearing Anomaly Score: 0.08 (Normal)',
        metric2: 'Estimated RUL: 840 Operating Hours',
        status: 'Continuous FFT Spectrum Monitoring'
      },
      details: [
        'Vibration FFT spectral kurtosis detection before mechanical seizure',
        'Continuous Remaining Useful Life (RUL) regression calculations',
        'Automated CMMS maintenance work order dispatch before catastrophic stops'
      ]
    },
    {
      id: 'efficiency',
      title: 'Improve Production Efficiency',
      short: 'OEE Optimization',
      icon: Zap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      stat: '+18%',
      statLabel: 'Average OEE Gain Across Lines',
      description: 'Dynamic line balancing, automated bottleneck discovery, and autonomous mobile robot (AMR) material dispatch to prevent workstation starvation.',
      telemetry: {
        title: 'Line Balancing & OEE Telemetry',
        metric1: 'Throughput Rate: 480 units/hr',
        metric2: 'Workstation Starvation: 0.00%',
        status: 'Self-Balancing Line Pacing'
      },
      details: [
        'Real-time bottleneck identification in multi-stage assembly lines',
        'Algorithmic AMR & AGV fleet routing to eliminate micro-stops',
        'Shift handover optimization using digital work instructions'
      ]
    },
    {
      id: 'quality',
      title: 'Automate Quality Inspection',
      short: 'Sub-Millimeter Optical QA',
      icon: Scan,
      color: 'text-accent-emerald',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      stat: '99.4%',
      statLabel: 'Defect Capture at Line Speeds',
      description: 'Replace manual human spot-checking with high-speed computer vision running sub-15ms inference to classify sub-millimeter cracks, welds, and surface porosity.',
      telemetry: {
        title: 'Computer Vision Optical QA',
        metric1: 'Inference Latency: 11.4 ms',
        metric2: 'False Reject Rate: <0.02%',
        status: 'Active Optical Camera Array'
      },
      details: [
        'Sub-millimeter optical flaw classification without slowing conveyor belts',
        'Continuous model retraining using active learning on edge servers',
        'Automated pneumatic sorting and non-conforming part diversion'
      ]
    },
    {
      id: 'decisions',
      title: 'Make Data-Driven Decisions',
      short: 'OT to IT Unified Fabric',
      icon: Database,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      stat: '100%',
      statLabel: 'Real-Time Floor-to-MES Visibility',
      description: 'Break down operational silos by harmonizing legacy PLCs, SCADA networks, and cloud MES/ERP platforms into a unified industrial semantic model.',
      telemetry: {
        title: 'Industrial Semantic Data Lake',
        metric1: 'Data Ingestion: 24,000 tags/sec',
        metric2: 'Protocol: OPC-UA & MQTT Sparkplug B',
        status: 'Zero Data Silos'
      },
      details: [
        'OPC UA & MQTT edge normalization for multi-vendor brownfield machinery',
        'Plant executive dashboards with immediate root-cause drill-downs',
        'Industrial generative AI copilots for technician troubleshooting'
      ]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-navy-900 border-t border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-blue text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-accent-blue" />
            <span>Industrial Paradigm Shift</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            The Future of Manufacturing Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Intelligent.
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Traditional manufacturing relies on isolated machinery, scheduled maintenance that burns capital, and manual spot-checks. See how modern industrial operations harness AI to build self-diagnosing, autonomous factories.
          </p>
        </div>

        {/* 2-Column Real-World Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 5 Core Capabilities */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 px-1 flex items-center justify-between">
              <span>Select an AI Pillar to Inspect:</span>
              <span className="text-accent-emerald font-semibold">5 Core Capabilities</span>
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? 'bg-navy-900/90 border-accent-emerald/50 shadow-2xl shadow-black/60 ring-1 ring-accent-emerald/30'
                      : 'bg-navy-950/60 border-white/[0.06] hover:bg-navy-900/50 hover:border-white/10'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className={`p-3 rounded-xl ${pillar.bgColor} border ${pillar.borderColor} shrink-0 mt-0.5`}>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`text-base font-bold font-display ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-mono text-accent-blue font-semibold shrink-0">
                        {pillar.short}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="self-center pl-1 text-slate-500">
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-accent-emerald translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Realistic Diagnostic Console */}
          <div className="lg:col-span-6">
            <div className="glass-panel-luxury rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Header with Title and Quantitative Stat */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent-blue font-semibold">
                    Live System Breakdown • Pillar 0{activePillar + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                    {pillars[activePillar].title}
                  </h4>
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-accent-emerald">
                    {pillars[activePillar].stat}
                  </div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">
                    {pillars[activePillar].statLabel}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {pillars[activePillar].description}
              </p>

              {/* Realistic Telemetry Readout Box */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/[0.08] mb-6">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-accent-emerald animate-pulse" />
                    {pillars[activePillar].telemetry.title}
                  </span>
                  <span className="text-accent-emerald text-[11px] font-bold">
                    {pillars[activePillar].telemetry.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-white/[0.05] text-slate-300">
                    {pillars[activePillar].telemetry.metric1}
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-white/[0.05] text-slate-300">
                    {pillars[activePillar].telemetry.metric2}
                  </div>
                </div>
              </div>

              {/* Actionable Deliverables */}
              <div className="space-y-2.5 mb-8">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Webinar Operational Takeaways:
                </span>
                {pillars[activePillar].details.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              {/* Before vs After Benchmark */}
              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="flex items-center gap-1.5 text-red-400 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Legacy Plant</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Reactive repairs, manual clipboard QA, unrecorded telemetry gaps.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Smart Factory</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Sub-second defect detection, predictive MTBF reduction, self-optimizing cells.
                  </p>
                </div>
              </div>

              {/* Bottom CTA link */}
              <div className="mt-6 text-center">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-emerald hover:text-emerald-300 font-mono transition-colors"
                >
                  <span>Learn how to deploy this in your plant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

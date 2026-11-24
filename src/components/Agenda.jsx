import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Radio,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Agenda() {
  const [activeSession, setActiveSession] = useState(0);

  const schedule = [
    {
      time: '11:00 AM',
      duration: '15 Mins',
      title: 'Introduction to AI in Manufacturing',
      type: 'Executive Keynote',
      typeColor: 'text-accent-blue bg-sky-500/10 border-sky-500/30',
      description: 'The transition from traditional Industry 3.0 automation to autonomous Industry 4.0. Identifying why modern plants must adopt AI now to preserve margin and customer SLA commitments.',
      highlights: [
        'Macro-economic manufacturing headwinds & rising scrap costs',
        'State of Industrial AI: Hype vs. Shop-floor reality',
        'Framework for evaluating AI readiness in brownfield facilities'
      ]
    },
    {
      time: '11:15 AM',
      duration: '20 Mins',
      title: 'Predictive Maintenance and Machine Learning',
      type: 'Technical Deep Dive',
      typeColor: 'text-accent-emerald bg-emerald-500/10 border-emerald-500/30',
      description: 'Deep dive into sensors, telemetry collection, and ML algorithms that detect vibration anomalies, thermal spikes, and bearing wear before catastrophic equipment failure.',
      highlights: [
        'Time-series vibration analysis (FFT & spectral kurtosis)',
        'Building Remaining Useful Life (RUL) regression models',
        'Eliminating unnecessary planned maintenance cycles'
      ]
    },
    {
      time: '11:35 AM',
      duration: '20 Mins',
      title: 'Computer Vision and Quality Inspection',
      type: 'Live Demo & Case Study',
      typeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      description: 'Hands-on review of computer vision inspection lines. Learn how high-resolution industrial cameras paired with edge tensor chips spot micro-defects at line velocity.',
      highlights: [
        'Optical Automated Inspection (AOI) architectures',
        'Handling difficult lighting and reflective metal surfaces',
        'Sub-15ms inference pipelines on ruggedized edge gateways'
      ]
    },
    {
      time: '11:55 AM',
      duration: '20 Mins',
      title: 'Building Smart Factories with AI',
      type: 'Systems Architecture',
      typeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      description: 'Bridging the Operational Technology (OT) and Information Technology (IT) divide. Practical connectivity blueprints for PLCs, SCADA, edge servers, and cloud data platforms.',
      highlights: [
        'OPC UA, MQTT, and industrial communication protocols',
        'Cybersecurity and air-gapped shop-floor safety protocols',
        'Integrating AI insights into ERP (SAP/Oracle) and MES'
      ]
    },
    {
      time: '12:15 PM',
      duration: '15 Mins',
      title: 'Real-World Use Cases and Q&A',
      type: 'Interactive Floor Q&A',
      typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'Real-world case studies from automotive and precision machining implementations, followed by an open floor Q&A directly with Arjun Mehta.',
      highlights: [
        'Case Study: How an automotive supplier saved $4.2M in annual downtime',
        'Direct live Q&A addressing specific attendee plant challenges',
        'Audience polling on biggest operational bottlenecks'
      ]
    },
    {
      time: '12:30 PM',
      duration: '05 Mins',
      title: 'Closing Remarks',
      type: 'Executive Takeaways',
      typeColor: 'text-slate-300 bg-navy-800 border-white/10',
      description: 'Summary of critical takeaways, rollout checklist download link distribution, and next steps for joining the Manvian Industrial AI Pilot Program.',
      highlights: [
        'Instant distribution of the 90-Day Factory AI Implementation Checklist',
        'Webinar recording & slide deck delivery information',
        'Private consultation slots for registered enterprise attendees'
      ]
    }
  ];

  return (
    <section id="agenda" className="relative py-24 bg-navy-900 border-t border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-blue text-xs font-mono uppercase tracking-widest mb-3">
            <Clock className="w-3.5 h-3.5 text-accent-blue" />
            <span>Structured 90-Minute Timetable</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            What We'll{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Cover
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every segment is engineered for maximum operational impact. No academic fluff—only actionable blueprints you can take back to your plant operations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Central Line */}
          <div className="absolute left-4 sm:left-32 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-emerald via-accent-blue to-navy-800 hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {schedule.map((item, index) => {
              const isActive = activeSession === index;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveSession(index)}
                  className="relative flex flex-col sm:flex-row items-start gap-6 cursor-pointer group transition-all duration-200"
                >
                  {/* Left Time Badge (Desktop) */}
                  <div className="hidden sm:flex flex-col items-end w-24 shrink-0 pt-1">
                    <span className="text-sm font-bold font-mono text-white group-hover:text-accent-emerald transition-colors">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  {/* Timeline Node Dot */}
                  <div className="hidden sm:flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-navy-950 border-2 border-accent-emerald/60 z-10 group-hover:border-accent-emerald group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-emerald/30 transition-all">
                    <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-accent-emerald animate-pulse' : 'bg-slate-400 group-hover:bg-accent-emerald'}`} />
                  </div>

                  {/* Agenda Card Content */}
                  <div
                    className={`flex-1 rounded-3xl p-6 sm:p-7 border transition-all duration-300 w-full ${
                      isActive
                        ? 'bg-navy-900/95 border-accent-emerald/50 shadow-2xl shadow-black/60 ring-1 ring-accent-emerald/20'
                        : 'bg-navy-950/70 border-white/[0.06] hover:bg-navy-900/60 hover:border-white/10'
                    }`}
                  >
                    {/* Mobile Time Header */}
                    <div className="flex sm:hidden items-center justify-between mb-3 text-xs font-mono">
                      <span className="font-bold text-accent-emerald text-sm">{item.time}</span>
                      <span className="text-slate-400 bg-navy-950 px-2 py-0.5 rounded border border-white/10">{item.duration}</span>
                    </div>

                    {/* Type Tag & Title */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${item.typeColor}`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Session 0{index + 1} of 06
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-accent-emerald transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlight Bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-white/[0.08]">
                      {item.highlights.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Agenda Summary Note */}
          <div className="mt-12 p-6 rounded-3xl glass-panel-luxury border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display">Full Slide Deck & Recording Included</h4>
                <p className="text-xs text-slate-400">All registered participants receive the 1080p replay video and technical slides within 24 hours.</p>
              </div>
            </div>

            <a
              href="#register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-emerald text-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors shrink-0 shadow-lg shadow-accent-emerald/20"
            >
              <span>Save My Seat</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

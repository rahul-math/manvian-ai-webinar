import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is the webinar free?',
      answer: 'Yes, registration and live attendance are 100% free of charge. We believe in advancing Industry 4.0 knowledge and AI literacy across the manufacturing sector. However, because we host a live interactive Q&A directly with Arjun Mehta, virtual room capacity is capped to maintain streaming quality. Early pre-registration is recommended.'
    },
    {
      question: 'Who should attend?',
      answer: 'This session is specifically tailored for Plant Managers, Operations Directors, Manufacturing & Automation Engineers, Quality Control Leads, Digital Transformation Officers, and VP/C-level leaders in automotive, aerospace, precision electronics, pharmaceuticals, and industrial manufacturing.'
    },
    {
      question: 'Do I need prior AI knowledge?',
      answer: 'No prior machine learning, coding, or data science background is required. The webinar is designed from an operational and architectural perspective—focusing on sensor selection, shop-floor deployment, ROI calculation, and connecting OT with IT, rather than abstract mathematical algorithms.'
    },
    {
      question: 'Will the session be recorded?',
      answer: 'Yes! All registered participants will receive an email containing the full high-definition video recording, the comprehensive slide deck presentation, and the downloadable Smart Factory AI Deployment Guide within 24 hours of the live broadcast.'
    },
    {
      question: 'How can I join the webinar?',
      answer: 'Upon submitting the free registration form above, you will immediately receive a calendar invitation and confirmation email with your personal join URL. You can join the session directly from any modern web browser on your desktop, laptop, tablet, or smartphone without installing special software.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-navy-900 border-t border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-white/10 text-accent-blue text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-accent-blue" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Questions
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Everything you need to know about the webinar format, prerequisites, and registration details.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-navy-900/95 border-accent-emerald/40 shadow-2xl shadow-black/50 ring-1 ring-accent-emerald/20'
                    : 'bg-navy-950/70 border-white/[0.06] hover:bg-navy-900/50 hover:border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 w-6 h-6 rounded-md flex items-center justify-center shrink-0">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </span>

                  <span className={`p-1.5 rounded-lg bg-navy-950 text-slate-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-emerald' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-luxury border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue shrink-0 hidden sm:block">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-white">Have a specific plant or team inquiry?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Our manufacturing advisory desk is here to help with group registrations and technical agendas.
              </p>
            </div>
          </div>

          <a
            href="mailto:webinars@manvian.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <Mail className="w-4 h-4 text-accent-emerald" />
            <span>Contact Webinars Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
}

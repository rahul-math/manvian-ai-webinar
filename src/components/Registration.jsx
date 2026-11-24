import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign, 
  ShieldCheck, 
  User, 
  Mail, 
  Building2, 
  Briefcase, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  CalendarPlus, 
  RotateCcw,
  Sparkles,
  Lock,
  Ticket,
  QrCode
} from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobRole: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);

  // Email format regex validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Phone number basic validation (at least 7 digits, allowed +, -, spaces, parentheses)
  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  // Comprehensive field validation
  const validateField = (name, value) => {
    let error = '';
    const trimmed = value.trim();

    switch (name) {
      case 'fullName':
        if (!trimmed) {
          error = 'Full name is required';
        } else if (trimmed.length < 2) {
          error = 'Please enter at least 2 characters';
        }
        break;
      case 'workEmail':
        if (!trimmed) {
          error = 'Work email is required';
        } else if (!validateEmail(trimmed)) {
          error = 'Please enter a valid work email address (e.g. name@company.com)';
        }
        break;
      case 'companyName':
        if (!trimmed) {
          error = 'Company name is required';
        }
        break;
      case 'jobRole':
        if (!trimmed) {
          error = 'Job role is required';
        }
        break;
      case 'phoneNumber':
        if (!trimmed) {
          error = 'Phone number is required';
        } else if (!validatePhone(trimmed)) {
          error = 'Please enter a valid phone number (e.g. +1 555-0199 or +91 98765 43210)';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFieldValid = (name) => {
    return touched[name] && !errors[name] && formData[name].trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {
      fullName: true,
      workEmail: true,
      companyName: true,
      jobRole: true,
      phoneNumber: true,
    };
    setTouched(allTouched);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRegisteredUser({ ...formData });

      try {
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#10B981', '#38BDF8', '#34D399', '#38BDF8']
        });
      } catch (err) {}
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      jobRole: '',
      phoneNumber: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setRegisteredUser(null);
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("AI-Powered Manufacturing: Building the Smart Factory of Tomorrow | Manvian Webinar");
    const details = encodeURIComponent("Join Manvian for an exclusive executive webinar featuring Arjun Mehta on how Artificial Intelligence, predictive maintenance, and computer vision are transforming smart factories.\n\nLive Access Link: https://manvian.com/live/webinar-20261128\nSpeaker: Arjun Mehta");
    const location = encodeURIComponent("Online Live Stream (Manvian Virtual Event)");
    const dates = "20261128T053000Z/20261128T070000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const handleDownloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Manvian//AI Manufacturing Webinar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:manvian-webinar-20261128@manvian.com',
      'DTSTAMP:20261123T100000Z',
      'DTSTART:20261128T053000Z',
      'DTEND:20261128T070000Z',
      'SUMMARY:AI-Powered Manufacturing: Building the Smart Factory of Tomorrow',
      'DESCRIPTION:Join Manvian for an exclusive executive webinar featuring Arjun Mehta on how Artificial Intelligence is transforming smart manufacturing.\\n\\nLive Link: https://manvian.com/live/webinar-20261128',
      'LOCATION:Online Live Virtual Stream',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Manvian-AI-Manufacturing-Webinar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="register" className="relative py-24 bg-navy-950 overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-accent-emerald/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-industrial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-accent-emerald/40 text-accent-emerald text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Secure Your Virtual Seat</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Your Smart Manufacturing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald via-teal-300 to-accent-blue">
              Journey Starts Here.
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Reserve your free seat and discover how AI can transform your manufacturing operations.
          </p>
        </div>

        {/* 2-Column Split: Event Details on Left, Form/Success on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Webinar Metadata & Value Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-panel-luxury border border-white/10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-emerald font-bold">
                  Executive Registration
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                  100% FREE PASS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                AI-Powered Manufacturing: Building the Smart Factory of Tomorrow
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Join Arjun Mehta and fellow manufacturing leaders for an exclusive operational session on machine learning, predictive maintenance, and optical automated inspection.
              </p>

              {/* Event Metadata Breakdown */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-navy-950/70 border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-accent-emerald/10 text-accent-emerald shrink-0 border border-accent-emerald/20">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Date</div>
                    <div className="text-sm font-bold text-white font-display">28 November 2026</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-navy-950/70 border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue shrink-0 border border-accent-blue/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Time</div>
                    <div className="text-sm font-bold text-white font-display">11:00 AM – 12:30 PM IST</div>
                    <div className="text-xs text-slate-400 font-mono">(90 Minutes Live Interactive)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-navy-950/70 border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 border border-purple-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Format</div>
                    <div className="text-sm font-bold text-white font-display">Online (Live Virtual Stream)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-navy-950/70 border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Registration Fee</div>
                    <div className="text-sm font-bold text-accent-emerald font-display">Free (Pre-Registration Required)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Guarantee */}
            <div className="pt-4 border-t border-white/[0.08] text-xs text-slate-400 flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-accent-emerald shrink-0" />
              <span>Enterprise encrypted. Instant calendar invite sent upon submission.</span>
            </div>
          </div>

          {/* Right Column: Registration Form OR Success Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {!isSubmitted ? (
              /* Registration Form */
              <div className="glass-panel-luxury rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Attendee Registration
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill in your details below to receive the secure live broadcast credentials.
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Fast Track
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Vikram Sharma"
                        className={`w-full pl-10 pr-10 py-3 rounded-xl bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.fullName && touched.fullName
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500/50'
                            : isFieldValid('fullName')
                            ? 'border-emerald-500/60 focus:border-emerald-500'
                            : 'border-white/10 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/40'
                        }`}
                      />
                      {isFieldValid('fullName') && (
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-accent-emerald">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="e.g. vikram@tatamotors.com"
                        className={`w-full pl-10 pr-10 py-3 rounded-xl bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.workEmail && touched.workEmail
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500/50'
                            : isFieldValid('workEmail')
                            ? 'border-emerald-500/60 focus:border-emerald-500'
                            : 'border-white/10 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/40'
                        }`}
                      />
                      {isFieldValid('workEmail') && (
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-accent-emerald">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.workEmail && touched.workEmail && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.workEmail}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name & Job Role (2-col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Precision Robotics Ltd"
                          className={`w-full pl-10 pr-10 py-3 rounded-xl bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                            errors.companyName && touched.companyName
                              ? 'border-red-500 focus:ring-1 focus:ring-red-500/50'
                              : isFieldValid('companyName')
                              ? 'border-emerald-500/60 focus:border-emerald-500'
                              : 'border-white/10 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/40'
                          }`}
                        />
                        {isFieldValid('companyName') && (
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-accent-emerald">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      {errors.companyName && touched.companyName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="jobRole" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                        Job Role <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="jobRole"
                          name="jobRole"
                          value={formData.jobRole}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="e.g. VP of Operations"
                          className={`w-full pl-10 pr-10 py-3 rounded-xl bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                            errors.jobRole && touched.jobRole
                              ? 'border-red-500 focus:ring-1 focus:ring-red-500/50'
                              : isFieldValid('jobRole')
                              ? 'border-emerald-500/60 focus:border-emerald-500'
                              : 'border-white/10 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/40'
                          }`}
                        />
                        {isFieldValid('jobRole') && (
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-accent-emerald">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      {errors.jobRole && touched.jobRole && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.jobRole}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full pl-10 pr-10 py-3 rounded-xl bg-navy-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.phoneNumber && touched.phoneNumber
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500/50'
                            : isFieldValid('phoneNumber')
                            ? 'border-emerald-500/60 focus:border-emerald-500'
                            : 'border-white/10 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald/40'
                        }`}
                      />
                      {isFieldValid('phoneNumber') && (
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-accent-emerald">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-accent-emerald hover:bg-emerald-400 text-navy-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-accent-emerald/25 hover:shadow-accent-emerald/40 hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-accent-emerald"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></span>
                          <span>Securing Your Virtual Seat...</span>
                        </>
                      ) : (
                        <>
                          <span>Register for Free</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                    Instant confirmation. Calendar invite sent upon submission.
                  </p>

                </form>

              </div>
            ) : (
              /* Success Confirmation Card & Realistic Boarding Pass */
              <div className="glass-panel-luxury rounded-3xl p-6 sm:p-10 border border-accent-emerald/50 shadow-2xl text-center animate-in zoom-in-95 duration-300">
                
                {/* Success Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-emerald/20 border border-accent-emerald/50 flex items-center justify-center text-accent-emerald mx-auto mb-5 shadow-lg shadow-accent-emerald/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-accent-emerald text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Registration Confirmed</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                  You're In, {registeredUser?.fullName}!
                </h3>

                <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto">
                  We have reserved your free virtual pass. Access credentials and live streaming link have been dispatched to{' '}
                  <span className="text-accent-emerald font-semibold font-mono">{registeredUser?.workEmail}</span>.
                </p>

                {/* Digital Event Pass Ticket */}
                <div className="p-4 rounded-2xl bg-navy-950 border border-white/10 text-left mb-6 space-y-2.5 text-xs font-mono relative overflow-hidden">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-accent-emerald" />
                      <span className="font-bold text-white uppercase tracking-wider">OFFICIAL WEBINAR PASS</span>
                    </div>
                    <span className="text-[10px] text-accent-blue font-bold">PASS #MANV-8492</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Attendee:</span>
                    <span className="font-semibold text-white">{registeredUser?.fullName} ({registeredUser?.companyName})</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Date:</span>
                    <span className="text-accent-emerald font-semibold">28 November 2026</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Time:</span>
                    <span>11:00 AM – 12:30 PM IST</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Speaker:</span>
                    <span>Arjun Mehta (Industrial AI Consultant)</span>
                  </div>
                </div>

                {/* Calendar Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs font-semibold text-white transition-colors shadow"
                  >
                    <CalendarPlus className="w-4 h-4 text-accent-blue" />
                    <span>Add to Google Calendar</span>
                  </a>

                  <button
                    onClick={handleDownloadIcs}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs font-semibold text-white transition-colors shadow"
                  >
                    <Download className="w-4 h-4 text-accent-emerald" />
                    <span>Download iCal (.ics)</span>
                  </button>
                </div>

                {/* Register Colleague Option */}
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Register another colleague or edit details</span>
                </button>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

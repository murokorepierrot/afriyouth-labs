'use client';

import React, { useState } from 'react';

export default function Home() {
  // Advanced State Management for Interactive Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: '',
    message: '',
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.track) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', track: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'What are the structural prerequisites for joining the program?',
      a: 'We look for a strong foundation in practical problem-solving logic. Candidates with a proven background in high-fidelity execution or software infrastructure receive priority application matching.',
    },
    {
      q: 'How long does each structural validation cohort run?',
      a: 'Our deep immersive development loops last exactly 3 to 6 months depending on your track, focused heavily on real-world engineering metrics.',
    },
    {
      q: 'Are project allocations eligible for deployment seed funding?',
      a: 'Yes. Top-performing architecture tracks that successfully complete validation receive access to seed grants and matching venture models.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased overflow-hidden selection:bg-blue-500/30 selection:text-blue-200 relative">
      {/* BACKGROUND ABSTRACT ART ORBS */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 to-indigo-500/0 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-teal-500/0 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. PREMIUM HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#030712]/70 backdrop-blur-xl border-b border-slate-900/80 z-50 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-lg tracking-wider shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300">
            AY
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AfriYouth <span className="text-blue-500 font-light">Labs</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition duration-200">
            About
          </a>
          <a href="#labs" className="hover:text-white transition duration-200">
            Innovation Hubs
          </a>
          <a href="#faq" className="hover:text-white transition duration-200">
            FAQ
          </a>
          <a
            href="#join"
            className="relative group overflow-hidden bg-white text-slate-950 font-bold px-5 py-2.5 rounded-xl transition duration-300 hover:opacity-90 shadow-md"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* 2. HIGH-CONVERTING HERO SECTION */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-6 text-center pt-24"
      >
        <div className="max-w-4xl mx-auto z-10 relative">
          {/* Neon Gradient Badge */}
          <span className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Shaping Africa&apos;s Digital Frontier
          </span>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-white">
            Empowering Youth Through{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Next-Gen Tech
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
            Welcome to AfriYouth Innovation Labs. We equip visionary minds across the
            continent with modern engineering skillsets, professional frameworks, and
            acceleration structures to build scalable global solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#labs"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition duration-300"
            >
              Explore Innovation Hubs
            </a>
            <a
              href="#join"
              className="w-full sm:w-auto bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold px-8 py-4 rounded-xl transition duration-300 backdrop-blur-md"
            >
              Join Cohort 2026
            </a>
          </div>
        </div>
      </section>

      {/* 3. METRIC DASHBOARD GRID */}
      <section className="pb-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-px bg-slate-900/20 border border-slate-900 p-8 rounded-3xl backdrop-blur-xl">
          <div className="text-center p-4 md:border-r border-slate-900">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              500+
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Engineers Scaled
            </div>
          </div>
          <div className="text-center p-4 md:border-r border-slate-900">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2 tracking-tight">
              96%
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Practical Implementation
            </div>
          </div>
          <div className="text-center p-4 md:border-r border-slate-900">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              50+
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Ventures Accelerated
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2 tracking-tight">
              10+
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Regional Hubs
            </div>
          </div>
        </div>
      </section>

      {/* 4. HUB ARCHITECTURE / CARD LABS */}
      <section id="labs" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
            Our Specialized Labs
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Targeted technical ecosystems designed to nurture code frameworks from
            inception to market launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-[#0b0f19]/40 border border-slate-900/60 p-8 rounded-2xl hover:border-blue-500/20 hover:bg-[#0b0f19]/80 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/5 text-blue-400 flex items-center justify-center rounded-xl font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-blue-500/10">
              01
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100 tracking-tight">
              Advanced Coding Lab
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-stack software engineering, progressive database indexing, state
              architectural patterns, and production-ready APIs built for scaling.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0b0f19]/40 border border-slate-900/60 p-8 rounded-2xl hover:border-emerald-500/20 hover:bg-[#0b0f19]/80 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/5 text-emerald-400 flex items-center justify-center rounded-xl font-bold text-lg mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-emerald-500/10">
              02
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100 tracking-tight">
              High-Fidelity Studio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Interactive product experience frameworks, detailed layout structuring,
              custom design pattern design, and beautiful typography curation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0b0f19]/40 border border-slate-900/60 p-8 rounded-2xl hover:border-indigo-500/20 hover:bg-[#0b0f19]/80 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/5 text-indigo-400 flex items-center justify-center rounded-xl font-bold text-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-indigo-500/10">
              03
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100 tracking-tight">
              Incubation &amp; Business
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Venture logic roadmapping, investor deck structuring, technical advisory
              pipelines, and cross-continental network matching structures.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ACCORDION FAQ */}
      <section
        id="faq"
        className="py-24 px-6 max-w-4xl mx-auto border-t border-slate-900/60 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Deep structural details regarding deployment models and registration
            pathways.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b0f19]/40 border border-slate-900/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-slate-200 hover:text-white transition-all"
                aria-expanded={activeFaq === index}
              >
                <span className="pr-4">{item.q}</span>
                <span className="text-xl text-blue-400 shrink-0">
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. GLOWING PLATFORM APPLICATION FORM */}
      <section id="join" className="py-24 px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-b from-slate-900/70 to-[#0b0f19]/70 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl shadow-blue-950/30">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-emerald-500/5 rounded-3xl pointer-events-none" />

            <div className="relative text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white tracking-tight">
                Join AfriYouth Labs
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Initialize your tech application profile and register your track
                sector.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  Your Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#030712] border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-4 text-slate-200 placeholder-slate-600 focus:outline-none transition-all"
                  placeholder="e.g. your user name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#030712] border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-4 text-slate-200 placeholder-slate-600 focus:outline-none transition-all"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="track"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  Select Innovation Track Sector
                </label>
                <div className="relative">
                  <select
                    id="track"
                    value={formData.track}
                    onChange={(e) =>
                      setFormData({ ...formData, track: e.target.value })
                    }
                    className="w-full bg-[#030712] border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-4 text-slate-300 focus:outline-none transition-all appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="" disabled>
                      -- Choose your system sector --
                    </option>
                    <option value="coding">
                      Advanced Coding Lab (Software Architecture &amp; Systems)
                    </option>
                    <option value="design">
                      High-Fidelity UI Studio (Interface Interaction Frameworks)
                    </option>
                    <option value="incubation">
                      Incubation Core (Tech Enterprise Strategy)
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  System Message / Profile Portfolio Links
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-[#030712] border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-4 text-slate-200 placeholder-slate-600 focus:outline-none transition-all resize-none"
                  placeholder="Include your live product application links or GitHub paths..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition duration-300"
              >
                Submit Launch Profile
              </button>

              {isSubmitted && (
                <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm px-4 py-3 rounded-xl">
                  <span className="font-black text-emerald-400">✓</span>
                  <span>
                    Success! Your system registration logs have been verified and
                    processed into state parameters.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 7. METRIC FOOTER */}
      <footer className="relative z-10 border-t border-slate-900/80 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} AfriYouth Innovation Labs. Automated
            execution architecture.
          </p>
          <p>
            Engineered with Excellence by{' '}
            <span className="text-slate-300 font-semibold">Murokore Pierrot</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
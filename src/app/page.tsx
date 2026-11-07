'use client';

import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', track: '', message: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [errors, setErrors] = useState({ name: '', email: '', track: '' });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setIsDarkMode(false);
    else setIsDarkMode(true);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let newErrors = { name: '', email: '', track: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Your full name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.track) {
      newErrors.track = 'Please select an innovation track.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', track: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      q: 'Is the program fully remote?',
      a: 'We operate a hybrid model. While our digital infrastructure is 100% accessible remotely, we encourage physical collaboration at our regional hubs across Africa for networking and mentorship.',
    },
    {
      q: 'How much does it cost to join AfriYouth Labs?',
      a: 'Our core cohorts are fully funded for accepted candidates. We believe in empowering youth without financial barriers, which is why top-performing applicants receive full scholarships and venture seed funding.',
    },
  ];

  return (
    <main className={`min-h-screen font-sans antialiased overflow-x-hidden selection:bg-blue-500/30 relative scroll-smooth transition-colors duration-500 ${isDarkMode ? 'bg-[#030712] text-slate-100 selection:text-blue-200' : 'bg-slate-50 text-slate-900 selection:text-blue-900'}`}>
      
      {/* BACKGROUND ORBS */}
      <div className={`absolute top-0 left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] rounded-full blur-[100px] md:blur-[140px] pointer-events-none transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-tr from-blue-600/10 to-indigo-500/0' : 'bg-gradient-to-tr from-blue-400/20 to-indigo-500/0'}`} />
      <div className={`absolute bottom-10 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] pointer-events-none transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-br from-emerald-500/5 to-teal-500/0' : 'bg-gradient-to-br from-emerald-400/20 to-teal-500/0'}`} />

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 h-16 md:h-20 z-50 px-4 md:px-12 flex items-center justify-between transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800 shadow-lg' : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm') : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={(e) => handleNavClick(e as any, 'about')}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-sm md:text-lg tracking-wider shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300 text-white">
            AY
          </div>
          <span className={`font-bold text-lg md:text-xl tracking-tight ${isDarkMode ? 'bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent' : 'text-slate-900'}`}>
            AfriYouth <span className="text-blue-500 font-light">Labs</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`transition duration-200 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>About</a>
          <a href="#labs" onClick={(e) => handleNavClick(e, 'labs')} className={`transition duration-200 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Innovation Hubs</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className={`transition duration-200 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>FAQ</a>
          
          <button onClick={toggleTheme} className={`p-2.5 rounded-xl border transition-all duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'}`} aria-label="Toggle Theme">
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <a href="#join" onClick={(e) => handleNavClick(e, 'join')} className={`font-bold px-5 py-2.5 rounded-xl transition duration-300 shadow-md hover:-translate-y-0.5 ${isDarkMode ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
            Apply Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className={`p-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-slate-100 border-slate-300 text-slate-800'}`}>
             {isDarkMode ? '☀️' : '🌙'}
          </button>
          <a href="#join" onClick={(e) => handleNavClick(e, 'join')} className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
            Apply
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 text-center pt-20 md:pt-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto z-10 relative">
          <span className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-6 md:mb-8 shadow-inner border ${isDarkMode ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse" />
            Shaping Africa&apos;s Digital Frontier
          </span>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Empowering Youth Through{' '}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
              Next-Gen Tech
            </span>
          </h1>

          <p className={`text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 font-normal leading-relaxed px-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Welcome to AfriYouth Innovation Labs. We equip visionary minds across the continent with modern engineering skillsets, professional frameworks, and acceleration structures to build scalable global solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 px-4">
            <a href="#labs" onClick={(e) => handleNavClick(e, 'labs')} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-base flex items-center justify-center gap-2">
              Explore Innovation Hubs <span>&darr;</span>
            </a>
            <a href="#join" onClick={(e) => handleNavClick(e, 'join')} className={`w-full sm:w-auto border font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md text-sm md:text-base ${isDarkMode ? 'bg-slate-900/60 hover:bg-slate-800 border-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'}`}>
              Join Cohort 2026
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 border p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-xl transition-colors duration-500 ${isDarkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          
          <div className={`text-center p-2 md:p-4 md:border-r ${isDarkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
            <div className={`text-3xl md:text-5xl font-black mb-1 md:mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Engineers Scaled</div>
          </div>
          
          <div className={`text-center p-2 md:p-4 md:border-r ${isDarkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
            <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-1 md:mb-2 tracking-tight">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Success Rate</div>
          </div>
          
          <div className={`text-center p-2 md:p-4 md:border-r ${isDarkMode ? 'border-slate-800/50' : 'border-slate-200'}`}>
            <div className={`text-3xl md:text-5xl font-black mb-1 md:mb-2 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Ventures</div>
          </div>
          
          <div className="text-center p-2 md:p-4">
            <div className="text-3xl md:text-5xl font-black text-indigo-500 mb-1 md:mb-2 tracking-tight">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <div className={`text-[9px] md:text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Regional Hubs</div>
          </div>

        </div>
      </section>

      {/* LABS CARDS */}
      <section id="labs" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto relative z-10 scroll-mt-24">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Specialized Labs
          </h2>
          <p className={`max-w-xl mx-auto text-sm md:text-base px-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Targeted technical ecosystems designed to nurture code frameworks from inception to market launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 px-4 md:px-0">
          <div className={`group relative border p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0b0f19]/40 border-slate-800 hover:border-blue-500/30 hover:bg-[#0b0f19]/80' : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-xl'}`}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-xl font-bold text-base md:text-lg mb-5 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-blue-500/20">01</div>
            <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>Advanced Coding Lab</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Full-stack software engineering, progressive database indexing, state architectural patterns, and production-ready APIs built for scaling.</p>
          </div>

          <div className={`group relative border p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0b0f19]/40 border-slate-800 hover:border-emerald-500/30 hover:bg-[#0b0f19]/80' : 'bg-white border-slate-200 hover:border-emerald-500/50 hover:shadow-xl'}`}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-xl font-bold text-base md:text-lg mb-5 md:mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-emerald-500/20">02</div>
            <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>High-Fidelity Studio</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Interactive product experience frameworks, detailed layout structuring, custom design pattern design, and beautiful typography curation.</p>
          </div>

          <div className={`group relative border p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0b0f19]/40 border-slate-800 hover:border-indigo-500/30 hover:bg-[#0b0f19]/80' : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-xl'}`}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-500/10 text-indigo-500 flex items-center justify-center rounded-xl font-bold text-base md:text-lg mb-5 md:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-indigo-500/20">03</div>
            <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>Incubation &amp; Business</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Venture logic roadmapping, investor deck structuring, technical advisory pipelines, and cross-continental network matching structures.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className={`py-16 md:py-24 px-4 md:px-6 max-w-4xl mx-auto border-t relative z-10 scroll-mt-24 ${isDarkMode ? 'border-slate-900/60' : 'border-slate-200'}`}>
        <div className="text-center mb-10 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h2>
          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Deep structural details regarding deployment models and registration pathways.</p>
        </div>

        <div className="space-y-3 md:space-y-4 px-2 md:px-0">
          {faqs.map((item, index) => (
            <div key={index} className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-[#0b0f19]/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <button type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)} className={`w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-start md:items-center justify-between font-semibold text-sm md:text-base transition-all gap-4 ${isDarkMode ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-slate-900'}`} aria-expanded={activeFaq === index}>
                <span>{item.q}</span>
                <span className="text-lg md:text-xl text-blue-500 shrink-0 mt-0.5 md:mt-0 transition-transform duration-300">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className={`px-4 md:px-6 pb-4 md:pb-5 text-xs md:text-sm leading-relaxed border-t pt-3 md:pt-4 animate-in fade-in slide-in-from-top-2 duration-300 ${isDarkMode ? 'text-slate-400 border-slate-800/50' : 'text-slate-600 border-slate-100'}`}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="join" className="py-16 md:py-24 px-4 md:px-6 relative z-10 scroll-mt-24">
        <div className="max-w-xl mx-auto">
          <div className={`relative border p-6 md:p-10 rounded-2xl md:rounded-3xl backdrop-blur-xl transition-colors duration-500 ${isDarkMode ? 'bg-[#0b0f19]/80 border-slate-800 shadow-2xl shadow-blue-900/20' : 'bg-white border-slate-200 shadow-xl'}`}>
            
            <div className="relative text-center mb-6 md:mb-8">
              <h2 className={`text-2xl md:text-4xl font-extrabold mb-2 md:mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Join AfriYouth Labs</h2>
              <p className={`text-xs md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Initialize your tech application profile and register your track sector.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="relative space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className={`block text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ml-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Your Full Name</label>
                <input 
                  id="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  className={`w-full border rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-base focus:outline-none transition-all focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? '!border-red-500' : ''} ${isDarkMode ? '!bg-[#030712] !text-slate-200 border-slate-800 placeholder-slate-600' : '!bg-slate-50 !text-slate-900 border-slate-300 placeholder-slate-400'}`} 
                  placeholder="e.g. your user name" 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className={`block text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ml-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
                <input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className={`w-full border rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-base focus:outline-none transition-all focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? '!border-red-500' : ''} ${isDarkMode ? '!bg-[#030712] !text-slate-200 border-slate-800 placeholder-slate-600' : '!bg-slate-50 !text-slate-900 border-slate-300 placeholder-slate-400'}`} 
                  placeholder="name@example.com" 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="track" className={`block text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ml-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Select Innovation Track</label>
                <div className="relative">
                  <select 
                    id="track" 
                    value={formData.track} 
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })} 
                    className={`w-full border rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-base focus:outline-none transition-all appearance-none cursor-pointer pr-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${errors.track ? '!border-red-500' : ''} ${isDarkMode ? '!bg-[#030712] !text-slate-300 border-slate-800' : '!bg-slate-50 !text-slate-900 border-slate-300'}`}
                  >
                    <option value="" disabled>-- Choose sector --</option>
                    <option value="coding">Advanced Coding Lab</option>
                    <option value="design">High-Fidelity UI Studio</option>
                    <option value="incubation">Incubation Core</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs">▼</span>
                </div>
                {errors.track && <p className="text-red-500 text-xs mt-1 ml-1">{errors.track}</p>}
              </div>

              <div>
                <label htmlFor="message" className={`block text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ml-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Portfolio Links</label>
                <textarea 
                  id="message" 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  rows={3} 
                  className={`w-full border rounded-lg md:rounded-xl px-4 py-3 md:py-4 text-sm md:text-base focus:outline-none transition-all resize-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? '!bg-[#030712] !text-slate-200 border-slate-800 placeholder-slate-600' : '!bg-slate-50 !text-slate-900 border-slate-300 placeholder-slate-400'}`} 
                  placeholder="GitHub, Live URLs..." 
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-lg md:rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 mt-2 animate-pulse">
                Submit Profile
              </button>

              {isSubmitted && (
                <div className={`flex items-start gap-2 md:gap-3 border text-xs md:text-sm px-3 md:px-4 py-3 rounded-lg md:rounded-xl animate-in fade-in zoom-in duration-300 ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
                  <span className="font-black mt-0.5">✓</span>
                  <span>Success! Registration logs verified.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 border-t py-8 md:py-10 px-4 md:px-6 transition-colors duration-500 ${isDarkMode ? 'border-slate-900/80' : 'border-slate-200 bg-white'}`}>
        <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-[10px] md:text-sm text-center md:text-left ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
          <p>© {new Date().getFullYear()} AfriYouth Innovation Labs.</p>
          <p>Engineered by <span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`}>Murokore Pierrot</span></p>
        </div>
      </footer>
    </main>
  );
}

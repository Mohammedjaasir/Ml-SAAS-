'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowRight, Share2, Mail, Zap } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-1000 ease-in-out"
        style={{ opacity: videoOpacity }}
        muted
        autoPlay
        playsInline
        loop
        preload="auto"
        poster="/hero-poster.png"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="relative z-50 px-6 pt-8 pb-4 w-full max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/15">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
            </div>
            <div className="flex flex-col cursor-pointer">
              <span className="text-white font-extrabold text-sm tracking-wider uppercase leading-none">ML VIZ</span>
              <span className="text-white/40 font-mono text-[9px] tracking-widest uppercase mt-1">LAB_ENV.v1.2</span>
            </div>
            
            {/* Desktop Menu Items */}
            <div className="hidden md:flex gap-1 ml-8 relative bg-white/5 border border-white/5 rounded-full p-1">
              <a href="#" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-semibold tracking-wide transition-all hover:bg-white/5">Features</a>
              <a href="#" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-semibold tracking-wide transition-all hover:bg-white/5">Curriculum</a>
              <a href="#" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-semibold tracking-wide transition-all hover:bg-white/5">Playground</a>
              <a href="#" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-semibold tracking-wide transition-all hover:bg-white/5">About</a>
            </div>
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-white/60 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors px-3 py-1.5">Sign Up</button>
            <a href="/app.html" className="group/btn relative px-5 py-2.5 rounded-full overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              Launch App
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Hamburger button on mobile */}
          <button 
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-[calc(100%+8px)] left-6 right-6 z-40 backdrop-blur-xl bg-black/90 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
            <a href="#" className="text-white/80 hover:text-white text-sm font-semibold tracking-wide" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-semibold tracking-wide" onClick={() => setMobileMenuOpen(false)}>Curriculum</a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-semibold tracking-wide" onClick={() => setMobileMenuOpen(false)}>Playground</a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-semibold tracking-wide" onClick={() => setMobileMenuOpen(false)}>About</a>
            <hr className="border-white/10 my-1" />
            <div className="flex flex-col gap-3">
              <button className="text-white/80 hover:text-white text-sm font-semibold py-2">Sign Up</button>
              <a href="/app.html" className="bg-white text-black text-center py-2.5 rounded-xl font-bold text-sm tracking-wide hover:bg-white/90 transition-colors">
                Launch App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[5%]">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-sans font-black uppercase select-none leading-none">
          Learn ML <span className="font-serif font-light italic lowercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500">visually</span>
        </h1>

        {/* Email Input */}
        <form onSubmit={handleSubmit} className="mt-14 max-w-[400px] w-full mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative liquid-glass rounded-full pl-8 pr-2 py-2 flex items-center gap-3 border border-white/10">
              <input
                type="email"
                placeholder="Enter your email to start"
                className="bg-transparent flex-1 text-white placeholder:text-white/30 outline-none text-base font-light"
                required
              />
              <button type="submit" className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
                Join <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Subtitle */}
        <p className="mt-8 text-white text-sm leading-relaxed max-w-lg px-4">
          Master machine learning through interactive visualizations. From algorithms to neural networks, understand every concept with hands-on experiments and real-time feedback.
        </p>

        {/* Start Learning Button */}
        <button 
          onClick={() => window.location.href = '/app.html'}
          className="mt-8 liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Start Learning
        </button>
      </div>

      {/* Social Icons Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Mail className="w-5 h-5" />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Zap className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

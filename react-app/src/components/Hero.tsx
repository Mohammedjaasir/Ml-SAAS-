'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowRight, Share2, Mail, Zap } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

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
      <nav className="relative z-20 px-6 pt-8 pb-4">
        <div className="liquid-glass rounded-full max-w-4xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg tracking-tight">ML <span className="text-white/60 font-light italic">Viz Lab</span></span>
            <div className="hidden md:flex gap-8 ml-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[5%]">
        {/* Heading */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif">
          Learn ML <em className="italic">visually</em>
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

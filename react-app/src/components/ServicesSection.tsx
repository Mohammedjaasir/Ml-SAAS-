'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    tag: 'Foundation',
    title: 'Core ML Concepts',
    description: 'Master the fundamentals: linear regression, classification, clustering, and decision trees. Each concept is explored through interactive visualizations that build intuition.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    tag: 'Advanced',
    title: 'Deep Learning & Neural Nets',
    description: 'Dive into neural networks, backpropagation, and deep learning architectures. Visualize how neurons learn and understand the math behind modern AI.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-black py-28 md:py-40 px-6 overflow-hidden relative"
    >
      {/* Premium background grid */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Glowing background orbs */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">Learning Paths</h2>
          <span className="hidden md:block text-white/40 text-sm">Explore topics</span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-glass rounded-3xl overflow-hidden group"
            >
              {/* Video Area */}
              <div className="aspect-video overflow-hidden relative">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  poster={index === 0 ? "/foundation-poster.png" : "/advanced-poster.png"}
                >
                  <source src={service.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-white/40 text-xs tracking-widest uppercase">{service.tag}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="liquid-glass rounded-full p-2 text-white/80 hover:text-white transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

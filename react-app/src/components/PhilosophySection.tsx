'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
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
      <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Education <em className="italic text-white/40">×</em> Visualization
        </motion.h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-between"
          >
            {/* Block 1 */}
            <div className="mb-8">
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">Interactive Experiments</div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every ML concept becomes intuitive through visual representation. Adjust hyperparameters in real-time, see decision boundaries shift, and watch neural networks converge. Learning by doing is the most effective way to master machine learning.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-8" />

            {/* Block 2 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">Learn at Your Pace</div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                From linear regression to deep learning, explore algorithms at your own speed. Each concept builds on the last, with interactive visualizations that make complex ideas accessible to beginners and intuitive for experts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

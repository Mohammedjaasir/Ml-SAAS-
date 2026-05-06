'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

export default function FeaturedVideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden aspect-video relative group"
        >
          <video
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster="/featured-poster.png"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 items-end justify-between">
            {/* Card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-3">Interactive Learning</div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We bring machine learning concepts to life through interactive visualizations and real-time experiments. See algorithms work, tweak parameters, and learn by doing.
              </p>
            </div>

            {/* Explore Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors flex-shrink-0"
            >
              Explore more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

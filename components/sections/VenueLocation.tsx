'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react';

const LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Sea+Gates+Hotel+Kalutara+Sri+Lanka';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory-card px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-primary/20 to-secondary/15 opacity-75 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#e9dfc6] to-[#f3ead6] opacity-60 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, rgba(154,125,95,0.35) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-14 text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm">
              Wedding Venue
            </span>
          </motion.div>

          <h2 className="font-display text-3xl tracking-tight text-[#5a4330] sm:text-5xl md:text-6xl">
            Venue <span className="relative inline-block font-script normal-case text-5xl sm:text-7xl md:text-8xl text-[#b08a3e]">
              Location
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group relative bg-champagne rounded-[4px] p-8 md:p-12 shadow-[0_20px_50px_rgba(74,54,38,0.18)] border border-[#9a7d5f]/20 text-center hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#b08a3e] rounded-full flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform">
              <MapPin className="h-10 w-10 text-white" />
            </div>

            <p className="mt-6 font-script text-3xl md:text-4xl text-[#7a5a3c] mb-3">White Sand Ballroom</p>
            <h3 className="font-display text-3xl md:text-5xl text-[#4a3626] font-semibold mb-4 uppercase">SEA GATES HOTEL</h3>
            <p className="font-display text-sm text-[#7a5a3c] mb-10 uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto">Kaluthara, Sri Lanka</p>

            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-4 bg-[#7a5a3c] text-[#fbf3dc] px-10 py-6 rounded-[4px] font-display text-[12px] uppercase tracking-[0.3em] shadow-[0_15px_35px_rgba(74,54,38,0.3)] hover:scale-[1.03] active:scale-95 transition-all lg:w-auto lg:px-16"
            >
              Get Directions
              <Navigation className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

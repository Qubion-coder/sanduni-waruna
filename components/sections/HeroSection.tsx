'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Monogram from '@/components/Monogram';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-[52%_70%] bg-no-repeat"
        style={{ backgroundImage: 'url(/photos/hero.jpg)' }}
      />

      {/* Ivory wash over the sky for the dark lettering, clear over the couple */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,241,0.75)_0%,rgba(251,248,241,0.45)_40%,rgba(251,248,241,0)_62%,rgba(43,31,20,0.25)_100%)]" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Monogram className="mx-auto w-28 sm:w-36" />
          <p className="mt-3 font-display text-[11px] sm:text-sm font-semibold tracking-[0.25em] text-[#8a6a2c]">
            WE&apos;VE DECIDED ON FOREVER
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="mt-6 font-names text-6xl sm:text-8xl md:text-9xl leading-[1.15] text-[#4a3626] drop-shadow-[0_1px_8px_rgba(251,248,241,0.8)]"
        >
          Sanduni <span className="font-script mx-2 text-[0.8em] text-[#b08a3e]">&amp;</span> Waruna
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-3 sm:gap-4 font-display text-[#4a3626]"
        >
          <div className="flex flex-col items-center">
            <span className="h-px w-20 sm:w-28 bg-[#7a5a3c]/60" />
            <span className="py-1.5 text-xs sm:text-base tracking-[0.15em]">DECEMBER</span>
            <span className="h-px w-20 sm:w-28 bg-[#7a5a3c]/60" />
          </div>
          <span className="text-4xl sm:text-5xl">12</span>
          <div className="flex flex-col items-center">
            <span className="h-px w-16 sm:w-24 bg-[#7a5a3c]/60" />
            <span className="py-1.5 text-xs sm:text-base tracking-[0.15em]">2026</span>
            <span className="h-px w-16 sm:w-24 bg-[#7a5a3c]/60" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#5a4330]"
        >
          SATURDAY · KALUTHARA
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70"
        >
          <span className="font-display text-[9px] tracking-[0.4em] text-white">SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

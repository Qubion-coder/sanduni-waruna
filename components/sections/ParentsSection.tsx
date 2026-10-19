'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center gap-3 text-[#9a7d5f]">
      <span className="h-px flex-1 bg-[#9a7d5f]/60" />
      <span className="h-1 w-1 rotate-45 bg-current" />
      <span className="h-px flex-1 bg-[#9a7d5f]/60" />
    </div>
  );
}

function ParentsSectionContent() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const searchParams = useSearchParams();
  const guestName = searchParams.get('u');
  const tableNumber = searchParams.get('t');

  return (
    <section
      ref={ref}
      className="bg-champagne relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Personalized Invitation Card */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <div className="bg-ivory-card relative inline-block w-full max-w-3xl overflow-hidden rounded-[4px] p-8 md:p-14 shadow-[0_25px_60px_rgba(74,54,38,0.18)]">
              <div className="pointer-events-none absolute inset-3 border border-[#9a7d5f]/50" />
              <div className="relative z-10">
                <p className="font-display text-[#7a5a3c] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">You are cordially invited</p>
                <h3 className="font-script text-4xl md:text-6xl text-[#7a5a3c] mb-6 leading-tight">{guestName}</h3>
                <p className="text-[#5a4330]/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
                  We would be honored to have your presence on our special day. Your love, blessings, and support have been an essential part of our journey, and we look forward to celebrating this beginning with you.
                </p>

                {tableNumber && (
                  <div className="relative mt-8 pt-8 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#9a7d5f]/50 to-transparent" />
                    <div className="flex items-center justify-center gap-2 text-[#7a5a3c] mb-2">
                      <MapPin size={16} className="animate-bounce" />
                      <span className="font-display text-[10px] md:text-xs uppercase tracking-[0.25em]">Reserved Seating</span>
                    </div>
                    <p className="font-display text-2xl md:text-4xl text-[#4a3626]">
                      TABLE NUMBER <span className="text-gold-foil font-bold ml-1">{tableNumber}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Invitation from the parents: arched card with the couple as a soft watermark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* soft gold glow behind the card */}
          <div className="pointer-events-none absolute -inset-6 rounded-t-[999px] bg-[radial-gradient(ellipse_at_center,rgba(226,200,121,0.35),transparent_70%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[6px] bg-[#fbf8f1] shadow-[0_30px_70px_rgba(74,54,38,0.25)]">
            {/* watermark photo */}
            <motion.img
              src="/photos/couple-3.jpg"
              alt=""
              aria-hidden="true"
              initial={{ scale: 1.12 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 6, ease: 'easeOut' }}
              style={{ height: '100%' }}
              className="absolute inset-0 h-full w-full object-cover object-[center_75%] opacity-[0.75] [filter:sepia(0.25)_saturate(0.85)]"
            />
            {/* ivory veil keeps the lettering crisp while the couple shows through */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,241,0.88)_0%,rgba(251,248,241,0.6)_40%,rgba(251,248,241,0.5)_70%,rgba(251,248,241,0.8)_100%)]" />

            {/* arched gold frames */}
            <div className="pointer-events-none absolute inset-3 rounded-t-[999px] rounded-b-[3px] border border-[#b08a3e]/80" />
            <div className="pointer-events-none absolute inset-[19px] rounded-t-[999px] rounded-b-[2px] border border-[#b08a3e]/25" />

            <div className="relative z-10 flex flex-col items-center px-8 pb-14 pt-24 sm:px-12 sm:pt-28 text-center text-[#3f2c1e] [text-shadow:0_0_8px_rgba(251,248,241,0.95)]">
              {/* sprig ornament under the arch */}
              <motion.svg
                viewBox="0 0 120 40"
                className="mb-6 w-24 text-[#b08a3e]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                initial={{ opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <path d="M60 36 C 60 24, 60 14, 60 4" />
                <path d="M60 28 C 48 26, 38 18, 34 8 C 44 10, 54 18, 60 28 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M60 28 C 72 26, 82 18, 86 8 C 76 10, 66 18, 60 28 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M60 16 C 52 14, 46 8, 44 2 C 50 4, 56 9, 60 16 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M60 16 C 68 14, 74 8, 76 2 C 70 4, 64 9, 60 16 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M4 36 H 46 M 74 36 H 116" strokeWidth="0.8" />
                <circle cx="60" cy="36" r="2" fill="currentColor" />
              </motion.svg>

              {[
                <div key="parents" className="font-display text-[15px] sm:text-[17px] font-semibold leading-loose tracking-[0.08em]">
                  <p className="text-inherit">MR. &amp; MRS. GEETHANJANA</p>
                  <p className="font-script normal-case text-[1.7rem] font-semibold tracking-normal text-[#8a6a2c]">together with</p>
                  <p className="text-inherit">MR. &amp; MRS. KIRIELLA</p>
                </div>,
                <p key="request" className="mt-6 font-display text-[13px] sm:text-[15px] font-semibold tracking-[0.14em] text-inherit">
                  REQUEST THE PLEASURE OF YOUR PRESENCE
                </p>,
                <div key="divider" className="my-6 w-full"><Divider /></div>,
                <p key="celebrating" className="font-display text-[13px] sm:text-[15px] font-semibold tracking-[0.14em] text-inherit">
                  IN CELEBRATING THE MARRIAGE OF THEIR CHILDREN
                </p>,
                <h2 key="names" className="mt-5 font-names text-6xl sm:text-7xl leading-[1.1] text-[#3f2c1e] drop-shadow-[0_0_10px_rgba(251,248,241,0.95)]">
                  Sanduni
                  <span className="font-script block text-4xl sm:text-5xl font-semibold text-[#9a7430]">&amp;</span>
                  Waruna
                </h2>,
              ].map((el, i) => (
                <motion.div
                  key={i}
                  className="w-full"
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + i * 0.18 }}
                >
                  {el}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ParentsSection() {
  return (
    <Suspense fallback={<div className="h-40" />}>
      <ParentsSectionContent />
    </Suspense>
  );
}

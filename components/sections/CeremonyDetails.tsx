'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles, Crown, Heart, Cross } from 'lucide-react';
import Monogram from '@/components/Monogram';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'poruwa',
      title: 'Poruwa Ceremony',
      timeLabel: 'Ceremony Time',
      timeValue: '8.00 AM',
      timeSub: 'Traditional Sri Lankan Ceremony',
      venueLabel: 'Venue',
      venueValue: 'OUTDOOR',
      venueSub: 'SEA GATES HOTEL, KALUTHARA',
    },
    {
      key: 'reception',
      title: 'Wedding Reception',
      timeLabel: 'Reception Time',
      timeValue: '10.30 AM - 4.00 PM',
      timeSub: 'Saturday, December 12th 2026',
      venueLabel: 'Venue',
      venueValue: 'WHITE SAND BALLROOM',
      venueSub: 'SEA GATES HOTEL, KALUTHARA',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ivory-card px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, var(--secondary) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary/5 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-xs uppercase tracking-[0.3em] text-secondary font-display">
                The Sacred Celebration
              </span>
            </div>

            <h2 className="mb-6 font-display text-4xl leading-tight text-[#5a4330] md:text-6xl">
              Wedding <span className="font-script normal-case text-6xl md:text-8xl text-[#b08a3e]">Ceremony</span>
            </h2>

            <p className="mb-20 md:mb-24 text-lg leading-relaxed text-foreground/70 max-w-2xl px-4">
              With immense joy in our hearts, we invite you to share our happiness as we exchange our vows. Join us for a beautiful celebration of faith, love, and lifelong commitment.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-2xl text-left px-4">
              {detailGroups.map((group, index) => {
                return (
                  <motion.div
                    key={group.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Envelope bouquets tucked behind the card corners (their cut edges sit under the card) */}
                    {index === 0 && (
                      <img
                        src="/photos/flowers-tl.webp"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 top-0 z-0 w-36 md:w-52 max-w-none -translate-x-[30.3%] -translate-y-[46.9%]"
                      />
                    )}
                    {index === detailGroups.length - 1 && (
                      <img
                        src="/photos/flowers-br.webp"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute left-full top-full z-0 w-36 md:w-52 max-w-none -translate-x-[66.7%] -translate-y-[73.6%]"
                      />
                    )}
                  <div className="group relative z-10 overflow-hidden rounded-[4px] border border-[#9a7d5f]/30 bg-[#fdfbf6] p-8 md:p-10 shadow-[0_15px_45px_rgba(74,54,38,0.08)] transition-all">
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-secondary/70 font-bold">{group.title} Details</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/10 shadow-inner">
                          <Clock3 className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold mb-1">{group.timeLabel}</p>
                          <h3 className="font-display text-xl md:text-2xl text-[#4a3626] font-semibold">{group.timeValue}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{group.timeSub}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-secondary/30 bg-secondary/10 shadow-inner">
                          <MapPin className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold mb-1">{group.venueLabel}</p>
                          <h3 className="font-display text-xl md:text-2xl text-[#4a3626] font-semibold line-clamp-2">{group.venueValue}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{group.venueSub}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-6 overflow-hidden rounded-[4px] border border-[#9a7d5f]/20 bg-[#efe8d9] p-8 shadow-sm backdrop-blur-lg relative"
              >
                <div className="absolute right-0 top-0 opacity-15">
                  <Monogram tone="ink" className="w-36 -mt-2 -mr-6" />
                </div>

                <h4 className="text-xs uppercase tracking-widest text-secondary mb-4 font-bold flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-secondary"></span> Guest Notes
                </h4>
                <div className="space-y-3">
                  <p className="text-foreground/80 text-sm md:text-base font-medium flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                    <span><span className="text-secondary font-bold uppercase tracking-wider text-[11px] mr-2">Dress Code:</span> Elegant / Formal Attire</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
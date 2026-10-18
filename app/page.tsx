'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { EnvelopeOpener } from '@/components/envelope-opener';
import HeroSection from '@/components/sections/HeroSection';
import PersonalizedWelcome from '@/components/sections/PersonalizedWelcome';
import ParentsSection from '@/components/sections/ParentsSection';

import CeremonyDetails from '@/components/sections/CeremonyDetails';
import CountdownSection from '@/components/sections/CountdownSection';

import VenueLocation from '@/components/sections/VenueLocation';
import RSVPSection from '@/components/sections/RSVPSection';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import SimpleImageSection from '@/components/sections/SimpleImageSection';
import MusicPlayer from '@/components/MusicPlayer';

function HomeContent() {
  const [isOpened, setIsOpened] = useState(false);
  const searchParams = useSearchParams();

  const guestName = searchParams.get('to');
  const guestTitle = searchParams.get('t');
  const personalizedName = guestName ? `${guestTitle ? guestTitle + ' ' : ''}${guestName}` : '';

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener
          onEnvelopeOpen={() => setIsOpened(true)}
          guestName={personalizedName}
        />
      ) : (
        <>
          <HeroSection />
          <PersonalizedWelcome guestName={personalizedName} />
          <ParentsSection />

          <CeremonyDetails />
          <SimpleImageSection imageSrc="/photos/couple-1.jpg" objectPosition="object-[center_80%]" />
          <CountdownSection />
          <SimpleImageSection imageSrc="/photos/couple-4.jpg" objectPosition="object-[center_75%]" />

          <VenueLocation />
          <SimpleImageSection imageSrc="/photos/couple-2.jpg" objectPosition="object-[center_70%]" />
          <RSVPSection guestName={personalizedName} />
          <SimpleImageSection imageSrc="/photos/couple-5.jpg" useFullImage />
          <BlessingsSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-[#7a5a3c] font-script text-3xl">Loading Invitation...</div>}>
      <HomeContent />
    </Suspense>
  );
}

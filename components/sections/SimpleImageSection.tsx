'use client';

import { motion } from 'framer-motion';

interface SimpleImageSectionProps {
  imageSrc: string;
  altText?: string;
  objectPosition?: string;
  useFullImage?: boolean;
}

export default function SimpleImageSection({ 
  imageSrc, 
  altText = "Sanduni and Waruna",
  objectPosition = "object-[center_30%]",
  useFullImage = false
}: SimpleImageSectionProps) {
  return (
    <div className="w-full flex justify-center py-16 md:py-24 bg-champagne relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className={useFullImage ? 'w-[90%] lg:w-2/3' : 'w-[85%] lg:w-1/3'}
      >
        <div className={`relative ${useFullImage ? 'aspect-auto h-auto md:h-auto' : 'aspect-[4/5] md:h-[520px] md:aspect-auto'} rounded-[4px] overflow-hidden border-[12px] border-[#fbf8f1] shadow-[0_25px_60px_-15px_rgba(74,54,38,0.35)]`}>
          <img
            alt={altText}
            className={`w-full ${useFullImage ? 'h-auto' : 'h-full object-cover'} ${objectPosition}`}
            src={imageSrc}
          />
        </div>
      </motion.div>
    </div>
  );
}

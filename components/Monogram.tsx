import { useId } from 'react';

interface MonogramProps {
  className?: string;
  /** 'foil' = gold foil like the cover, 'ink' = brown print like the inner card */
  tone?: 'foil' | 'ink';
  /** Circular ornamental frame, as printed at the top of the invitation */
  framed?: boolean;
}

/** S | W monogram from the printed invitation. */
export default function Monogram({ className = '', tone = 'foil', framed = false }: MonogramProps) {
  const id = useId().replace(/:/g, '');
  const fill = tone === 'foil' ? `url(#gold-${id})` : '#7a5a3c';

  const letters = (
    <>
      <text x="62" y="86" textAnchor="middle" fontSize="74" fill={fill}
        style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', fontWeight: 600 }}>S</text>
      <text x="140" y="86" textAnchor="middle" fontSize="74" fill={fill}
        style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', fontWeight: 600 }}>W</text>
      <line x1="100" y1="10" x2="100" y2="50" stroke={fill} strokeWidth="1.6" />
      <line x1="100" y1="74" x2="100" y2="112" stroke={fill} strokeWidth="1.6" />
      <text x="100" y="70" textAnchor="middle" fontSize="26" fill={fill}
        style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>&amp;</text>
    </>
  );

  return (
    <svg
      viewBox={framed ? '-40 -40 280 202' : '0 0 200 122'}
      className={className}
      role="img"
      aria-label="S & W monogram"
    >
      <defs>
        <linearGradient id={`gold-${id}`} gradientUnits="userSpaceOnUse" x1="60" y1="0" x2="120" y2="122">
          <stop offset="0%" stopColor="#f3e2a4" />
          <stop offset="35%" stopColor="#d4ad4f" />
          <stop offset="68%" stopColor="#a8812f" />
          <stop offset="100%" stopColor="#e2c879" />
        </linearGradient>
      </defs>

      {framed && (
        <g fill="none" stroke={fill} strokeWidth="1.4">
          <circle cx="100" cy="61" r="76" />
          <circle cx="100" cy="61" r="71" strokeWidth="0.7" />
          {/* side flourishes */}
          {[-1, 1].map((dir) => (
            <g key={dir} transform={`translate(${100 + dir * 76} 61) scale(${dir} 1)`}>
              <path d="M0 0 C 10 -14, 26 -16, 32 -6 C 36 2, 28 8, 22 3 C 18 -1, 22 -6, 26 -4" />
              <path d="M0 0 C 10 14, 26 16, 32 6 C 36 -2, 28 -8, 22 -3 C 18 1, 22 6, 26 4" />
              <circle cx="38" cy="0" r="2" fill={fill} />
            </g>
          ))}
          {/* crown ornament */}
          <path d="M92 -18 L100 -28 L108 -18 Z" fill={fill} stroke="none" />
          <path d="M84 -15 C 92 -12, 108 -12, 116 -15" />
          <circle cx="100" cy="142" r="2.4" fill={fill} stroke="none" />
          <path d="M88 139 C 94 144, 106 144, 112 139" />
        </g>
      )}

      {letters}
    </svg>
  );
}

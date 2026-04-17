/* SVG decorative elements rendered in black/gray tones */

export function CoilLeft() {
  return (
    <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M60 10 C10 60, 110 110, 60 160 C10 210, 110 260, 60 310 C10 360, 110 390, 60 400"
        stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round"
      />
      <path
        d="M40 10 C-10 60, 90 110, 40 160 C-10 210, 90 260, 40 310 C-10 360, 90 390, 40 400"
        stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"
      />
      <path
        d="M80 10 C30 60, 130 110, 80 160 C30 210, 130 260, 80 310 C30 360, 130 390, 80 400"
        stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"
      />
    </svg>
  );
}

export function CoilRight() {
  return (
    <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ transform: 'scaleX(-1)' }}>
      <path
        d="M60 10 C10 60, 110 110, 60 160 C10 210, 110 260, 60 310 C10 360, 110 390, 60 400"
        stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round"
      />
      <path
        d="M40 10 C-10 60, 90 110, 40 160 C-10 210, 90 260, 40 310 C-10 360, 90 390, 40 400"
        stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"
      />
    </svg>
  );
}

export function ScannerCorners() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      {/* Top-left corner */}
      <path d="M20 60 L20 20 L60 20" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Top-right corner */}
      <path d="M140 20 L180 20 L180 60" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Bottom-left corner */}
      <path d="M20 140 L20 180 L60 180" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Bottom-right corner */}
      <path d="M140 180 L180 180 L180 140" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CardChip() {
  return (
    <svg viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
      <rect x="2" y="2" width="44" height="32" rx="6" fill="#d4a843" stroke="#b8921f" strokeWidth="1"/>
      <rect x="10" y="8" width="28" height="20" rx="3" fill="#c49a2a" stroke="#a07818" strokeWidth="0.5"/>
      <line x1="24" y1="8" x2="24" y2="28" stroke="#a07818" strokeWidth="0.5"/>
      <line x1="10" y1="18" x2="38" y2="18" stroke="#a07818" strokeWidth="0.5"/>
      <rect x="16" y="11" width="16" height="7" rx="1" fill="#b8861a" opacity="0.5"/>
    </svg>
  );
}

export function FloatingSphere({ size = 40, opacity = 0.7 }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size, opacity }}>
      <defs>
        <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="40%" stopColor="#cccccc"/>
          <stop offset="100%" stopColor="#444444"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#sphereGrad)" stroke="#aaa" strokeWidth="1"/>
    </svg>
  );
}

export function FloatingCard({ size = 60 }) {
  return (
    <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size * 0.625 }}>
      <rect x="1" y="1" width="78" height="48" rx="6" fill="#e0e0e0" stroke="#bbb" strokeWidth="1"/>
      <rect x="8" y="14" width="20" height="14" rx="2" fill="#c0b030" stroke="#a09020" strokeWidth="0.5"/>
      <rect x="8" y="32" width="35" height="4" rx="1" fill="#aaa"/>
    </svg>
  );
}

export function QRBlock() {
  return (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <defs>
        <linearGradient id="qrGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8e8e8" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#cccccc" stopOpacity="0.7"/>
        </linearGradient>
      </defs>
      <rect width="60" height="60" rx="4" fill="url(#qrGrad)" stroke="#bbb" strokeWidth="1"/>
      {/* QR pattern blocks */}
      <rect x="6" y="6" width="18" height="18" rx="2" fill="#222"/>
      <rect x="9" y="9" width="12" height="12" rx="1" fill="#f5f5f5"/>
      <rect x="11" y="11" width="8" height="8" rx="1" fill="#222"/>
      <rect x="36" y="6" width="18" height="18" rx="2" fill="#222"/>
      <rect x="39" y="9" width="12" height="12" rx="1" fill="#f5f5f5"/>
      <rect x="41" y="11" width="8" height="8" rx="1" fill="#222"/>
      <rect x="6" y="36" width="18" height="18" rx="2" fill="#222"/>
      <rect x="9" y="39" width="12" height="12" rx="1" fill="#f5f5f5"/>
      <rect x="11" y="41" width="8" height="8" rx="1" fill="#222"/>
      <rect x="28" y="28" width="4" height="4" fill="#222"/>
      <rect x="34" y="28" width="4" height="4" fill="#222"/>
      <rect x="40" y="28" width="4" height="4" fill="#222"/>
      <rect x="28" y="34" width="4" height="4" fill="#222"/>
      <rect x="40" y="34" width="4" height="4" fill="#222"/>
      <rect x="34" y="40" width="4" height="4" fill="#222"/>
      <rect x="46" y="34" width="4" height="4" fill="#222"/>
      <rect x="46" y="40" width="4" height="4" fill="#222"/>
      <rect x="28" y="46" width="4" height="4" fill="#222"/>
    </svg>
  );
}

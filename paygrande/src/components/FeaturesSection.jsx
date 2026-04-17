const features = [
  {
    id: 'joining',
    label: 'NO JOINING\nCHARGES',
    icon: (
      // Receipt / document icon
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="12" y="6" width="36" height="48" rx="4" fill="#e8e8e8" stroke="#bbb" strokeWidth="1.5"/>
        <rect x="18" y="16" width="24" height="3" rx="1.5" fill="#888"/>
        <rect x="18" y="22" width="20" height="3" rx="1.5" fill="#aaa"/>
        <rect x="18" y="28" width="22" height="3" rx="1.5" fill="#aaa"/>
        <rect x="18" y="34" width="16" height="3" rx="1.5" fill="#bbb"/>
        <circle cx="14" cy="48" r="4" fill="#555" stroke="#333" strokeWidth="1"/>
        <line x1="14" y1="46" x2="14" y2="50" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'annual',
    label: 'NO ANNUAL\nCHARGES',
    icon: (
      // Calendar icon
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="8" y="14" width="48" height="42" rx="6" fill="#f0f0f0" stroke="#ccc" strokeWidth="1.5"/>
        <rect x="8" y="14" width="48" height="16" rx="6" fill="#333"/>
        <rect x="8" y="22" width="48" height="8" rx="0" fill="#333"/>
        <circle cx="22" cy="10" r="4" fill="#555" stroke="#333" strokeWidth="1.5"/>
        <circle cx="42" cy="10" r="4" fill="#555" stroke="#333" strokeWidth="1.5"/>
        <rect x="18" y="36" width="8" height="8" rx="2" fill="#ddd"/>
        <rect x="30" y="36" width="8" height="8" rx="2" fill="#ddd"/>
        <rect x="42" y="36" width="8" height="8" rx="2" fill="#ddd"/>
        <rect x="18" y="48" width="8" height="6" rx="2" fill="#e8e8e8"/>
        <rect x="30" y="48" width="8" height="6" rx="2" fill="#e8e8e8"/>
      </svg>
    ),
  },
  {
    id: 'forex',
    label: 'ZERO FOREX\nCHARGES',
    icon: (
      // Zero / globe icon
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="26" fill="#e8e8e8" stroke="#ccc" strokeWidth="1.5"/>
        <ellipse cx="32" cy="32" rx="12" ry="26" fill="none" stroke="#999" strokeWidth="1.5"/>
        <line x1="8" y1="24" x2="56" y2="24" stroke="#aaa" strokeWidth="1.5"/>
        <line x1="8" y1="40" x2="56" y2="40" stroke="#aaa" strokeWidth="1.5"/>
        <line x1="6" y1="32" x2="58" y2="32" stroke="#bbb" strokeWidth="1"/>
        {/* Zero cross mark */}
        <circle cx="48" cy="48" r="10" fill="#222" stroke="#000" strokeWidth="1"/>
        <line x1="43" y1="43" x2="53" y2="53" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="53" y1="43" x2="43" y2="53" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'hidden',
    label: 'NO HIDDEN\nCHARGES',
    icon: (
      // Calculator + magnifier icon
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="8" y="8" width="38" height="48" rx="6" fill="#e8e8e8" stroke="#ccc" strokeWidth="1.5"/>
        <rect x="14" y="14" width="26" height="12" rx="3" fill="#333"/>
        <rect x="14" y="32" width="8" height="8" rx="2" fill="#aaa"/>
        <rect x="25" y="32" width="8" height="8" rx="2" fill="#aaa"/>
        <rect x="36" y="32" width="8" height="8" rx="2" fill="#333"/>
        <rect x="14" y="44" width="8" height="8" rx="2" fill="#aaa"/>
        <rect x="25" y="44" width="8" height="8" rx="2" fill="#aaa"/>
        <rect x="36" y="44" width="8" height="8" rx="2" fill="#aaa"/>
        {/* Magnifier */}
        <circle cx="48" cy="22" r="12" fill="white" stroke="#333" strokeWidth="2.5"/>
        <circle cx="48" cy="22" r="7" fill="#f5f5f5" stroke="#bbb" strokeWidth="1"/>
        <line x1="43" y1="31" x2="37" y2="40" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="features-bg py-28 px-6 relative overflow-hidden">
      {/* Right coil accent */}
      <div className="absolute right-0 bottom-0 w-40 h-64 opacity-20">
        <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M60 10 C10 60, 110 110, 60 160 C10 210, 110 260, 60 310 C10 360, 110 390, 60 400"
            stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M40 10 C-10 60, 90 110, 40 160 C-10 210, 90 260, 40 310 C-10 360, 90 390, 40 400"
            stroke="#aaa" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">No Surprises</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3" style={{ letterSpacing: '-0.03em' }}>
            Completely transparent
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Pay Grande means what it says. Zero hidden costs — ever.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {features.map(({ id, label, icon }, i) => (
            <div
              key={id}
              className={`flex flex-col items-center text-center animate-slide-up delay-${(i + 1) * 100}`}
            >
              {/* Icon circle */}
              <div className="w-36 h-36 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {icon}
              </div>
              {/* Label */}
              <p className="text-white font-black text-sm tracking-wider whitespace-pre-line leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

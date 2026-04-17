import { CoilLeft, CoilRight, FloatingSphere, FloatingCard } from './Decorations';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #000 1px, transparent 1px), radial-gradient(circle at 80% 20%, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Left decorative coil */}
      <div className="absolute left-0 top-16 w-28 h-80 opacity-20 animate-float2">
        <CoilLeft />
      </div>

      {/* Right decorative coil */}
      <div className="absolute right-0 top-16 w-28 h-80 opacity-20 animate-float">
        <CoilRight />
      </div>

      {/* Floating sphere top-left */}
      <div className="absolute left-16 top-32 animate-float3 delay-200">
        <FloatingSphere size={55} opacity={0.35} />
      </div>

      {/* Floating card top-center-left */}
      <div className="absolute left-1/4 top-28 animate-float delay-300 -rotate-12">
        <FloatingCard size={72} />
      </div>

      {/* Floating sphere right */}
      <div className="absolute right-24 top-40 animate-float2 delay-500">
        <FloatingSphere size={38} opacity={0.25} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-6 animate-fade-in">
          Pay Grande UPI credit card
        </p>

        <h1
          className="font-black leading-tight text-black mb-8 animate-slide-up"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
        >
          Earn upto{' '}
          <span className="inline-block relative">
            <span className="shimmer-text">3% cashback</span>
          </span>
          <br />
          on every scan
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 animate-slide-up delay-200">
          Scan any QR, pay instantly, and earn cashback every single time.
          No limits, no hassle — just rewards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
          <a
            href="#apply"
            className="px-8 py-4 bg-black text-white font-bold rounded-full text-base hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Apply Now — It's Free
          </a>
          <a
            href="#card"
            className="px-8 py-4 bg-white text-black font-bold rounded-full text-base border-2 border-black hover:bg-gray-50 transition-all duration-200"
          >
            View Card
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 animate-fade-in delay-700">
          {[
            { value: '3%', label: 'Max Cashback' },
            { value: '0', label: 'Annual Fee' },
            { value: '1M+', label: 'Happy Users' },
            { value: '24/7', label: 'Support' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-black">{value}</div>
              <div className="text-sm text-gray-400 font-medium mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float3 opacity-40">
        <div className="w-0.5 h-8 bg-black rounded-full" />
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
      </div>
    </section>
  );
}

import { CardChip, ScannerCorners, CoilLeft, CoilRight, FloatingSphere, FloatingCard, QRBlock } from './Decorations';

export default function CardShowcase() {
  return (
    <section id="card" className="relative bg-white overflow-hidden py-24 px-6">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Left coil decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 animate-float2">
        <CoilLeft />
      </div>

      {/* Right coil decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 animate-float">
        <CoilRight />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Your Card</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3" style={{ letterSpacing: '-0.03em' }}>
            Meet your Pay Grande card
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">Sleek, powerful, and built for modern payments.</p>
        </div>

        {/* Card display area */}
        <div className="relative flex items-center justify-center min-h-[420px]">

          {/* Floating decoration — top-left card */}
          <div className="absolute top-4 left-[10%] animate-float delay-100 -rotate-6 opacity-60">
            <FloatingCard size={65} />
          </div>

          {/* Floating sphere left */}
          <div className="absolute left-[8%] top-1/2 -translate-y-1/2 animate-float3 delay-200">
            <FloatingSphere size={50} opacity={0.3} />
          </div>

          {/* Floating QR block right */}
          <div className="absolute right-[12%] top-16 animate-float2 delay-300 opacity-70">
            <QRBlock />
          </div>

          {/* Floating sphere bottom-right */}
          <div className="absolute right-[15%] bottom-8 animate-float delay-500">
            <FloatingSphere size={36} opacity={0.25} />
          </div>

          {/* Small floating card - right */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 rotate-6 animate-float3 delay-100 opacity-50">
            <FloatingCard size={50} />
          </div>

          {/* === The main credit card === */}
          <div className="relative animate-float3">
            {/* Scanner corners overlay */}
            <div className="absolute -inset-10 pointer-events-none">
              <ScannerCorners />
            </div>

            {/* Card body */}
            <div
              className="relative w-72 h-44 rounded-2xl card-gradient shadow-2xl p-6 flex flex-col justify-between"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)' }}
            >
              {/* Card top row */}
              <div className="flex items-start justify-between">
                <CardChip />
                <div className="text-right">
                  <div className="text-white/40 text-xs font-medium">VISA</div>
                  <div className="flex gap-1 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gray-400 opacity-60" />
                    <div className="w-5 h-5 rounded-full bg-gray-200 opacity-40 -ml-2" />
                  </div>
                </div>
              </div>

              {/* Card number */}
              <div className="text-white/60 text-xs tracking-widest font-mono">
                **** **** **** 4289
              </div>

              {/* Card bottom row */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Card Holder</div>
                  <div className="text-white text-sm font-semibold tracking-wide mt-0.5">Pay Grande</div>
                </div>
                <div className="text-right">
                  <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">Expires</div>
                  <div className="text-white/80 text-sm font-mono">12/28</div>
                </div>
              </div>

              {/* Shine overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
          {/* === End card === */}
        </div>

        {/* Card feature pills below */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Contactless Pay', 'UPI Ready', 'Global Acceptance', 'Instant Approval', 'Virtual Card'].map((feature) => (
            <span
              key={feature}
              className="px-4 py-2 rounded-full border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:border-black hover:text-black transition-colors duration-200 cursor-default"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CTASection() {
  return (
    <section id="apply" className="bg-black py-28 px-6 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Get Started Today</span>
        <h2
          className="text-4xl md:text-6xl font-black text-white mt-4 mb-6"
          style={{ letterSpacing: '-0.03em' }}
        >
          Your rewards are<br /> waiting for you
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join over 1 million users earning cashback every day. Apply in minutes — no paperwork, no waiting.
        </p>

        {/* Email form */}
        <form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-8" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-full bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-white/60 transition-colors text-sm w-full"
          />
          <button
            type="submit"
            className="px-7 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>

        <p className="text-gray-600 text-xs">
          No credit card required to sign up · 100% free to apply
        </p>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-600 text-xs font-semibold uppercase tracking-wider">
          <span>🔒 RBI Regulated</span>
          <span>✓ NPCI Certified</span>
          <span>🛡 256-bit Encryption</span>
          <span>⭐ 4.8/5 Rating</span>
        </div>
      </div>
    </section>
  );
}

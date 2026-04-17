const benefits = [
  {
    icon: '⚡',
    title: 'Instant Cashback',
    desc: 'Get up to 3% cashback credited instantly to your account on every UPI scan.',
  },
  {
    icon: '🔒',
    title: 'Bank-Grade Security',
    desc: 'Advanced encryption and real-time fraud monitoring keep your money safe.',
  },
  {
    icon: '🌍',
    title: 'Global Acceptance',
    desc: 'Use your Pay Grande card at 50M+ merchants worldwide with zero forex charges.',
  },
  {
    icon: '📱',
    title: 'Smart App',
    desc: 'Track spending, set limits, and manage rewards — all from the Pay Grande app.',
  },
  {
    icon: '🏦',
    title: 'High Credit Limit',
    desc: 'Enjoy generous credit limits that grow with your payment history.',
  },
  {
    icon: '🎁',
    title: 'Exclusive Rewards',
    desc: 'Unlock milestone bonuses, partner discounts, and seasonal reward multipliers.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="savings" className="bg-gray-50 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Why Pay Grande</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3" style={{ letterSpacing: '-0.03em' }}>
            Everything you need,<br className="hidden md:block" /> nothing you don't
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-black hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-black text-black text-lg mb-2 group-hover:text-gray-700">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

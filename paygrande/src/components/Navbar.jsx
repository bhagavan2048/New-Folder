export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">PG</span>
        </div>
        <span className="text-black font-bold text-xl tracking-tight">Pay Grande</span>
      </div>

      {/* Nav Pills */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#savings"
          className="px-5 py-2 rounded-full border-2 border-black text-black font-semibold text-sm hover:bg-black hover:text-white transition-all duration-200"
        >
          Savings account
        </a>
        <a
          href="#card"
          className="px-5 py-2 rounded-full border-2 border-black bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all duration-200"
        >
          UPI credit card
        </a>
        <a
          href="#features"
          className="px-5 py-2 rounded-full border-2 border-black text-black font-semibold text-sm hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-1"
        >
          What we offer <span className="text-base">+</span>
        </a>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
        <div className="w-5 h-0.5 bg-black mb-1"></div>
        <div className="w-5 h-0.5 bg-black mb-1"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </button>
    </nav>
  );
}

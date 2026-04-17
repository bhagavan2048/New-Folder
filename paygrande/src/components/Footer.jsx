export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xs">PG</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Pay Grande</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              The smartest UPI credit card. Earn cashback on every scan, with zero hidden charges.
            </p>
          </div>

          {/* Links */}
          {[
            {
              heading: 'Products',
              links: ['UPI Credit Card', 'Savings Account', 'Pay Later', 'Rewards'],
            },
            {
              heading: 'Company',
              links: ['About Us', 'Careers', 'Blog', 'Press'],
            },
            {
              heading: 'Support',
              links: ['Help Center', 'Contact', 'Privacy Policy', 'Terms'],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 Pay Grande Financial Services Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Regulated by RBI · Member of NPCI
          </p>
        </div>
      </div>
    </footer>
  );
}

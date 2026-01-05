export default function Footer() {
  return (
    <footer className="relative w-screen overflow-hidden">

      {/* ===== GRADIENT BACKGROUND ===== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#E5E7EB]
          via-[#D1D5DB]
          to-[#0F172A]
        "
      />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-14">

        {/* ================= HERO CTA ================= */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2
            className="amplessoft
              text-gray-900
              font-extrabold
              leading-tight
              text-[clamp(2.2rem,5vw,3.8rem)]
            "
          >
            Discover a smarter way to get loans.
          </h2>

          <p className="mt-4 text-base text-gray-700">
            Save time, avoid rejections, and get guided support —
            from application to disbursal.
          </p>

          <button
            className="
              mt-8
              inline-flex items-center justify-center
              rounded-full
              bg-black
              px-8 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-gray-800
            "
          >
            Get started
          </button>
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-[#0B0E14]">

          {/* BRAND */}
          <div>
            <h4 className="text-[#0B0E14] font-semibold mb-4">
              YourLoanBrand
            </h4>
            <p className="text-sm leading-relaxed text-[#0B0E14]">
              We simplify the loan process by acting as a trusted
              bridge between you and multiple banks.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[#0B0E14] font-semibold mb-4">
              How We Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Personal Loans</li>
              <li>Business Loans</li>
              <li>Home Loans</li>
              <li>Loan Against Property</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-[#0B0E14] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Resources</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-20
            flex flex-col sm:flex-row
            items-center justify-between
            gap-6
            border-t border-white/10
            pt-6
            text-xs
            text-gray-400
          "
        >
          <span>© 2026 YourLoanBrand. All rights reserved.</span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

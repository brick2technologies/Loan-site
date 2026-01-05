export default function LoanOverview() {
  return (
    <section id="overview" className="py-16 px-6 bg-[#E5E7EB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="amplessoft text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            What Is a Personal Loan?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A personal loan is an unsecured loan that gives you quick access to funds without the need to provide any collateral.
            It's a flexible financial solution designed to help you cover life's important moments and unexpected expenses.
          </p>
        </div>

        {/* Two-column layout on larger screens */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Explanation + Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">
                Key Features of Personal Loans
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>No collateral or security required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Fast approval & quick disbursal (often within 24-48 hours)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Fixed interest rates & predictable EMIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Flexible loan amounts (usually ₹50,000 – ₹20,00,000)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0B0E14] mr-3 text-xl">•</span>
                  <span>Repayment tenure from 12 to 60 months</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="amplessoft text-2xl font-semibold text-gray-800 mb-4">
                Most Common Uses
              </h3>
              <p className="text-gray-600">
                People most often take personal loans for planned life events or to manage sudden financial needs without touching their savings.
              </p>
            </div>
          </div>

          {/* Right - Popular use cases cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Medical Emergencies",
                desc: "Cover urgent treatments, surgeries, or hospital bills",
              },
              {
                title: "Wedding Expenses",
                desc: "Fund your dream wedding without financial stress",
              },
              {
                title: "Travel & Vacations",
                desc: "Plan your dream holiday or family trip",
              },
              {
                title: "Higher Education",
                desc: "Pay for courses, certifications, or children's education",
              },
              {
                title: "Debt Consolidation",
                desc: "Combine high-interest debts into one affordable EMI",
              },
              {
                title: "Home Renovation",
                desc: "Redesign or upgrade your living space",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="amplessoft bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA / Summary line */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg font-medium">
            Whether it's a planned milestone or an unexpected need — a personal loan gives you the freedom to manage life on your terms.
          </p>
        </div>
      </div>
    </section>
  );
}
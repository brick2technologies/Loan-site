export default function LoanDetails() {
  return (
    <section id="interest" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Personal Loan at a Glance
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Fast, flexible, and transparent — get the money you need with the best possible terms in India.
          </p>
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Loan Amount",
              value: "₹50,000 – ₹40 Lakhs",
              desc: "Perfect for any need — from small emergencies to big life goals",
              highlight: "Up to ₹40 Lakhs",
            },
            {
              title: "Interest Rate",
              value: "Starting from 10.5%* p.a.",
              desc: "Competitive rates — among the lowest in the market",
              highlight: "Lowest rates guaranteed",
            },
            {
              title: "Repayment Tenure",
              value: "12 to 60 months",
              desc: "Choose comfortable EMIs that fit your monthly budget",
              highlight: "Flexible 1–5 years",
            },
            {
              title: "Approval & Disbursal",
              value: "As fast as 24–72 hours*",
              desc: "Most cases approved & money in account within 2–3 days",
              highlight: "Lightning fast",
            },
            {
              title: "Collateral / Security",
              value: "Zero Collateral Required",
              desc: "Unsecured loan — no property, FD, or gold needed",
              highlight: "100% unsecured",
            },
            {
              title: "Processing Fee",
              value: "Up to 3.5%* (one-time)",
              desc: "Transparent charges — no hidden fees after approval",
              highlight: "Fully disclosed",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`
                bg-white 
                rounded-2xl 
                p-6 md:p-8 
                shadow-sm hover:shadow-md 
                transition-all duration-300 
                border border-gray-100
                flex flex-col
                ${index === 1 ? "lg:col-span-2 lg:row-span-1 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">
                  {item.title}
                </h3>
                <span className="text-[#0B0E14] text-2xl font-bold">
                  {index === 0 && "₹"}
                  {item.highlight.includes("Lowest") && "★"}
                </span>
              </div>

              <div className="text-2xl md:text-3xl font-bold text-[#0B0E14] mb-2">
                {item.value}
              </div>

              <p className="text-gray-600 text-base leading-relaxed mt-2">
                {item.desc}
              </p>

              {item.highlight && (
                <div className="mt-4 inline-block bg-[#0B0E14]/10 text-[#0B0E14] px-4 py-1.5 rounded-full text-sm font-medium">
                  {item.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            *Interest rates, fees, approval time & loan amount depend on your profile, credit score, income & bank policy.  
            Final offer will be shared after eligibility check.
          </p>
        </div>

        {/* Confidence CTA */}
        <div className="text-center mt-10">
          <div className="inline-block bg-[#0B0E14] text-[#E5E7EB] px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-lg md:text-xl hover:shadow-xl transition-all">
            Check Your Exact Offer in 2 Minutes
          </div>
        </div>
      </div>
    </section>
  );
}
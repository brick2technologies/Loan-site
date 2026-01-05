export default function ShriramPersonalLoanFeatures() {
  const features = [
    {
      icon: "💰",
      title: "High Loan Amounts",
      desc: "Access up to <strong>₹10,00,000</strong> to cover significant expenses like home renovations, hospital bills, or dream weddings",
      highlight: "Up to ₹10 Lakhs",
    },
    {
      icon: "📈",
      title: "Competitive Interest Rates",
      desc: "Starting at <strong>11%* p.a.</strong> — among the best rates making your EMI payments easier on your pocket",
      highlight: "From 11%* p.a.",
    },
    {
      icon: "📅",
      title: "Flexible Repayment Tenure",
      desc: "Choose from <strong>12 to 60 months</strong> — pick the tenure that perfectly fits your monthly budget",
      highlight: "12-60 Months",
    },
    {
      icon: "⚡",
      title: "Lightning Quick Approvals",
      desc: "Get approved in <strong>few hours to days</strong> with fast disbursal once documents are verified",
      highlight: "Hours to Days",
    },
    {
      icon: "🛡️",
      title: "100% Collateral-Free",
      desc: "No security or collateral required — unsecured loan for all your personal financial needs",
      highlight: "No Collateral",
    },
    {
      icon: "📱",
      title: "Seamless Digital Process",
      desc: "Apply in <strong>just a few clicks</strong> via our user-friendly website or Shriram One app",
      highlight: "100% Online",
    },
  ];

  const benefits = [
    {
      icon: "📄",
      title: "Minimal Documentation",
      desc: "Only basic paperwork required — Aadhaar, PAN, salary slips/bank statements simplify & speed up processing",
    },
    {
      icon: "🗺️",
      title: "2800+ Branches Nationwide",
      desc: "Apply online OR visit any of our <strong>2800+ branches</strong> across India for in-person support",
    },
    {
      icon: "🧮",
      title: "Free EMI Calculator",
      desc: "Use our accurate personal loan EMI calculator to plan your monthly payments and total interest outgo",
    },
    {
      icon: "🎯",
      title: "Versatile Usage",
      desc: "No end-use restrictions — spend on weddings, medical emergencies, education, travel, home renovation & more",
    },
  ];

  return (
    <section id="features" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0E14] leading-tight">
            Personal Loan Features & Benefits
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Designed for all your financial needs — weddings, education, medical emergencies & more. 
            Quick approvals, competitive rates, and hassle-free process.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] text-center mb-12">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl
                  transition-all duration-300 border border-gray-100
                  flex flex-col group
                  ${index === 1 ? "lg:col-span-2 border-[#0B0E14]/20 bg-gradient-to-br from-white to-gray-50" : ""}
                `}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="
                    w-16 h-16 rounded-2xl bg-[#0B0E14]/10 
                    text-[#0B0E14] flex items-center justify-center 
                    text-3xl font-bold group-hover:scale-110 transition-transform
                  ">
                    {feature.icon}
                  </div>
                  <h4 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">
                    {feature.title}
                  </h4>
                </div>
                
                <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1" 
                   dangerouslySetInnerHTML={{ __html: feature.desc }}
                />
                
                <div className="bg-[#0B0E14]/5 text-[#0B0E14] px-5 py-2 rounded-xl font-bold text-lg">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] text-center mb-12">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="
                  bg-white rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-md
                  transition-all duration-300 border border-gray-100
                  flex items-start gap-5 group
                "
              >
                <div className="
                  w-14 h-14 rounded-xl bg-[#0B0E14] text-white 
                  flex items-center justify-center text-2xl font-bold
                  flex-shrink-0 mt-1 group-hover:scale-110 transition-transform
                ">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h4 className="amplessoft text-xl font-bold text-[#0B0E14] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EMI Calculator Teaser + CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto mb-10">
            <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-4">
              Calculate Your EMI Now
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Use our free, accurate personal loan EMI calculator to plan your exact monthly payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                Try EMI Calculator
              </button>
              <button className="border-2 border-[#0B0E14] text-[#0B0E14] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#0B0E14]/5 transition-all">
                Apply Now
              </button>
            </div>
          </div>

          {/* Final Trust Line */}
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14]">
            Trusted by lakhs of Indians • <strong>Quick. Safe. Simple.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
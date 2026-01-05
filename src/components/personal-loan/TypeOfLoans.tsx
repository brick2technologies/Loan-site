export default function TypesOfPersonalLoans() {
  const loanTypes = [
    {
      title: "Standard / General Personal Loan",
      description:
        "The most common type — unsecured loan for any personal purpose like marriage, travel, medical, or shopping. Flexible usage with no end-use proof required.",
      interest: "10.5% – 24% p.a.",
      amount: "₹50,000 – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "Salaried & self-employed with good credit",
      icon: "🌟",
    },
    {
      title: "Marriage Loan",
      description:
        "Specialized personal loan with higher amounts and slightly relaxed eligibility for wedding expenses — venue, catering, jewellery, honeymoon, etc.",
      interest: "10.8% – 18% p.a.",
      amount: "₹1 Lakh – ₹50 Lakhs",
      tenure: "12 – 72 months",
      bestFor: "Weddings & big family events",
      icon: "💍",
    },
    {
      title: "Medical / Emergency Loan",
      description:
        "Quick approval loans for urgent medical treatments, surgeries, hospital bills. Many lenders offer faster disbursal for genuine medical needs.",
      interest: "11% – 22% p.a.",
      amount: "₹50,000 – ₹25 Lakhs",
      tenure: "12 – 48 months",
      bestFor: "Unexpected medical emergencies",
      icon: "🏥",
    },
    {
      title: "Debt Consolidation Loan",
      description:
        "Combine multiple high-interest loans/credit card dues into one single loan with lower interest rate and one manageable EMI.",
      interest: "10.5% – 18% p.a.",
      amount: "₹1 Lakh – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "People with multiple EMIs / credit card debt",
      icon: "🔄",
    },
    {
      title: "Home Renovation Loan",
      description:
        "Unsecured loan for home improvement, interior work, kitchen/bathroom renovation, extension, or repairs — no property mortgage needed.",
      interest: "11% – 20% p.a.",
      amount: "₹3 Lakhs – ₹40 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "House owners wanting to upgrade living space",
      icon: "🏠",
    },
    {
      title: "Education / Skill Loan",
      description:
        "Personal loan for higher education, professional courses, certifications, coaching classes, or children's education (not covered under education loan schemes).",
      interest: "10.75% – 19% p.a.",
      amount: "₹50,000 – ₹30 Lakhs",
      tenure: "12 – 60 months",
      bestFor: "Students, professionals, upskilling",
      icon: "📚",
    },
  ];

  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Different Types of Personal Loans
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the right personal loan that perfectly matches your need — fast, flexible, and tailored to you.
          </p>
        </div>

        {/* Loan Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loanTypes.map((loan) => (
            <div
              key={loan.title}
              className="
                bg-white 
                rounded-2xl 
                p-6 md:p-8 
                shadow-sm hover:shadow-xl 
                transition-all duration-300 
                border border-gray-100
                flex flex-col
                group
              "
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="
                  w-14 h-14 rounded-full 
                  bg-[#0B0E14]/10 
                  text-[#0B0E14] 
                  flex items-center justify-center 
                  text-3xl
                  group-hover:scale-110
                  transition-transform
                ">
                  {loan.icon}
                </div>
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">
                  {loan.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base mb-6 leading-relaxed flex-1">
                {loan.description}
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-[#0B0E14]">Interest</span>
                  <p className="text-gray-600">{loan.interest}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Amount</span>
                  <p className="text-gray-600">{loan.amount}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Tenure</span>
                  <p className="text-gray-600">{loan.tenure}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#0B0E14]">Best For</span>
                  <p className="text-gray-600">{loan.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Not sure which type is right for you?{" "}
            <span className="font-semibold text-[#0B0E14]">
              Fill the form above — we'll match you with the best option in 2 minutes!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
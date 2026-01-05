export default function HowWeHelp() {
  return (
    <section id="how-to-apply" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            We Make Personal Loans
            <br className="sm:hidden" /> Effortless For You
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            India's most trusted loan experts — faster approvals, highest chances, zero stress.
          </p>
        </div>

        {/* Steps - Improved UX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {[
            {
              number: 1,
              title: "Collect & Verify Documents",
              desc: "We gather and verify every document for you — no back-and-forth",
            },
            {
              number: 2,
              title: "Check Real Eligibility",
              desc: "Accurate assessment across 40+ banks — know your true chances instantly",
            },
            {
              number: 3,
              title: "Get Matched to Best Offer",
              desc: "We compare 40+ banks & NBFCs to find you the lowest rate & highest amount",
            },
            {
              number: 4,
              title: "Expert Application Filing",
              desc: "We fill and submit your application perfectly — zero rejection due to errors",
            },
            {
              number: 5,
              title: "Follow-up Till Disbursal",
              desc: "Daily tracking + direct coordination with bank till money reaches your account",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="
                bg-white 
                rounded-2xl 
                p-6 md:p-7 
                shadow-sm hover:shadow-md 
                transition-all duration-300 
                border border-gray-100
                flex flex-col items-center text-center
                group
              "
            >
              <div className="
                w-12 h-12 
                rounded-full 
                bg-[#0B0E14] 
                text-white 
                flex items-center justify-center 
                text-xl font-bold 
                mb-5
                group-hover:scale-110
                transition-transform
              ">
                {step.number}
              </div>
              
              <h3 className="amplessoft text-lg md:text-xl font-semibold text-[#0B0E14] mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Confidence booster footer */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg font-medium text-gray-800">
            10,000+ happy customers • 4.8+ star rating • Highest approval rate in India
          </p>
        </div>
      </div>
    </section>
  );
}
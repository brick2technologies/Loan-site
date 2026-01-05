export default function TrustAndCTA() {
  return (
    <section className="bg-[#E5E7EB] py-16 md:py-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Trust Building Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            100% Safe & Transparent
          </h2>
          
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Your privacy and security are our top priority. We never sell your data.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                icon: "🔒",
                title: "Bank-Grade Security",
                desc: "256-bit SSL encryption & RBI compliant process",
              },
              {
                icon: "🏦",
                title: "Only Verified Partners",
                desc: "Information shared only with trusted banks & NBFCs",
              },
              {
                icon: "✅",
                title: "Zero Hidden Charges",
                desc: "Full transparency — what you see is what you pay",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  bg-white 
                  rounded-2xl 
                  p-6 md:p-8 
                  shadow-sm 
                  border border-gray-100
                  hover:shadow-md 
                  transition-all duration-300
                  flex flex-col items-center text-center
                "
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="amplessoft text-xl font-bold text-[#0B0E14] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof Mini */}
          <div className="mt-12 text-gray-700 text-base md:text-lg">
            <p className="font-medium">
              Trusted by <span className="text-[#0B0E14] font-bold">1,50,000+</span> Indians
            </p>
            <p className="mt-2">
              ★★★★☆ <span className="font-medium">4.8/5</span> from 12,000+ reviews
            </p>
          </div>
        </div>

        {/* Strong CTA Section */}
        <div className="
          bg-[#0B0E14] 
          text-[#E5E7EB] 
          rounded-3xl 
          p-8 md:p-12 
          text-center 
          shadow-2xl 
          relative 
          overflow-hidden
        ">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E14] via-[#1F2937] to-[#0B0E14] opacity-80"></div>

          <div className="relative z-10">
            <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Get Your Personal Loan?
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Takes <strong>less than 2 minutes</strong> •{" "}
              <strong>100% Free</strong> •{" "}
              <strong>No Credit Score Impact</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                className="
                  bg-white 
                  text-[#0B0E14] 
                  px-10 py-5 
                  rounded-xl 
                  font-bold 
                  text-lg md:text-xl 
                  shadow-lg 
                  hover:shadow-2xl 
                  hover:scale-[1.03] 
                  transition-all duration-300
                  w-full sm:w-auto
                "
              >
                Apply Now — Get Best Offers
              </button>

              <button
                className="
                  border-2 border-[#E5E7EB]/40 
                  text-[#E5E7EB] 
                  px-10 py-5 
                  rounded-xl 
                  font-semibold 
                  text-lg md:text-xl 
                  hover:bg-white/10 
                  transition-all duration-300
                  w-full sm:w-auto
                "
              >
                Check Eligibility First
              </button>
            </div>

            <p className="mt-8 text-base md:text-lg opacity-80">
              No paperwork upfront • Instant pre-approval • Money in account in 24–72 hrs*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
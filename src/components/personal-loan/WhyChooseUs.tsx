export default function WhyChooseUs() {
  return (
    <section className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Why Thousands Choose Us
            <br className="sm:hidden" /> Every Month
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We don't just process loans — we dramatically increase your approval chances
            and get you the best possible deal.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Applying Alone - Red flags style */}
          <div className="
            bg-white 
            rounded-2xl 
            p-7 md:p-9 
            shadow-md 
            border border-red-100
            relative overflow-hidden
          ">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              Common Experience
            </div>

            <h3 className="amplessoft text-2xl font-bold text-gray-800 mb-6">
              Applying Alone
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✗</span>
                <span>Visiting 10+ banks & filling multiple forms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✗</span>
                <span>High rejection rate due to wrong bank choice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✗</span>
                <span>Confusing documentation requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✗</span>
                <span>No expert guidance — trial & error</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-0.5">✗</span>
                <span>Stuck with high interest rates</span>
              </li>
            </ul>
          </div>

          {/* Applying With Us - Green success style */}
          <div className="
            bg-[#0B0E14] 
            text-white 
            rounded-2xl 
            p-7 md:p-9 
            shadow-2xl 
            relative overflow-hidden
            border-2 border-[#0B0E14]
          ">
            <div className="absolute top-0 right-0 bg-white text-[#0B0E14] text-xs font-bold px-4 py-1 rounded-bl-lg">
              Smart Choice
            </div>

            <h3 className="amplessoft text-2xl md:text-3xl font-bold mb-6">
              Applying With Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl mt-0.5">✓</span>
                <span>Single application — we do all the work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl mt-0.5">✓</span>
                <span>Smart matching to banks where you're most likely to get approved</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl mt-0.5">✓</span>
                <span>Dedicated expert handling your case end-to-end</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl mt-0.5">✓</span>
                <span>Highest possible approval rate in the market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-2xl mt-0.5">✓</span>
                <span>Best interest rates & maximum loan amount</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Confidence line */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14]">
            Stop struggling. Start winning.
          </p>
          <p className="mt-3 text-gray-700">
            Apply once — get the best offer in India
          </p>
        </div>
      </div>
    </section>
  );
}
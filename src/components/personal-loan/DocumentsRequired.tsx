export default function DocumentsRequired() {
  return (
    <section id="types" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Minimal Documentation — Maximum Speed
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We keep paperwork super simple. Most customers get approved with just 4–5 basic documents.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Identity Proof",
              items: [
                "Aadhaar Card",
                "PAN Card (mandatory for all)",
                "Passport / Voter ID / Driving License (any one)",
              ],
              icon: "🆔",
              note: "Aadhaar + PAN is usually sufficient",
            },
            {
              title: "Address Proof",
              items: [
                "Aadhaar Card (if address matches)",
                "Utility Bill (last 3 months)",
                "Rent Agreement / Bank Statement",
              ],
              icon: "🏠",
              note: "Aadhaar most preferred",
            },
            {
              title: "Income Proof",
              items: [
                "Latest 3–6 months Salary Slips (salaried)",
                "Form 16 / ITR (last 2 years) – salaried/self-employed",
                "Business Proof (GST returns/ITR) – self-employed",
              ],
              icon: "💼",
              note: "We accept digital copies",
            },
            {
              title: "Bank Statements",
              items: [
                "Last 6 months bank statements",
                "Salary credited account preferred",
                "Passbook / Online statement (PDF)",
              ],
              icon: "🏦",
              note: "Clear salary credits help faster approval",
            },
            {
              title: "Optional / Additional",
              items: [
                "Latest 3 months salary credit proof",
                "Company ID card / Appointment letter",
                "Existing loan statements (if any)",
              ],
              icon: "📄",
              note: "Only if required by the bank",
            },
          ].map((doc) => (
            <div
              key={doc.title}
              className="
                bg-white 
                rounded-2xl 
                p-6 md:p-8 
                shadow-sm hover:shadow-md 
                transition-all duration-300 
                border border-gray-100
                flex flex-col
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="
                  w-14 h-14 
                  rounded-full 
                  bg-[#0B0E14]/10 
                  text-[#0B0E14] 
                  flex items-center justify-center 
                  text-2xl font-bold
                ">
                  {doc.icon}
                </div>
                <h3 className="amplessoft text-xl md:text-2xl font-bold text-[#0B0E14]">
                  {doc.title}
                </h3>
              </div>

              <ul className="space-y-3 text-gray-700 flex-1">
                {doc.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0B0E14] text-xl mt-0.5">•</span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {doc.note && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic">
                    {doc.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary & CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md border border-gray-200">
            <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-3">
              90% of approvals need only:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-800">
              <span>Aadhaar</span>
              <span>PAN</span>
              <span>Bank Statements</span>
              <span>Salary Slips/ITR</span>
            </div>
          </div>

          <p className="mt-10 text-lg md:text-xl text-gray-700">
            Upload digital copies — no need to visit branches!
          </p>

          <div className="mt-8 inline-block bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg md:text-xl hover:shadow-xl transition-all">
            Upload Documents & Apply Now
          </div>
        </div>
      </div>
    </section>
  );
}
export default function FAQ() {
  const faqs = [
    {
      question: "Are you a bank or NBFC?",
      answer:
        "No, we are an independent **loan facilitation & advisory platform**. We partner with multiple trusted banks and NBFCs to help you get the best possible personal loan offer.",
    },
    {
      question: "Is my personal information safe with you?",
      answer:
        "Yes — 100%. We use **bank-grade 256-bit SSL encryption** and follow strict RBI-compliant data privacy guidelines. Your information is shared **only** with the banks/NBFCs we match you to for loan processing — never sold or misused.",
    },
    {
      question: "Are there any hidden charges or fees?",
      answer:
        "No hidden charges whatsoever. All fees (processing fee, etc.) are clearly mentioned upfront. You pay **only** what is agreed in the final loan offer from the bank/NBFC. We earn through bank partnerships — you never pay us any service fee.",
    },
    {
      question: "How fast can I get the loan approval and disbursal?",
      answer:
        "Most applications receive **pre-approval in minutes** and **final approval within 24–72 hours**. Once approved, funds are usually disbursed to your account within **1–3 working days** (many cases same-day or next-day).",
    },
    {
      question: "What is the minimum CIBIL score required?",
      answer:
        "Most banks start at **685+**, but we successfully get approvals even for scores **650+** in many cases — especially with stable income and good banking behavior. We match you to the most suitable lender.",
    },
    {
      question: "Do I need to visit any branch or submit physical documents?",
      answer:
        "No branch visits required! Everything is **100% digital** — you upload documents online (Aadhaar, PAN, bank statement, salary slips/ITR). Most approvals happen without any physical paperwork.",
    },
    {
      question: "Will applying affect my CIBIL score?",
      answer:
        "No hard inquiry on your CIBIL when you apply through us initially. We perform a **soft check** first. Only when you accept a specific bank's offer will a hard inquiry be made (standard industry practice).",
    },
    {
      question: "Can self-employed/business owners also apply?",
      answer:
        "Yes! We serve both salaried and self-employed individuals (including professionals, doctors, CAs, shop owners, traders). Self-employed applicants usually need **ITR + bank statements** (last 1–2 years).",
    },
  ];

  return (
    <section id="faqs" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            Got Questions? We've Got Clear Answers
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know before applying — transparent & straightforward.
          </p>
        </div>

        {/* FAQ Accordion Style */}
        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="
                bg-white 
                rounded-2xl 
                shadow-sm 
                border border-gray-100
                transition-all duration-300
                hover:shadow-md
                group
                open:bg-white
              "
            >
              <summary
                className="
                  amplessoft
                  flex justify-between items-center
                  cursor-pointer
                  px-6 py-5 md:px-8 md:py-6
                  text-lg md:text-xl font-semibold text-[#0B0E14]
                  list-none
                  transition-colors
                  group-hover:text-[#0B0E14]
                "
              >
                {faq.question}
                <span className="ml-4 text-2xl font-bold transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-4">
            Still have a question?
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our loan experts are here to help — instant chat or call support available.
          </p>

          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0B0E14] text-[#E5E7EB] px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
              Chat With Us Now
            </button>
            <button className="border-2 border-[#0B0E14] text-[#0B0E14] px-10 py-5 rounded-xl font-semibold text-lg hover:bg-[#0B0E14]/5 transition-all">
              Call Us: 1800-XXX-XXXX
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
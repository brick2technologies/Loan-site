import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are you a bank?",
    answer:
      "No. We are a loan facilitation platform working with multiple banks and NBFCs.",
  },
  {
    question: "Will my data be shared?",
    answer:
      "Your data is shared only with banks required for loan processing, and only after verification.",
  },
  {
    question: "Do you charge any fees?",
    answer:
      "We maintain complete transparency. Any applicable charges will be clearly communicated in advance.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Depending on the loan type, approvals may take 24–72 hours after document submission.",
  },
];

export default function LoanFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            FAQ
          </span>

          <h2 className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-black/10 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus size={16} className="text-gray-500" />
                  ) : (
                    <Plus size={16} className="text-gray-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

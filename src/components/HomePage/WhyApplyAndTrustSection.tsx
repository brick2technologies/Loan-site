import { motion } from "framer-motion";
import { CheckCircle, XCircle, Quote } from "lucide-react";

const comparison = [
  {
    left: "Multiple bank visits",
    right: "Single application",
  },
  {
    left: "High rejection risk",
    right: "Eligibility-based submission",
  },
  {
    left: "Confusing terms",
    right: "Clear guidance",
  },
  {
    left: "No follow-up support",
    right: "Dedicated assistance",
  },
];

const testimonials = [
  {
    quote:
      "The process was smooth and transparent. I got my loan approved without visiting multiple banks.",
    author: "Verified Customer",
  },
  {
    quote:
      "Their team guided me step by step. Highly recommended.",
    author: "Business Owner",
  },
];

export default function WhyApplyAndTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            Why Apply Through Us
          </span>

          <h2 className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            A Smarter Way to Get Loans
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-base text-gray-700 font-medium">
            See the difference between applying alone and applying with expert support.
          </p>
        </div>

        {/* ================= COMPARISON TABLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg"
        >
          <div className="grid grid-cols-2 text-base font-semibold text-gray-800">
            {/* Column Headers */}
            <div className="p-5 border-b border-r border-black/10 bg-red-50 text-red-700 text-center font-bold">
              Applying Alone
            </div>
            <div className="p-5 border-b border-black/10 bg-green-50 text-green-700 text-center font-bold">
              Applying With Us
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div key={index} className="contents">
                {/* Left side */}
                <div className="p-5 border-r border-black/10 flex items-center gap-3 bg-red-50/30">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100">
                    <XCircle size={18} className="text-red-600" />
                  </div>
                  <span>{row.left}</span>
                </div>

                {/* Right side */}
                <div className="p-5 flex items-center gap-3 bg-green-50/30">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                    <CheckCircle size={18} className="text-green-600" />
                  </div>
                  <span>{row.right}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= TRUST LINE ================= */}
        <div className="mt-20 text-center mb-10">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            Trusted by Borrowers
          </span>

          <h3 className="amplessoft text-xl sm:text-2xl font-semibold text-gray-900">
            Trusted by Hundreds of Borrowers
          </h3>
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-md"
            >
              <Quote className="mb-4 text-gray-400" size={22} />

              <p className="text-base text-gray-700 leading-relaxed mb-4 font-medium">
                “{item.quote}”
              </p>

              <p className="text-sm font-semibold text-gray-900">
                — {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
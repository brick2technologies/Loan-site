import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function LoanCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900"
        >
          Ready to Apply for Your Loan?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-sm text-gray-600"
        >
          It takes less than 2 minutes to check eligibility.
        </motion.p>

        {/* ================= BENEFITS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-700"
        >
          {[
            "Free eligibility check",
            "No obligation",
            "Expert guidance",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* ================= CTA BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12"
        >
          <button className="animated-border-btn inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-gray-900">
            Apply Now & Get Started
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

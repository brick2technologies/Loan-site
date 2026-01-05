import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Share Your Details",
    description:
      "Fill a simple and secure form with your basic details. Upload required documents safely without visiting any branch.",
    icon: FileText,
    image: "/images/step-1.png",
  },
  {
    step: "02",
    title: "We Verify & Match",
    description:
      "Our experts verify your profile and documents, then match your application with banks that suit your eligibility.",
    icon: Search,
    image: "/images/step2.jpg",
  },
  {
    step: "03",
    title: "Approval & Disbursal",
    description:
      "Once approved by the bank, the loan amount is disbursed directly into your bank account.",
    icon: CheckCircle,
    image: "/images/step-3.webp",
  },
];

export default function LoanStepsSection() {
  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-20">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            How It Works
          </span>

          <h2 className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            3 Simple Steps to Get Your Loan Approved
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm text-gray-600">
            One application. Expert verification. Faster approvals.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
              >
                <div className="metallic-border rounded-2xl">
                  <div className="relative h-[260px] rounded-2xl overflow-hidden border border-black/10 bg-white">

                    {/* Background Image */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-50"
                    />

                    {/* Light Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40" />

                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">

                      {/* Step Number */}
                      <div className="self-end mb-auto w-9 h-9 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-xs font-semibold text-gray-700">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-gray-900" />
                      </div>

                      {/* Text */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Arrow */}
                      {index !== steps.length - 1 && (
                        <div className="hidden md:flex justify-end mt-auto">
                          <ArrowRight className="text-gray-400" size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button className="animated-border-btn text-sm px-6 py-2 text-gray-900">
            Apply for Loan
          </button>

          <p className="mt-3 text-xs text-gray-500">
            ✔ No multiple applications &nbsp; ✔ No confusion &nbsp; ✔ No unnecessary rejections
          </p>
        </motion.div>
      </div>
    </section>
  );
}

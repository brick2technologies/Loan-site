import { motion } from "framer-motion";
import { Lock, ShieldCheck, FileLock } from "lucide-react";

const safetyPoints = [
  {
    title: "Bank-Grade Encryption",
    desc: "All your documents are protected using secure, bank-level encryption standards.",
    icon: Lock,
  },
  {
    title: "Used Only for Loan Processing",
    desc: "Your information is accessed strictly for eligibility checks and loan processing.",
    icon: FileLock,
  },
  {
    title: "Never Shared Without Consent",
    desc: "We never share your data with unauthorized parties or third-party marketers.",
    icon: ShieldCheck,
  },
];

export default function DocumentSafetySection() {
  return (
    <section className="relative overflow-hidden bg-[#E5E7EB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            Document Safety & Privacy
          </span>

          <h2 className="amplessoft text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Your Documents Are 100% Safe
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm text-gray-600">
            We follow strict data-protection practices to keep your information secure and confidential.
          </p>
        </div>

        {/* ================= POINTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gray-900" />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

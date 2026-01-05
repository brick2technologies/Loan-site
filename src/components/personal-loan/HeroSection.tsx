import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    employment: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔜 API integration will go here
    console.log("Form Data:", formData);
  };

  return (
    <main className="relative bg-[#E5E7EB] overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 px-5 sm:px-8 py-16 md:py-20 lg:py-0 min-h-[90svh] flex items-center">
  <div className="relative max-w-7xl mx-auto w-full">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Your original left text content */}
      <div className="relative z-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
        <h1 className="amplessoft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#0B0E14]">
          Personal Loan
          <br className="sm:hidden" />
          <span className="text-[#1F2937] font-semibold">
            — Quick, Simple & Transparent
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed max-w-prose mx-auto lg:mx-0">
          Get instant personal loans from India's top banks & NBFCs.  
          We take care of eligibility, documents & approval — so you can focus on what truly matters.
        </p>
      </div>

      {/* ← New visible image on the right */}
      <div className="hidden lg:block relative">
        <img
          src="/images/personal-loan.png"
          alt="Happy person with approved personal loan"
          className="
            w-full max-w-[680px] xl:max-w-[820px]
            h-auto object-contain
            drop-shadow-2xl
            rounded-xl
          "
          loading="eager"
        />
      </div>
    </div>
  </div>
</div>

      {/* Floating / Horizontal Form */}
      <div className="relative z-20 px-4 sm:px-6 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pb-16 md:pb-20">
        <div className="
          max-w-5xl lg:max-w-6xl mx-auto
          bg-white rounded-2xl md:rounded-3xl
          shadow-2xl
          p-6 sm:p-8 md:p-10
          backdrop-blur-sm
        ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              />

              <select
                name="employment"
                value={formData.employment}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-base bg-white focus:border-black/40 focus:ring-2 focus:ring-black/10 transition-all"
                required
              >
                <option value="">Employment Type *</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business-owner">Business Owner</option>
              </select>

              <button
                type="submit"
                disabled={!formData.consent}
                className={`
                  rounded-xl px-6 md:px-10 py-3.5 text-base font-semibold transition-all duration-300
                  ${
                    formData.consent
                      ? "bg-[#0B0E14] text-[#E5E7EB] hover:bg-black hover:shadow-xl hover:scale-[1.02]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Apply Now
              </button>
            </div>

            {/* Consent checkbox */}
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1.5 h-5 w-5 rounded border-gray-300 text-[#0B0E14] focus:ring-black/30"
                required
              />
              <span className="leading-relaxed">
                I authorize and consent to share/fetch my information for loan processing 
                as per applicable RBI guidelines and privacy policy.
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}
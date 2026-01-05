import { useEffect, useState } from "react";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Types", id: "types" },
  { label: "Features", id: "features" },
  { label: "Interest & Charges", id: "interest" },
  { label: "Eligibility", id: "eligibility" },
  { label: "How to Apply", id: "how-to-apply" },
  { label: "FAQs", id: "faqs" },
];

export default function LoanTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      const buffer = 160;
      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= buffer && rect.bottom > buffer) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    onScroll(); // Set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 100;
    const y = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      className="
        sticky top-18 z-40
        bg-[#E5E7EB] backdrop-blur-md
         
        
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive container for pills */}
        <div className="
          py-3 -mx-1
          flex flex-wrap justify-center gap-2.5 sm:gap-3
        ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`
                flex-shrink-0
                px-4 py-2 sm:px-5 sm:py-2.5
                rounded-full
                text-xs sm:text-sm font-medium
                transition-all duration-200
                whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "bg-[#0B0E14] text-white shadow-md scale-[1.04]"
                    : "bg-white/85 text-[#1F2937] hover:bg-white hover:shadow hover:scale-[1.02]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
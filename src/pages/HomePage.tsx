import HeroSection from "../components/HomePage/HeroSection";
import LoanStepsSection from "../components/HomePage/LoanStepsSection";
import WhatWeDoSection from "../components/HomePage/WhatWeDoSection";
import DocumentSafetySection from "../components/HomePage/DocumentSafetySection";
import LoansWeHelpSection from "../components/HomePage/LoansWeHelpSection";
import WhyApplyAndTrustSection from "../components/HomePage/WhyApplyAndTrustSection";
import LoanCTASection from "../components/HomePage/LoanCTASection";
import LoanFAQSection from "../components/HomePage/LoanFAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LoanStepsSection />
      <WhatWeDoSection />
      <DocumentSafetySection />
      <LoansWeHelpSection />
      <WhyApplyAndTrustSection />
      <LoanCTASection />
      <LoanFAQSection />
    </>
  );
}

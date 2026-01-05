import HeroSection from "../components/personal-loan/HeroSection";
import LoanOverview from "../components/personal-loan/LoanOverview";
import LoanTabs from "../components/personal-loan/LoansTab";
import HowWeHelp from "../components/personal-loan/HowWeHelp";
import LoanDetails from "../components/personal-loan/LoanDetails";
import DocumentsRequired from "../components/personal-loan/DocumentsRequired";
import Eligibility from "../components/personal-loan/Eligibility";
import WhyChooseUs from "../components/personal-loan/WhyChooseUs";

import CTASection from "../components/personal-loan/CTASection";
import FAQ from "../components/personal-loan/FAQ";
import TypesOfPersonalLoans from "../components/personal-loan/TypeOfLoans";
import PersonalLoanFeatures from "../components/personal-loan/LoanFeatures";
// import { useEffect, useState } from "react";

export default function PersonalLoanPage() {
  
  return (
    <main className="bg-[#E5E7EB]">
      <HeroSection />
      <LoanOverview />
      <LoanTabs />
      <TypesOfPersonalLoans />
      <PersonalLoanFeatures />
      <LoanDetails />
      <Eligibility />
      <HowWeHelp />
      <DocumentsRequired />
      <WhyChooseUs />
      <CTASection />
      <FAQ />
    </main>
  );
}

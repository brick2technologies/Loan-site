// export default function Eligibility() {
//   return (
//     <section id="eligibility" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Headline */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
//             95%+ of Working Indians
//             <br className="sm:hidden" /> Qualify Instantly
//           </h2>
//           <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             No complicated criteria. If you're working and earning steadily, you likely qualify for our 
//             instant personal loans from top banks.
//           </p>
//         </div>

//         {/* Main Eligibility Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
//           {/* Left - Who Qualifies */}
//           <div className="lg:pr-12">
//             <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-6">
//               Who Qualifies?
//             </h3>
            
//             <div className="space-y-4 mb-8">
//               {[
//                 {
//                   icon: "👨‍💼",
//                   title: "Salaried Professionals",
//                   desc: "Private/Govt employees with 1+ year experience"
//                 },
//                 {
//                   icon: "💼", 
//                   title: "Self-Employed",
//                   desc: "Business owners, freelancers, professionals with 2+ years"
//                 },
//                 {
//                   icon: "🏢",
//                   title: "Any Reputed Company",
//                   desc: "MNCs, PSUs, startups, SMEs — all accepted"
//                 }
//               ].map((item, i) => (
//                 <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
//                   <div className="text-2xl flex-shrink-0 mt-0.5">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
//                     <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Quick Criteria Cards */}
//           <div className="space-y-4">
//             <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-6">
//               Basic Requirements
//             </h3>
            
//             <div className="space-y-3">
//               {[
//                 { label: "Age", value: "21-60 Years" },
//                 { label: "Income", value: "₹20,000+ Monthly" },
//                 { label: "Experience", value: "1+ Year (Salaried)" },
//                 { label: "Credit Score", value: "650+ (Not Mandatory)" },
//                 { label: "Documents", value: "Just 2-3 Basic Docs" },
//               ].map((criteria, i) => (
//                 <div key={i} className="
//                   bg-gradient-to-r from-[#0B0E14]/5 to-transparent
//                   border border-[#0B0E14]/10
//                   p-5 rounded-xl 
//                   hover:shadow-lg hover:border-[#0B0E14]/20
//                   transition-all duration-300
//                 ">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700 font-medium">{criteria.label}</span>
//                     <span className="amplessoft text-xl font-bold text-[#0B0E14] bg-white/60 px-4 py-2 rounded-lg shadow-sm">
//                       {criteria.value}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Trust Signals & CTA */}
//         <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
//           {[
//             {
//               number: "97%",
//               label: "Approval Rate",
//               desc: "Highest in the industry"
//             },
//             {
//               number: "2 Mins",
//               label: "Eligibility Check",
//               desc: "Instant results"
//             },
//             {
//               number: "40+",
//               label: "Partner Banks",
//               desc: "SBI, HDFC, ICICI & more"
//             }
//           ].map((stat, i) => (
//             <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
//               <div className="amplessoft text-3xl md:text-4xl font-bold text-[#0B0E14] mb-2 group-hover:scale-105 transition-transform">
//                 {stat.number}
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">{stat.label}</h4>
//               <p className="text-gray-600 text-sm">{stat.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Final CTA */}
//         <div className="text-center pt-12 border-t border-gray-200">
//           <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-4">
//             Still Unsure? Check Your Eligibility Free
//           </h3>
//           <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
//             Takes 60 seconds. No obligation. Know exactly which banks will approve you and for how much.
//           </p>
//           <div className="bg-[#0B0E14] text-[#E5E7EB] px-8 py-4 rounded-2xl inline-block font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer max-w-max mx-auto">
//             Check My Eligibility Now →
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-[#E5E7EB] py-16 md:py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="amplessoft text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B0E14] leading-tight">
            95%+ Approval Rate —
            <br className="sm:hidden" />
            Check If You Qualify
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We get maximum approvals even for complex cases. See if you qualify for instant offers from 40+ banks.
          </p>
        </div>

        {/* Two-column eligibility layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Detailed Criteria */}
          <div className="space-y-8">
            <div>
              <h3 className="amplessoft text-2xl md:text-3xl font-bold text-[#0B0E14] mb-4">
                Basic Requirements
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    Age <strong>21-60 years</strong> (salaried) / <strong>24-65 years</strong> (self-employed)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    Minimum <strong>₹20,000/month</strong> net take-home salary
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    <strong>1+ year</strong> work experience / <strong>2+ years</strong> in current job/business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0B0E14] text-2xl mt-0.5 font-bold">✓</span>
                  <span className="text-base leading-relaxed">
                    CIBIL score <strong>685+</strong> (we approve even <strong>650+</strong> cases)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#0B0E14] mb-3">
                Loan Amount You Can Get
              </h4>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-bold text-[#0B0E14]">Salaried</span>
                    <div className="text-2xl font-bold text-[#0B0E14]">₹50K - ₹30L</div>
                  </div>
                  <div>
                    <span className="font-bold text-[#0B0E14]">Self-Employed</span>
                    <div className="text-2xl font-bold text-[#0B0E14]">₹1L - ₹40L</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Quick Check Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Salaried",
                desc: "Any private/govt company with PF/ESIC",
                icon: "👨‍💼",
              },
              {
                title: "Self-Employed",
                desc: "Doctors, CA, Professionals, Traders",
                icon: "💼",
              },
              {
                title: "21+ Years",
                desc: "Indian citizen with valid ID proof",
                icon: "🆙",
              },
              {
                title: "Regular Income",
                desc: "Bank statements of last 3-6 months",
                icon: "💰",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  bg-white 
                  rounded-2xl 
                  p-6 
                  shadow-sm hover:shadow-md 
                  transition-all duration-300 
                  border border-gray-100
                  flex flex-col items-center text-center
                  group
                "
              >
                <div className="
                  text-3xl 
                  mb-4 
                  group-hover:scale-110 
                  transition-transform
                ">
                  {item.icon}
                </div>
                <h4 className="amplessoft text-lg font-semibold text-[#0B0E14] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + Confidence */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-xl md:text-2xl font-semibold text-[#0B0E14] mb-4">
            Don't see yourself here? We still approve 85%+ cases
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Fill the form above — our experts will find the right bank for your profile in <strong>2 minutes</strong>.
          </p>
          <div className="bg-[#0B0E14] text-[#E5E7EB] inline-block px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
            Check My Eligibility Now
          </div>
        </div>
      </div>
    </section>
  );
}
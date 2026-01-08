import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your icons
import {
  FileCheck,
  ShieldCheck,
  Landmark,
  Users,
  Bell,
  Wallet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Define the shape of each point
interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// You can put this outside the component (recommended)
const points: ProcessStep[] = [
  {
    title: "Document Collection & Verification",
    desc: "We collect and verify all required documents to ensure accuracy and completeness.",
    icon: FileCheck,
  },
  {
    title: "Eligibility Check",
    desc: "Your profile is evaluated strictly based on current bank norms and criteria.",
    icon: ShieldCheck,
  },
  {
    title: "Bank Submission",
    desc: "We submit your application only to banks that best match your eligibility.",
    icon: Landmark,
  },
  {
    title: "Bank Coordination",
    desc: "Our team coordinates directly with bank officials on your behalf.",
    icon: Users,
  },
  {
    title: "Regular Updates",
    desc: "You receive timely updates at every stage of the loan process.",
    icon: Bell,
  },
  {
    title: "Approval & Disbursal Support",
    desc: "We assist you until final loan approval and successful disbursal.",
    icon: Wallet,
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Desktop horizontal scroll
  useLayoutEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Mobile: staggered reveal + better drag/snap
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);

    if (cards.length === 0) return;

    // Set initial state
    gsap.set(cards, {
      xPercent: 40,
      opacity: 0,
      scale: 0.92,
    });

    // Staggered animation for each card
    cards.forEach((card, i) => {
      gsap.to(card, {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.08, // small stagger between cards
      });
    });

    // Improved mobile drag + snap
    const slider = trackRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.cursor = "grabbing";
      slider.setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDown = false;
      slider.style.cursor = "grab";
      slider.releasePointerCapture(e.pointerId);

      // Snap to nearest card
      const card = cards[0];
      if (!card) return;
      const cardWidth = card.offsetWidth + 24; // gap-6 = 1.5rem = 24px
      const targetIndex = Math.round(slider.scrollLeft / cardWidth);
      const target = targetIndex * cardWidth;

      slider.scrollTo({ left: target, behavior: "smooth" });
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.8;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("pointerdown", handlePointerDown);
    slider.addEventListener("pointerup", handlePointerUp);
    slider.addEventListener("pointerleave", handlePointerUp);
    slider.addEventListener("pointermove", handlePointerMove);

    return () => {
      slider.removeEventListener("pointerdown", handlePointerDown);
      slider.removeEventListener("pointerup", handlePointerUp);
      slider.removeEventListener("pointerleave", handlePointerUp);
      slider.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#E5E7EB] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block mb-3 rounded-full bg-black/5 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            What Happens After You Apply?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            From document verification to bank disbursal, we manage the entire process for you.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className={`
            flex gap-6 px-5 md:px-6
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            -webkit-overflow-scrolling: touch
            scrollbar-hide
            lg:flex lg:gap-8 lg:px-6 lg:w-max
          `}
        >
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el; // ← correct way (no return)
                }}
                className={`
                  w-[82vw] max-w-[340px] h-[62vh] max-h-[480px]
                  lg:w-[70vw] lg:max-w-[860px] lg:max-h-[520px] lg:h-[70vh]
                  rounded-3xl border border-black/10 bg-white
                  p-6 sm:p-8 lg:p-10
                  shrink-0 flex flex-col items-center justify-center text-center
                  snap-center
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-black/5
                  lg:hover:-translate-y-3
                `}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/5 flex items-center justify-center mb-5 lg:mb-6">
                  <Icon size={26} className="text-gray-900 sm:size-28" />
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
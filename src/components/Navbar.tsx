import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Home,
  Car,
  HeartPulse,
  GraduationCap,
  Coins,
  Briefcase,
  Wallet,
  FileText,
  Hammer,
  Building,
  TrendingUp,
} from "lucide-react";

/* ================= TYPES ================= */
type DropdownItem = {
  label: string;
  icon: LucideIcon;
};

type DropdownProps = {
  title: string;
  items: DropdownItem[];
  base: string;
};

/* ================= NAVBAR ================= */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "loans" | "business" | null
  >(null);
  const [shrink, setShrink] = useState(false);

  /* Scroll shrink */
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 z-50 w-full -translate-x-1/2 px-4 transition-all duration-300 ${shrink ? "top-2" : "top-4"
        }`}
    >
      {/* ================= DESKTOP ================= */}
      <nav
        className={`
    hidden md:flex mx-auto items-center justify-between
    rounded-full
     bg-[#0F172A]
    backdrop-blur-2xl
    border border-white/40
    shadow-[0_20px_50px_rgba(0,0,0,0.7)]
    transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]

    ${shrink ? "max-w-4xl px-6 py-2.5 scale-[0.98]" : "max-w-6xl px-8 py-4 scale-100"}

  `}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />


        {/* LEFT */}
        <div className="flex items-center gap-10 text-sm font-medium text-[#D1D5DB]">
          <DesktopDropdown
            title="Loans for You"
            base="/loans"
            items={[
              { label: "Personal Loan", icon: User },
              { label: "Home Loan", icon: Home },
              { label: "Vehicle Loan", icon: Car },
              { label: "Medical Loan", icon: HeartPulse },
              { label: "Education Loan", icon: GraduationCap },
              { label: "Gold Loan", icon: Coins },
            ]}
          />

          <DesktopDropdown
            title="Loan for Business"
            base="/business-loans"
            items={[
              { label: "Business Loan", icon: Briefcase },
              { label: "Working Capital Loan", icon: Wallet },
              { label: "Term Loan", icon: FileText },
              { label: "Equipment Loan", icon: Hammer },
              { label: "Construction Financing", icon: Building },
              { label: "Loan Against Securities", icon: TrendingUp },
            ]}
          />
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-[#E5E7EB]"
        >
          Lend<span className="text-[#9CA3AF]">Pro</span>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <Link
            className="text-sm text-[#D1D5DB] hover:text-[#E5E7EB] transition"
            to="/login"
          >
            Login
          </Link>

          <Link
            to="/apply"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB]
              px-6 py-2.5
              text-sm font-semibold
              text-[#1C1F26]
              hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
              transition-all
            "
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* ================= MOBILE BAR ================= */}
      <div
        className="
          md:hidden flex items-center justify-between
          px-5 py-4 rounded-2xl
          bg-[#1C1F26]
          backdrop-blur-xl
          border border-white/10
          shadow-xl
        "
      >
        <Link to="/" className="text-xl font-semibold text-[#E5E7EB]">
          Lend<span className="text-[#9CA3AF]">Pro</span>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#D1D5DB]"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div
          className="
            md:hidden mt-3 rounded-2xl
            bg-[#1C1F26]
            backdrop-blur-xl
            border border-white/10
            shadow-xl
            p-4 space-y-4
          "
        >
          <MobileAccordion
            title="Loans for You"
            open={activeSection === "loans"}
            onClick={() =>
              setActiveSection(activeSection === "loans" ? null : "loans")
            }
            items={[
              "Personal Loan",
              "Home Loan",
              "Vehicle Loan",
              "Medical Loan",
              "Education Loan",
              "Gold Loan",
            ]}
            base="/loans"
            closeMenu={() => setMobileOpen(false)}
          />

          <MobileAccordion
            title="Loan for Business"
            open={activeSection === "business"}
            onClick={() =>
              setActiveSection(
                activeSection === "business" ? null : "business"
              )
            }
            items={[
              "Business Loan",
              "Working Capital Loan",
              "Term Loan",
              "Equipment Loan",
              "Construction Financing",
              "Loan Against Securities",
            ]}
            base="/business-loans"
            closeMenu={() => setMobileOpen(false)}
          />

          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block text-[#D1D5DB] hover:text-[#E5E7EB]"
          >
            Login
          </Link>

          <Link
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="
              block text-center rounded-xl
              bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB]
              py-2.5 font-semibold text-[#1C1F26]
            "
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}

/* ================= DESKTOP DROPDOWN ================= */
function DesktopDropdown({ title, items, base }: DropdownProps) {
  return (
    <div className="relative group">
      <span className="cursor-pointer text-[#D1D5DB] hover:text-[#E5E7EB] transition">
        {title}
      </span>

      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
        <div className="w-72 rounded-2xl bg-[#1C1F26] border border-white/10 shadow-xl">
          <ul className="p-4 space-y-1">
            {items.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Link
                  to={`${base}/${label.toLowerCase().replace(/\s/g, "-")}`}
                  className="
                    flex items-center gap-3
                    rounded-xl px-3 py-2
                    text-[#D1D5DB]
                    hover:bg-white/5
                    hover:text-[#E5E7EB]
                    transition
                  "
                >
                  <Icon size={16} className="text-[#9CA3AF]" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE ACCORDION ================= */
function MobileAccordion({
  title,
  open,
  onClick,
  items,
  base,
  closeMenu,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  items: string[];
  base: string;
  closeMenu: () => void;
}) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-4 py-3
          text-[#D1D5DB] hover:text-[#E5E7EB] transition"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="bg-white/5 px-4 py-3 space-y-2 text-sm">
          {items.map((item) => (
            <Link
              key={item}
              to={`${base}/${item.toLowerCase().replace(/\s/g, "-")}`}
              onClick={closeMenu}
              className="block text-[#D1D5DB] hover:text-[#E5E7EB] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

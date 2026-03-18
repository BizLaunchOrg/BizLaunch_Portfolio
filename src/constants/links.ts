// links.ts (or links.js)
import LOGO_IMG from "../assets/image.png"; // ✅ import first

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const CTA_LINK = { label: "Get Your FREE Website" };

export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Our Mission", href: "/OurMission" },
  { label: "Portfolio", href: "/work" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;

export { LOGO_IMG }; // ✅ export at the end
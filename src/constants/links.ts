// links.ts (or links.js)
import LOGO_IMG from "../assets/image.png"; // ✅ import first

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
   { label: "Mission", href: "/ourmission" },
  { label: "Pricing", href: "/pricing" },
  
] as const;

export const CTA_LINK = { label: "Get Your FREE Website" };

export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission", href: "/ourmission" },
  { label: "Portfolio", href: "/work" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

export { LOGO_IMG }; // ✅ export at the end
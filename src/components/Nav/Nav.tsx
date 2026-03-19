import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, LOGO_IMG } from "../../constants/links";
import { useTheme } from "../../contexts/ThemeContext";
import CTAButton from "../ctaButton/ctaButton";

/**
 * Navigation bar: logo, links, and CTA button.
 * Uses a "glass" style and supports mobile menu (hamburger).
 */
export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
      
        
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/ ">
            <div className="flex items-center gap-2">
              <img
                alt="BIZLAUNCH Logo"
                className="h-8 w-8 object-contain"
                src={LOGO_IMG}
              />

              <span className="font-extrabold text-xl hidden sm:inline-block tracking-tight text-primary dark:text-white">
                BIZLAUNCH
              </span>
            </div>{" "}
          </Link>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-primary dark:text-white"
              aria-label={isDark ? "Light mode" : "Dark mode"}
            >
              <span className="material-icons text-xl">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              type="button"
              className="p-2 text-primary dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>

          {/* Desktop nav links (hidden on mobile; show when menuOpen on mobile) */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-16 left-0 right-0 md:top-0 bg-white/90 dark:bg-primary/95 md:bg-transparent dark:md:bg-transparent py-4 md:py-0 px-4 md:px-0 items-center gap-6 md:gap-8 text-sm font-medium border-b md:border-b-0 border-slate-200 dark:border-slate-800`}
          >
            {NAV_LINKS.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors text-primary dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-accent transition-colors text-primary dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            {/* <a
            href={CTA_LINK.href}
            className="bg-accent text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
            onClick={() => setMenuOpen(false)}
          >
            {CTA_LINK.label}
          </a> */}

            <CTAButton />
            {/* Dark mode toggle (desktop only, inside nav for flex order) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden md:flex p-2 rounded-full text-primary dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <span className="material-icons">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </nav>
        </div>
    
    </header>
  );
}

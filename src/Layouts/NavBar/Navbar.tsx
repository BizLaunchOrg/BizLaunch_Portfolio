import { useEffect, useState } from "react";
import { logo } from "../../Constants/Contants";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* Logo + name → home */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img src={logo} alt="BizLaunch Logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold text-slate-900 dark:text-white">
            BizLaunch
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link to="/about" className="hover:text-slate-900 dark:hover:text-white">About</Link>
          <Link to="/OurMission" className="hover:text-slate-900 dark:hover:text-white">Mission</Link>
          <Link to="/work" className="hover:text-slate-900 dark:hover:text-white">Work</Link>
          <Link to="/pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</Link>
          <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle */}
          <Button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 bg-transparent rounded-full
            text-slate-700 hover:bg-slate-100
            dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {dark ? <IoMdMoon size={18} /> : <IoMdSunny size={18} />}
          </Button>

          {/* Desktop CTA */}
          <Link to="/get-started" className="hidden md:block">
            <Button className="bg-red-500 hover:bg-red-600 rounded-full px-5 py-2 text-sm font-semibold">
              Get Your FREE Website
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-slate-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-6 space-y-4">
          <Link to="/about" className="block">About</Link>
          <Link to="/OurMission" className="block">Mission</Link>
          <Link to="/work" className="block">Work</Link>
          <Link to="/pricing" className="block">Pricing</Link>
          <Link to="/contact" className="block">Contact</Link>

          <Link to="/get-started">
            <Button className="w-full bg-red-500 hover:bg-red-600 rounded-full py-2 text-sm font-semibold">
              Get Your FREE Website
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { logo } from "../../Constants/Contants";
import { Link } from "react-router-dom";
import ButtonGroup from "../../Components/ButtonGroup";
import Button from "../../Components/Button";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="w-full bg-white shadow-sm dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* give the logo a fixed height so it doesn't collapse to alt text when the
              image fails to load; w-auto keeps aspect ratio */}
          <img
            src={logo}
            alt="BizLaunch Logo"
            className="h-8 w-auto" // adjust to suit your design
          />
          <span className="text-lg font-semibold text-slate-900">
            BizLaunch
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/about" className="hover:text-slate-900 transition">
            About
          </Link>
          <Link to="/mission" className="hover:text-slate-900 transition">
            Mission
          </Link>
          <Link to="/work" className="hover:text-slate-900 transition">
            Work
          </Link>
          <Link to="/pricing" className="hover:text-slate-900 transition">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-slate-900 transition">
            Contact
          </Link>
        </div>
        <ButtonGroup spacing="space-x-4" className="items-center">
          <Button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 bg-transparent rounded-full
             text-slate-700 hover:bg-slate-100
             dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {dark ? (
              <IoMdMoon size={18} />
            ) : (
              <IoMdSunny size={18} />
            )}
          </Button>

          <Link to="/get-started">
            <Button className="bg-red-500 hover:bg-red-600 rounded-full px-5 py-2 text-sm font-semibold">
              Get Your FREE Website
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Navbar;

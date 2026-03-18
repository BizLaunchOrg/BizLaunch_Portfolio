import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { logo } from "../../Constants/Contants";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const NavBarLogin: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800 px-6 py-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="BizLaunch Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              BizLaunch
            </span>
          </Link>
        </div>

        {/* Hamburger - always visible */}
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenuSharp size={28} />}
        </Button>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-4">
          <ul className="flex flex-col gap-4 text-slate-800 dark:text-slate-200 font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarLogin;
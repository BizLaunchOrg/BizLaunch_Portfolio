import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { logo } from "../../Constants/Contants";
import { IoMenuSharp } from "react-icons/io5";

// simple sticky login navbar
const NavBarLogin: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
       <div className="flex items-center gap-5">
        <Link to="/">
          <img
            src={logo}
            alt="BizLaunch Logo"
            className="h-8 w-auto" 
          />
          </Link>
          <span className="text-lg font-semibold text-slate-900">
            BizLaunch
          </span>
        </div>

      <Button className="p-2 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
        <span className="material-icons-outlined text-slate-700 dark:text-slate-300">
          <IoMenuSharp size={30} />

        </span>
      </Button>
    </nav>
  );
};

export default NavBarLogin;

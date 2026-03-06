import React from "react";
import { Link } from "react-router";

const FooterLogin: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-slate-400 py-12 px-6">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center gap-2 text-white">
          <img
            alt="Logo"
            className="w-6 h-6 rounded"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANi_A19bkroELyJvRZRSW6Drda4qKCWiZgzmo4zh4dnToWqqycNRp3yrVEML4BsGxs5BpltE3gt-AMM5s-3440_4gKIUMI0si5UVwfMBLdOwMXDIXN9MzP3sVUKWg8oF_HIvzd4uJqenfrpBXh89mDWIVJXW3PCJc3iO59r95s8mDz19ezifukJ3IN6pzyNGyrfnncV0GLG5LeKPAJ9gjCPXwvfGZrLpbMwCdmKJNXobEYWeqhKLZGWZkaKpBDGTAMBlB9sU7mhQk"
          />
          <span className="font-display font-bold text-lg">BoldDigital</span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Services</h4>
            <p>Free Websites</p>
            <p>Paid Advertising</p>
            <p>Domain Setup</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Company</h4>
            <Link to="/about" className="hover:text-white transition-colors duration-200 text-sm">
            <p>About Us</p></Link>
            <Link to="/about" className="hover:text-white transition-colors duration-200 text-sm" >
            <p>Privacy Policy</p></Link>
            <Link to="/about" className="hover:text-white transition-colors duration-200 text-sm" >

            <p>Contact</p></Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <span>© {new Date().getFullYear()} BizLaunch. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="material-icons-outlined text-sm">facebook</span>
            <span className="material-icons-outlined text-sm">camera_alt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLogin;

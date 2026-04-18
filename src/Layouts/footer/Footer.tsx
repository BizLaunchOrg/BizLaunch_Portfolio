import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logo } from "../../Constants/Contants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Agency Info */}
        <div>
          {/* <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="bg-purple-500 w-8 h-8 flex items-center justify-center rounded-sm text-white font-bold">A</span>
            Agency Home
          </h2> */}
           <div className="flex items-center gap-5">
        <Link to="/">
          <img
            src={logo}
            alt="BizLaunch Logo"
            className="h-8 w-auto" 
          />
          </Link>
          <span className="text-lg font-semibold  text-white">
            BizLaunch
          </span>
        </div>
          <p className="mt-4 text-gray-400">
            Empowering small businesses since 2025. We believe in high-end design for everyone, regardless of their budget.
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

        {/* Links */}
           <div>
          <h3 className="text-white font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200 text-sm">About Us</Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-white transition-colors duration-200 text-sm">Recent Work</Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition-colors duration-200 text-sm">Pricing Details</Link>
            </li>
            <li>
              <Link to="/OurMission" className="hover:text-white transition-colors duration-200 text-sm">Our Mission</Link>
            </li>
          </ul>
        </div>
        {/* Legal */}
            <div>
          <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200 text-sm">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200 text-sm">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-white transition-colors duration-200 text-sm">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
     <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <span>© {new Date().getFullYear()} BizLaunch. All rights reserved.</span>
  <span>
    Designed with <span className="text-red-500">❤️</span> for conversions.
  </span>
</div>
    </footer>
  );
}
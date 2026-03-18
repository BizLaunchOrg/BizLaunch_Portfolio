import { Link } from "react-router-dom";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
 
  LOGO_IMG,
} from "../../Constants/links";

/**
 * Site footer: logo, tagline, social icons, quick links, and legal links.
 */
export function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
           <Link to="/">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img
                alt="BIZLAUNCH logo"
                className="h-8 "
                src={LOGO_IMG}
              />
             
              <span className="font-extrabold text-xl tracking-tight">
                BIZLAUNCH
              </span>
             
            </div>
            <p className="text-slate-400 max-w-sm">
              Building the future of small business online. High-converting
              websites without the high agency price tag.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <span className="material-icons text-xl">facebook</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <span className="material-icons text-xl">alternate_email</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <span className="material-icons text-xl">linked_camera</span>
              </a>
            </div>
          </div></Link>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2024 BIZLAUNCH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

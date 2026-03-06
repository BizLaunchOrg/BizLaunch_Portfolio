import { IoArrowForward } from "react-icons/io5";
import {
  MdWarning,
  MdCheckCircle,
  MdDevices,
  MdSpeed,
  MdAdsClick,
} from "react-icons/md";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import RecentWork from "./RecentWork";
import SaveSection from "./SaveSection";
import ContactSection from "./ContactSection";
import HowItWorksSection from "./HowItWorksSection";
import StatsSection from "./StatsSection";
import FAQSection from "./FAQSection";
import { ArrowForward, ShoppingCart } from "@mui/icons-material";

export default function Landing() {
  return (
    <section className="bg-gray-50  pb-20">
      <div className=" px-4 md:py-24 overflow-hidden" id="home">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-200 text-red-500 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Limited Time Offer
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Get a <span className="text-gray-900 bg-red-100">FREE</span>{" "}
              business website that actually brings customers
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop paying thousands for design. We build your high-converting
              site for free. You only pay for your domain. Optional paid ads
              available when you're ready to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href="#contact"
                className="bg-gray-900 dark:bg-white dark:text-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Start for FREE <ArrowForward />
              </Button>
              <Button
                href="#how-it-works"
                className="border-2 border-slate-200 dark:border-white bg-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-center"
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 scale-110 md:scale-100">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-xs font-bold uppercase text-slate-400">
                    Merchant Dashboard
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <p className="text-[10px] text-slate-500 mb-1">
                      Total Revenue
                    </p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      $12,482.00
                    </p>
                    <p className="text-[10px] text-emerald-500 font-bold">
                      +14% vs last mo
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                    <p className="text-[10px] text-slate-500 mb-1">
                      Active Orders
                    </p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      48
                    </p>
                    <p className="text-[10px] text-red-500 font-bold">
                      8 pending
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-32 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-end gap-1 p-2">
                  <div className="flex-1 bg-red-300 h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-red-400 h-3/4 rounded-t-sm"></div>
                  <div className="flex-1 bg-red-500 h-2/3 rounded-t-sm"></div>
                  <div className="flex-1 bg-red-400 h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-red-300 h-full rounded-t-sm"></div>
                  <div className="flex-1 bg-red-600 h-4/5 rounded-t-sm"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 w-48 md:w-64">
              <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 ring-8 ring-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <ShoppingCart className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-70">Sales Alert</p>
                    <p className="text-xs font-bold leading-tight">
                      New Order Received!
                    </p>
                    <p className="text-[10px] text-red-500 font-bold">
                      +$149.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* problem/solution section */}
      <div className="max-w-5xl mx-auto px-4 text-center mt-24">
        <h2 className="font-display text-3xl lg:text-5xl font-bold mb-8">
          The Internet shouldn't be a luxury.
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          In January 2025, we realized that small businesses were being left
          behind. Agencies charge thousands for basic sites, and "easy" builders
          take hours you don't have. We're changing the game.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <MdWarning className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3">The Problem</h3>
            <p className="text-slate-600 dark:text-slate-400">
              High agency costs ($3k+) and complex builders prevent local
              businesses from going digital, costing them thousands in lost
              sales every month.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900 text-white">
            <MdCheckCircle className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3">Our Solution</h3>
            <p className="text-slate-300">
              We build your site{" "}
              <span className="text-white font-bold">Free of Charge</span>. You
              get a world-class, conversion-focused website. We get to fulfill
              our mission of digital equity.
            </p>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="w-full bg-slate-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Everything you need.{" "}
              <span className="text-red-600">Zero Cost.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Premium features that other agencies charge extra for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                <MdDevices size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile-First Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Perfectly optimized for every screen, ensuring you never miss a
                customer on the go.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                <MdSpeed size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Blazing Fast Speed</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Built with modern technology to ensure instant load times and
                better Google rankings.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                <MdAdsClick size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Conversion Focus</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Strategically placed CTAs and copywriting designed to turn
                visitors into paying customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pricing comparison section */}
      <div className="max-w-5xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Light Card */}
          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">You Pay:</h3>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold ">$15</span>
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                per month
                <br />
                for domain/hosting
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                Your Custom .com Domain
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                Ultra-fast Cloud Hosting
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                SSL Security Certificate
              </li>
            </ul>
          </div>

          {/* Dark Card */}
          <div className="p-8 bg-gray-900 text-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">You DON'T Pay:</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-extrabold text-red-500">
                $0.00
              </span>
              <span className="text-sm opacity-60 uppercase tracking-wide">
                Design & Development
              </span>
            </div>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-center gap-2">
                <span className="material-icons text-red-500">close</span>
                <span className="line-through">Web Design Fees ($2,500+)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-red-500">close</span>
                <span className="line-through">Backend Coding ($3,000+)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-icons text-red-500">close</span>
                <span className="line-through">CMS Management ($500+)</span>
              </li>
            </ul>

            <Button className="w-full mt-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Lock in your $0 Build
            </Button>
          </div>
        </div>
      </div>
      <RecentWork />

      {/* call‑to‑action save section */}
      <SaveSection />
      {/* how it works timeline */}
      <HowItWorksSection />

      {/* FAQ section */}
      <FAQSection />

      {/* contact form section */}
      <ContactSection />
    </section>
  );
}

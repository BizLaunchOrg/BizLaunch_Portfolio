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

export default function Landing() {
  return (
    <section className="bg-gray-50  pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            ● LIMITED TIME OFFER
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Get a{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FREE
            </span>{" "}
            business website that actually brings customers
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-lg text-lg">
            Stop paying thousands for design. We build your high-converting site
            for free. You only pay for your domain. Optional paid ads available
            when you're ready to scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="flex items-center text-white font-bold bg-gray-900 gap-2 px-6 py-3 text-lg hover:bg-gray-800">
              Start for FREE
              <IoArrowForward size={18} />
            </Button>

            <Button className="px-6 py-3 text-lg bg-white font-bold text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400">
              See How It Works
            </Button>
          </div>
        </div>

        {/* RIGHT DASHBOARD MOCKUP */}
        <div className="relative">
          {/* Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <p className="text-xs text-gray-400 font-bold mb-4">
              MERCHANT DASHBOARD
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Total Revenue</p>
                <p className="text-xl font-bold">$12,482.00</p>
                <p className="text-green-500 text-xs">+16% last mo</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xs text-gray-500">Active Orders</p>
                <p className="text-xl font-bold text-red-500">48</p>
                <p className="text-red-400 text-xs">8 pending</p>
              </div>
            </div>

            {/* Chart Bars */}
            <div className="flex items-end gap-2 h-24 bg-gray-100 rounded-lg">
              <div className="bg-red-200 w-20 h-16 rounded"></div>
              <div className="bg-red-300 w-20 h-20 rounded"></div>
              <div className="bg-red-400 w-20 h-16 rounded"></div>
              <div className="bg-red-300 w-20 h-12 rounded"></div>
              <div className="bg-red-500 w-20 h-24 rounded"></div>
              <div className="bg-red-400 w-20 h-16 rounded"></div>
            </div>
          </div>

          {/* Floating Notification */}
          <div className="absolute -bottom-6 left-6 bg-gray-900 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
            <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              ✓
            </div>

            <div>
              <p className="text-xs text-gray-400">Sales Alert</p>
              <p className="text-sm font-semibold">New Order Received!</p>
              <p className="text-xs text-red-400">#F94K2D</p>
            </div>
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

      {/* promo work section */}
      {/* imported below */}

      <RecentWork />

      {/* pricing comparison section */}
      {/* <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
          <div className="p-6 bg-slate-50 dark:bg-slate-900/40">
            <h3 className="text-2xl font-extrabold mb-6">You Pay:</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-black text-primary dark:text-white">
                $15
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">
                per month<br />for domain/hosting
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">check_circle</span> Your Custom .com Domain
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">check_circle</span> Ultra-fast Cloud Hosting
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">check_circle</span> SSL Security Certificate
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900 text-white">
            <h3 className="text-2xl font-extrabold mb-4">You DON'T Pay:</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-black text-accent">$0.00</div>
              <div className="text-sm opacity-60 uppercase tracking-widest">
                Design &amp;<br />Development
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span> <span className="line-through">Web Design Fees ($2,500+)</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span> <span className="line-through">Backend Coding ($3,000+)</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span> <span className="line-through">CMS Management ($500+)</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-white text-primary py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">Lock in your $0 Build</button>
          </div>
        </div>
      </div> */}
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
            {/* <button className="w-full mt-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
        Lock in your $0 Build
      </button> */}
            <Button className="w-full mt-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Lock in your $0 Build
            </Button>
          </div>
        </div>
      </div>

      {/* call‑to‑action save section */}
      <SaveSection />

      {/* contact form section */}
      <ContactSection />
    </section>
  );
}

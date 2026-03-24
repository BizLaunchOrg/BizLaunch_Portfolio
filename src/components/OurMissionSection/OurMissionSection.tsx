import { MdVisibility, MdRocketLaunch, MdCheckCircle, MdBolt, MdPlayArrow, MdPayments, MdSpeed, MdTrendingUp, MdSupportAgent } from "react-icons/md";
import { ContactSection } from "../ContactSection/ContactSection";
import { Link } from "react-router-dom";
import ContactUs from "../../pages/ContactUs/ContactUs";

const OurMissionSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full"></div>
          <div className="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              Our Mission
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
            Every business deserves a{" "}
            <span className="text-red-500">digital heartbeat.</span>
          </h1>
          <p className="text-gray-600 dark:text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            We're on a mission to democratize the web by offering free
            high-performance website builds for small businesses.
          </p>
          <div className="mt-12 mb-6 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              to="/vision"
              className="px-6 sm:px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-600/25"
            >
              Join Our Journey
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-4 glass text-gray-900 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="py-24 px-6 relative" id="vision">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 sm:mb-8">
              <MdVisibility className="text-gray-900 text-2xl sm:text-3xl" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              A future where small businesses compete on quality of service, not
              the size of their marketing budget. We envision a web where
              technical barriers are completely erased, allowing every
              entrepreneur to thrive online.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 sm:mb-8">
              <MdRocketLaunch className="text-gray-900 text-2xl sm:text-3xl" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              To build 10,000 professional websites for local businesses by
              2026. By leveraging cutting-edge AI, we reduce overhead costs and
              pass those savings—and free services—directly to the backbone of
              our economy.
            </p>
          </div>
        </div>
      </div>

      {/* AI Era Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text content */}
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                Websites should be <span className="text-red-500 italic">easy</span> in the AI era.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">
                The complexity of the past shouldn't dictate the prices of
                today. We've automated the heavy lifting of development so our
                experts can focus on what matters: your brand's unique story and
                growth.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MdCheckCircle className="text-green-500 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl">AI-Powered Efficiency</h4>
                    <p className="text-slate-500 text-sm sm:text-base">
                      Automated coding standards that ensure peak performance
                      without manual bloat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MdBolt className="text-gray-900 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl">Instant Deployments</h4>
                    <p className="text-slate-500 text-sm sm:text-base">
                      From concept to live site in days, not months. We value
                      your time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image / Video */}
            <div className="lg:w-1/2 relative w-full max-w-md sm:max-w-lg lg:max-w-full mx-auto">
              <div className="aspect-square bg-gradient-to-tr from-red-500 to-red-400 rounded-3xl p-1 shadow-2xl overflow-hidden group">
                <img
                  alt="Modern Workspace"
                  className="w-full h-full object-cover rounded-[1.4rem] opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpzDounnOlZZU4VsKUIzVjmUCzwRZGCP22dS0FcFQ6__I-K22Xoy2cOa_-BmXzylWfxxx9dr_bF7R_lh7GvgnL8gFbvDIFB3KL0aO_h2ExOLKJy1jSpUd00o-WBad8wwa8a5B6X9WKP5z3JmKBGDUG3st1EI3iI_JQBMeDvcXTQPYdBR08V7s8G6QytM6BsJ9PU0u-YDc6WflcP3pkRhP99ufyrUEnio16CitCWUSxdkXZ1VDwWhQfZBauovv-qxKo7ml7DphCo3k"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass p-4 sm:p-6 rounded-2xl flex items-center gap-4 text-white">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                      <MdPlayArrow className="text-white text-2xl sm:text-3xl" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium">Watch how we build</p>
                      <p className="text-xs sm:text-sm opacity-60">2 min product tour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Core Principles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Foundational values that drive every pixel we push and every line of code we write.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fair Pricing */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdPayments className="text-blue-500 mb-4 sm:mb-6 text-3xl sm:text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">Fair Pricing</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              No hidden fees, no predatory contracts. We offer free builds to help you get started.
            </p>
          </div>

          {/* Extreme Speed */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdSpeed className="text-amber-500 mb-4 sm:mb-6 text-3xl sm:text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">Extreme Speed</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              99+ Google PageSpeed scores. We build for speed because visitors don't wait.
            </p>
          </div>

          {/* Conversion */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdTrendingUp className="text-purple-500 mb-4 sm:mb-6 text-3xl sm:text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">Conversion</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Websites that don't just look pretty, they turn visitors into paying customers.
            </p>
          </div>

          {/* Total Support */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdSupportAgent className="text-green-500 mb-4 sm:mb-6 text-3xl sm:text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3">Total Support</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Human-to-human support. We're your partners in digital growth long term.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
        <ContactUs/>
    </>
  );
};

export default OurMissionSection;
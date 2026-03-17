import { MdVisibility, MdRocketLaunch } from "react-icons/md";
import { MdCheckCircle, MdBolt, MdPlayArrow } from "react-icons/md";
import {
  MdPayments,
  MdSpeed,
  MdTrendingUp,
  MdSupportAgent,
} from "react-icons/md";
// import { MdEmail, MdLocationOn } from "react-icons/md";
import { ContactSection } from "../ContactSection/ContactSection";
import { Link } from "react-router-dom";

const OurMissionSection = () => {
  return (
    <>
      <div className="relative min-h-[80vh] flex items-center justify-center pt-20  overflow-hidden hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%]  rounded-full"></div>
          <div className="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              Our Mission
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
            Every business deserves a{" "}
            <span className="text-red-500 ">digital heartbeat.</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            We're on a mission to democratize the web by offering free
            high-performance website builds for small businesses.
          </p>
          <div className="mt-12 mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/vision"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-600/25"
            >
              Join Our Journey
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 glass text-gray-900 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="py-24 px-6 relative" id="vision">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800  rounded-xl flex items-center justify-center mb-8">
              <MdVisibility className="text-gray-900 text-3xl" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              A future where small businesses compete on quality of service, not
              the size of their marketing budget. We envision a web where
              technical barriers are completely erased, allowing every
              entrepreneur to thrive online.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-slate-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-8">
              <MdRocketLaunch className="text-gray-900 text-3xl" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              To build 10,000 professional websites for local businesses by
              2026. By leveraging cutting-edge AI, we reduce overhead costs and
              pass those savings—and free services—directly to the backbone of
              our economy.
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text content */}
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Websites should be{" "}
                <span className="text-red-500 italic">easy</span> in the AI era.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                The complexity of the past shouldn't dictate the prices of
                today. We've automated the heavy lifting of development so our
                experts can focus on what matters: your brand's unique story and
                growth.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MdCheckCircle className="text-green-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">AI-Powered Efficiency</h4>
                    <p className="text-slate-500">
                      Automated coding standards that ensure peak performance
                      without manual bloat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MdBolt className="text-gray-900 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Instant Deployments</h4>
                    <p className="text-slate-500">
                      From concept to live site in days, not months. We value
                      your time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image / Video card */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-gradient-to-tr from-red-500 to-red-400 rounded-3xl p-1 shadow-2xl overflow-hidden group">
                <img
                  alt="Modern Workspace"
                  className="w-full h-full object-cover rounded-[1.4rem] opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpzDounnOlZZU4VsKUIzVjmUCzwRZGCP22dS0FcFQ6__I-K22Xoy2cOa_-BmXzylWfxxx9dr_bF7R_lh7GvgnL8gFbvDIFB3KL0aO_h2ExOLKJy1jSpUd00o-WBad8wwa8a5B6X9WKP5z3JmKBGDUG3st1EI3iI_JQBMeDvcXTQPYdBR08V7s8G6QytM6BsJ9PU0u-YDc6WflcP3pkRhP99ufyrUEnio16CitCWUSxdkXZ1VDwWhQfZBauovv-qxKo7ml7DphCo3k"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass p-6 rounded-2xl flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                      <MdPlayArrow className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Watch how we build</p>
                      <p className="text-xs opacity-60">2 min product tour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 px-6">
        {/* Section header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Our Core Principles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Foundational values that drive every pixel we push and every line of
            code we write.
          </p>
        </div>

        {/* Principles grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fair Pricing */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdPayments className="text-blue-500 mb-6 text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-xl mb-3">
              Fair Pricing
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              No hidden fees, no predatory contracts. We offer free builds to
              help you get started.
            </p>
          </div>

          {/* Extreme Speed */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdSpeed className="text-amber-500 mb-6 text-4xl  transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-xl mb-3">
              Extreme Speed
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              99+ Google PageSpeed scores. We build for speed because visitors
              don't wait.
            </p>
          </div>

          {/* Conversion */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdTrendingUp className="text-purple-500 mb-6 text-4xl transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-xl mb-3">Conversion</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Websites that don't just look pretty, they turn visitors into
              paying customers.
            </p>
          </div>

          {/* Total Support */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
            <MdSupportAgent className="text-green-500 mb-6 text-4xl  transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-display font-bold text-xl mb-3">
              Total Support
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Human-to-human support. We're your partners in digital growth long
              term.
            </p>
          </div>
        </div>
      </div>
      {/* <footer className="bg-primary text-white py-24 px-6 overflow-hidden relative" id="contact">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
         
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              Let's build something <span className="text-blue-400">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Ready to take your business online? Fill out the form and our mission team will get in touch within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MdEmail className="text-blue-400 text-2xl" />
                </div>
                <span className="text-slate-300">hello@brandly-mission.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MdLocationOn className="text-blue-400 text-2xl" />
                </div>
                <span className="text-slate-300">Tech Hub South, Austin TX</span>
              </div>
            </div>

           
            <div className="mt-12 flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" href="#" aria-label="Facebook">
                <img alt="Facebook" className="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8dFYjqxR-TFY-Sce8HcXNebTQ2g0sPeE12L8OBhlM8POxLLqgyQ1gqr5BZmEVJpYMlGiZebdo6xErZagoGZW9V6gthkOBuIDp9bFXNtMmnMnMPmMOZhstOTyKz3NAEbwphb1wqDZNnh1dRwjwzs3IZfjQn17h4pmuBgPFGsrL9XZY5xpbS6aomIDOVGOz739yG643X8veJyHrz2u9UHZ-PNn4CrRV3ICZc8qaxGz7rs9quCx8-eLMw-94Qnx8m7On43Gc6fGfFgQ" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" href="#" aria-label="Twitter">
                <img alt="Twitter" className="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpHOCzSlbxJGszPKlBaSFSgjdUguXHlRcdZDRJ_hf9AwA4ATn846YoFL6E19NSldJ5G_H_RZDqhI99JleF7oC-KgFT_EEN6bExN4ufefNFXn-WxmkERBT4sJk2P9zqUUD1L_-OSGIFDbCq5CjGciIw58XiQO00Fboxp2hlLcDlYazalcmyOj-IP_LSu6cAYr4O2SnDqHqLotkdDG-FqC0hOyX4iLebWCNqa5XZDeLBGgbP1A0zSnVK9EWPLMVZJMgVQ2oKPPCukRg" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors" href="#" aria-label="Instagram">
                <img alt="Instagram" className="w-5 h-5 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkGCHeqwE00b1l6VyMIeOzBxMQ097IsHisL1jYFd52qe8Z-o3gj7PmqEV6EoHftIYcNeCJ59lqScQ7wuM47hzy9yP5dvPRMbJ5CFNEazYWhI6k2QPtYhksAtdfmdhsorub27QlQE8KhbwlMF_P7vqJ4waPZJVD2K275b8JVe3rbG6BdEzznBdtIb3jlWj-POQhPUb_thFECWQIH4C3FCvj2kH2xVS0WV4kbTAUXsu-JUX56tI0Z9y_tm6mW4HZ8A3cnz11vBzrXoM" />
              </a>
            </div>
          </div>

          
          <div className="glass p-8 md:p-10 rounded-3xl shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Full Name</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <select className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none">
                  <option>Free Website Inquiry</option>
                  <option>Premium Growth Plan</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea className="w-full bg-white/5 border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Tell us about your business..." rows="4"></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20" type="submit">
                Send Message
              </button>
            </form>
          </div>

        </div>

        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Brandly Digital Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer> */}
      <ContactSection />
    </>
  );
};

export default OurMissionSection;

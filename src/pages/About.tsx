import React from "react";
import NavBarLogin from "../Layouts/NavBar/NavBarLogin";
import FooterLogin from "../Layouts/footer/FooterLogin";


const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* account for fixed nav */}
      <NavBarLogin />

      <header className="relative px-6 py-20 overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute inset-0 navy-pattern"></div>
        <div className="relative z-10 max-w-md mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-primary dark:text-white mb-6">
            Built to make every business{" "}
            <span className="text-accent">visible</span> online
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Democratizing the digital landscape by removing the high cost of
            entry.
          </p>
        </div>
      </header>

      {/* you can add additional about content below */}

      {/* about origin section */}
      <section className="px-6 py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-md mx-auto">
          <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-500 mb-4 tracking-widest uppercase">
            Our Origin
          </div>
          <h2 className="font-display text-3xl font-bold mb-6">
            Founded Jan 2025
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              In an era where AI is rapidly transforming industries, small
              businesses risk being left behind. We saw a widening gap between
              local entrepreneurs and global digital giants.
            </p>
            <p>
              Our mission was born out of a simple realization: the barrier to
              entry shouldn't be the website itself. Every local plumber,
              florist, and cafe deserves a premium digital storefront.
            </p>
            <p>
              We leverage modern technology to automate the heavy lifting,
              allowing us to build world-class sites for free, focusing our
              value on the results that follow.
            </p>
          </div>
        </div>
      </section>

      {/* core values section */}
      <section className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <span className="material-icons-outlined text-accent mb-4 text-3xl">
                auto_awesome
              </span>
              <h3 className="font-display font-bold text-lg mb-2">
                Simplicity
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Complex tech made easy for business owners who have a business
                to run.
              </p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <span className="material-icons-outlined text-accent mb-4 text-3xl">
                balance
              </span>
              <h3 className="font-display font-bold text-lg mb-2">Fairness</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Honest pricing models where you only pay for what actually costs
                us money.
              </p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <span className="material-icons-outlined text-accent mb-4 text-3xl">
                bolt
              </span>
              <h3 className="font-display font-bold text-lg mb-2">Speed</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Getting you online in days, not months, because momentum is
                everything.
              </p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
              <span className="material-icons-outlined text-accent mb-4 text-3xl">
                trending_up
              </span>
              <h3 className="font-display font-bold text-lg mb-2">Growth</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Our success is tied to yours. We thrive when your traffic and
                sales increase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why-free section */}
      <section className="px-6 py-20 relative bg-slate-50 dark:bg-background-dark">
        <div className="absolute inset-0 navy-pattern opacity-[0.03]"></div>
        <div className="max-w-md mx-auto relative z-10">
          <div className="glass border border-white/40 dark:border-slate-700/50 p-8 rounded-4xl shadow-xl">
            <h2 className="font-display text-3xl font-bold mb-6 text-primary dark:text-white">
              Why Free?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p className="font-medium italic">
                "The biggest barrier to growth is the first step."
              </p>
              <p>
                Traditional agencies charge thousands upfront for a website. We
                believe that's an outdated model that hurts small businesses.
              </p>
              <p>
                By offering the website for free, we remove the risk. We only
                charge for the domain name and offer optional paid advertising
                services once you're ready to scale. Our strategy is to build a
                long-term partnership, not just a one-time invoice.
              </p>
              <div className="pt-4 flex items-center gap-2 text-accent font-bold">
                <span>Let's start your journey</span>
                <span className="material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact form section */}
      <section className="px-6 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8">Contact Us</h2>
          <form
            action="#"
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-accent focus:border-accent"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-accent focus:border-accent"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-accent focus:border-accent"
                placeholder="Tell us about your business..."
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-primary dark:bg-accent text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <FooterLogin/>
    </div>
  );
};

export default About;

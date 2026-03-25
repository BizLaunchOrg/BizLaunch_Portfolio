/**
 * "Why are we giving away websites?" — Old Way vs Agency Way comparison cards.
 */
export function WhySection() {
  return (
   <section className="py-24 bg-white dark:bg-background-dark" id="about">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="font-display text-3xl lg:text-5xl font-bold mb-8">
      The Internet shouldn't be a luxury.
    </h2>

    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
      In January 2025, we realized that small businesses were being left behind.
      Agencies charge thousands for basic sites, and "easy" builders take hours
      you don't have. We're changing the game.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left">
      
      {/* Problem Card */}
      <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
        <span className="material-icons text-accent text-4xl mb-4">
          warning
        </span>
        <h3 className="text-xl font-bold mb-3">The Problem</h3>
        <p className="text-slate-600 dark:text-slate-400">
          High agency costs (#3k+) and complex builders prevent local businesses
          from going digital, costing them thousands in lost sales every month.
        </p>
      </div>

      {/* Solution Card */}
      <div className="p-8 rounded-2xl bg-primary text-white">
        <span className="material-icons text-green-400 text-4xl mb-4">
          check_circle
        </span>
        <h3 className="text-xl font-bold mb-3">Our Solution</h3>
        <p className="text-slate-300">
          We build your site{" "}
          <span className="text-white font-bold">Free of Charge</span>. You get a
          world-class, conversion-focused website. We get to fulfill our mission
          of digital equity.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}

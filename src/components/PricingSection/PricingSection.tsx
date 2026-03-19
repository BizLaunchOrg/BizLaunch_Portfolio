/**
 * Pricing section: "You Pay" vs "You DON'T Pay" split card.
 */
export function PricingSection() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="pricing">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="font-display text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
        The Absolute Honest Pricing
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
        No hidden fees. No bait and switch. Just simplicity.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {/* Free Build */}
      <div className="relative p-1 rounded-2xl bg-gradient-to-br from-accent to-red-400">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[1rem] flex flex-col h-full">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-6 uppercase tracking-wider">
            Free Build
          </span>
          <h3 className="text-2xl font-bold mb-2">Web Design &amp; Build</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl sm:text-5xl font-extrabold">#0</span>
            <span className="text-slate-400 text-sm sm:text-base">/ forever</span>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 flex-grow">
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-green-500 text-sm">check</span>
              Custom Professional Design
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-green-500 text-sm">check</span>
              Conversion Optimization
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-green-500 text-sm">check</span>
              SEO Setup
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-green-500 text-sm">check</span>
              Content Upload
            </li>
          </ul>
        </div>
      </div>

      {/* Domain & Hosting */}
      <div className="relative p-1 rounded-2xl">
        <div className="bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-6 sm:p-8 rounded-[1rem] flex flex-col h-full">
          <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold w-fit mb-6 uppercase tracking-wider">
            Domain &amp; Hosting
          </span>
          <h3 className="text-2xl font-bold mb-2">Ongoing Infrastructure</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-400">
              Cost varies
            </span>
          </div>
          <ul className="space-y-3 sm:space-y-4 mb-6 flex-grow">
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-slate-400 text-sm">public</span>
              Domain (.com/.net/etc)
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-slate-400 text-sm">dns</span>
              Secure Cloud Hosting
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <span className="material-icons text-slate-400 text-sm">lock</span>
              SSL Security Certificate
            </li>
          </ul>
          <p className="text-sm sm:text-base text-slate-500 italic mt-auto">
            Estimated at #15-#25/mo via standard providers.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

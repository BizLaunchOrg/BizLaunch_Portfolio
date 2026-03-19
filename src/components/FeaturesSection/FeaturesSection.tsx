const FEATURES = [
  {
    icon: "smartphone",
    title: "Mobile-First",
    description:
      "Optimized for iOS & Android. 80% of your customers are on mobile.",
  },
  {
    icon: "search",
    title: "SEO Ready",
    description:
      "Built-in technical SEO to help you rank on Google from day one.",
  },
  {
    icon: "speed",
    title: "Lightning Fast",
    description:
      "Under 1s load times. We prioritize performance for conversions.",
  },
  {
    icon: "support_agent",
    title: "Maintenance",
    description:
      "We keep your site secure and updated. No tech headaches.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Everything you need.{" "}
          <span className="text-red-600">Zero Cost.</span>
        </h2>
        <p className="text-md sm:text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Premium features that other agencies charge extra for.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-start"
            >
              <span className="material-icons text-accent text-4xl sm:text-5xl mb-4">
                {feature.icon}
              </span>
              <h4 className="font-bold text-lg sm:text-xl mb-2">{feature.title}</h4>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
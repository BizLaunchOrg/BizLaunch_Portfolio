/**
 * Four feature cards: Mobile-First, SEO Ready, Lightning Fast, Maintenance.
 */
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
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="material-icons text-accent text-3xl mb-4">
                {feature.icon}
              </span>
              <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

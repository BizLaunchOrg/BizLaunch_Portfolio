/**
 * Stats strip: 250+ Sites, 42% Conversion, 12M+ Traffic, $0 Upfront.
 */
const STATS = [
  { value: "250+", label: "Sites Launched" },
  { value: "42%", label: "Avg Conversion", accent: true },
  { value: "12M+", label: "Traffic Driven" },
  { value: "$0", label: "Upfront Costs" },
];

export function StatsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl text-center border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <p
              className={`text-4xl md:text-5xl font-black mb-2 ${
                stat.accent ? "text-accent" : "text-primary dark:text-white"
              }`}
            >
              {stat.value}
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

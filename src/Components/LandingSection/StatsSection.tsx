import React from "react";

const stats = [
  {
    value: "250+",
    label: "Sites Launched",
    colorClass: "text-primary dark:text-white",
  },
  { value: "42%", label: "Avg Conversion", colorClass: "text-accent" },
  {
    value: "12M+",
    label: "Traffic Driven",
    colorClass: "text-primary dark:text-white",
  },
  {
    value: "$0",
    label: "Upfront Costs",
    colorClass: "text-primary dark:text-white",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl text-center border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <p
              className={`text-4xl md:text-5xl font-black mb-2 ${s.colorClass}`}
            >
              {s.value}
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

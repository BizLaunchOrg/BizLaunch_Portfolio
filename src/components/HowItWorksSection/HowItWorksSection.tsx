/**
 * "Our 6-Step Rocket Launch" — vertical timeline of steps.
 */
const STEPS = [
  {
    number: 1,
    title: "Strategy Call",
    description:
      "We hop on a 15-min call to understand your business goals and audience.",
  },
  {
    number: 2,
    title: "Domain Selection",
    description: "We help you pick the perfect domain name for your brand.",
  },
  {
    number: 3,
    title: "Design Sprint",
    description:
      "Our designers build your custom, mobile-responsive layout from scratch.",
  },
  {
    number: 4,
    title: "SEO Optimization",
    description:
      "We optimize every page for the keywords your customers are searching for.",
  },
  {
    number: 5,
    title: "Final Review",
    description:
      "You review the site and we make any necessary tweaks to perfection.",
  },
  {
    number: 6,
    title: "Go Live!",
    description:
      "Your site is launched. Now let's start getting those customers.",
    isLast: true,
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50"
      id="how-it-works"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-primary dark:text-white">
          Our 6-Step Rocket Launch
        </h2>
        <div className="space-y-12">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-6 relative">
              {/* Vertical line (hidden on last step) */}
              {!step.isLast && (
                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -ml-[1px]" />
              )}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10 shrink-0 border-4 border-white dark:border-slate-900 ${
                  step.isLast
                    ? "bg-accent text-white"
                    : "bg-primary text-white"
                }`}
              >
                {step.number}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

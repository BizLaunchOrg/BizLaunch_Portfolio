import React from "react";

const steps = [
  {
    title: "Strategy Call",
    description:
      "We hop on a 15-min call to understand your business goals and audience.",
  },
  {
    title: "Domain Selection",
    description: "We help you pick the perfect domain name for your brand.",
  },
  {
    title: "Design Sprint",
    description:
      "Our designers build your custom, mobile-responsive layout from scratch.",
  },
  {
    title: "SEO Optimization",
    description:
      "We optimize every page for the keywords your customers are searching for.",
  },
  {
    title: "Final Review",
    description:
      "You review the site and we make any necessary tweaks to perfection.",
  },
  {
    title: "Go Live!",
    description:
      "Your site is launched. Now let's start getting those customers.",
    accent: true,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-primary dark:text-white">
          Our 6-Step Rocket Launch
        </h2>
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 relative">
              {idx < steps.length - 1 && (
                <div className="absolute left-6 top-10 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -ml-px"></div>
              )}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10 shrink-0 border-4 border-white dark:border-slate-900 ${
                  step.accent ? "bg-accent" : "bg-primary"
                } text-white`}
              >
                {idx + 1}
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
};

export default HowItWorksSection;

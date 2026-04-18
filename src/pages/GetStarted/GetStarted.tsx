import { ApplicationFormCard } from "../../components/ApplicationForm/ApplicationFormCard";

export function GetStarted() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark min-h-screen pb-16">
      <section className="pt-28 pb-8 px-4 sm:px-6 text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-3">
          Free website program
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
          Get your free website
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Apply in a few minutes. This is the same secure Formspree application we use on the
          homepage—your answers go directly to our team.
        </p>
      </section>

      <ApplicationFormCard
        source="get-started-page"
        title="Start your application"
        description="We select five businesses each month to partner with. Share your business details and we’ll follow up if it’s a fit."
        className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-background-dark"
      />
    </div>
  );
}

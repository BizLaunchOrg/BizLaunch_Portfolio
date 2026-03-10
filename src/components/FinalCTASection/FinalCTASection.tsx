/**
 * Final call-to-action section appearing near the bottom of the Home page.
 * Encourages users to claim their free website.
 */
export function FinalCTASection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto bg-primary dark:bg-slate-900 rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center text-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />

        <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Let&apos;s put your business online — for{" "}
          <span className="text-accent underline">FREE</span>.
        </h2>

        <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Limited slots available for February 2025 builds. Reserve yours today
          and start converting visitors into fans.
        </p>

        <a
          href="#contact"
          className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl font-extrabold text-xl relative z-10 transition-transform hover:scale-105 inline-block"
        >
          Claim Your Free Website
        </a>
      </div>
    </section>
  );
}


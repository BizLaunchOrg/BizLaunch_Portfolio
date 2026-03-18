/**
 * Pricing section: "You Pay" vs "You DON'T Pay" split card.
 */
export function PricingSection() {
  return (
    <section className="py-24 px-4" id="pricing">
       <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
             The Absolute Honest Pricing
              
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
             No hidden fees. No bait and switch. Just simplicity.
            </p>
          </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
         
        <div className="grid md:grid-cols-2 ">
          {/* You Pay */}
          <div className="p-10 bg-slate-50 dark:bg-slate-900/40">
            <h3 className="text-2xl font-extrabold mb-6">You Pay:</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-black text-primary dark:text-white">
                #15
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">
                per month
                <br />
                for domain/hosting
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                Your Custom .com Domain
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                Ultra-fast Cloud Hosting
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons text-emerald-500">
                  check_circle
                </span>
                SSL Security Certificate
              </li>
            </ul>
          </div>

          {/* You DON'T Pay */}
          <div className="p-10 bg-primary text-white">
            <h3 className="text-2xl font-extrabold mb-6">You DON&apos;T Pay:</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl font-black text-accent">#0.00</div>
              <div className="text-sm opacity-60 uppercase tracking-widest">
                Design &
                <br />
                Development
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span>
                <span className="line-through">Web Design Fees (#2,500+)</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span>
                <span className="line-through">Backend Coding (#3,000+)</span>
              </li>
              <li className="flex items-center gap-3 opacity-90">
                <span className="material-icons text-accent">close</span>
                <span className="line-through">CMS Management (#500+)</span>
              </li>
            </ul>
            <button
              type="button"
              className="w-full mt-10 bg-white text-primary py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
            >
              Lock in your #0 Build
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

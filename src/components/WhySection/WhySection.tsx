/**
 * "Why are we giving away websites?" — Old Way vs Agency Way comparison cards.
 */
export function WhySection() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white">
            Why are we giving away websites?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Most agencies charge $5,000+ upfront. We believe in your business
            growth. If you succeed, we succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-accent rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons">money_off</span>
            </div>
            <h3 className="text-xl font-bold mb-4">The Old Way</h3>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-icons text-accent text-sm mt-1">
                  close
                </span>
                Massive $5k-$10k upfront setup fees
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-accent text-sm mt-1">
                  close
                </span>
                Months of development back-and-forth
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-accent text-sm mt-1">
                  close
                </span>
                Expensive maintenance retainers
              </li>
            </ul>
          </div>

          {/* The Agency Way */}
          <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-accent px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Recommended
              </span>
            </div>
            <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold mb-4">The Agency Way</h3>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-3">
                <span className="material-icons text-emerald-400 text-sm mt-1">
                  check
                </span>
                $0 Setup & Design Fees. Always.
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-emerald-400 text-sm mt-1">
                  check
                </span>
                High-converting layout launched in 7 days
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-emerald-400 text-sm mt-1">
                  check
                </span>
                Only pay for your domain and hosting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

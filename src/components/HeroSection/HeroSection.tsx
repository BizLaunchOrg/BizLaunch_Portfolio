export function HeroSection() {
  return (
    <section className="relative py-12 px-4 md:py-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text and CTAs */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Limited Time Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-primary dark:text-white">
            Get a <span className="circle-red text-accent font-black">FREE</span> business website that
            actually brings customers
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Stop paying thousands for design.{" "}
            <span className="font-bold text-black dark:text-white border-b-4 border-accent">
              We build your high-converting site for free.
            </span>{" "}
            You only pay for your domain. Optional paid ads available when
            you&apos;re ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-primary dark:bg-white dark:text-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              {/* Sliding red background on hover */}
              <span
                className="absolute inset-0 bg-accent transition-transform duration-300 ease-out -translate-x-full group-hover:translate-x-0"
                aria-hidden
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start for FREE{" "}
                <span className="material-icons text-xl">arrow_forward</span>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-colors hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-white dark:hover:text-primary dark:hover:border-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right: dashboard mockup + sales alert card */}
        <div className="relative -mt-12 md:-mt-16">
          <div className="relative z-10 scale-110 md:scale-100">
            {/* Dashboard card */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Merchant Dashboard
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                  <p className="text-[10px] text-slate-500 mb-1">
                    Total Revenue
                  </p>
                  <p className="text-xl font-bold text-primary dark:text-white">
                    $12,482.00
                  </p>
                  <p className="text-[10px] text-emerald-500 font-bold">
                    +14% vs last mo
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                  <p className="text-[10px] text-slate-500 mb-1">
                    Active Orders
                  </p>
                  <p className="text-xl font-bold text-primary dark:text-white">
                    48
                  </p>
                  <p className="text-[10px] text-accent font-bold">8 pending</p>
                </div>
              </div>
              {/* Mini chart bars */}
              <div className="mt-4 h-32 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-end gap-1 p-2">
                <div className="flex-1 bg-accent/20 h-1/2 rounded-t-sm" />
                <div className="flex-1 bg-accent/40 h-3/4 rounded-t-sm" />
                <div className="flex-1 bg-accent/60 h-2/3 rounded-t-sm" />
                <div className="flex-1 bg-accent/30 h-1/2 rounded-t-sm" />
                <div className="flex-1 bg-accent h-full rounded-t-sm" />
                <div className="flex-1 bg-accent/80 h-4/5 rounded-t-sm" />
              </div>
            </div>
          </div>

          {/* Sales alert badge */}
          <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 w-48 md:w-64">
            <div className="bg-primary text-white p-4 rounded-2xl shadow-2xl border border-white/10 ring-8 ring-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="material-icons text-xl">shopping_cart</span>
                </div>
                <div>
                  <p className="text-[10px] opacity-70">Sales Alert</p>
                  <p className="text-xs font-bold leading-tight">
                    New Order Received!
                  </p>
                  <p className="text-[10px] text-accent font-bold">+$149.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background blur circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}

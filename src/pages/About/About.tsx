// import { OurMissionSection } from "../../components/OurMissionSection/OurMissionSection";
import { Footer } from "../../components/Footer/Footer";

export function About() {
  return (
    <>
      {/* Hero / Mission section */}
      <section
        className="relative pt-20 pb-32 overflow-hidden hero-gradient"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              Our Mission
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-primary dark:text-white mb-8 leading-[1.1]">
            Built to make every
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-accent to-slate-900 dark:from-white dark:via-accent dark:to-white">
              business visible
            </span>{" "}
            online.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            We believe high-end digital presence shouldn&apos;t be a luxury.
            We&apos;re leveling the playing field for small businesses in the AI
            era.
          </p>

          <div className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            <img
              alt="BIZLAUNCH office space"
              className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2TuK_Zailbr8if9RZgFOGK_7q-j1HDysEDuHgsQeFTpUcyfboFzriv6i696tK8JxVfp6inDzoaWFpftbKAxzactlurwy15_UfmIqYPlIfyb_ushAYeqShjVADdP73gvP--Qlg_T869MXj3iXDdYhSrONHl0ombbGGlhn__EKA1iqBOsCmOljDMzYSeLHcmHE3wSXBwpiL8Rv-87OftK3zxivoCRDzqfhI2itHfRiB4vOjp-rMg75-dUHvtSaRvMXf82Z3ucDHeJA"
            />
          </div>
        </div>
      </section>

      {/* Story / Founded section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
              Founded in January 2025 with{" "}
              <span className="text-accent underline decoration-2 underline-offset-4">
                one goal
              </span>
              .
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg">
              <p>
                The digital landscape shifted overnight. As AI transformed how
                we build and interact with the web, we saw an opportunity to
                disrupt the traditional agency model.
              </p>
              <p>
                We founded BIZLAUNCH to strip away the complexity. No 5-figure
                retainers for simple landing pages. No hidden fees. Just
                high-performance, beautiful websites that help local businesses
                thrive.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="material-icons text-accent">verified</span>
                </div>
                <div>
                  <p className="font-bold text-primary dark:text-white">
                    Empowering 100+ Businesses
                  </p>
                  <p className="text-sm">Since our launch this year.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Team working at BIZLAUNCH"
              className="rounded-xl shadow-lg mt-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCbbwrLUkt0ZcmQF5byWwp-VH1dY6mrKF4_Lf29MWlm30o5K_t0qW25KH7ofUKBY8FLYPn2zhodD4gnuH6pp6wtzLy9p_0NVMNr6ScGbP9KSHtGG7HzuzE1jtWLvkbNqhv7_GED4Tqt-FFSnmu949SvQlsv3OvJa2VN5a5AK6LFRTlldID0I2dyQ-jbyFrdk5t9aju2MFD4l8z7CfmTfctwW2CH6YNd6qdWu5SCXxvWEDmrc7x1o_e6RtFXqdU-VTK4MqfSpd-mGM"
            />
            <img
              alt="Strategy session"
              className="rounded-xl shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8de1XxT84lkR_d3a06mCmLBDq8bOeT2pCNN9djxnlsnVsWgM8_tpuQaFkgoxNRgYlTNdHLaLEdaPgovvRyMpXioksZRlXZMQItKvHQ19jYqZzBvhrOKi6hcGvxha676Cdr8axxaZAzkuAMmZGVyH3WqWL4RMgtTMBXNsoGUnA2pc1w1ufxZbSV-pCvOgcZOs4Os9SkIQMXnXh-NqI30k-zaOdK6Z4vAAevcVsQz15cg57E2RD0LRUL9FqPSC2KuMAi8mlZID0QXw"
            />
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The principles that guide every pixel we place.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all group">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-primary dark:text-white">
                  auto_awesome
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                Simplicity
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We strip away the noise to focus on what converts your visitors
                into customers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all group">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-primary dark:text-white">
                  balance
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Fairness</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Quality web design should be accessible to the coffee shop
                owner, not just the tech CEO.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all group">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-primary dark:text-white">
                  bolt
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Speed</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                In the digital age, speed is a feature. We build fast, and we
                launch even faster.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-all group">
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-primary dark:text-white">
                  trending_up
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Growth</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We don&apos;t just build sites; we build engines for your
                business expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why free section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M0 100 C 20 0 50 0 100 100"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Why do we build for <span className="text-accent">free</span>?
            </h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                The biggest barrier to digital success is the initial{" "}
                <span className="text-white font-bold">financial hurdle</span>.
                We&apos;ve seen too many brilliant small businesses fail because
                they couldn&apos;t afford a professional presence.
              </p>
              <p>
                By removing the upfront cost, we align our success with yours.
                We build your foundation for free because we believe in the
                value of long-term partnerships. When your business grows, we
                grow together.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">0%</div>
                  <p className="text-sm">
                    Upfront build cost for qualified businesses
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">24h</div>
                  <p className="text-sm">
                    Response time for all partner requests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <OurMissionSection /> */}

      {/* Footer */}
      <Footer />
    </>
  );
}

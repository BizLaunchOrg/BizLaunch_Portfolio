/**
 * Our Mission Section
 * Showcases the core mission with CTA buttons
 */
export function OurMissionSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-primary hero-gradient"
      id="mission"
    >
      {/* Gradient background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 tracking-wide">
          OUR CORE MISSION
        </span>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
          Every business deserves a{" "}
          <span className="text-blue-400">digital heartbeat.</span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          We're on a mission to democratize the web by offering free
          high-performance website builds for small businesses.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button */}
          <a
            href="#vision"
            className="group relative overflow-hidden px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-600/25"
          >
            Join Our Journey
          </a>

          {/* Secondary Glass Button */}
          <a
            href="#contact"
            className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

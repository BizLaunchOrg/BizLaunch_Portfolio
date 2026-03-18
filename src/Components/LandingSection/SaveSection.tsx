import React from "react";
import Button from "../Button";

const SaveSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto bg-gray-900 dark:bg-slate-900 rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center text-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Let's put your business online — for{" "}
          <span className="text-red-500 underline">FREE</span>.
        </h2>
        <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Limited slots available for February 2025 builds. Reserve yours today
          and start converting visitors into fans.
        </p>
        <Button
          onClick={() => (window.location.hash = "#contact")}
          className="bg-white text-gray-900 hover:bg-slate-100 px-10 py-5 rounded-2xl font-extrabold text-xl relative z-10 transition-transform hover:scale-105 inline-block"
        >
          Claim Your Free Website
        </Button>
      </div>
    </section>
  );
};

export default SaveSection;

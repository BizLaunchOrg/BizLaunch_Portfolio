import React from "react";
import Button from "../Button";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // stub - replace with real submission logic
    alert("Message sent (not really)");
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to grow?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            Send us a message with your business details and we'll get back to
            you within 24 hours to start your free build process.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent">
                <MdEmail className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-slate-400">
                  Email Us
                </p>
                <p className="text-lg">hello@agencyhome.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent">
                <MdLocationOn className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-slate-400">
                  Headquarters
                </p>
                <p className="text-lg">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold">Full Name</label>
              <input
                className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Work Email</label>
              <input
                className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                placeholder="john@business.com"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold">Business URL (if any)</label>
            <input
              className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
              placeholder="www.example.com"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold">How can we help?</label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
              placeholder="Tell us about your business goals..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full transition-all hover:shadow-lg shadow-red-500/20 active:scale-[0.98]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

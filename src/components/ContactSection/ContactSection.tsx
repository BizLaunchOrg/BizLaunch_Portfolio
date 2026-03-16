import { useState, type FormEvent } from "react";

/**
 * Contact section: headline, contact info, and form.
 * Form is uncontrolled for simplicity (beginner-friendly).
 */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 bg-white dark:bg-background-dark"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-4xl font-bold mb-6 text-primary dark:text-white">
            Ready to grow?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            Send us a message with your business details and we&apos;ll get back to
            you within 24 hours to start your free build process.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent">
                <span className="material-icons">email</span>
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-slate-400">
                  Email Us
                </p>
                <p className="text-lg">hello@bizlaunch.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-accent">
                <span className="material-icons">location_on</span>
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

        <div className="space-y-6 bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
          {submitted ? (
            <p className="text-center text-slate-600 dark:text-slate-300 py-8">
              Thanks! We&apos;ll be in touch within 24 hours.
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold" htmlFor="contact-email">
                    Work Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@business.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold" htmlFor="contact-url">
                  Business URL (if any)
                </label>
                <input
                  id="contact-url"
                  name="url"
                  type="text"
                  placeholder="www.example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold" htmlFor="contact-message">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg shadow-red-500/20 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

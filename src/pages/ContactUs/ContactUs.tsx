import React from "react";
import { MdCheckCircle, MdFlashOn } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import success from "../../assets/successImg.png";
import error from "../../assets/errorIMG.png";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xojkgypb");

  if (state.succeeded) {
    return (
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6 min-h-[300px] justify-center">
          <img
            src={success}
            alt="Success"
            className="w-40 h-40 object-contain"
          />
          <p className="text-green-600 font-semibold text-lg">
            Email successfully sent!
          </p>

          {/* <p className="text-slate-500 text-sm">
            We’ll get back to you within 24–48 hours.
          </p> */}

          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-6 py-2 bg-primary text-white rounded-lg"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-background-dark"
        id="contact"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="p-12 lg:p-20 bg-primary text-white">
                <h2 className="font-display text-4xl font-bold mb-8">
                  Ready to be our next success story?
                </h2>
                <p className="text-slate-300 text-lg mb-12">
                  Apply for your free website build today. We select 5
                  businesses every month to partner with.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MdCheckCircle className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">No hidden costs</h4>
                      <p className="text-slate-400 text-sm">
                        We build it for free, you just cover hosting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MdFlashOn className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">Fast Turnaround</h4>
                      <p className="text-slate-400 text-sm">
                        Live in as little as 10 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT (Form) */}
              <div className="p-12 lg:p-20">
                <form
                  onSubmit={handleSubmit}
                  className={`space-y-6 ${
                    state.submitting ? "opacity-70 pointer-events-none" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                    >
                      <option value="Restaurant">Restaurant</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Service Provider">Service Provider</option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="I need a website to..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                    ></textarea>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* ERROR UI */}
                  {!state.submitting &&
                    state.errors &&
                    state.errors.length > 0 && (
                      <div className="flex flex-col items-center gap-4 text-center">
                        <img
                          src={error}
                          alt="Error"
                          className="w-32 h-32 object-contain"
                        />
                        <p className="text-red-500 font-semibold">
                          Something went wrong. Please check your inputs and try again.
                        </p>
                      </div>
                    )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                  >
                    {state.submitting ? "Submitting..." : "Send Application"}
                  </button>

                  {/* <p className="text-xs text-slate-400 text-center mt-4">
                    We typically respond within 24–48 hours.
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
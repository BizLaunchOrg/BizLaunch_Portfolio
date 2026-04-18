import { useForm, ValidationError } from "@formspree/react";
import success from "../../assets/successImg.png";
import error from "../../assets/errorIMG.png";
import { FORMSPREE_APPLICATION_FORM_ID } from "../../config/formspree";

type ApplicationFormProps = {
  /** Included as a hidden field so you can tell submissions apart in Formspree/email. */
  source: string;
};

export function ApplicationForm({ source }: ApplicationFormProps) {
  const [state, handleSubmit] = useForm(FORMSPREE_APPLICATION_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 min-h-[320px] text-center px-4">
        <img
          src={success}
          alt="Success"
          className="w-40 h-40 object-contain"
        />
        <p className="text-green-600 font-semibold text-lg">
          Email successfully sent!
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 px-6 py-2 bg-primary text-white rounded-lg"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-12 lg:p-20">
      <form
        onSubmit={handleSubmit}
        className={`space-y-6 ${
          state.submitting ? "opacity-70 pointer-events-none" : ""
        }`}
      >
        <input type="hidden" name="source" value={source} />

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
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {!state.submitting &&
          state.errors &&
          Object.keys(state.errors).length > 0 && (
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
      </form>
    </div>
  );
}

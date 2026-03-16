/**
 * FAQ section with expandable details/summary items.
 */
const FAQ_ITEMS = [
  {
    question: "Is the website really free?",
    answer:
      "Yes! We do not charge anything for the design, development, or initial setup of your website. You only pay for your domain name and hosting ($15/mo) which is required for any website to exist on the internet.",
  },
  {
    question: "Who owns the website and domain?",
    answer:
      "You do! You own the domain and the rights to all the content on your site. If you ever choose to leave us, you can take your domain with you.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Typically, once we have all your information and domain selected, we can have your site live within 7 to 10 business days.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-primary dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
              open={index === 0}
            >
              <summary className="flex items-center justify-between font-bold cursor-pointer list-none">
                {item.question}
                <span className="material-icons group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "Is the website really free?",
      answer:
        "Yes! We do not charge anything for the design, development, or initial setup of your website. You only pay for your domain name and hosting ($15/mo) which is required for any website to exist on the internet.",
    },
    {
      id: "faq-2",
      question: "Who owns the website and domain?",
      answer:
        "You do! You own the domain and the rights to all the content on your site. If you ever choose to leave us, you can take your domain with you.",
    },
    {
      id: "faq-3",
      question: "How long does it take to launch?",
      answer:
        "Typically, once we have all your information and domain selected, we can have your site live within 7 to 10 business days.",
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.id}
            open={openId === item.id}
            className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
          >
            <summary
              onClick={() => toggleFAQ(item.id)}
              className="flex items-center justify-between font-bold cursor-pointer list-none"
            >
              {item.question}
              <ExpandMore
                className={`transition-transform ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              />
            </summary>
            {openId === item.id && (
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

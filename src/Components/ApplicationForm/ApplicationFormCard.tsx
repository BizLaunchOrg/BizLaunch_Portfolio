import { MdCheckCircle, MdFlashOn } from "react-icons/md";
import { ApplicationForm } from "./ApplicationForm";

export type ApplicationFormCardProps = {
  id?: string;
  source: string;
  title: string;
  description: string;
  className?: string;
};

export function ApplicationFormCard({
  id,
  source,
  title,
  description,
  className = "py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-background-dark",
}: ApplicationFormCardProps) {
  return (
    <div className={className} id={id}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-primary text-white">
              <h2 className="font-display text-4xl font-bold mb-8">{title}</h2>
              <p className="text-slate-300 text-lg mb-12">{description}</p>

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
                    <h4 className="font-bold">Fast turnaround</h4>
                    <p className="text-slate-400 text-sm">
                      Live in as little as 10 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ApplicationForm source={source} />
          </div>
        </div>
      </div>
    </div>
  );
}

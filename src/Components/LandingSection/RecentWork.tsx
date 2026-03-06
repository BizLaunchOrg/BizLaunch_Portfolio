import React from "react";
import { MdOpenInNew } from "react-icons/md";
import Button from "../Button";

interface Project {
  title: string;
  subtitle: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "The Sizzling Grille",
    subtitle: "Local Restaurant • +45% Bookings",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0dKrjqtXTwqm4CbLea7qj_ZyCBowAc6vjdJTfdy8U5_R8fk6IPm7jhBkfV9fspsPNeCZJtntYRvUTedgHwOLyDZmznfj8kf0j63kq1d9EdsxuaUpg5zUviH2QPCdIY4n_O4o1njLHQOvGdxbfreK5i9DenswpAfn4uHqqFcPM9bk-Jx-o87UdmkrS-lw1b_fFyk2y_-ZAxG5yG3kUKn1Q9Wf0VhPm9TagMBeDj5l5BazUgzmFOo2usaPdQGrTjoAXxCcZnHeWCQ",
  },
  {
    title: "Harbor Realty",
    subtitle: "Real Estate • 120+ Monthly Leads",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvKCyFZuwyeIRE63uXU3r3tthgYZQOJnTQI4sN0ru-iOyWsNh8U1dRzzqyU4RUyrSwJxtuZRc7mBmnATayDoHJ3fhy0DKrwOvlkO7y6dqGxBtHJRlFzASuVH0_5cTx1J0rxzll-K12ObklN4hgQv3GwEdDORuY88tmByZnLCIxeJuTYsWkf6cI1v-ir-F9q9v0vAc5VkEbdU8lKTJGON1SfLwFFA6JUL-lKkBIH5KKNLhN40p9jZLm2kTnubc3aQH9SwI1ea-6_z0",
  },
  {
    title: "Peak Performance Gym",
    subtitle: "Fitness Center • Site launched in 4 days",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBncWHain6ConSQuu5CygX2J_LvwiWOtC4ZxsANS_8GS0Nhd16KgO4ASg4pGy-VR57HoKP1KxnkoGTxLRGC7La_jq_qcPdbiYQnzg_p33tLJAl8Px77zqV6xmVdCOAfWBNcYimywF0-yh6t-AU0eC4QL55IwknohNQsqLhGLLqz0BxrHPsxh4j8BsLMuLyZ39y2jtPyvv7rwvhaHJVJIw7KGMCF9PSXGcDARBwZRezZHhhHjyAvS4kkxD09Cye_3mqC97h7iMrW32U",
  },
];

const RecentWork: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold mb-2">
              Our Recent Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              See what we've built for small businesses like yours.
            </p>
          </div>
          <a
            href="#"
            className="text-red-500 font-bold flex items-center gap-1 hover:underline"
          >
            View full portfolio <MdOpenInNew className="text-sm" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-slate-200 aspect-4/3">
                <img
                  alt={`${p.title} project`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={p.img}
                />
                <div className="absolute inset-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="text-white cursor-pointer font-bold group-hover:bg-gray-900 px-6 py-2 rounded-full">
                    View Case Study
                  </Button>
                </div>
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-slate-500 text-sm">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

import {
  MdCheckCircle,
  MdConstruction,
  MdFlashOn,
  MdReportProblem,
} from "react-icons/md";
import PortfolioCard from "./ourWorkCard";
import { useState } from "react";

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioData = [
    {
      title: "The Hearth Bistro",
      category: "Booking",
      categoryColor:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      description:
        "A high-conversion reservation system and digital menu for an upscale dining establishment.",
      stat: "+45% Bookings",
      year: "Launch 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBJaTdPbLPvzABmtJDgyWAug0QceZVRFlqpIQiKURiZu1I3ZYI9lpdIX4P2gHLmo4ptGO6KEtbvCQn4kXkoSCuTroZkuwn_uSofO2ePeNt9zNgP6QvfiNy-0IhHSCq3O7_vZeLqvwoQdMcoTWFrbQO0Wu7ERDpuF3SXW6Qb_roAKRKGBdy-IOjxTTIRDqwJCOutaB9eoiRoAhGa5_5YmQEXcFabW_a8b3CUMgQVy-GctQ-xu4-QXMAt4RcX1SVLhTl_SkyH2yza4G0",
    },
    {
      title: "Apex Legal Partners",
      category: "Services",
      categoryColor:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      description:
        "Corporate branding and lead generation platform for a boutique legal firm.",
      stat: "+60% Inquiries",
      year: "Launch 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEA8yj_GNgTjHvjePEK2PU0V3H5TESjMi5sqAbrGHyAsaPnoY5mMFLdyuMtxxpIRfDBpJkSxiSrVKQnJ89QMp2SZZag4HpIMdAj82UC_lmRv0v-SncE4knKXtgkxGB8zAsAydh5T0Vsj6AXRiqi7exNGnFEwwlged5T-TE1WepdoGJcde7TZMlOUdrfK05L4Lc7NJgRgb6g_i8lkdWzG2HjHiCiRpq_n8vrRE5Lwtj-NZZNg9_JCc83wuW56enDdi6MUf61rjA0dI",
    },
    {
      title: "Luna Boutique",
      category: "E-commerce",
      categoryColor:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      description:
        "A seamless shopping experience for a handmade jewelry brand with Shopify integration.",
      stat: "+120% Sales",
      year: "Launch 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCn_TpmwlCGHo_qEV2Xl7zXbtra52ch3lrX8VC2Nmad-FEDPimgSnKup7Ty11-aoz5ds5Ngwa12O0I_zLPib7nQ0DTDPHqGZ89OVbbXS0qA7YcoNxKB1e7ZvtuOdJGZSW6oO9BXDBNlzAevux-pk3RTedZRlJTyR_eUJDB-J1wluQfLF3Vxv_TGYtf2BW7vYHDQoZ7OElolVGtylzo8pZvYR2GU9Hz8lZurtfUBmb-lBKyy4p_7Z0RN_3o87Ew9XBLFmsrDWNMmsdg",
    },
    {
      title: "Core Strength Studio",
      category: "Landing Page",
      categoryColor:
        "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      description:
        "High-impact landing page designed to drive new membership signups.",
      stat: "+30% Leads",
      year: "Launch 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAx-1m3YTjBPGWhKeeoeZuR4ggk2fV2zI_1dFpdxowCFPvnFQpkeA-v-IGXwsJCkeo75XPaK3D4yfBehcgYesY70tYyOTOoO0kEVFduv1-TfRqCVUtFklvt1yySiuvznYxMNqwOkdMTHAsQsKd5KyMLNtMcsKS_tA4WfDuJ2vlUSwqiUhVkko_-jZwzjR0bD_zuRXddhjqYCXjQYi3coj1Rh3LmBisrGTc_p8stMBdpwppm09NVtXuhj7601QYtEcM7-41VuyfdY18",
    },
    {
      title: "CloudOps Insight",
      category: "SaaS",
      categoryColor:
        "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
      description:
        "Complex dashboard design and marketing site for a cloud infrastructure startup.",
      stat: "+25% Retention",
      year: "Launch 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHzBd85y4p4U3xXV55OE-SWLUI8FlYTkpjr04m6Gx8ZV_Cj091iRz_OtsQQtBhzWGXmMu7f1pVXbrW2M7eXZeZxTkCaU-QXsGp7GA_Big0Z0ZGSBwL7HRbQpH5bPYFFTQHtxJaxbBBPCrZsEQp3cxJhmjssIho9LYabU09_1z6iLYSd9ZvHQ-hyufIAYSeCfT6ezqEE5JoWTeevSZI1PTALAq2v4p9ShdOOONtmfIqVB3uFvc_OP8T5AmVZFxAbDgJoR1cojJtF1A",
    },
    {
      title: "Wellness & Health",
      category: "Booking",
      categoryColor:
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      description:
        "Integrated patient portal and appointment scheduling for a local clinic.",
      stat: "+80% Efficiency",
      year: "Launch 2023",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL1BN4BfnkUlY7CdfLTpSpw-DKkSh-cuZDwF5WTP7ePwrpLP_zimt8FDpd3svR4gpYHtcVjjPqvPy17Z4vGOe3jn5taKfuIBN9SKKEXJSOSq88lSO7CGXj_MAKyagyQ8s_tkEK4MltBJbzctm_92e8YKFaSdljGTPNIlYzcOMITgFug_p_lwiWZQRgexOb4MPK6dF6iYKpPgcNrz3GhC02CLUbOVbPzXlNOumYQ5YUAXT0cvC1PwchBFvmK6_tTQe-uZCU8d8U4Lc",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Results that <span className="text-accent">speak for themselves</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We've helped hundreds of small businesses transform their digital presence. Explore our curated portfolio of free custom builds and strategic case studies.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {[
            { label: "All Work", value: "All" },
            { label: "E-commerce", value: "E-commerce" },
            { label: "Professional Services", value: "Services" },
            { label: "Booking Platforms", value: "Booking" },
            { label: "Landing Pages", value: "Landing Page" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`filter-btn w-full sm:w-auto px-3 sm:px-6 py-2 rounded-full border font-medium transition-all hover:border-accent
                ${
                  activeCategory === cat.value
                    ? "bg-accent text-white border-accent"
                    : "border-slate-200 dark:border-slate-800"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData
            .filter((item) => activeCategory === "All" ? true : item.category === activeCategory)
            .map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-white dark:bg-slate-900/50 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
              Case Study in Focus
            </span>
            <h2 className="font-display text-4xl font-bold mb-6">
              How we scaled Urban Greens from 0 to 500+ weekly orders.
            </h2>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <MdReportProblem className="text-accent" />
                  The Challenge
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Urban Greens was using manual spreadsheets and Instagram DMs to manage fresh produce orders, leading to lost sales and logistical nightmares.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <MdConstruction className="text-accent" />
                  What we built
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  A custom Shopify-powered storefront with an automated inventory management system and local delivery zone routing.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-bold text-accent mb-1">+500%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Order Capacity</div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-bold text-accent mb-1">-70%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-medium">Admin Time</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpsltl_qZiyZ8iP8pitxtPfvk6gxRTtI4t-OSUSMbOSG6bmVMZCL9J4IHYR95wjDJ-rh5g7hVtR6pdDZM10qFdIz-P2GAyaJTnGGkKFu6WYHp03YYcClRGKkHo2-U56_aYYC-H5B0PfXni6ilbU1jd20fl3Bt1naCVXH5WuwOJ_ppjTeQ-62PJb7dK4HkiODy8IO40d_cmNOKOnxdKV8vAa8jgV-QGbukCVoe3Rjao95Gj_I7-Z8KPSwLWSJRqUyCGL_j5aIxzrm8"
              alt="Urban Greens Case Study"
              className="relative rounded-2xl shadow-2xl border border-white/20 w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-background-dark" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="p-12 lg:p-20 bg-primary text-white">
                <h2 className="font-display text-4xl font-bold mb-8">
                  Ready to be our next success story?
                </h2>
                <p className="text-slate-300 text-lg mb-12">
                  Apply for your free website build today. We select 5 businesses every month to partner with.
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Business Type
                    </label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white">
                      <option>Restaurant</option>
                      <option>E-commerce</option>
                      <option>Service Provider</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Tell us about your project
                    </label>
                    <textarea
                      rows="4"
                      placeholder="I need a website to..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent transition-all text-slate-900 dark:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-primary/20"
                  >
                    Send Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
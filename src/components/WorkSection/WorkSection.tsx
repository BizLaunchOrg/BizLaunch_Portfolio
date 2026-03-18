import { Link } from "react-router-dom";
const CASE_STUDIES = [
  {
    tag: "E-Commerce",
    title: "Urban Wear Boutique",
    description:
      "Increased online sales by 156% in the first 3 months post-launch.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-aNAmv-vULSW0_enReJVfArVcKeI2a6yYIbLpjCVwUL7lrGgzKwRVbJMFoqkqvSEy7VAdsyZj_aYuX5vuAL-swNwxmazqOaBPQrm19IOU7qn1CFDxzQ6Th1OWWwNo3v8IEGGfqxrrlL1gGlRCtJXQfbPOUwp9ZfSYienr8G81KD8ggnHhYAMxDdhzxeyMbL_zMe0LNPUlxLYw6y4NAqE0n4hfi0igQ7mX-Zos7OjS4EcLb1ereaEJVIn1JQ8rPHVhiA_cVgJXiE",
  },
  {
    tag: "Home Services",
    title: "Prime Home Renovations",
    description:
      "Lead generation tripled using our conversion-optimized booking forms.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVl3rLaQtSB_WaF7NNBtrhesMy12fkE5bHdBsp8QQFPTxvPbd7zK2cCbA4Z0qwiOHq9ut940dcHzt3SSsCg1ZwQ_4KS3-LYgJqmgTOjurLGySkb8gWZjNi-qzOWiONpz3dgxC-GtC9lyjNk4r4Q3ZNMB2pDq8yPCMrydYhGiRFibAI_c4SbfYuu13zAqNNtmI71vS79jkbUDJGfqrJ0zlpOU_aPjGSe3_CD-_kXx2k9GqaT_wa1-t2UinhJW714qjKgH435Twq9uw",
  },
  {
    tag: "Restaurant",
    title: "The Culinary Den",
    description: "Zero commission online ordering system integrated directly.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASl55f64Ro7GfZoIP3u-pCt8rTBdxbNZN8vIZKiB9M1THe41RALXkwb-ns_KkhmPdpF_44TEhkN1P5QDB3jsteGcQtAHIsQrVr3FIKFCENZShnk8Fj0QQr6dg8kLebYTUQ2Hs6HLByxSG4cbSflHN1X2bFL84Yh7rOfaEZkafJWGrolo0A1AwZ8bhtpZ4NBkEmVz0Mw0zD9GNDvSRmRH-gpgf-CU9n9oIiLXAwFdvn9gIAnew_iiL8r96VNRnzIQSnoM7yhdrWWzU",
  },
];

export function WorkSection() {
  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-primary dark:text-white">
              Recent Success Stories
            </h2>
            <p className="text-slate-500 mt-2">
              Real businesses, real results, zero design fees.
            </p>
          </div>
         <Link
  to="/work"
  className="hidden md:block font-bold text-accent hover:underline"
>
  View Full Portfolio →
</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.title}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={study.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {study.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                <p className="text-sm text-slate-500 mb-4">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-bold">
                  <span>Case Study</span>
                  <span className="material-icons text-sm">trending_up</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

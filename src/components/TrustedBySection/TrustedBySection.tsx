/**
 * "Trusted by" strip with client logos (grayscale, color on hover).
 */
const CLIENT_LOGOS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Wmf20LqxFrUXTb0gbxBWi5uhJuR4-qaQhhxx0uN7t73teGGA_Do3CGLz2glqlb8KCgjfHB4_-sDqLh0NRdYefcOcnXynVEpa7FnIJLPaAxwFGrFG3IXWQ2palsjocnkMLt2rPuStZZPJh5oE8Miu1r-I28tSaskm_muszq6fNVZEuIGTCV3n82-Y5UU1Gl98BD5cwzszfpf-TNdJAGABxJBiwvXXPlmE4V84VqYMUBZPwHEpNTbdlcw4V0THCwfUcYUkX-ERLV8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOIpp07aevk071REad2UyUqIpw2as8pv1OUOP_wQNrVsZv8K5udRWVYoSmcGP4YmIhXXCrdzmZfSnk_RKzvlxBmFNVH9BjVRxvS8fyV6OdWDeJWCiFfsYmNN7vZOgBWL8EHtEpkLCnGYYwnflMuCBuIHUFMyUpQbXcB1IPX37E5luVnHs_ou00P0h9nq0eDLlY-ADlc3Wx5wYPPn8a0cMOmA8omJ7zPMs5NrKZoL81PuR0strgYq2JP2O8FjaZmG4kXj-vRx1HT_g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQmlsZ_64h69RE9PgRYeNXPp0G_nTdFTPP9jImgXamhnYE6OVQn1HfSpNAvqD5YiIRTemCjzz_LTzA5HlP3l-qXghbuVER409nZMs6FO2d_OIie7ka-SwlthuVyQiWqdbx-7GxTWvXWeFpZVdXtwVmvYgWUd-WN4ZybdxVQkhzGdlzBJA-x3E9SdKLVraj9Kwf4hSSRvLaHLtI7LDQbvxJ6Wbrs-xPWMbNP_7sZH-PhLck1R7PoLHwALVJCxQB35FJtUT15cQn47I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVsMjCqCw01Me53jKdXEarCDxhVvSQp12Fp2IQDeelGCtvTczRzfPjAWgqlK5nJ1ZbFRnDUbqzLuBHj9UoZMDSZldP7IwoHm7afa45S5CVRWSn6wqZ6q-MMfktITRIjEdrvDSbYKa-OSL0hNqMG1LrkcoxfBT36z78E1VnJJEJjLdbUAMCG1arkeaDCl3gT1XtS0-jMPlM2C5R4IfSIoQloyRzUpwr5d0gl5xkDKs6zGykmKpYg-RasHR6dZ8lUwLLLAAdX8Vn-tY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPX0hhGm-opLwhciKNFhE8U6c1hFRirv61zpA0AM7V0cYIVm8QYPEbAPVQs-rMgEZThV4ow_fQPI2liOJ1Im8XdBekV0gslz_ghByRH9JXg_55cYJMBFZayhfRAnk4pxVatBSrh9RGIaA8uDs9fIkykZ0XgjqMkkfrl6yMc4w7xgrhJzlkBC_Jr928gX_2iFN9Irxg8TgW0YZ9MTRVQbUKec5y-tW7BBqGF8XEzmfkytD2WhKyRyLvuaE0kQaO1Cs7RJyD1cNLgJo",
];

export function TrustedBySection() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by Small Businesses Everywhere
        </p>
        <div className="flex items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all overflow-x-auto pb-4">
          {CLIENT_LOGOS.map((src, i) => (
            <img
              key={i}
              alt={`Client ${i + 1}`}
              className="h-8 md:h-12 w-auto flex-shrink-0"
              src={src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

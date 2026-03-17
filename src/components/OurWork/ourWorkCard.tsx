import { MdArrowForward, MdTrendingUp } from "react-icons/md";

const PortfolioCard = ({
  image,
  title,
  description,
  category,
  categoryColor,
  stat,
  year,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
      
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button
            type="button"
            className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
          >
            View Case Study <MdArrowForward className="text-sm" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 ${categoryColor} text-xs font-bold uppercase tracking-wider rounded-full`}>
            {category}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold mb-2">{title}</h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-1 text-green-500 font-bold">
            <MdTrendingUp className="text-sm" />
            <span>{stat}</span>
          </div>

          <span className="text-xs text-slate-400">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
import React from 'react';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead }) => {
  return (
    <article
      id={`article-card-${article.id}`}
      onClick={() => onRead(article)}
      className="group bg-white border border-[#E8E1D6] overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#D8CFC1]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D6]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover img-luxury-zoom brightness-[0.96] group-hover:brightness-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/95 backdrop-blur-xs text-[#171717] px-3 py-1">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 text-[11px] text-[#6F6B63] mb-2 font-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#D8CFC1]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#D8CFC1]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-serif text-xl text-[#171717] group-hover:text-[#596056] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-[#6F6B63] font-light leading-relaxed mt-2 line-clamp-2">
            {article.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F7F5F0] flex items-center justify-between">
          <span className="text-[11px] text-[#6F6B63] italic">
            By {article.author}
          </span>

          <button
            id={`read-article-btn-${article.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onRead(article);
            }}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] group-hover:text-[#596056] transition-colors"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

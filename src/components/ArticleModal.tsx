import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Bookmark, Share2 } from 'lucide-react';
import { Article } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onPlanTrip }) => {
  const { showToast } = useWishlist();

  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [article]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard.');
    } else {
      showToast('Article link copied.');
    }
  };

  return (
    <div
      id="article-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        id="article-modal-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#F7F5F0] border border-[#D8CFC1] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E1D6] bg-white flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#6F6B63] font-semibold">
            AURA Editorial • {article.category}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              title="Share article"
              className="p-1.5 text-[#6F6B63] hover:text-[#171717] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="article-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-[#6F6B63] hover:text-[#171717] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Scroll Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#F7F5F0]">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#6F6B63] font-light">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D8CFC1]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D8CFC1]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#171717] leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base font-light text-[#6F6B63] italic border-l-2 border-[#596056] pl-4">
              {article.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#171717] pt-2">
              <User className="w-3.5 h-3.5 text-[#596056]" />
              <span className="font-medium">{article.author}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="space-y-5 text-sm sm:text-base text-[#1C1C1C]/90 font-light leading-relaxed">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#E8E1D6] flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#6F6B63] mr-2">Topics:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white border border-[#E8E1D6] px-3 py-1 text-[#171717]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-white border border-[#D8CFC1] p-6 sm:p-8 text-center space-y-4">
            <h3 className="font-serif text-2xl text-[#171717]">Inspired to experience this journey?</h3>
            <p className="text-xs text-[#6F6B63] max-w-md mx-auto font-light">
              Speak with our senior curators to craft your bespoke travel itinerary to this extraordinary destination.
            </p>
            <button
              onClick={() => {
                onClose();
                onPlanTrip();
              }}
              className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 hover:bg-[#333333] transition-colors"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

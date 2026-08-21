import React, { useEffect, useState } from 'react';
import { X, Clock, MapPin, Check, Bookmark, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Experience } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';

interface ExperienceDetailModalProps {
  experience: Experience | null;
  onClose: () => void;
  onPlanExperience: (experience: Experience) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  experience,
  onClose,
  onPlanExperience,
}) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [inquirySuccess, setInquirySuccess] = useState(false);

  useEffect(() => {
    if (experience) {
      document.body.style.overflow = 'hidden';
      setInquirySuccess(false);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [experience]);

  if (!experience) return null;

  const isSaved = isInWishlist(experience.id);

  const handleWishlistClick = () => {
    toggleWishlist({
      id: experience.id,
      type: 'experience',
      title: experience.title,
      subtitle: `${experience.location} • ${experience.category}`,
      image: experience.image,
      price: experience.startingPrice,
      location: experience.location,
    });
  };

  return (
    <div
      id="experience-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        id="experience-modal-container"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#F7F5F0] border border-[#D8CFC1] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E1D6] bg-white flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#596056] font-semibold">
            AURA Curated Experience • {experience.category}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleWishlistClick}
              className="inline-flex items-center gap-1.5 text-xs text-[#171717] hover:text-[#596056] transition-colors"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              id="experience-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-[#6F6B63] hover:text-[#171717] transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#F7F5F0]">
          
          {/* Header & Image */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6F6B63]">
              <span className="flex items-center gap-1 text-[#171717] font-medium uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#596056]" />
                {experience.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D8CFC1]" />
                {experience.duration}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#171717]">
              {experience.title}
            </h1>

            <div className="aspect-[16/9] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6] relative">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#171717]/90 text-white px-4 py-2 text-xs font-mono backdrop-blur-xs">
                Starting at {experience.startingPrice}
              </div>
            </div>
          </div>

          {/* Narrative & Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#171717]">The Experience</h3>
                <p className="text-sm font-light text-[#1C1C1C]/90 leading-relaxed">
                  {experience.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                  Curated Highlights
                </h4>
                <ul className="space-y-2">
                  {experience.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#1C1C1C] font-light">
                      <Check className="w-3.5 h-3.5 text-[#596056] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Included Box (5 cols) */}
            <div className="md:col-span-5 bg-white border border-[#D8CFC1] p-6 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block font-semibold">
                  Investment
                </span>
                <p className="font-serif text-2xl font-bold text-[#171717] mt-0.5">
                  {experience.startingPrice}
                </p>
                <p className="text-[11px] text-[#6F6B63] mt-0.5">
                  All taxes, private permits, and bespoke hosting included.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F5F0] space-y-2">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171717]">
                  What's Included
                </h4>
                <ul className="space-y-1.5 text-xs text-[#6F6B63] font-light">
                  {experience.included.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#596056] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {inquirySuccess ? (
                <div className="bg-[#596056] text-white p-4 text-xs space-y-1 animate-fade-in">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inquiry Registered</span>
                  </div>
                  <p className="text-[#E8E1D6] font-light">
                    Our concierge team will reserve your preferred date.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onPlanExperience(experience);
                    }}
                    className="w-full bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium py-3.5 hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Reserve / Customize</span>
                    <Compass className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setInquirySuccess(true)}
                    className="w-full border border-[#D8CFC1] text-[#171717] text-xs uppercase tracking-wider py-2.5 hover:bg-[#F7F5F0] transition-colors"
                  >
                    Request Date Availability
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

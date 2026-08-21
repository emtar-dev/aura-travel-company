import React from 'react';
import { Bookmark, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { Experience } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ExperienceCardProps {
  experience: Experience;
  onView: (id: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(experience.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      id={`experience-card-${experience.id}`}
      onClick={() => onView(experience.id)}
      className="group bg-white border border-[#E8E1D6] overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#D8CFC1]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D6]">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover img-luxury-zoom brightness-[0.96] group-hover:brightness-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category & Wishlist */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.18em] font-semibold bg-white/90 backdrop-blur-xs text-[#171717] px-2.5 py-1 pointer-events-auto">
            {experience.category}
          </span>
          <button
            id={`wishlist-btn-exp-${experience.id}`}
            onClick={handleWishlistClick}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white hover:text-[#171717] transition-all pointer-events-auto shadow-sm"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
          </button>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 left-4 text-white text-xs flex items-center gap-1.5 font-light">
          <Clock className="w-3.5 h-3.5 text-[#D8CFC1]" />
          <span>{experience.duration}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#6F6B63] flex items-center gap-1 mb-1 font-medium">
            <MapPin className="w-3 h-3 text-[#596056]" />
            {experience.location}
          </p>
          <h3 className="font-serif text-xl text-[#171717] group-hover:text-[#596056] transition-colors leading-snug">
            {experience.title}
          </h3>
          <p className="text-xs text-[#6F6B63] font-light leading-relaxed mt-2 line-clamp-2">
            {experience.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F7F5F0] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block">
              Pricing
            </span>
            <span className="font-serif text-sm font-semibold text-[#171717]">
              {experience.startingPrice}
            </span>
          </div>

          <button
            id={`view-exp-btn-${experience.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onView(experience.id);
            }}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] group-hover:text-[#596056] transition-colors"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

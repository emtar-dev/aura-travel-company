import React from 'react';
import { Bookmark, ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { Destination } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface DestinationCardProps {
  destination: Destination;
  onExplore: (id: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onExplore }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(destination.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist({
      id: destination.id,
      type: 'destination',
      title: destination.name,
      subtitle: `${destination.country} • ${destination.category}`,
      image: destination.heroImage,
      price: destination.startingPrice,
      location: destination.country,
    });
  };

  return (
    <div
      id={`destination-card-${destination.id}`}
      onClick={() => onExplore(destination.id)}
      className="group relative bg-white border border-[#E8E1D6] overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#D8CFC1]"
    >
      {/* Image Container with Luxury Zoom */}
      <div className="relative aspect-[4/3] sm:aspect-editorial overflow-hidden bg-[#E8E1D6]">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover img-luxury-zoom brightness-[0.96] group-hover:brightness-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/90 backdrop-blur-xs text-[#171717] px-3 py-1 pointer-events-auto">
            {destination.category}
          </span>
          <button
            id={`wishlist-btn-dest-${destination.id}`}
            onClick={handleWishlistClick}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white hover:text-[#171717] transition-all pointer-events-auto shadow-sm"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
          </button>
        </div>

        {/* Image Floating Country */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-[#E8E1D6] font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#D8CFC1]" />
            {destination.country}
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-0.5">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <p className="text-xs text-[#6F6B63] font-light leading-relaxed line-clamp-2">
          {destination.shortDescription}
        </p>

        <div className="pt-3 border-t border-[#F7F5F0] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block">
              Curated journeys from
            </span>
            <span className="font-serif text-base text-[#171717] font-semibold">
              {destination.startingPrice}
            </span>
          </div>

          <button
            id={`explore-dest-btn-${destination.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onExplore(destination.id);
            }}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] group-hover:text-[#596056] transition-colors"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

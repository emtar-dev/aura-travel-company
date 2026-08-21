import React from 'react';
import { Bookmark, Calendar, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { TravelPackage } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface PackageCardProps {
  pkg: TravelPackage;
  onView: (id: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(pkg.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist({
      id: pkg.id,
      type: 'package',
      title: pkg.name,
      subtitle: `${pkg.destination} • ${pkg.duration}`,
      image: pkg.image,
      price: pkg.startingPrice,
      location: pkg.destination,
    });
  };

  return (
    <div
      id={`package-card-${pkg.id}`}
      onClick={() => onView(pkg.id)}
      className="group bg-white border border-[#E8E1D6] overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-[#D8CFC1]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D6]">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover img-luxury-zoom brightness-[0.96] group-hover:brightness-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#171717]/85 backdrop-blur-xs text-[#E8E1D6] px-3 py-1 pointer-events-auto">
            {pkg.duration}
          </span>
          <button
            id={`wishlist-btn-pkg-${pkg.id}`}
            onClick={handleWishlistClick}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white hover:bg-white hover:text-[#171717] transition-all pointer-events-auto shadow-sm"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
          </button>
        </div>

        {/* Destination Bottom Overlay */}
        <div className="absolute bottom-3 left-4 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-[#E8E1D6] font-medium">
            {pkg.destination}
          </p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-xl text-[#171717] group-hover:text-[#596056] transition-colors leading-snug">
            {pkg.name}
          </h3>
          <p className="text-xs text-[#6F6B63] font-light leading-relaxed mt-2 line-clamp-2">
            {pkg.shortDescription}
          </p>

          {/* Highlights Mini List */}
          <div className="mt-4 space-y-1.5 pt-3 border-t border-[#F7F5F0]">
            {pkg.highlights.slice(0, 2).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#1C1C1C]/80 font-light">
                <Check className="w-3.5 h-3.5 text-[#596056] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#E8E1D6] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block">
              Starting from
            </span>
            <span className="font-serif text-lg font-bold text-[#171717]">
              {pkg.startingPrice}
            </span>
            <span className="text-[10px] text-[#6F6B63] ml-1">/ person</span>
          </div>

          <button
            id={`view-pkg-btn-${pkg.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onView(pkg.id);
            }}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-semibold bg-[#171717] text-[#F7F5F0] px-4 py-2.5 hover:bg-[#333333] transition-colors"
          >
            <span>View Package</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

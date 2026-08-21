import React from 'react';
import { Bookmark, Trash2, ArrowRight, Compass, MapPin } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { WishlistItem } from '../types';

interface WishlistViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenTripPlanner: () => void;
  onSelectDestination: (id: string) => void;
  onSelectExperience: (id: string) => void;
  onSelectPackage: (id: string) => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  onNavigate,
  onOpenTripPlanner,
  onSelectDestination,
  onSelectExperience,
  onSelectPackage,
}) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  const handleItemClick = (item: WishlistItem) => {
    if (item.type === 'destination') {
      onSelectDestination(item.id);
    } else if (item.type === 'experience') {
      onSelectExperience(item.id);
    } else if (item.type === 'package') {
      // If it's a dynamic plan recommendation, open planner or package
      if (item.id.startsWith('plan-')) {
        onOpenTripPlanner();
      } else {
        onSelectPackage(item.id);
      }
    }
  };

  return (
    <div id="wishlist-view" className="pt-28 sm:pt-36 pb-24 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8E1D6] pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
            Personal Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#171717] mt-1">
            Saved Journeys & Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-[#6F6B63] font-light mt-1">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for future exploration.
          </p>
        </div>

        {wishlist.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={clearWishlist}
              className="text-xs uppercase tracking-wider text-[#6F6B63] hover:text-rose-600 transition-colors flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
            <button
              id="wishlist-plan-all-cta"
              onClick={onOpenTripPlanner}
              className="bg-[#171717] text-[#F7F5F0] px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#333333] transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Plan Trip With Saved</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Body */}
      {wishlist.length === 0 ? (
        <div id="wishlist-empty-state" className="py-24 text-center space-y-5 bg-white border border-[#E8E1D6]">
          <div className="w-16 h-16 rounded-full bg-[#F7F5F0] border border-[#E8E1D6] flex items-center justify-center mx-auto text-[#6F6B63]">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-[#171717]">
              Your saved journeys will appear here.
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6B63] max-w-sm mx-auto font-light leading-relaxed">
              Explore our destinations, private experiences, and curated packages, and click the bookmark icon to curate your dream itinerary.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('destinations')}
              className="bg-[#171717] text-[#F7F5F0] px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-[#333333] transition-colors"
            >
              Explore Destinations
            </button>
            <button
              onClick={() => onNavigate('packages')}
              className="bg-white border border-[#171717] text-[#171717] px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-[#F7F5F0] transition-colors"
            >
              View Travel Packages
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group bg-white border border-[#E8E1D6] overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#D8CFC1]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E1D6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-luxury-zoom brightness-[0.96] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#171717] px-2.5 py-1">
                    {item.type}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(item.id);
                  }}
                  title="Remove from wishlist"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-sm"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#6F6B63]">
                    {item.subtitle}
                  </p>
                  <h3 className="font-serif text-lg text-[#171717] group-hover:text-[#596056] transition-colors leading-snug mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-[#F7F5F0] flex items-center justify-between">
                  {item.price && (
                    <span className="font-serif text-sm font-semibold text-[#171717]">
                      {item.price}
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item);
                    }}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-[#171717] group-hover:text-[#596056] transition-colors ml-auto"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

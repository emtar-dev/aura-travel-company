import React, { useState } from 'react';
import { ArrowLeft, Bookmark, Calendar, Check, X as CloseIcon, Users, Compass, Shield, Clock, MapPin, ArrowRight } from 'lucide-react';
import { TRAVEL_PACKAGES } from '../data/travelData';
import { useWishlist } from '../context/WishlistContext';

interface PackageDetailViewProps {
  packageId: string;
  onBack: () => void;
  onPlanPackage: (pkgName: string, destination: string) => void;
}

export const PackageDetailView: React.FC<PackageDetailViewProps> = ({
  packageId,
  onBack,
  onPlanPackage,
}) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const pkg = TRAVEL_PACKAGES.find((p) => p.id === packageId) || TRAVEL_PACKAGES[0];
  const isSaved = isInWishlist(pkg.id);

  const [guestCount, setGuestCount] = useState(2);
  const [selectedDay, setSelectedDay] = useState(0);

  const totalPrice = pkg.priceNumber * guestCount;

  const handleWishlistClick = () => {
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
    <div id="package-detail-view" className="space-y-16 sm:space-y-24 pb-24">
      
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end pb-16 bg-[#171717] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/30 to-black/50" />
        </div>

        {/* Top bar */}
        <div className="absolute top-24 left-4 sm:left-8 right-4 sm:right-8 z-20 flex items-center justify-between">
          <button
            id="pkg-detail-back-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-[#F7F5F0] px-4 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-[#171717] transition-all border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Packages</span>
          </button>

          <button
            id="pkg-detail-wishlist-btn"
            onClick={handleWishlistClick}
            className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-[#F7F5F0] px-4 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-[#171717] transition-all border border-white/20"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
            <span>{isSaved ? 'Saved to Wishlist' : 'Save Package'}</span>
          </button>
        </div>

        {/* Hero Info */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold bg-white/20 backdrop-blur-xs px-3.5 py-1 text-[#E8E1D6]">
              {pkg.duration} Curated Journey
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D8CFC1] flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {pkg.destination}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight">
            {pkg.name}
          </h1>

          <p className="text-base sm:text-lg font-light text-[#E8E1D6] max-w-2xl">
            {pkg.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-light text-[#E8E1D6] border-t border-white/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D8CFC1]" />
              <span>Ideal Season: <strong>{pkg.bestSeason}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D8CFC1]" />
              <span>Recommended For: <strong>{pkg.groupType}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span>Starting From: <strong>{pkg.startingPrice}</strong> / person</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & BOOKING SUMMARY BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
                Journey Narrative
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171717]">
                The Experience Overview
              </h2>
              <p className="text-base font-light text-[#1C1C1C]/90 leading-relaxed">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white border border-[#E8E1D6] p-8 space-y-4 shadow-xs">
              <h3 className="font-serif text-2xl text-[#171717]">
                Journey Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {pkg.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C1C1C] font-light">
                    <Check className="w-4 h-4 text-[#596056] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DAY-BY-DAY ITINERARY */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-[#E8E1D6] pb-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
                    Day-by-Day Pacing
                  </span>
                  <h3 className="font-serif text-3xl text-[#171717] mt-1">
                    Bespoke Daily Itinerary
                  </h3>
                </div>
                <span className="text-xs text-[#6F6B63] font-light">
                  {pkg.itinerary.length} Days Planned
                </span>
              </div>

              <div className="space-y-4">
                {pkg.itinerary.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#E8E1D6] p-6 space-y-2 hover:border-[#171717] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold bg-[#F7F5F0] text-[#596056] px-2.5 py-1 border border-[#E8E1D6]">
                        {item.day}
                      </span>
                      <h4 className="font-serif text-lg text-[#171717] font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-[#6F6B63] leading-relaxed pl-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* INCLUDED & NOT INCLUDED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Included */}
              <div className="bg-white border border-[#E8E1D6] p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#596056]">
                  <Check className="w-5 h-5" />
                  <h4 className="font-serif text-lg text-[#171717] font-semibold">
                    What Is Included
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#1C1C1C]/85 font-light">
                  {pkg.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#596056] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-white border border-[#E8E1D6] p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#6F6B63]">
                  <CloseIcon className="w-5 h-5" />
                  <h4 className="font-serif text-lg text-[#171717] font-semibold">
                    Not Included
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs text-[#6F6B63] font-light">
                  {pkg.notIncluded.map((notInc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CloseIcon className="w-3.5 h-3.5 text-[#D8CFC1] shrink-0 mt-0.5" />
                      <span>{notInc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* GALLERY */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#171717]">
                Journey Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pkg.gallery.map((imgUrl, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6]">
                    <img
                      src={imgUrl}
                      alt={`${pkg.name} Gallery ${i + 1}`}
                      className="w-full h-full object-cover img-luxury-zoom"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Booking & Price Calculator Box (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white border border-[#D8CFC1] p-8 shadow-md space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#596056] font-semibold block">
                  Reserve This Journey
                </span>
                <h3 className="font-serif text-2xl text-[#171717] mt-1">
                  Plan This Itinerary
                </h3>
              </div>

              {/* Guest Calculator */}
              <div className="space-y-3 pt-2 border-t border-[#F7F5F0]">
                <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold">
                  Number of Guests
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`py-2 text-xs font-semibold border transition-colors ${
                        guestCount === num
                          ? 'bg-[#171717] text-white border-[#171717]'
                          : 'bg-[#F7F5F0] text-[#171717] border-[#D8CFC1] hover:border-[#171717]'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Calculation breakdown */}
              <div className="bg-[#F7F5F0] p-4 border border-[#E8E1D6] space-y-2">
                <div className="flex justify-between text-xs text-[#6F6B63]">
                  <span>Rate per traveler</span>
                  <span>{pkg.startingPrice}</span>
                </div>
                <div className="flex justify-between text-xs text-[#6F6B63]">
                  <span>Travelers</span>
                  <span>× {guestCount}</span>
                </div>
                <div className="pt-2 border-t border-[#E8E1D6] flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-wider text-[#171717] font-bold">
                    Estimated Total
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#171717]">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="plan-this-journey-btn"
                onClick={() => onPlanPackage(pkg.name, pkg.destination)}
                className="w-full bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium py-4 hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Plan This Journey</span>
                <Compass className="w-4 h-4" />
              </button>

              <div className="space-y-2 text-[11px] text-[#6F6B63] font-light text-center">
                <p className="flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#596056]" />
                  <span>Complimentary personalized customization</span>
                </p>
                <p>Private air, yacht charters, and hotel upgrades upon request.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

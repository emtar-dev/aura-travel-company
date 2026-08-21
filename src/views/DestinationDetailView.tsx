import React, { useState } from 'react';
import { ArrowLeft, Bookmark, Calendar, Clock, MapPin, Check, Compass, Star, ArrowRight, ArrowUpRight } from 'lucide-react';
import { DESTINATIONS, EXPERIENCES, TRAVEL_PACKAGES, ARTICLES } from '../data/travelData';
import { useWishlist } from '../context/WishlistContext';
import { ExperienceCard } from '../components/ExperienceCard';
import { PackageCard } from '../components/PackageCard';
import { ArticleCard } from '../components/ArticleCard';
import { Article } from '../types';

interface DestinationDetailViewProps {
  destinationId: string;
  onBack: () => void;
  onOpenTripPlanner: (destination: string) => void;
  onSelectExperience: (id: string) => void;
  onSelectPackage: (id: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({
  destinationId,
  onBack,
  onOpenTripPlanner,
  onSelectExperience,
  onSelectPackage,
  onSelectArticle,
}) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const destination = DESTINATIONS.find((d) => d.id === destinationId) || DESTINATIONS[0];
  const isSaved = isInWishlist(destination.id);

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const relatedPackages = TRAVEL_PACKAGES.filter((p) => p.destinationId === destination.id);
  const relatedExperiences = EXPERIENCES.filter((e) => e.destinationId === destination.id);
  const relatedArticles = ARTICLES.filter((a) =>
    a.tags.some((t) => t.toLowerCase().includes(destination.name.toLowerCase()))
  );

  const handleWishlistToggle = () => {
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
    <div id="destination-detail-view" className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-end pb-16 bg-[#171717] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/30 to-black/50" />
        </div>

        {/* Floating Top Nav within Hero */}
        <div className="absolute top-24 left-4 sm:left-8 right-4 sm:right-8 z-20 flex items-center justify-between">
          <button
            id="dest-detail-back-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-[#F7F5F0] px-4 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-[#171717] transition-all border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Destinations</span>
          </button>

          <button
            id="dest-detail-wishlist-btn"
            onClick={handleWishlistToggle}
            className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-[#F7F5F0] px-4 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-[#171717] transition-all border border-white/20"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-[#D8CFC1]' : ''}`} />
            <span>{isSaved ? 'Saved in Wishlist' : 'Save Destination'}</span>
          </button>
        </div>

        {/* Hero Title and Meta Info */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold bg-white/20 backdrop-blur-xs px-3 py-1 text-[#E8E1D6]">
              {destination.category}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8CFC1] flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {destination.country} • {destination.region}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight">
            {destination.name}
          </h1>

          <p className="text-base sm:text-xl font-light text-[#E8E1D6] max-w-2xl">
            {destination.tagline}
          </p>

          {/* Key Facts Pill Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-light text-[#E8E1D6] border-t border-white/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D8CFC1]" />
              <span>Best Season: <strong>{destination.bestSeason}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D8CFC1]" />
              <span>Recommended Stay: <strong>{destination.idealDuration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span>Journeys From: <strong>{destination.startingPrice}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & WHY VISIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Intro (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
              Curator’s Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717]">
              The Essence of {destination.name}
            </h2>
            <p className="text-base font-light text-[#1C1C1C]/90 leading-relaxed">
              {destination.intro}
            </p>
            <p className="text-sm font-light text-[#6F6B63] leading-relaxed">
              {destination.shortDescription}
            </p>

            {/* Why Visit Cards */}
            <div className="pt-6 space-y-4">
              <h3 className="font-serif text-xl text-[#171717]">
                Why Visit with AURA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.whyVisit.map((reason, idx) => (
                  <div key={idx} className="bg-white p-5 border border-[#E8E1D6] space-y-2">
                    <span className="text-[10px] font-mono text-[#596056] block">0{idx + 1}</span>
                    <h4 className="font-serif text-base text-[#171717] font-semibold">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Box & Best Experiences (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D8CFC1] p-8 shadow-sm space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6F6B63] block font-semibold">
                Bespoke Planning
              </span>
              <h3 className="font-serif text-2xl text-[#171717]">
                Craft Your Journey to {destination.name}
              </h3>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                Connect with our destination specialist to design an unhurried, tailor-made itinerary complete with private air, curated villas, and rare access.
              </p>

              <button
                id="dest-detail-plan-cta"
                onClick={() => onOpenTripPlanner(destination.name)}
                className="w-full bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium py-4 hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Plan Your Trip to {destination.name}</span>
                <Compass className="w-4 h-4" />
              </button>
            </div>

            {/* Signature Experiences Quick List */}
            <div className="bg-[#E8E1D6]/40 p-6 border border-[#E8E1D6] space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                Signature Highlights
              </h4>
              <ul className="space-y-2.5">
                {destination.bestExperiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#1C1C1C] font-light">
                    <Check className="w-3.5 h-3.5 text-[#596056] shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED STAYS & SANCTUARIES */}
      <section className="bg-white py-20 border-y border-[#E8E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
              Hand-Selected Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-1">
              Featured Stays in {destination.name}
            </h2>
            <p className="text-xs text-[#6F6B63] font-light mt-1">
              Every property is vetted for architectural excellence, exquisite privacy, and world-class service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destination.featuredStays.map((stay, index) => (
              <div
                key={index}
                className="bg-[#F7F5F0] border border-[#E8E1D6] overflow-hidden flex flex-col group hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-[#E8E1D6]">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover img-luxury-zoom"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold bg-white/95 text-[#171717] px-3 py-1">
                      {stay.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-4 bg-[#171717]/80 backdrop-blur-xs text-[#F7F5F0] text-xs px-2.5 py-1 flex items-center gap-1 font-mono">
                    <Star className="w-3 h-3 text-[#D8CFC1] fill-current" />
                    <span>{stay.rating}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl text-[#171717]">
                      {stay.name}
                    </h3>
                    <p className="text-xs text-[#6F6B63] font-light leading-relaxed mt-2">
                      {stay.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {stay.amenities.map((amenity, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[10px] uppercase tracking-wider bg-white border border-[#E8E1D6] px-2.5 py-1 text-[#6F6B63]"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1D6] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block">
                        Estimated Rates
                      </span>
                      <span className="font-serif text-lg font-bold text-[#171717]">
                        {stay.pricePerNight}
                      </span>
                      <span className="text-[10px] text-[#6F6B63] ml-1">/ night</span>
                    </div>

                    <button
                      onClick={() => onOpenTripPlanner(destination.name)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#171717] hover:text-[#596056]"
                    >
                      <span>Inquire Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURATED PACKAGES & EXPERIENCES IN THIS DESTINATION */}
      {(relatedPackages.length > 0 || relatedExperiences.length > 0) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
              Curated Itineraries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717] mt-1">
              Journeys in {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} onView={onSelectPackage} />
            ))}
            {relatedExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} onView={onSelectExperience} />
            ))}
          </div>
        </section>
      )}

      {/* 5. EDITORIAL INSPIRATION */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
              Editorial Stories
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-1">
              Stories from {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <ArticleCard key={art.id} article={art} onRead={onSelectArticle} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

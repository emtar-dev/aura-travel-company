import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, MapPin, Compass, Package, BookOpen, ArrowRight } from 'lucide-react';
import { DESTINATIONS, EXPERIENCES, TRAVEL_PACKAGES, ARTICLES } from '../data/travelData';
import { Destination, Experience, TravelPackage, Article } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (id: string) => void;
  onSelectExperience: (id: string) => void;
  onSelectPackage: (id: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
  onSelectExperience,
  onSelectPackage,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Destinations' | 'Experiences' | 'Packages' | 'Articles'>('All');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const quickPills = ['Maldives', 'Amalfi Coast', 'Private Yacht', 'Desert', 'Paris', 'Wellness', 'Swiss Alps'];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { destinations: [], experiences: [], packages: [], articles: [], totalCount: 0 };
    }

    const filteredDestinations = DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.shortDescription.toLowerCase().includes(q)
    );

    const filteredExperiences = EXPERIENCES.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.shortDescription.toLowerCase().includes(q)
    );

    const filteredPackages = TRAVEL_PACKAGES.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );

    const filteredArticles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.shortDescription.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );

    const totalCount =
      filteredDestinations.length +
      filteredExperiences.length +
      filteredPackages.length +
      filteredArticles.length;

    return {
      destinations: filterType === 'All' || filterType === 'Destinations' ? filteredDestinations : [],
      experiences: filterType === 'All' || filterType === 'Experiences' ? filteredExperiences : [],
      packages: filterType === 'All' || filterType === 'Packages' ? filteredPackages : [],
      articles: filterType === 'All' || filterType === 'Articles' ? filteredArticles : [],
      totalCount,
    };
  }, [query, filterType]);

  if (!isOpen) return null;

  return (
    <div
      id="search-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      onClick={onClose}
    >
      <motion.div
        id="search-modal-content"
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#F7F5F0] border border-[#D8CFC1] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header & Search Bar */}
        <div className="p-6 border-b border-[#E8E1D6] bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#6F6B63] font-semibold">
              Search AURA Journeys
            </span>
            <button
              id="search-modal-close-btn"
              onClick={onClose}
              className="p-1 text-[#6F6B63] hover:text-[#171717] transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 border-b-2 border-[#171717] pb-2">
            <Search className="w-5 h-5 text-[#6F6B63]" />
            <input
              type="text"
              id="search-input-field"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations, experiences, packages, or stories..."
              className="w-full bg-transparent text-lg sm:text-xl font-serif text-[#171717] placeholder-[#6F6B63]/60 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#6F6B63] hover:text-[#171717]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 text-xs">
            {(['All', 'Destinations', 'Experiences', 'Packages', 'Articles'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-colors ${
                  filterType === type
                    ? 'bg-[#171717] text-white font-medium'
                    : 'bg-[#E8E1D6]/60 text-[#6F6B63] hover:bg-[#E8E1D6] hover:text-[#171717]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results / Suggestion Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!query ? (
            <div className="py-8 text-center space-y-4">
              <Compass className="w-10 h-10 text-[#D8CFC1] mx-auto" />
              <div>
                <p className="text-sm font-serif text-[#171717]">
                  What extraordinary place calls to you?
                </p>
                <p className="text-xs text-[#6F6B63] mt-1 font-light">
                  Type to search across our luxury destinations, yacht charters, wellness retreats, and packages.
                </p>
              </div>

              <div className="pt-4 max-w-md mx-auto">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6B63] mb-2 font-medium">
                  Popular Searches
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {quickPills.map((pill) => (
                    <button
                      key={pill}
                      onClick={() => setQuery(pill)}
                      className="text-xs bg-white border border-[#E8E1D6] px-3 py-1 text-[#171717] hover:border-[#171717] transition-colors"
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.totalCount === 0 ? (
            <div id="search-no-results" className="py-12 text-center space-y-3">
              <p className="font-serif text-xl text-[#171717]">No results found.</p>
              <p className="text-xs text-[#6F6B63] max-w-sm mx-auto font-light">
                We couldn’t find any matches for "{query}". Try exploring destinations like Maldives, Amalfi Coast, Bali, or Paris.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Destinations Matches */}
              {results.destinations.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6F6B63] font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#596056]" />
                    <span>Destinations ({results.destinations.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {results.destinations.map((dest) => (
                      <div
                        key={dest.id}
                        onClick={() => {
                          onSelectDestination(dest.id);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 bg-white border border-[#E8E1D6] hover:border-[#171717] cursor-pointer transition-all group"
                      >
                        <img
                          src={dest.heroImage}
                          alt={dest.name}
                          className="w-14 h-14 object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm text-[#171717] group-hover:text-[#596056] truncate">
                            {dest.name}
                          </h4>
                          <p className="text-[11px] text-[#6F6B63] truncate">{dest.country} • {dest.category}</p>
                          <p className="text-[11px] font-medium text-[#171717] mt-0.5">From {dest.startingPrice}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D8CFC1] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experiences Matches */}
              {results.experiences.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6F6B63] font-semibold">
                    <Compass className="w-3.5 h-3.5 text-[#596056]" />
                    <span>Experiences ({results.experiences.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {results.experiences.map((exp) => (
                      <div
                        key={exp.id}
                        onClick={() => {
                          onSelectExperience(exp.id);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 bg-white border border-[#E8E1D6] hover:border-[#171717] cursor-pointer transition-all group"
                      >
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-14 h-14 object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm text-[#171717] group-hover:text-[#596056] truncate">
                            {exp.title}
                          </h4>
                          <p className="text-[11px] text-[#6F6B63] truncate">{exp.location}</p>
                          <p className="text-[11px] font-medium text-[#171717] mt-0.5">{exp.startingPrice}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D8CFC1] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Packages Matches */}
              {results.packages.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6F6B63] font-semibold">
                    <Package className="w-3.5 h-3.5 text-[#596056]" />
                    <span>Travel Packages ({results.packages.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {results.packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          onSelectPackage(pkg.id);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-2.5 bg-white border border-[#E8E1D6] hover:border-[#171717] cursor-pointer transition-all group"
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-14 h-14 object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm text-[#171717] group-hover:text-[#596056] truncate">
                            {pkg.name}
                          </h4>
                          <p className="text-[11px] text-[#6F6B63] truncate">{pkg.destination} • {pkg.duration}</p>
                          <p className="text-[11px] font-medium text-[#171717] mt-0.5">{pkg.startingPrice}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D8CFC1] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles Matches */}
              {results.articles.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6F6B63] font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-[#596056]" />
                    <span>Editorial Stories ({results.articles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.articles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => {
                          onSelectArticle(art);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 bg-white border border-[#E8E1D6] hover:border-[#171717] cursor-pointer transition-all group"
                      >
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#6F6B63]">
                            {art.category} • {art.readTime}
                          </span>
                          <h4 className="font-serif text-base text-[#171717] group-hover:text-[#596056]">
                            {art.title}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D8CFC1] group-hover:text-[#171717] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

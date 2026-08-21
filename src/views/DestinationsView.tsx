import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../data/travelData';
import { DestinationCard } from '../components/DestinationCard';
import { DestinationCategory } from '../types';
import { Compass, Filter } from 'lucide-react';

interface DestinationsViewProps {
  onSelectDestination: (id: string) => void;
  onOpenTripPlanner: (destination?: string) => void;
}

const CATEGORIES: DestinationCategory[] = [
  'All',
  'Beach',
  'City',
  'Mountain',
  'Desert',
  'Island',
  'Cultural',
];

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onSelectDestination,
  onOpenTripPlanner,
}) => {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesCategory = activeCategory === 'All' || d.category === activeCategory;
      const matchesSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div id="destinations-view" className="pt-28 sm:pt-36 pb-24 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
          Worldwide Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717]">
          Extraordinary Destinations
        </h1>
        <p className="text-sm font-light text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
          From tranquil atolls suspended in turquoise waters to high alpine glaciers and imperial capitals, discover hand-curated places that redefine modern luxury.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E1D6] p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] mr-2 hidden sm:inline font-semibold">
              Category:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-all shrink-0 font-medium ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'bg-[#F7F5F0] text-[#6F6B63] hover:bg-[#E8E1D6] hover:text-[#171717]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              id="destinations-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by name or country..."
              className="w-full bg-[#F7F5F0] border border-[#D8CFC1] px-3.5 py-2 text-xs text-[#171717] placeholder-[#6F6B63] focus:outline-none focus:border-[#171717]"
            />
          </div>
        </div>

        {/* Counter readout */}
        <div className="flex items-center justify-between text-xs text-[#6F6B63] mt-4 px-1">
          <span>Showing {filteredDestinations.length} curated destinations</span>
          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-[#171717] underline hover:text-[#596056]"
            >
              Reset filter
            </button>
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredDestinations.length === 0 ? (
          <div id="destinations-empty-state" className="py-20 text-center space-y-4 bg-white border border-[#E8E1D6]">
            <Compass className="w-10 h-10 text-[#D8CFC1] mx-auto" />
            <h3 className="font-serif text-xl text-[#171717]">No matching destinations</h3>
            <p className="text-xs text-[#6F6B63] max-w-sm mx-auto font-light">
              Try adjusting your category filter or search terms to explore other available locations.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchTerm('');
              }}
              className="bg-[#171717] text-[#F7F5F0] px-6 py-2.5 text-xs uppercase tracking-wider font-medium"
            >
              Show All Destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onExplore={onSelectDestination}
              />
            ))}
          </div>
        )}
      </section>

      {/* Bottom Custom Planning Prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-[#D8CFC1] p-10 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#171717]">
          Seeking a bespoke destination beyond this list?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6B63] font-light max-w-lg mx-auto leading-relaxed">
          Our senior private travel curators craft private journeys across more than 40 private islands, alpine chalets, and historic estates worldwide.
        </p>
        <button
          onClick={() => onOpenTripPlanner()}
          className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 hover:bg-[#333333] transition-colors"
        >
          Consult AURA Curators
        </button>
      </section>

    </div>
  );
};

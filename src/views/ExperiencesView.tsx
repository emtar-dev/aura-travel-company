import React, { useState, useMemo } from 'react';
import { EXPERIENCES } from '../data/travelData';
import { ExperienceCard } from '../components/ExperienceCard';
import { ExperienceCategory } from '../types';
import { Sparkles, Compass } from 'lucide-react';

interface ExperiencesViewProps {
  onSelectExperience: (id: string) => void;
  onOpenTripPlanner: (destination?: string) => void;
}

const CATEGORIES: ExperienceCategory[] = [
  'All',
  'Luxury',
  'Wellness',
  'Dining',
  'Culture',
  'Adventure',
  'Nature',
];

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onSelectExperience,
  onOpenTripPlanner,
}) => {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES.filter((exp) => {
      const matchCat = activeCategory === 'All' || exp.category === activeCategory;
      const matchSearch =
        exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div id="experiences-view" className="pt-28 sm:pt-36 pb-24 space-y-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
          Private Access & Encounters
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717]">
          Curated Experiences
        </h1>
        <p className="text-sm font-light text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
          From private Riva yacht charters on Mediterranean waters to desert star banquets and high-altitude glacier flights, every moment is an art form.
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
                  id={`filter-exp-${cat.toLowerCase()}`}
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
              id="experiences-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search experiences..."
              className="w-full bg-[#F7F5F0] border border-[#D8CFC1] px-3.5 py-2 text-xs text-[#171717] placeholder-[#6F6B63] focus:outline-none focus:border-[#171717]"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#6F6B63] mt-4 px-1">
          <span>Showing {filteredExperiences.length} bespoke experiences</span>
          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-[#171717] underline hover:text-[#596056]"
            >
              Reset category
            </button>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredExperiences.length === 0 ? (
          <div id="experiences-empty-state" className="py-20 text-center space-y-4 bg-white border border-[#E8E1D6]">
            <Compass className="w-10 h-10 text-[#D8CFC1] mx-auto" />
            <h3 className="font-serif text-xl text-[#171717]">No matching experiences</h3>
            <p className="text-xs text-[#6F6B63] max-w-sm mx-auto font-light">
              Try adjusting your category filter or search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#171717] text-[#F7F5F0] px-6 py-2.5 text-xs uppercase tracking-wider font-medium"
            >
              Show All Experiences
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                onView={onSelectExperience}
              />
            ))}
          </div>
        )}
      </section>

      {/* Custom Experience Prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-[#D8CFC1] p-10 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#171717]">
          Have a rare private request in mind?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6B63] font-light max-w-lg mx-auto leading-relaxed">
          From private palace musical recitals to deep ocean submersible charters and private Michelin chef residencies, our private concierge makes the impossible seamless.
        </p>
        <button
          onClick={() => onOpenTripPlanner()}
          className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 hover:bg-[#333333] transition-colors"
        >
          Submit Bespoke Request
        </button>
      </section>

    </div>
  );
};

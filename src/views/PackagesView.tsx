import React, { useState } from 'react';
import { TRAVEL_PACKAGES } from '../data/travelData';
import { PackageCard } from '../components/PackageCard';
import { Compass, Calendar } from 'lucide-react';

interface PackagesViewProps {
  onSelectPackage: (id: string) => void;
  onOpenTripPlanner: (destination?: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  onSelectPackage,
  onOpenTripPlanner,
}) => {
  const [durationFilter, setDurationFilter] = useState<'All' | 'Under 7 Days' | '7+ Days'>('All');

  const filteredPackages = TRAVEL_PACKAGES.filter((p) => {
    if (durationFilter === 'Under 7 Days') {
      return parseInt(p.duration) < 7;
    }
    if (durationFilter === '7+ Days') {
      return parseInt(p.duration) >= 7;
    }
    return true;
  });

  return (
    <div id="packages-view" className="pt-28 sm:pt-36 pb-24 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
          Curated Journeys
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171717]">
          Travel Packages
        </h1>
        <p className="text-sm font-light text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
          Carefully sequenced multi-day itineraries combining world-class accommodations, seamless private transfers, and rare insider access.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8E1D6] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#6F6B63] font-semibold">
              Filter by Duration:
            </span>
            {(['All', 'Under 7 Days', '7+ Days'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setDurationFilter(filter)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                  durationFilter === filter
                    ? 'bg-[#171717] text-white'
                    : 'bg-[#F7F5F0] text-[#6F6B63] hover:bg-[#E8E1D6] hover:text-[#171717]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#6F6B63]">
            Showing {filteredPackages.length} curated packages
          </span>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onView={onSelectPackage}
            />
          ))}
        </div>
      </section>

      {/* Custom Itinerary Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-[#D8CFC1] p-10 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#171717]">
          Prefer a completely custom duration or route?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6B63] font-light max-w-lg mx-auto leading-relaxed">
          Every AURA package can be extended, shortened, or redesigned from scratch to match your personal dates and party requirements.
        </p>
        <button
          onClick={() => onOpenTripPlanner()}
          className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-3.5 hover:bg-[#333333] transition-colors"
        >
          Design Custom Package
        </button>
      </section>

    </div>
  );
};

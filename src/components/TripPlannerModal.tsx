import React, { useState, useEffect } from 'react';
import { X, Compass, Check, Calendar, Users, DollarSign, Sparkles, ArrowRight, Bookmark, CheckCircle2, RotateCcw } from 'lucide-react';
import { DESTINATIONS, DEMO_RECOMMENDATIONS } from '../data/travelData';
import { TravelStyle, TravelInterest, TripRecommendation } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  onNavigateDestination?: (id: string) => void;
}

const TRAVEL_STYLES: TravelStyle[] = ['Luxury', 'Romantic', 'Relaxation', 'Adventure', 'Culture', 'Family'];
const INTEREST_OPTIONS: TravelInterest[] = ['Beach', 'Food', 'Wellness', 'Nature', 'History', 'Shopping', 'Nightlife'];
const BUDGET_OPTIONS = [
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  '$20,000 – $35,000',
  '$35,000+'
];

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  initialDestination,
  onNavigateDestination,
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [destination, setDestination] = useState(initialDestination || 'Maldives');
  const [travelDates, setTravelDates] = useState('October 2026');
  const [travelersCount, setTravelersCount] = useState(2);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Luxury');
  const [budget, setBudget] = useState('$10,000 – $20,000');
  const [interests, setInterests] = useState<TravelInterest[]>(['Beach', 'Wellness', 'Food']);
  const [specialRequests, setSpecialRequests] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommendation, setRecommendation] = useState<TripRecommendation | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setInquirySent(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleInterest = (interest: TravelInterest) => {
    if (interests.includes(interest)) {
      if (interests.length > 1) {
        setInterests(interests.filter((i) => i !== interest));
      }
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Find matching recommendation or compute a bespoke tailored one
      const key = `${travelStyle}-${destination}`;
      const found = DEMO_RECOMMENDATIONS[key];

      if (found) {
        setRecommendation(found);
      } else {
        // Compose bespoke response dynamically
        const destObj = DESTINATIONS.find((d) => d.name.toLowerCase() === destination.toLowerCase()) || DESTINATIONS[0];
        setRecommendation({
          title: `Bespoke ${travelStyle} Journey: ${destObj.name}`,
          summary: `A personalized ${travelStyle.toLowerCase()} escape to ${destObj.name} curated around your passion for ${interests.join(', ')}.`,
          suggestedDestination: destObj.name,
          estimatedTotal: `${budget} total (${travelersCount} travelers)`,
          highlights: [
            `Private luxury transfers throughout ${destObj.name}`,
            `Exclusive access to ${destObj.bestExperiences[0] || 'private excursions'}`,
            `Hand-selected boutique sanctuaries with bespoke amenities`,
            `Dedicated 24/7 AURA on-ground travel curator`
          ],
          curatedStays: destObj.featuredStays.map((s) => s.name),
          dailyPacing: [
            { day: 'Day 1–2', title: 'Arrival & Welcome', activity: `VIP airport greeting and check-in to ${destObj.featuredStays[0]?.name || 'curated retreat'}.` },
            { day: 'Day 3–4', title: 'Immersive Discovery', activity: `Private guided experience tailored to ${interests.slice(0, 2).join(' & ')}.` },
            { day: 'Day 5–7', title: 'Leisure & Farewell', activity: 'Unwind with private dining, bespoke spa treatments, and seamless departure.' }
          ]
        });
      }
      setIsSubmitting(false);
    }, 450);
  };

  const handleSendInquiry = () => {
    setInquirySent(true);
  };

  if (!isOpen) return null;

  return (
    <div
      id="trip-planner-modal-overlay"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        id="trip-planner-modal-container"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#F7F5F0] border border-[#D8CFC1] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-[#E8E1D6] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#171717] text-[#F7F5F0] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#171717]">
                AURA Trip Planner
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6F6B63]">
                Design your bespoke journey
              </p>
            </div>
          </div>
          <button
            id="trip-planner-close-btn"
            onClick={onClose}
            className="p-2 text-[#6F6B63] hover:text-[#171717] transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!recommendation ? (
            <form id="trip-planner-form" onSubmit={handleGeneratePlan} className="space-y-8">
              
              {/* 1. Destination & Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                    1. Preferred Destination
                  </label>
                  <select
                    id="planner-destination-select"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white border border-[#D8CFC1] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.country})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                    2. Desired Travel Window
                  </label>
                  <input
                    type="text"
                    id="planner-travel-dates"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. October 2026 or Fall Season"
                    required
                    className="w-full bg-white border border-[#D8CFC1] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>
              </div>

              {/* 2. Travelers & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                    3. Number of Travelers
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTravelersCount(num)}
                        className={`flex-1 py-2.5 text-xs font-semibold border transition-colors ${
                          travelersCount === num
                            ? 'bg-[#171717] text-white border-[#171717]'
                            : 'bg-white text-[#1C1C1C] border-[#D8CFC1] hover:border-[#171717]'
                        }`}
                      >
                        {num === 6 ? '5+' : num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                    4. Approximate Budget
                  </label>
                  <select
                    id="planner-budget-select"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-[#D8CFC1] px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Travel Style */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                  5. Travel Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {TRAVEL_STYLES.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setTravelStyle(style)}
                      className={`py-3 px-2 text-center text-xs uppercase tracking-wider font-medium border transition-all ${
                        travelStyle === style
                          ? 'bg-[#171717] text-[#F7F5F0] border-[#171717] shadow-sm'
                          : 'bg-white text-[#6F6B63] border-[#E8E1D6] hover:border-[#171717] hover:text-[#171717]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Interests (Multi-select) */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                  6. Experiences & Interests (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((interest) => {
                    const isSelected = interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border flex items-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-[#596056] text-white border-[#596056]'
                            : 'bg-white text-[#6F6B63] border-[#E8E1D6] hover:border-[#6F6B63]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] mb-2">
                  7. Special Requests or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Celebrating 10th anniversary, prefer overwater villas with private infinity pool..."
                  className="w-full bg-white border border-[#D8CFC1] px-4 py-3 text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#E8E1D6] flex justify-end">
                <button
                  type="submit"
                  id="planner-generate-btn"
                  disabled={isSubmitting}
                  className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#333333] transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Curating Journey...' : 'Curate Custom Journey'}</span>
                  <Sparkles className="w-4 h-4 text-[#D8CFC1]" />
                </button>
              </div>
            </form>
          ) : (
            /* Curated Recommendation View */
            <div id="planner-recommendation-view" className="space-y-6 animate-fade-in">
              <div className="bg-white border border-[#D8CFC1] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E1D6] pb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#596056] font-semibold block">
                      AURA Curated Recommendation
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] mt-1">
                      {recommendation.title}
                    </h3>
                    <p className="text-xs text-[#6F6B63] mt-1">
                      Designed for {travelersCount} guests • {travelStyle} Style • {travelDates}
                    </p>
                  </div>

                  <div className="text-left sm:text-right bg-[#F7F5F0] p-3 sm:bg-transparent sm:p-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#6F6B63] block">
                      Estimated Investment
                    </span>
                    <span className="font-serif text-xl font-bold text-[#171717]">
                      {recommendation.estimatedTotal}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-light text-[#1C1C1C]/90 leading-relaxed">
                  {recommendation.summary}
                </p>

                {/* Highlights & Stays Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F7F5F0]">
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171717]">
                      Bespoke Journey Highlights
                    </h4>
                    <ul className="space-y-2">
                      {recommendation.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#1C1C1C]/80 font-light">
                          <Check className="w-3.5 h-3.5 text-[#596056] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171717]">
                      Curated Accommodations
                    </h4>
                    <div className="space-y-2">
                      {recommendation.curatedStays.map((stay, i) => (
                        <div key={i} className="bg-[#F7F5F0] p-3 text-xs flex items-center justify-between border border-[#E8E1D6]">
                          <span className="font-medium text-[#171717]">{stay}</span>
                          <span className="text-[10px] uppercase tracking-wider text-[#596056] font-semibold">
                            AURA Vetted
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Daily Pacing */}
                <div className="pt-4 border-t border-[#F7F5F0] space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171717]">
                    Suggested Journey Pacing
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {recommendation.dailyPacing.map((pace, i) => (
                      <div key={i} className="bg-[#F7F5F0] p-3.5 border border-[#E8E1D6] space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#596056] font-bold">
                          {pace.day}
                        </span>
                        <h5 className="font-serif text-sm text-[#171717] font-semibold">
                          {pace.title}
                        </h5>
                        <p className="text-[11px] text-[#6F6B63] font-light leading-relaxed">
                          {pace.activity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquiry Success or Action Bar */}
              {inquirySent ? (
                <div id="planner-inquiry-success" className="bg-[#596056] text-white p-5 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8E1D6] shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Your curated itinerary request has been submitted.</p>
                    <p className="text-xs text-[#E8E1D6]/80 mt-0.5">
                      An AURA Senior Travel Curator will review your selections and connect with you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setRecommendation(null)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#6F6B63] hover:text-[#171717]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Adjust Preferences</span>
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      id="planner-save-btn"
                      onClick={() => {
                        toggleWishlist({
                          id: `plan-${recommendation.suggestedDestination.toLowerCase()}`,
                          type: 'package',
                          title: recommendation.title,
                          subtitle: `${recommendation.suggestedDestination} • ${travelStyle}`,
                          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
                          price: recommendation.estimatedTotal,
                          location: recommendation.suggestedDestination,
                        });
                      }}
                      className="flex-1 sm:flex-none border border-[#171717] px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#171717] hover:bg-[#E8E1D6] transition-colors"
                    >
                      Save Recommendation
                    </button>

                    <button
                      type="button"
                      id="planner-inquiry-btn"
                      onClick={handleSendInquiry}
                      className="flex-1 sm:flex-none bg-[#171717] text-[#F7F5F0] px-6 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#333333] transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Request This Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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

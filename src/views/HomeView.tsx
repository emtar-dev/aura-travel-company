import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Shield, HeartHandshake, Award, CheckCircle2, ArrowUpRight, Anchor, Sun, Trees, Landmark } from 'lucide-react';
import { DESTINATIONS, EXPERIENCES, TRAVEL_PACKAGES, ARTICLES, WHY_AURA_POINTS } from '../data/travelData';
import { DestinationCard } from '../components/DestinationCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { PackageCard } from '../components/PackageCard';
import { ArticleCard } from '../components/ArticleCard';
import { Article } from '../types';

interface HomeViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenTripPlanner: (destination?: string) => void;
  onSelectDestination: (id: string) => void;
  onSelectExperience: (id: string) => void;
  onSelectPackage: (id: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenTripPlanner,
  onSelectDestination,
  onSelectExperience,
  onSelectPackage,
  onSelectArticle,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
  };

  const featuredDestinations = DESTINATIONS.filter((d) =>
    ['maldives', 'amalfi-coast', 'paris', 'bali', 'dubai', 'istanbul'].includes(d.id)
  );

  const whyIcons = [Compass, Sparkles, Landmark, Shield];

  return (
    <div id="home-view" className="space-y-24 sm:space-y-32 pb-16">
      
      {/* 1. HERO SECTION */}
      <section
        id="home-hero-section"
        className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#171717] overflow-hidden"
      >
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&auto=format&fit=crop"
            alt="AURA Luxury Travel Solitude"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/45 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 pt-20">
          <div className="inline-flex items-center gap-2 border border-white/25 px-4 py-1.5 backdrop-blur-xs text-[11px] uppercase tracking-[0.3em] text-[#E8E1D6]">
            <span>Bespoke Journeys & Curated Retreats</span>
          </div>

          <h1
            id="hero-headline"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-normal uppercase leading-[1.08]"
          >
            TRAVEL BEAUTIFULLY.
          </h1>

          <p
            id="hero-supporting-text"
            className="text-base sm:text-xl font-light text-[#E8E1D6] max-w-2xl mx-auto leading-relaxed"
          >
            Discover extraordinary places, unforgettable experiences, and journeys curated around you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              id="hero-explore-destinations-btn"
              onClick={() => onNavigate('destinations')}
              className="w-full sm:w-auto bg-white text-[#171717] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#F7F5F0] transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-plan-trip-btn"
              onClick={() => onOpenTripPlanner()}
              className="w-full sm:w-auto border border-white/80 text-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-white hover:text-[#171717] transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
            >
              <span>Plan Your Trip</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom subtle scroll helper */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E8E1D6]/70 flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll to Discover</span>
          <div className="w-[1px] h-6 bg-[#E8E1D6]/40 animate-bounce mt-1" />
        </div>
      </section>

      {/* 2. FEATURED DESTINATIONS */}
      <section id="featured-destinations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
              Curated Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-1">
              Where will you go next?
            </h2>
          </div>
          <button
            id="view-all-destinations-btn"
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] hover:text-[#596056] transition-colors pb-1 border-b border-[#171717]"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onExplore={onSelectDestination}
            />
          ))}
        </div>
      </section>

      {/* 3. WHY AURA */}
      <section id="why-aura-section" className="bg-[#E8E1D6]/45 py-20 border-y border-[#E8E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold">
              The AURA Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717]">
              Travel, thoughtfully curated.
            </h2>
            <p className="text-sm font-light text-[#6F6B63] leading-relaxed">
              We transcend conventional tourism to orchestrate deeply personal, high-touch journeys rooted in privacy, authenticity, and rare access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_AURA_POINTS.map((point, index) => {
              const IconComponent = whyIcons[index] || Compass;
              return (
                <div
                  key={point.title}
                  id={`why-point-${index}`}
                  className="bg-white p-8 border border-[#E8E1D6] space-y-4 hover:border-[#171717] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F7F5F0] border border-[#E8E1D6] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#171717] font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL SECTION */}
      <section id="editorial-banner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#171717] text-white overflow-hidden border border-[#333333]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Left Narrative */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8CFC1] font-semibold">
                An Editorial Perspective
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                THE ART OF GETTING AWAY.
              </h2>
              <p className="text-sm font-light text-[#E8E1D6]/90 leading-relaxed max-w-lg">
                From quiet island mornings to unforgettable nights in the world's most vibrant cities, AURA turns travel into an experience worth remembering.
              </p>
              <div className="pt-2">
                <button
                  id="editorial-discover-btn"
                  onClick={() => onNavigate('about')}
                  className="bg-white text-[#171717] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#E8E1D6] transition-colors inline-flex items-center gap-2"
                >
                  <span>Discover AURA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Large Photograph */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
                alt="The Art of Getting Away - Positano Amalfi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#171717] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED EXPERIENCES */}
      <section id="featured-experiences-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
              Extraordinary Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-1">
              Curated Experiences
            </h2>
          </div>
          <button
            id="view-all-experiences-btn"
            onClick={() => onNavigate('experiences')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] hover:text-[#596056] transition-colors pb-1 border-b border-[#171717]"
          >
            <span>View All Experiences</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onView={onSelectExperience}
            />
          ))}
        </div>
      </section>

      {/* 6. TRAVEL PACKAGES */}
      <section id="featured-packages-section" className="bg-[#E8E1D6]/35 py-20 border-y border-[#E8E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold block">
                Turnkey Itineraries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] mt-1">
                Journeys designed for you.
              </h2>
            </div>
            <button
              id="view-all-packages-btn"
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#171717] hover:text-[#596056] transition-colors pb-1 border-b border-[#171717]"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAVEL_PACKAGES.slice(0, 4).map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onView={onSelectPackage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRAVEL INSPIRATION (EDITORIAL ARTICLES) */}
      <section id="travel-inspiration-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#596056] font-semibold">
            Journal & Essays
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717]">
            Travel inspiration
          </h2>
          <p className="text-xs text-[#6F6B63] font-light">
            Essays on architectural living, slow wanderlust, and remote wonders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onRead={onSelectArticle}
            />
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION */}
      <section id="home-newsletter-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D8CFC1] p-8 sm:p-16 text-center space-y-6 shadow-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
            AURA Dispatch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717]">
            Travel beautifully.
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#6F6B63] max-w-lg mx-auto leading-relaxed">
            Get destination inspiration, curated travel ideas, and exclusive AURA offers.
          </p>

          {newsletterSuccess ? (
            <div
              id="newsletter-hero-success"
              className="bg-[#F7F5F0] border border-[#596056] p-6 max-w-md mx-auto text-[#171717] flex items-center justify-center gap-3 animate-fade-in"
            >
              <CheckCircle2 className="w-5 h-5 text-[#596056]" />
              <p className="font-serif text-lg">You're on the list.</p>
            </div>
          ) : (
            <form
              id="home-newsletter-form"
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto space-y-3"
            >
              <div className="flex border border-[#171717] bg-[#F7F5F0] focus-within:ring-1 focus-within:ring-[#171717]">
                <input
                  type="email"
                  id="home-newsletter-input"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 text-xs text-[#171717] placeholder-[#6F6B63] bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  id="home-newsletter-submit-btn"
                  className="bg-[#171717] text-[#F7F5F0] px-6 text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#333333] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {newsletterError && (
                <p className="text-xs text-rose-600">{newsletterError}</p>
              )}
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

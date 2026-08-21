import React from 'react';
import { Compass, Sparkles, Shield, HeartHandshake, ArrowRight, Eye, Check } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenTripPlanner: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenTripPlanner }) => {
  return (
    <div id="about-view" className="pt-28 sm:pt-36 pb-24 space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
            About AURA
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#171717] leading-tight">
            Curated journeys. Extraordinary places.
          </h1>
          <p className="text-base sm:text-lg font-light text-[#6F6B63] leading-relaxed">
            AURA is dedicated to the art of meaningful wanderlust—where unhurried time, singular architectural beauty, and immersive cultural encounters meet.
          </p>
        </div>

        {/* Large Editorial Image */}
        <div className="mt-12 aspect-[21/9] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6]">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000&auto=format&fit=crop"
            alt="AURA Luxury Architecture & Solitude"
            className="w-full h-full object-cover brightness-[0.92]"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
              Origins & Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717]">
              Our Story
            </h2>
            <p className="text-sm sm:text-base font-light text-[#1C1C1C]/90 leading-relaxed">
              AURA was conceived from a simple observation: modern travel had become hurried, formulaic, and fragmented. Discerning voyagers were seeking something deeper—not just luxury amenities, but genuine space to breathe, reflect, and connect with extraordinary environments.
            </p>
            <p className="text-sm font-light text-[#6F6B63] leading-relaxed">
              We set out to build a bespoke travel atelier focused on singular aesthetics, pristine natural sanctuaries, and time-honored hospitality traditions across the globe.
            </p>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6]">
            <img
              src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop"
              alt="Our Story - Santorini Caldera"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* 3. OUR PHILOSOPHY */}
      <section className="bg-[#E8E1D6]/40 py-20 border-y border-[#E8E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold">
              The Guiding Principle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717]">
              Our Philosophy
            </h2>
            <p className="text-sm font-light text-[#6F6B63]">
              Four pillars that shape every journey we curate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-[#E8E1D6] space-y-3">
              <span className="font-mono text-xs text-[#596056] block">01 / Stillness</span>
              <h3 className="font-serif text-xl text-[#171717] font-semibold">
                Unhurried Pacing
              </h3>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                We believe true luxury is having time to savor a morning espresso by the sea or an evening breeze in a mountain valley without rushing to check off a checklist.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E8E1D6] space-y-3">
              <span className="font-mono text-xs text-[#596056] block">02 / Architectural Purity</span>
              <h3 className="font-serif text-xl text-[#171717] font-semibold">
                Sanctuary Living
              </h3>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                Every villa, palace, and chalet in our portfolio is chosen for its harmonious dialogue with its surrounding natural landscape.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E8E1D6] space-y-3">
              <span className="font-mono text-xs text-[#596056] block">03 / Rare Access</span>
              <h3 className="font-serif text-xl text-[#171717] font-semibold">
                Bespoke Intimacy
              </h3>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                After-hours museum visits, private island sandbank banquets, and direct relationships with local custodians unlock extraordinary perspective.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E8E1D6] space-y-3">
              <span className="font-mono text-xs text-[#596056] block">04 / Absolute Care</span>
              <h3 className="font-serif text-xl text-[#171717] font-semibold">
                Frictionless Service
              </h3>
              <p className="text-xs text-[#6F6B63] font-light leading-relaxed">
                From pre-departure luggage coordination to 24/7 dedicated travel curators, our care is intuitive, discreet, and always dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE CURATE & TRAVEL WITH INTENTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 aspect-[4/3] overflow-hidden bg-[#E8E1D6] border border-[#E8E1D6] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
              alt="How We Curate"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
              Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171717]">
              How We Curate
            </h2>
            <p className="text-sm sm:text-base font-light text-[#1C1C1C]/90 leading-relaxed">
              We do not rely on generic booking engines or mass aggregator feeds. Every destination, property, and private guide is vetted through personal relationships, meticulous site visits, and stringent aesthetic criteria.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#1C1C1C] font-light">
                <Check className="w-4 h-4 text-[#596056] shrink-0 mt-0.5" />
                <span>Audited for noise insulation, bed comfort, view authenticity, and culinary integrity.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#1C1C1C] font-light">
                <Check className="w-4 h-4 text-[#596056] shrink-0 mt-0.5" />
                <span>Dedicated relationships with estate owners, master boat captains, and private sommeliers.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#1C1C1C] font-light">
                <Check className="w-4 h-4 text-[#596056] shrink-0 mt-0.5" />
                <span>Zero hidden fees, transparent bespoke pricing, and round-the-clock concierge support.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Travel with intention block */}
        <div className="bg-white border border-[#D8CFC1] p-8 sm:p-14 text-center space-y-6 shadow-sm">
          <span className="text-xs uppercase tracking-[0.3em] text-[#596056] font-semibold block">
            The Invitation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717]">
            Travel With Intention
          </h2>
          <p className="text-sm font-light text-[#6F6B63] max-w-xl mx-auto leading-relaxed">
            Whether you dream of waking to the sound of azure tides in the Maldives or watching the sun set over Positano from a private yacht, we are ready to craft your next unforgettable chapter.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenTripPlanner()}
              className="bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#333333] transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

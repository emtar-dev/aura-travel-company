import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Instagram, Globe, Mail, Shield, Phone, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, detailId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const handleLink = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#171717] text-[#E8E1D6] pt-20 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#333333]">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-serif text-3xl text-white tracking-[0.2em] font-bold block">
                AURA
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D8CFC1] mt-1">
                Curated journeys. Extraordinary places.
              </p>
            </div>
            <p className="text-sm font-light text-[#D8CFC1]/80 leading-relaxed max-w-sm">
              Crafting bespoke global expeditions, private overwater sanctuaries, and timeless cultural discoveries with effortless elegance.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#site-footer"
                aria-label="Instagram"
                className="w-9 h-9 border border-[#333333] flex items-center justify-center text-[#E8E1D6] hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#site-footer"
                aria-label="Global Network"
                className="w-9 h-9 border border-[#333333] flex items-center justify-center text-[#E8E1D6] hover:text-white hover:border-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#site-footer"
                aria-label="Contact Concierge"
                className="w-9 h-9 border border-[#333333] flex items-center justify-center text-[#E8E1D6] hover:text-white hover:border-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-[#D8CFC1]/80">
              <li>
                <button
                  id="footer-link-destinations"
                  onClick={() => handleLink('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  id="footer-link-experiences"
                  onClick={() => handleLink('experiences')}
                  className="hover:text-white transition-colors"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  id="footer-link-packages"
                  onClick={() => handleLink('packages')}
                  className="hover:text-white transition-colors"
                >
                  Travel Packages
                </button>
              </li>
              <li>
                <button
                  id="footer-link-inspiration"
                  onClick={() => handleLink('home')}
                  className="hover:text-white transition-colors"
                >
                  Travel Inspiration
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-[#D8CFC1]/80">
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition-colors"
                >
                  About AURA
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  id="footer-link-careers"
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition-colors"
                >
                  Travel Support & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-xl text-white">Travel beautifully.</h3>
            <p className="text-xs text-[#D8CFC1]/80 font-light leading-relaxed">
              Get destination inspiration, curated travel ideas, and exclusive AURA private previews delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div
                id="footer-newsletter-success"
                className="bg-[#242424] border border-[#596056] p-4 text-[#F7F5F0] flex items-center gap-3 animate-fade-in"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D8CFC1] shrink-0" />
                <div>
                  <p className="text-sm font-medium">You're on the list.</p>
                  <p className="text-xs text-[#D8CFC1]/70 mt-0.5">
                    Welcome to the private world of AURA.
                  </p>
                </div>
              </div>
            ) : (
              <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border border-[#333333] focus-within:border-[#D8CFC1] transition-colors bg-[#1C1C1C]">
                  <input
                    type="email"
                    id="footer-newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent px-4 py-3 text-xs text-white placeholder-[#6F6B63] focus:outline-none"
                  />
                  <button
                    type="submit"
                    id="footer-newsletter-submit"
                    className="bg-[#E8E1D6] text-[#171717] px-5 text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors shrink-0 flex items-center justify-center"
                  >
                    Subscribe
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6F6B63]">
          <p>© 2026 AURA. All rights reserved. Fictional luxury travel portfolio project.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLink('about')}
              className="hover:text-[#D8CFC1] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleLink('about')}
              className="hover:text-[#D8CFC1] transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => handleLink('contact')}
              className="hover:text-[#D8CFC1] transition-colors"
            >
              Concierge
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

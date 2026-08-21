import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, Compass, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenSearch: () => void;
  onOpenTripPlanner: (preselectedDestination?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenTripPlanner,
}) => {
  const { wishlist } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Destinations', view: 'destinations' },
    { name: 'Experiences', view: 'experiences' },
    { name: 'Travel Packages', view: 'packages' },
    { name: 'About', view: 'about' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeHero = currentView === 'home' && !isScrolled;

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D6] py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="group text-left focus:outline-none"
        >
          <span
            className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] transition-colors duration-300 block ${
              isScrolled ? 'text-[#171717]' : 'text-white'
            }`}
          >
            AURA
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.35em] block transition-colors duration-300 -mt-1 font-medium ${
              isScrolled ? 'text-[#6F6B63]' : 'text-[#E8E1D6]'
            }`}
          >
            Travel beautifully
          </span>
        </button>

        {/* Center: Desktop Navigation */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.name}
                id={`nav-link-${link.view}`}
                onClick={() => handleLinkClick(link.view)}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-all relative py-1 focus:outline-none ${
                  isScrolled
                    ? isActive
                      ? 'text-[#171717] font-semibold'
                      : 'text-[#6F6B63] hover:text-[#171717]'
                    : isActive
                    ? 'text-white font-semibold'
                    : 'text-[#E8E1D6] hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[1.5px] ${
                      isScrolled ? 'bg-[#171717]' : 'bg-white'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Search Button */}
          <button
            id="nav-search-button"
            onClick={onOpenSearch}
            aria-label="Search destinations, experiences, and packages"
            className={`p-2 transition-colors focus:outline-none rounded-full ${
              isScrolled
                ? 'text-[#1C1C1C] hover:bg-[#E8E1D6]/60'
                : 'text-white hover:bg-white/15'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Button */}
          <button
            id="nav-wishlist-button"
            onClick={() => handleLinkClick('wishlist')}
            aria-label={`View Wishlist (${wishlist.length} items)`}
            className={`p-2 relative transition-colors focus:outline-none rounded-full ${
              isScrolled
                ? 'text-[#1C1C1C] hover:bg-[#E8E1D6]/60'
                : 'text-white hover:bg-white/15'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span
                id="nav-wishlist-badge"
                className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#596056] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#F7F5F0]"
              >
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Plan Your Trip CTA */}
          <button
            id="nav-plan-trip-cta"
            onClick={() => onOpenTripPlanner()}
            className={`hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium px-5 py-2.5 transition-all duration-300 focus:outline-none ${
              isScrolled
                ? 'bg-[#171717] text-[#F7F5F0] hover:bg-[#333333]'
                : 'bg-white text-[#171717] hover:bg-[#F7F5F0] shadow-md'
            }`}
          >
            <span>Plan Your Trip</span>
            <Compass className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="nav-mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-2 lg:hidden transition-colors focus:outline-none rounded-full ${
              isScrolled
                ? 'text-[#1C1C1C] hover:bg-[#E8E1D6]/60'
                : 'text-white hover:bg-white/15'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#F7F5F0] border-b border-[#E8E1D6] px-6 py-6 shadow-xl text-[#1C1C1C] overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6F6B63] font-semibold border-b border-[#E8E1D6] pb-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.name}
                    id={`mobile-nav-link-${link.view}`}
                    onClick={() => handleLinkClick(link.view)}
                    className={`flex items-center justify-between text-left py-2 font-serif text-lg transition-colors focus:outline-none ${
                      isActive ? 'text-[#171717] font-bold' : 'text-[#6F6B63] hover:text-[#171717]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#171717]' : 'text-[#D8CFC1]'}`} />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#E8E1D6] flex flex-col space-y-3">
                <button
                  id="mobile-nav-wishlist-btn"
                  onClick={() => handleLinkClick('wishlist')}
                  className="flex items-center justify-between py-2 text-sm text-[#1C1C1C]"
                >
                  <span className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#596056]" />
                    Saved Wishlist
                  </span>
                  <span className="text-xs bg-[#E8E1D6] px-2 py-0.5 font-medium rounded-full">
                    {wishlist.length}
                  </span>
                </button>

                <button
                  id="mobile-nav-plan-trip-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTripPlanner();
                  }}
                  className="w-full bg-[#171717] text-[#F7F5F0] text-xs uppercase tracking-[0.18em] py-3 font-medium flex items-center justify-center gap-2 shadow-md hover:bg-[#333333] transition-colors"
                >
                  <span>Plan Your Trip</span>
                  <Compass className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

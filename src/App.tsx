import React, { useState, useEffect } from 'react';
import { WishlistProvider } from './context/WishlistContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { SearchModal } from './components/SearchModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { ArticleModal } from './components/ArticleModal';
import { ExperienceDetailModal } from './views/ExperienceDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { DestinationsView } from './views/DestinationsView';
import { DestinationDetailView } from './views/DestinationDetailView';
import { ExperiencesView } from './views/ExperiencesView';
import { PackagesView } from './views/PackagesView';
import { PackageDetailView } from './views/PackageDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { WishlistView } from './views/WishlistView';

// Types & Data
import { Article, Experience } from './types';
import { EXPERIENCES } from './data/travelData';

export function AppContent() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('maldives');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('maldives-atoll-solitude');
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [plannerPrefillDestination, setPlannerPrefillDestination] = useState<string | undefined>(undefined);

  // Scroll to top on view transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedDestinationId, selectedPackageId]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K for Search, Escape to dismiss)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsPlannerOpen(false);
        setActiveExperience(null);
        setActiveArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers for deep navigation
  const handleNavigate = (view: string, detailId?: string) => {
    if (view === 'destination-detail' && detailId) {
      setSelectedDestinationId(detailId);
      setCurrentView('destination-detail');
    } else if (view === 'package-detail' && detailId) {
      setSelectedPackageId(detailId);
      setCurrentView('package-detail');
    } else {
      setCurrentView(view);
    }
  };

  const handleSelectDestination = (id: string) => {
    setSelectedDestinationId(id);
    setCurrentView('destination-detail');
  };

  const handleSelectPackage = (id: string) => {
    setSelectedPackageId(id);
    setCurrentView('package-detail');
  };

  const handleSelectExperience = (id: string) => {
    const exp = EXPERIENCES.find((e) => e.id === id);
    if (exp) {
      setActiveExperience(exp);
    }
  };

  const handleOpenTripPlanner = (destination?: string) => {
    setPlannerPrefillDestination(destination);
    setIsPlannerOpen(true);
  };

  const handlePlanPackage = (pkgName: string, destination: string) => {
    setPlannerPrefillDestination(destination);
    setIsPlannerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] font-sans antialiased selection:bg-[#171717] selection:text-[#F7F5F0]">
      {/* Toast Notification Container */}
      <Toast />

      {/* Global Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTripPlanner={() => handleOpenTripPlanner()}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenTripPlanner={handleOpenTripPlanner}
            onSelectDestination={handleSelectDestination}
            onSelectExperience={handleSelectExperience}
            onSelectPackage={handleSelectPackage}
            onSelectArticle={(article) => setActiveArticle(article)}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationsView
            onSelectDestination={handleSelectDestination}
            onOpenTripPlanner={handleOpenTripPlanner}
          />
        )}

        {currentView === 'destination-detail' && (
          <DestinationDetailView
            destinationId={selectedDestinationId}
            onBack={() => setCurrentView('destinations')}
            onOpenTripPlanner={handleOpenTripPlanner}
            onSelectExperience={handleSelectExperience}
            onSelectPackage={handleSelectPackage}
            onSelectArticle={(article) => setActiveArticle(article)}
          />
        )}

        {currentView === 'experiences' && (
          <ExperiencesView
            onSelectExperience={handleSelectExperience}
            onOpenTripPlanner={handleOpenTripPlanner}
          />
        )}

        {currentView === 'packages' && (
          <PackagesView
            onSelectPackage={handleSelectPackage}
            onOpenTripPlanner={handleOpenTripPlanner}
          />
        )}

        {currentView === 'package-detail' && (
          <PackageDetailView
            packageId={selectedPackageId}
            onBack={() => setCurrentView('packages')}
            onPlanPackage={handlePlanPackage}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenTripPlanner={() => handleOpenTripPlanner()}
          />
        )}

        {currentView === 'contact' && <ContactView />}

        {currentView === 'wishlist' && (
          <WishlistView
            onNavigate={handleNavigate}
            onOpenTripPlanner={() => handleOpenTripPlanner()}
            onSelectDestination={handleSelectDestination}
            onSelectExperience={handleSelectExperience}
            onSelectPackage={handleSelectPackage}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTripPlanner={() => handleOpenTripPlanner()}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={handleSelectDestination}
        onSelectExperience={handleSelectExperience}
        onSelectPackage={handleSelectPackage}
      />

      {/* Interactive Trip Planner Modal */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        initialDestination={plannerPrefillDestination}
        onNavigateToContact={() => {
          setIsPlannerOpen(false);
          setCurrentView('contact');
        }}
      />

      {/* Experience Details Modal */}
      <ExperienceDetailModal
        experience={activeExperience}
        onClose={() => setActiveExperience(null)}
        onPlanExperience={(exp) => {
          setActiveExperience(null);
          handleOpenTripPlanner(exp.location);
        }}
      />

      {/* Editorial Article Reading Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onPlanTrip={() => {
          setActiveArticle(null);
          handleOpenTripPlanner();
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <WishlistProvider>
      <AppContent />
    </WishlistProvider>
  );
}


export type DestinationCategory = 'All' | 'Beach' | 'City' | 'Mountain' | 'Desert' | 'Island' | 'Cultural';
export type ExperienceCategory = 'All' | 'Adventure' | 'Wellness' | 'Dining' | 'Culture' | 'Nature' | 'Luxury';
export type TravelStyle = 'Luxury' | 'Adventure' | 'Relaxation' | 'Culture' | 'Romantic' | 'Family';
export type TravelInterest = 'Food' | 'Beach' | 'Shopping' | 'Nature' | 'History' | 'Nightlife' | 'Wellness';

export interface FeaturedStay {
  name: string;
  type: string;
  image: string;
  pricePerNight: string;
  rating: number;
  description: string;
  amenities: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  category: 'Beach' | 'City' | 'Mountain' | 'Desert' | 'Island' | 'Cultural';
  tagline: string;
  shortDescription: string;
  intro: string;
  whyVisit: { title: string; description: string }[];
  heroImage: string;
  gallery: string[];
  bestExperiences: string[];
  featuredStays: FeaturedStay[];
  startingPrice: string;
  featured: boolean;
  bestSeason: string;
  idealDuration: string;
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  destinationId?: string;
  category: 'Adventure' | 'Wellness' | 'Dining' | 'Culture' | 'Nature' | 'Luxury';
  shortDescription: string;
  longDescription: string;
  duration: string;
  startingPrice: string;
  image: string;
  gallery?: string[];
  highlights: string[];
  included: string[];
  featured: boolean;
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  image?: string;
  highlights?: string[];
}

export interface TravelPackage {
  id: string;
  name: string;
  duration: string;
  destination: string;
  destinationId: string;
  shortDescription: string;
  overview: string;
  startingPrice: string;
  priceNumber: number;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  bestSeason: string;
  groupType: string;
  featured: boolean;
}

export interface Article {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string[];
  tags: string[];
}

export interface WishlistItem {
  id: string;
  type: 'destination' | 'experience' | 'package';
  title: string;
  subtitle: string;
  image: string;
  price?: string;
  location?: string;
}

export interface TripPlannerData {
  destination: string;
  travelDates: string;
  travelersCount: number;
  travelStyle: TravelStyle;
  budgetRange: string;
  interests: TravelInterest[];
  specialRequests?: string;
}

export interface TripRecommendation {
  title: string;
  summary: string;
  suggestedDestination: string;
  estimatedTotal: string;
  highlights: string[];
  curatedStays: string[];
  dailyPacing: { day: string; title: string; activity: string }[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelersCount: number;
  message: string;
}

import { Destination, Experience, TravelPackage, Article } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Republic of Maldives',
    region: 'Indian Ocean',
    category: 'Island',
    tagline: 'Turquoise solitude and private overwater sanctuaries.',
    shortDescription: 'Unrivaled marine seclusion, pristine coral reefs, and private overwater villas suspended above crystalline lagoons.',
    intro: 'Scattered across the azure expanse of the Indian Ocean, the Maldives represents the pinnacle of private island living. Here, days unfold in rhythm with gentle tides, private catamaran charters, and bespoke culinary journeys served on private sandbanks beneath a canopy of stars.',
    whyVisit: [
      {
        title: 'Bespoke Overwater Architecture',
        description: 'Private villas featuring retractable roofs for stargazing, infinity plunge pools, and direct ocean access.'
      },
      {
        title: 'Pristine Marine Biodiversity',
        description: 'Snorkel alongside gentle manta rays and sea turtles in protected UNESCO biosphere reserves.'
      },
      {
        title: 'Castaway Dining Experiences',
        description: 'Private chefs curating customized seafood feasts on secluded sandbars at sunset.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Sandbank Sunset Dinner with Champagne',
      'Manta Ray & Whale Shark Submarine Safari',
      'Ayurvedic Ocean Pavilion Wellness Treatment',
      'Bioluminescent Night Dive in Baa Atoll'
    ],
    featuredStays: [
      {
        name: 'Soneva Fushi Private Reserve',
        type: 'Private Island Villa',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$2,400',
        rating: 4.98,
        description: 'Barefoot luxury sanctuary with private seawater pool, water slide, and dedicated personal butler.',
        amenities: ['Private Beach', 'Personal Butler', 'Ocean Observatory', 'Wellness Spa']
      },
      {
        name: 'Cheval Blanc Randheli',
        type: 'Ultra-Luxury Atoll Resort',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$3,100',
        rating: 4.99,
        description: 'Artfully designed villas by Jean-Michel Gathy, private Guerlain spa island, and French haute cuisine.',
        amenities: ['Private Seaplane', 'Guerlain Spa', 'Wine Cellar', 'Infinity Pool']
      }
    ],
    startingPrice: '$4,800',
    featured: true,
    bestSeason: 'November – April',
    idealDuration: '7 – 10 Days'
  },
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Southern Europe',
    category: 'Beach',
    tagline: 'Dramatic cliffside pastel villages and Mediterranean glamour.',
    shortDescription: 'Terraced lemon groves, cliff-hugging pastel palazzos, and leisurely Riva yacht cruises along the sun-drenched Tyrrhenian Sea.',
    intro: 'Carved into soaring limestone cliffs overlooking cobalt Mediterranean waters, the Amalfi Coast has long enchanted artists, poets, and discerning voyagers. From Positano’s cascading bougainvillea to Ravello’s tranquil cliffside gardens, each enclave exudes effortless Italian elegance.',
    whyVisit: [
      {
        title: 'Private Riva Boat Charters',
        description: 'Sail to hidden sea grottos and dock directly at secluded seaside trattorias for fresh crudo.'
      },
      {
        title: 'Cliffside Historic Palazzos',
        description: 'Stay in meticulously restored 18th-century cliffside estates with sweeping sea panoramas.'
      },
      {
        title: 'Epicurean Tradition',
        description: 'Taste sun-ripened sfusato lemons, aged Campania wines, and freshly caught Mediterranean branzino.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Sunset Yacht Cruise along Capri & the Faraglioni',
      'Private Lemon Grove Harvest & Limoncello Atelier',
      'Private Concert in the Gardens of Villa Rufolo',
      'Helicopter Transfer over the Gulf of Naples'
    ],
    featuredStays: [
      {
        name: 'Le Sirenuse, Positano',
        type: 'Historic Cliffside Luxury',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,850',
        rating: 4.96,
        description: 'Iconic family-run palace overlooking Positano bay, adorned with museum-quality antiques and Michelin-starred dining.',
        amenities: ['Caldera Views', 'Champagne Bar', 'Aveda Spa', 'Private Riva Boat']
      },
      {
        name: 'Belmond Hotel Caruso, Ravello',
        type: 'Clifftop Medieval Palace',
        image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$2,200',
        rating: 4.97,
        description: 'An 11th-century palace perched 1,000 feet above the sea with an iconic infinity pool merging into the horizon.',
        amenities: ['Suspended Infinity Pool', 'Terraced Gardens', 'Private Yacht', 'Cooking Masterclasses']
      }
    ],
    startingPrice: '$5,200',
    featured: true,
    bestSeason: 'May – October',
    idealDuration: '6 – 8 Days'
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Western Europe',
    category: 'City',
    tagline: 'Haute couture, timeless architecture, and culinary mastery.',
    shortDescription: 'The city of light redefined through private Louvre viewings, discreet boutique salons, and Michelin triple-starred gastronomy.',
    intro: 'Paris captivates through its intimate courtyards, grand Haussmannian avenues, and peerless artistic legacy. With AURA, experience the French capital away from the crowds—through private museum salons after twilight, master perfumer appointments on Place Vendôme, and private cellar tastings with legendary sommeliers.',
    whyVisit: [
      {
        title: 'After-Hours Cultural Access',
        description: 'Wander the halls of the Musée du Louvre or Musée d’Orsay in quiet contemplation after public closing.'
      },
      {
        title: 'World-Leading Haute Gastronomy',
        description: 'Reserved chef tables at legendary establishments led by modern culinary pioneers.'
      },
      {
        title: 'Palatial Hospitality',
        description: 'Historic palace hotels offering bespoke fragrance menus and private Seine rooftop terraces.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Seine River Cruise on a Vintage Wooden Yacht',
      'Private Atelier Visit with an Haute Couture Designer',
      'VIP Sommelier Cellar Tasting in Champagne District',
      'Private Night Viewing of Versailles Grand Apartments'
    ],
    featuredStays: [
      {
        name: 'Hôtel de Crillon, Rosewood',
        type: 'Historic Palace Hotel',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,950',
        rating: 4.97,
        description: 'Palatial residence overlooking Place de la Concorde with Karl Lagerfeld-designed grand apartments.',
        amenities: ['Courtyard Dining', 'Sense Spa', 'Eiffel Tower Views', 'Butler Service']
      },
      {
        name: 'The Peninsula Paris',
        type: 'Contemporary Grand Luxury',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,750',
        rating: 4.95,
        description: 'Restored 19th-century landmark near Arc de Triomphe featuring an aviation-inspired rooftop restaurant.',
        amenities: ['Subterranean Pool', 'Rooftop Terrace', 'Fleet of Rolls-Royces', 'Espa Treatments']
      }
    ],
    startingPrice: '$4,200',
    featured: true,
    bestSeason: 'April – October',
    idealDuration: '5 – 7 Days'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    category: 'Island',
    tagline: 'Ancient temples, lush rainforests, and clifftop sanctuary living.',
    shortDescription: 'Verdant jungle valleys in Ubud, dramatic limestone cliffs in Uluwatu, and sacred Balinese healing traditions.',
    intro: 'Beyond its sun-drenched coastlines lies the soul of Bali—a sanctuary of emerald rice terraces, sacred springs, and timeless spiritual balance. AURA curates secluded retreats where ancient holistic wellness meets refined contemporary craftsmanship.',
    whyVisit: [
      {
        title: 'Sacred Rainforest Sanctuaries',
        description: 'Open-air bamboo pavilions and riverside villas nestled in the mist of the Ayung River valley.'
      },
      {
        title: 'Holistic Healing & Wellness',
        description: 'Traditional sound healing rituals, herbal botanical baths, and personalized yoga masterclasses.'
      },
      {
        title: 'Artisan Heritage & Architecture',
        description: 'Private visits to woodcarvers, master batik artists, and architectural marvels built from sustainably harvested bamboo.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Water Blessing with a Balinese High Priest',
      'Helicopter Flight over Mount Batur Volcanic Caldera',
      'Organic Farm-to-Table Dining in Ubud Valley',
      'Sunset Catamaran to Nusa Lembongan Secret Reefs'
    ],
    featuredStays: [
      {
        name: 'Mandapa, a Ritz-Carlton Reserve',
        type: 'Rainforest Sanctuary',
        image: 'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,350',
        rating: 4.99,
        description: 'Intimate riverside enclave featuring traditional Balinese temple architecture and private pool villas.',
        amenities: ['Ayung Riverfront Dining', 'Patih Butler Service', 'Vitality Pool', 'Yoga Shala']
      },
      {
        name: 'Bulgari Resort Bali, Uluwatu',
        type: 'Clifftop Ocean Luxury',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,600',
        rating: 4.96,
        description: 'Perched 150 meters above the Indian Ocean with private cliff-incline elevator to private beach club.',
        amenities: ['Cliff Elevator', 'Private Beach', 'Il Ristorante Luca Fantin', 'Bulgari Boutique']
      }
    ],
    startingPrice: '$3,800',
    featured: true,
    bestSeason: 'April – October',
    idealDuration: '7 – 12 Days'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    category: 'Desert',
    tagline: 'Futuristic grandeur, golden dunes, and Arabian luxury.',
    shortDescription: 'Towering architectural marvels paired with private desert conservation reserves and starlit royal encampments.',
    intro: 'Where hyper-modern vision meets time-honored Bedouin hospitality, Dubai creates experiences of scale and opulence found nowhere else on earth. Traverse desert dunes in vintage Land Rovers by day, and retreat to private sky residences overlooking the Arabian Gulf by night.',
    whyVisit: [
      {
        title: 'Desert Conservation Retreats',
        description: 'Luxury tented pavilions surrounded by roaming Arabian oryx and untamed golden dunes.'
      },
      {
        title: 'Spectacular Skyline Architecture',
        description: 'World-renowned towers, artificial archipelago islands, and futuristic architectural icons.'
      },
      {
        title: 'Ultra-Fine Dining & Art',
        description: 'Globally celebrated chef residencies, private rooftop lounges, and curated galleries in Alserkal Avenue.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Starlit Desert Banquet with Royal Falconry',
      'Private Yacht Charter around the Palm Jumeirah',
      'Helicopter Aerial Tour of Dubai Coastline',
      'Bespoke Gold & Pearl Souk Cultural Discovery'
    ],
    featuredStays: [
      {
        name: 'Al Maha Desert Resort & Spa',
        type: 'Bedouin Oasis Suite',
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,700',
        rating: 4.95,
        description: 'Tucked inside the Dubai Desert Conservation Reserve, each suite features a private temperature-controlled infinity pool.',
        amenities: ['Desert Dune Views', 'Camel Treks', 'Falconry', 'Private Plunge Pool']
      },
      {
        name: 'Atlantis The Royal',
        type: 'Iconic Ultra-Luxury Resort',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,900',
        rating: 4.97,
        description: 'Architectural masterpiece boasting 17 world-class restaurants, Cloud 22 infinity sky pool, and private cabanas.',
        amenities: ['Cloud 22 Pool', 'Michelin Dining', 'Private Beach', 'Awaken Wellness Spa']
      }
    ],
    startingPrice: '$4,500',
    featured: true,
    bestSeason: 'October – April',
    idealDuration: '5 – 7 Days'
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Türkiye',
    region: 'Eurasia',
    category: 'Cultural',
    tagline: 'Where continents embrace across the shimmering Bosphorus.',
    shortDescription: 'Imperial Ottoman palaces, domed skylines, evocative spice bazaars, and contemporary Bosphorus waterfront nightlife.',
    intro: 'Straddling Europe and Asia, Istanbul is an intoxicating tapestry of Byzantine mosaics, soaring minarets, and modern artistic vibrancy. Sail past historic yalis on private yachts, explore subterranean cisterns by lantern light, and unwind in historic marble hammams with century-old rituals.',
    whyVisit: [
      {
        title: 'Bosphorus Palace Living',
        description: 'Restored 19th-century waterfront palaces offering private boat docking and uninterrupted strait panoramas.'
      },
      {
        title: 'Layered Historic Splendor',
        description: 'Hagia Sophia, Topkapi Palace, and Basilica Cistern experienced through private historian-guided access.'
      },
      {
        title: 'Culinary Crossroads',
        description: 'Innovative Aegean-Anatolian gastronomy paired with ancient spices and sunset mezze over the Golden Horn.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Twilight Cruise along the Bosphorus Strait',
      'Exclusive After-Hours Tour of Topkapi Palace Treasury',
      'Private Ottoman Hammam & Rose Water Ritual',
      'Curated Spice Market Tasting with a Master Chef'
    ],
    featuredStays: [
      {
        name: 'Çırağan Palace Kempinski',
        type: 'Imperial Ottoman Palace',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,200',
        rating: 4.96,
        description: 'The only Ottoman Imperial Palace and Hotel on the Bosphorus, offering royalty-grade suites and infinity pool on the strait.',
        amenities: ['Waterfront Palace Suites', 'Heated Bosphorus Pool', 'Tuðra Restaurant', 'Helipad']
      },
      {
        name: 'Four Seasons Hotel Istanbul at the Bosphorus',
        type: 'Historic Waterfront Mansion',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,400',
        rating: 4.97,
        description: 'A converted 19th-century Ottoman mansion blending historic architectural beauty with airy contemporary luxury.',
        amenities: ['Private Pier', 'Aqua Restaurant', 'Turkish Bath Hammam', 'Outdoor Pool']
      }
    ],
    startingPrice: '$3,600',
    featured: true,
    bestSeason: 'April – June & September – November',
    idealDuration: '5 – 8 Days'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Cyclades Islands',
    category: 'Island',
    tagline: 'Whitewashed cliffside suites, volcanic vineyards, and Aegean sunsets.',
    shortDescription: 'Whitewashed villages clinging to volcanic cliffs above the sapphire Aegean Sea, famed for world-renowned sunsets and cave architecture.',
    intro: 'Born from a dramatic volcanic eruption, Santorini is an architectural poetry of cobalt domes, sun-bleached terraces, and infinity pools carved directly into the caldera rock face. Experience the Cycladic dream in total privacy.',
    whyVisit: [
      {
        title: 'Caldera Cave Suites',
        description: 'Minimalist volcanic cave suites with heated infinity plunge pools overlooking the vast caldera.'
      },
      {
        title: 'Ancient Volcanic Terroir',
        description: 'Assyrtiko wine tastings in centuries-old volcanic vineyards woven into basket crowns.'
      },
      {
        title: 'Private Catamaran Sailing',
        description: 'Swim in hidden volcanic hot springs and dine on grilled Aegean octopus at sunset.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Private Sunset Catamaran Cruise to Volcanic Hot Springs',
      'Private Sommelier Tasting at Sigalas Estate Vineyard',
      'Helicopter Island Hopper to Delos and Mykonos',
      'Intimate Cliffside Dinner on Oia Edge with Violinist'
    ],
    featuredStays: [
      {
        name: 'Canaves Oia Epitome',
        type: 'Luxury Caldera Villa',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,650',
        rating: 4.98,
        description: 'Perched above the fishing town of Ammoudi, offering unobstructed sunset views and private plunge pools.',
        amenities: ['Sunset Views', 'Private Infinity Pool', 'Elements Restaurant', 'Chauffeured Transfer']
      }
    ],
    startingPrice: '$4,600',
    featured: false,
    bestSeason: 'May – October',
    idealDuration: '5 – 7 Days'
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Central Europe',
    category: 'Mountain',
    tagline: 'High-altitude serenity, pristine glaciers, and Alpine chalet luxury.',
    shortDescription: 'Glacier peaks, Matterhorn views, cozy timber firesides, Michelin-starred alpine dining, and private helicopter descents.',
    intro: 'Towering granite spires, crystal-clear alpine lakes, and secluded valleys define the Swiss Alps. Whether seeking powder snow on untouched glacier faces or summer wildflowers in quiet mountain meadows, AURA delivers unmatched alpine tranquility.',
    whyVisit: [
      {
        title: 'Private Chalet Living',
        description: 'Handcrafted timber and stone chalets with private thermal saunas, heated outdoor hot tubs, and private chefs.'
      },
      {
        title: 'Glacier & Heli-Adventures',
        description: 'Helicopter flights over the iconic Matterhorn and private glacier picnics on untracked peaks.'
      },
      {
        title: 'Alpine Thermal Wellness',
        description: 'Thermal spring baths surrounded by snowcapped peaks and customized mountain herb therapy.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop'
    ],
    bestExperiences: [
      'Helicopter Flight around the Matterhorn with Champagne Glacier Landing',
      'Private Fondue & Truffle Tasting in a Mountain Refugio',
      'Private Alpine Ski Masterclass with Olympic Coach',
      'Outdoor Thermal Bath Under Starlit Mountain Skies'
    ],
    featuredStays: [
      {
        name: 'The Chedi Andermatt',
        type: 'Alpine Luxury Resort',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
        pricePerNight: '$1,900',
        rating: 4.97,
        description: 'Striking fusion of traditional alpine timber and Asian aesthetics, featuring a 2,400 sqm hydrotherapy spa.',
        amenities: ['Hydrotherapy Spa', 'Wine & Cheese Tower', 'Ski Butler', 'Indoor Lap Pool']
      }
    ],
    startingPrice: '$5,800',
    featured: false,
    bestSeason: 'December – April (Ski) & June – September (Hiking)',
    idealDuration: '6 – 9 Days'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'private-island-escape',
    title: 'Private Island Escape',
    location: 'Baa Atoll, Maldives',
    destinationId: 'maldives',
    category: 'Luxury',
    shortDescription: 'Spend an exclusive day marooned on a pristine uninhabited sandbank with a private chef and butler.',
    longDescription: 'Cruise via private catamaran to an uninhabited jewel in the Indian Ocean. A shaded canopy of organic linen is prepared with chilled vintage champagne, fresh tropical fruits, and a bespoke five-course seafood lunch prepared live over coconut embers by your private chef.',
    duration: 'Full Day (8 Hours)',
    startingPrice: '$1,850 / couple',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Private speed catamaran transfer',
      'Dedicated private chef and sommelier service',
      'Guided coral reef snorkeling with marine biologist',
      'Sunset champagne toast and bespoke dessert'
    ],
    included: ['Yacht Transfer', 'Five-Course Lunch', 'Premium Bar & Champagne', 'Snorkeling Equipment', 'Photography Service'],
    featured: true
  },
  {
    id: 'sunset-yacht-experience',
    title: 'Sunset Yacht Experience',
    location: 'Positano, Amalfi Coast',
    destinationId: 'amalfi-coast',
    category: 'Luxury',
    shortDescription: 'Sail a handcrafted Italian Riva yacht along the dramatic cliffs of Amalfi as the golden hour ignites the coastline.',
    longDescription: 'Step aboard an iconic mahogany Riva yacht from the pier of Positano. Glide past Li Galli islands, stop for a swim in emerald coves, and sip Franciacorta as the pastel villages on the cliffs light up in the warm glow of the Mediterranean sunset.',
    duration: '4 Hours',
    startingPrice: '$1,400 / group',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Classic 38ft Riva Dolceriva motor yacht',
      'Local prosecco and artisanal Campania antipasti',
      'Secluded swimming in private sea grottos',
      'Unrivaled views of Positano from the sea'
    ],
    included: ['Captained Yacht', 'Fuel & Docking Fees', 'Canapés & Wine', 'Towels & Snorkel Gear'],
    featured: true
  },
  {
    id: 'desert-dinner',
    title: 'Desert Starlight Banquet',
    location: 'Dubai Desert Reserve, UAE',
    destinationId: 'dubai',
    category: 'Dining',
    shortDescription: 'An intimate candlelit dining experience set among golden dunes beneath an infinite galaxy of desert stars.',
    longDescription: 'Arrive at a secluded private enclave in the desert conservation reserve via vintage open-top 1950s Land Rover. Enjoy royal falconry demonstrations before settling into a sumptuous majlis setting with flame torches, live oud melodies, and gourmet Emirati-Levantine delicacies.',
    duration: '5 Hours',
    startingPrice: '$950 / couple',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Vintage Land Rover dune scenic drive',
      'Interactive falconry and astronomy guide',
      'Four-course wood-fired royal feast',
      'Private acoustic oud performance'
    ],
    included: ['Private Chauffeur', 'Wildlife Reserve Pass', 'Full Gourmet Dinner', 'Beverages & Mocktails'],
    featured: true
  },
  {
    id: 'alpine-retreat',
    title: 'Alpine Glacier Heli-Flight',
    location: 'Zermatt, Swiss Alps',
    destinationId: 'swiss-alps',
    category: 'Adventure',
    shortDescription: 'Helicopter tour skirting the summit of the Matterhorn with a private champagne landing on a pristine glacier.',
    longDescription: 'Soar above towering granite peaks and glistening icefalls. Land on an untouched high-altitude snow plateau for a private tasting of Swiss artisanal cheeses, dried meats, and grand cru wines framed by panoramic views of the Swiss and Italian Alps.',
    duration: '3.5 Hours',
    startingPrice: '$2,100 / flight',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Air Zermatt Eurocopter private charter',
      'Close-up flight along Matterhorn North Face',
      'Glacier landing on Theodul Pass',
      'Alpine sommelier tasting experience'
    ],
    included: ['Helicopter Charter', 'Certified Mountain Pilot', 'Champagne & Alpine Platter', 'Park Permits'],
    featured: true
  },
  {
    id: 'wellness-escape',
    title: 'Ayung Valley Sound Healing',
    location: 'Ubud, Bali',
    destinationId: 'bali',
    category: 'Wellness',
    shortDescription: 'Sacred sound bath and holistic Balinese water purification in a bamboo sanctuary suspended over the rainforest.',
    longDescription: 'Immerse your senses in a holistic journey led by a master healer. Experience Tibetan singing bowl resonance, deep breathwork, and a personalized water purification ritual (Melukat) in sacred jungle spring waters designed to restore harmony and deep vitality.',
    duration: '3 Hours',
    startingPrice: '$480 / person',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Acoustic bamboo shala setting',
      'Private 90-minute sound bath with 7 chakra bowls',
      'Sacred spring water blessing ceremony',
      'Herbal botanical tonic and organic lunch'
    ],
    included: ['Master Sound Practitioner', 'Ceremonial Sarong', 'Ayurvedic Herbal Lunch', 'Private Transfer'],
    featured: true
  },
  {
    id: 'cultural-city-tour',
    title: 'Ottoman Palaces & Bosphorus Twilight',
    location: 'Istanbul, Türkiye',
    destinationId: 'istanbul',
    category: 'Culture',
    shortDescription: 'Private historian-led evening through royal palace chambers followed by private yacht cruise on the Bosphorus.',
    longDescription: 'Unlock the storied past of the Byzantine and Ottoman empires. Wander the quiet halls of Dolmabahçe and Topkapi Palace with a distinguished art historian, before boarding a private wooden motor yacht for a twilight voyage past illuminated waterfront mosques and fortresses.',
    duration: '6 Hours',
    startingPrice: '$890 / group',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Private VIP museum access with no queues',
      'Exclusive private yacht cruise on Bosphorus',
      'Sunset Turkish mezze and raki pairing',
      'Distinguished art historian companion'
    ],
    included: ['Expert Guide', 'Private Motor Yacht', 'Museum Tickets', 'Tasting Menu & Wine'],
    featured: true
  }
];

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'island-escape',
    name: 'Island Escape & Overwater Serenity',
    duration: '7 Days',
    destination: 'Maldives',
    destinationId: 'maldives',
    shortDescription: 'A week of barefoot luxury in a private overwater pool villa with sandbank dinners and marine discovery.',
    overview: 'Experience the ultimate tropical escape designed for total rejuvenation. From arrival via private seaplane to daily personalized ocean experiences and castaway dinners, every moment is crafted to ensure effortless relaxation in paradise.',
    startingPrice: '$6,400',
    priceNumber: 6400,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
    ],
    highlights: [
      '7 nights in an Overwater Sunset Pool Villa',
      'Roundtrip scenic seaplane transfers',
      'Private sandbank champagne dinner under the stars',
      'Guided coral conservation and manta safari',
      'Daily 90-minute ocean-view spa treatments'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Paradise & Sunset Cruise',
        description: 'Touch down at Malé International and transfer via private VIP lounge to your direct seaplane flight. Settle into your overwater villa and enjoy a welcome champagne sunset cruise on a traditional dhoni.'
      },
      {
        day: 'Day 2',
        title: 'Reef Exploration & Coral Safari',
        description: 'Join the resident marine biologist for a private boat expedition to Hanifaru Bay to observe sea turtles, rays, and vibrant coral formations.'
      },
      {
        day: 'Day 3',
        title: 'Holistic Island Spa Journey',
        description: 'Indulge in a customized signature ritual in an overwater glass-bottomed treatment pavilion with organic botanicals.'
      },
      {
        day: 'Day 4',
        title: 'Castaway Sandbank Luncheon',
        description: 'Depart by speed catamaran to a solitary sandbank surrounded by turquoise sea for an intimate picnic prepared by your personal chef.'
      },
      {
        day: 'Day 5',
        title: 'Catamaran Sailing & Water Sports',
        description: 'Spend the morning paddleboarding over crystal lagoons or taking a private sailing lesson across the atoll.'
      },
      {
        day: 'Day 6',
        title: 'Starlight Cinema & Fine Dining',
        description: 'Dine on the beach followed by a private outdoor movie screening under the tropical stars with artisan popcorn and champagne.'
      },
      {
        day: 'Day 7',
        title: 'Farewell Seaplane Departure',
        description: 'Savor a floating breakfast in your private pool before your scenic flight back to Malé for your onward journey.'
      }
    ],
    included: [
      '6 nights luxury overwater villa accommodation',
      'All gourmet meals & daily floating breakfast',
      'Roundtrip seaplane flight tickets',
      '2 private excursions (sandbank & reef safari)',
      '2 signature spa treatments per guest',
      'Personal 24/7 Island Host (Butler)'
    ],
    notIncluded: [
      'International flights to Malé',
      'Personal boutique shopping',
      'Scuba diving certification courses',
      'Travel insurance'
    ],
    bestSeason: 'November – April',
    groupType: 'Couples, Honeymooners, Solo Luxury',
    featured: true
  },
  {
    id: 'european-romance',
    name: 'European Romance & Italian Glamour',
    duration: '8 Days',
    destination: 'Amalfi Coast & Rome',
    destinationId: 'amalfi-coast',
    shortDescription: 'From the historic grandeur of Rome to the sun-kissed cliffside palazzos and Riva cruises of Positano.',
    overview: 'An unforgettable romantic voyage combining the Eternal City’s classical grandeur with the effortless Mediterranean lifestyle of the Amalfi Coast. Stay in 5-star cliffside palaces and cruise the cobalt waters of Capri.',
    startingPrice: '$7,200',
    priceNumber: 7200,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1000&auto=format&fit=crop'
    ],
    highlights: [
      '4 nights in Positano cliffside sea-view suite & 3 nights in Rome',
      'Private full-day Riva boat charter around Capri island',
      'VIP after-hours Vatican or Colosseum private tour',
      'Michelin-starred cliffside dining at sunset',
      'Private Mercedes-Maybach transfers throughout'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in the Eternal City',
        description: 'Private airport meet-and-greet in Rome. Check into your luxury boutique hotel near Piazza del Popolo with evening rooftop aperitivo.'
      },
      {
        day: 'Day 2',
        title: 'VIP Imperial Rome & Secret Gardens',
        description: 'Private historian access to ancient Roman ruins and private palazzo art collections closed to the public.'
      },
      {
        day: 'Day 3',
        title: 'Scenic Drive to the Amalfi Coast',
        description: 'Chauffeured drive south past Mount Vesuvius to Positano. Settle into your clifftop sanctuary overlooking the Tyrrhenian Sea.'
      },
      {
        day: 'Day 4',
        title: 'Capri & Blue Grotto Private Yacht Cruise',
        description: 'Board your private Riva motor yacht for a day circumnavigating Capri, exploring secluded sea caves and dining at La Fontelina.'
      },
      {
        day: 'Day 5',
        title: 'Ravello Gardens & Classical Music',
        description: 'Explore the high cliffside gardens of Villa Cimbrone and Villa Rufolo with private afternoon wine tasting.'
      },
      {
        day: 'Day 6',
        title: 'Artisanal Lemon Grove & Cooking Atelier',
        description: 'Hands-on pasta masterclass and limoncello tasting in a family-owned cliffside lemon grove overlooking Amalfi.'
      },
      {
        day: 'Day 7',
        title: 'Leisure Day & Michelin Gala Dinner',
        description: 'Relax poolside or stroll the ceramic boutiques of Positano, capped by a romantic multi-course farewell dinner.'
      },
      {
        day: 'Day 8',
        title: 'Naples Airport Departure',
        description: 'Private transfer to Naples Capodichino International Airport for your return flight.'
      }
    ],
    included: [
      '7 nights 5-star luxury accommodations',
      'Daily gourmet breakfast & 3 tasting dinners',
      'Full-day private yacht charter with crew',
      'Private chauffeured luxury Mercedes vehicle',
      'All private guided tours and entrance permits'
    ],
    notIncluded: [
      'International flights',
      'Discretionary tips',
      'Personal shopping and laundry'
    ],
    bestSeason: 'May – October',
    groupType: 'Couples, Anniversaries, Romantic Luxury',
    featured: true
  },
  {
    id: 'desert-city',
    name: 'Desert & City Panorama',
    duration: '6 Days',
    destination: 'Dubai & Arabian Desert',
    destinationId: 'dubai',
    shortDescription: 'Ultra-modern skyline penthouses merged with serene golden dune glamping and private desert dining.',
    overview: 'A striking contrast of cutting-edge futuristic architecture and mystical Arabian desert serenity. Spend three nights in an iconic skyline suite followed by two nights in a tranquil desert conservation oasis.',
    startingPrice: '$5,100',
    priceNumber: 5100,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop'
    ],
    highlights: [
      '3 nights at Atlantis The Royal & 2 nights at Al Maha Desert Oasis',
      'Private sunset desert safari in vintage Land Rovers',
      'Helicopter flight over the Burj Al Arab & Palm Jumeirah',
      'Private yacht charter along Dubai Marina at night',
      'Bedouin astronomy and falconry encounters'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Modern Dubai',
        description: 'VIP airport assistance and chauffeured transfer to Palm Jumeirah. Enjoy panoramic ocean views from your sky terrace.'
      },
      {
        day: 'Day 2',
        title: 'Helicopter Flight & Marina Yachting',
        description: 'See Dubai from the sky in a private helicopter, followed by afternoon relaxation at Cloud 22 infinity pool and a sunset yacht cruise.'
      },
      {
        day: 'Day 3',
        title: 'Old Dubai Heritage & Gold Souk',
        description: 'Explore the historic Al Fahidi district, cross the creek on an abra, and visit master perfume ateliers with an expert guide.'
      },
      {
        day: 'Day 4',
        title: 'Journey to the Golden Dunes',
        description: 'Transfer into the Dubai Desert Conservation Reserve. Settle into your private tented suite with private plunge pool overlooking desert dunes.'
      },
      {
        day: 'Day 5',
        title: 'Desert Falconry & Starlit Majlis Banquet',
        description: 'Morning wildlife tracking and royal falconry demonstrations. In the evening, enjoy a private candlelit feast among the rolling dunes.'
      },
      {
        day: 'Day 6',
        title: 'Desert Sunrise & Airport Farewell',
        description: 'Watch the sunrise over the golden sands with breakfast on your deck before a private transfer to Dubai International Airport.'
      }
    ],
    included: [
      '5 nights luxury accommodations (3 city, 2 desert)',
      'All transfers in executive vehicles',
      'Helicopter tour and private yacht cruise',
      'Desert activities, falconry, and all meals in desert reserve',
      '24/7 dedicated concierge'
    ],
    notIncluded: [
      'International flights',
      'Personal alcohol purchases in select venues',
      'Visa fees if applicable'
    ],
    bestSeason: 'October – April',
    groupType: 'Luxury Explorers, Couples, Families',
    featured: true
  },
  {
    id: 'tropical-discovery',
    name: 'Tropical Discovery & Rainforest Sanctuary',
    duration: '10 Days',
    destination: 'Bali (Ubud & Uluwatu)',
    destinationId: 'bali',
    shortDescription: 'Deep immersion into Bali’s spiritual heartland, lush river gorges, and dramatic clifftop ocean retreats.',
    overview: 'A transformative 10-day expedition through Bali’s most enchanting landscapes. Begin in the misty spiritual highlands of Ubud surrounded by river valleys, then transition to the dramatic ocean cliffs of Uluwatu.',
    startingPrice: '$5,900',
    priceNumber: 5900,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
    ],
    highlights: [
      '5 nights in an Ubud rainforest pool villa & 4 nights in Uluwatu clifftop resort',
      'Private water blessing with a high priest at a sacred mountain temple',
      'Daily holistic wellness treatments and private yoga sessions',
      'Farm-to-table dining overlooking the Ayung River valley',
      'Private sunset catamaran sail to Nusa Penida crystal reefs'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Denpasar & Ubud Welcome',
        description: 'VIP airport fast-track service and transfer to your luxury rainforest sanctuary in Ubud.'
      },
      {
        day: 'Day 2',
        title: 'Jatiluwih Rice Terraces & Ancient Temples',
        description: 'Private 4x4 discovery of UNESCO-protected emerald rice terraces and the sacred Batukaru mountain temple.'
      },
      {
        day: 'Day 3',
        title: 'Sound Healing & Holistic Spa Day',
        description: 'Experience deep therapeutic singing bowl meditation and a 3-hour traditional herbal spa journey.'
      },
      {
        day: 'Day 4',
        title: 'Artisan Villages & Culinary Atelier',
        description: 'Visit private studios of master woodworkers and painters, followed by an organic cooking class in an herb garden.'
      },
      {
        day: 'Day 5',
        title: 'Mount Batur Sunrise by Helicopter',
        description: 'Optional scenic sunrise flight over the volcanic caldera, returning for breakfast by the river.'
      },
      {
        day: 'Day 6',
        title: 'Transfer to Clifftop Uluwatu',
        description: 'Descend to the dramatic southern peninsula. Settle into your villa perched 150 meters above the Indian Ocean.'
      },
      {
        day: 'Day 7',
        title: 'Catamaran Cruise to Nusa Islands',
        description: 'Board a private sailing catamaran to secluded snorkeling bays with crystal clear waters and manta rays.'
      },
      {
        day: 'Day 8',
        title: 'Clifftop Beach Club & Sunset Fire Dance',
        description: 'Relax at your resort’s private beach club, followed by a VIP front-row seat at the Kecak fire dance at Uluwatu Temple.'
      },
      {
        day: 'Day 9',
        title: 'Oceanfront Spa & Farewell Gala Feast',
        description: 'Final afternoon of clifftop hydrotherapy and a bespoke seven-course seafood dinner overlooking the crashing waves.'
      },
      {
        day: 'Day 10',
        title: 'Depart Bali with Intention',
        description: 'Morning meditation and floating breakfast before your private chauffeured transfer to Denpasar Airport.'
      }
    ],
    included: [
      '9 nights in 5-star private pool villas',
      'All inter-island chauffeured transfers',
      'Daily breakfast, 4 gourmet multi-course lunches & dinners',
      'Private cultural and spiritual ceremonies',
      'Daily 60-minute spa treatments'
    ],
    notIncluded: [
      'International flights',
      'Personal alcohol outside included tastings',
      'Gratuities'
    ],
    bestSeason: 'April – October',
    groupType: 'Wellness Seekers, Couples, Slow Luxury',
    featured: true
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'sunset-europe',
    category: 'Editorial',
    title: '5 Places to Watch the Sunset in Europe',
    shortDescription: 'From Ravello’s suspended clifftop terraces to the volcanic edges of Oia, where the golden hour becomes an art form.',
    readTime: '4 min read',
    date: 'August 14, 2026',
    author: 'Elena Rostova, Senior Editor',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
    content: [
      'There is a quiet alchemy to twilight in Europe. As the harsh midday sun softens into warm amber, ancient stone facades and shimmering coastlines take on a luminous glow that has captivated artists for centuries.',
      'In Ravello, perched a thousand feet above the Amalfi Coast, the infinity terrace at Villa Cimbrone feels suspended between sky and sea. As classical strings drift through the fragrant cypress trees, the distant fishing lights of the Gulf of Salerno begin their evening dance.',
      'Further east in Santorini, watching the sun dip into the submerged caldera from the ramparts of Oia reveals a symphony of whitewashed stucco, pastel bells, and violet Aegean waters. Here, luxury is the absence of rush.',
      'In Paris, the golden hour reflects off the zinc rooftops along the Seine. A private evening aboard an antique mahogany river tender offers quiet perspectives of Notre-Dame and the Eiffel Tower as the first city lights flicker to life.',
      'Travel with intention, and you will find that these twilight moments become the true milestones of your journey.'
    ],
    tags: ['Europe', 'Sunset', 'Amalfi Coast', 'Santorini', 'Paris']
  },
  {
    id: 'ultimate-island-escape',
    category: 'Curated Guides',
    title: 'The Ultimate Island Escape: Solitude & Modern Luxury',
    shortDescription: 'How remote archipelagos are reimagining barefoot hospitality into profound personal sanctuaries.',
    readTime: '5 min read',
    date: 'July 28, 2026',
    author: 'Marcus Vance, Travel Curator',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
    content: [
      'True luxury in the modern world is not measured in chandeliers or marble foyers; it is measured in stillness, clean air, and boundless horizon.',
      'In the remote atolls of the Maldives, hospitality has evolved beyond simple opulence into holistic stewardship. Overwater architecture now incorporates natural teak, solar-powered climate systems, and sliding roofs that allow travelers to fall asleep directly beneath constellations.',
      'Here, days are unscripted. You might choose to snorkel with a resident marine biologist to assist in coral restoration, or cruise to an uninhabited sandbank where your only companion is the whispering tide and a bottle of chilled vintage Blanc de Blancs.',
      'When travel removes every layer of friction, it creates space for mental clarity that endures long after you return home.'
    ],
    tags: ['Maldives', 'Island Life', 'Wellness', 'Barefoot Luxury']
  },
  {
    id: 'luxury-meets-adventure',
    category: 'Dispatches',
    title: 'Where Luxury Meets Adventure',
    shortDescription: 'High-altitude chalets, private glacier descents, and Michelin-starred dining in the heart of the Swiss Alps.',
    readTime: '4 min read',
    date: 'July 10, 2026',
    author: 'Sophie Laurent, Alpine Specialist',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
    content: [
      'For the modern traveler, adventure and indulgence are no longer mutually exclusive. In Zermatt, high-altitude exploration has been refined into an exquisite art.',
      'Imagine boarding a private helicopter at dawn, landing on a remote untouched glacier with a world-class mountain guide, and carving through powder snow with the towering pyramid of the Matterhorn as your sole witness.',
      'By late afternoon, you are unwinding in an outdoor cedar hot tub while snowflakes melt in the steam, before a private chef serves hot truffle fondue and aged Valaisian pinot noir beside a crackling stone fireplace.',
      'It is this delicate harmony between raw natural majesty and discreet comfort that defines the AURA philosophy.'
    ],
    tags: ['Switzerland', 'Skiing', 'Adventure', 'Mountains']
  },
  {
    id: 'weekend-in-istanbul',
    category: 'City Guides',
    title: 'How to Plan a Perfect Weekend in Istanbul',
    shortDescription: '72 hours of imperial palaces, private Bosphorus yachting, secret cisterns, and avant-garde gastronomy.',
    readTime: '6 min read',
    date: 'June 22, 2026',
    author: 'Tariq Al-Mansoor, Cultural Historian',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop',
    content: [
      'Istanbul is a city of layers—an imperial metropolis that bridges two continents and two millennia with breathtaking ease.',
      'Begin your journey at sunrise aboard a private yacht gliding along the Bosphorus. Watch the mist lift over the ancient domes of Sultanahmet as traditional wooden yalis glide past in the cool morning breeze.',
      'In the afternoon, bypass the bustling crowds with private after-hours access to the Basilica Cistern and Topkapi Palace, accompanied by an architectural historian who brings Ottoman royal intrigues vividly to life.',
      'Conclude your evening in Bebek or Karaköy, where a new generation of Turkish chefs is reimagining Anatolian ingredients into boundary-pushing tasting menus paired with boutique wines from Thrace.'
    ],
    tags: ['Istanbul', 'Culture', 'City Guide', 'Bosphorus']
  }
];

export const WHY_AURA_POINTS = [
  {
    title: 'Personalized Journeys',
    description: 'Every itinerary is designed from a blank canvas, tailored specifically to your pacing, preferences, and aesthetic desires.'
  },
  {
    title: 'Curated Stays',
    description: 'We personally vet boutique palaces, private island sanctuaries, and clifftop retreats with strict architectural standards.'
  },
  {
    title: 'Unique Experiences',
    description: 'Gain rare after-hours access, private yacht charters, and intimate cultural encounters inaccessible to standard travelers.'
  },
  {
    title: 'Dedicated Travel Support',
    description: 'Your personal travel curator and local on-the-ground concierge ensure seamless, stress-free care from departure to return.'
  }
];

export const DEMO_RECOMMENDATIONS: Record<string, {
  title: string;
  summary: string;
  suggestedDestination: string;
  estimatedTotal: string;
  highlights: string[];
  curatedStays: string[];
  dailyPacing: { day: string; title: string; activity: string }[];
}> = {
  'Luxury-Maldives': {
    title: 'Bespoke Overwater Maldivian Sanctuary',
    summary: 'A curated 7-day barefoot luxury itinerary focused on utter seclusion, ocean wellness, and bespoke private sandbank dining.',
    suggestedDestination: 'Maldives',
    estimatedTotal: '$6,400 – $8,900 / person',
    highlights: ['Private Seaplane Transfers', 'Sunset Sandbank Champagne Dinner', 'Private Reef Coral Safari', 'Daily Overwater Spa Rituals'],
    curatedStays: ['Soneva Fushi Private Reserve', 'Cheval Blanc Randheli'],
    dailyPacing: [
      { day: 'Day 1–2', title: 'Arrival & Ocean Sanctuary', activity: 'VIP Seaplane transfer, villa orientation, and sunset catamaran champagne cruise.' },
      { day: 'Day 3–4', title: 'Marine Life & Wellness', activity: 'Private manta ray dive with marine biologist followed by Ayurvedic ocean spa.' },
      { day: 'Day 5–7', title: 'Castaway Living', activity: 'Private sandbank lunch, starlit beach cinema, and peaceful farewell floating breakfast.' }
    ]
  },
  'Romantic-Amalfi Coast': {
    title: 'Mediterranean Romance & Cliffside Glamour',
    summary: 'An 8-day romantic escape along the dramatic cliffs of Positano, Ravello, and Capri aboard vintage Riva yachts.',
    suggestedDestination: 'Amalfi Coast',
    estimatedTotal: '$7,200 – $9,800 / person',
    highlights: ['Private Riva Yacht Cruise to Capri', 'Cliffside Michelin Dining at Sunset', 'Ravello Historic Gardens Tour', 'Limoncello Cooking Atelier'],
    curatedStays: ['Le Sirenuse, Positano', 'Belmond Hotel Caruso, Ravello'],
    dailyPacing: [
      { day: 'Day 1–3', title: 'Positano & The Sea', activity: 'Clifftop arrival, private Riva yacht cruise to Capri and secluded Faraglioni swim.' },
      { day: 'Day 4–5', title: 'Ravello Serenity', activity: 'Villa Cimbrone garden strolls, private chamber music concert, and wine tasting.' },
      { day: 'Day 6–8', title: 'Epicurean Amalfi', activity: 'Private lemon grove cooking class and romantic farewell dinner at sunset.' }
    ]
  },
  'Adventure-Swiss Alps': {
    title: 'High-Altitude Alpine Expedition & Chalet Comfort',
    summary: 'A thrilling high-altitude alpine journey featuring helicopter glacier landings, scenic hiking, and timber chalet relaxation.',
    suggestedDestination: 'Swiss Alps',
    estimatedTotal: '$5,800 – $8,200 / person',
    highlights: ['Helicopter Matterhorn Flight', 'Glacier Champagne Landing', 'Private Mountain Guide', 'Alpine Thermal Hydrotherapy'],
    curatedStays: ['The Chedi Andermatt', 'Chalet Zermatt Peak'],
    dailyPacing: [
      { day: 'Day 1–2', title: 'Alpine Arrival', activity: 'Glacier Express first-class rail arrival, chalet welcome, and fireside fondue.' },
      { day: 'Day 3–4', title: 'Matterhorn & Glacier', activity: 'Helicopter flight with glacier snow landing and guided mountain ridge trek.' },
      { day: 'Day 5–7', title: 'Thermal Recovery', activity: 'Thermal hydrotherapy spa day, artisan cheese atelier, and alpine sunset dining.' }
    ]
  },
  'Culture-Istanbul': {
    title: 'Imperial Crossroads & Bosphorus Heritage',
    summary: 'A 6-day cultural odyssey through Byzantine mosaics, Ottoman palaces, and private twilight Bosphorus yachting.',
    suggestedDestination: 'Istanbul',
    estimatedTotal: '$3,800 – $5,400 / person',
    highlights: ['After-Hours Topkapi Palace Tour', 'Private Bosphorus Sunset Yacht', 'Historical Hammam Ritual', 'Gourmet Spice Market Tasting'],
    curatedStays: ['Çırağan Palace Kempinski', 'Four Seasons Istanbul Bosphorus'],
    dailyPacing: [
      { day: 'Day 1–2', title: 'Imperial Splendor', activity: 'VIP historian tour of Hagia Sophia, Blue Mosque, and subterranean cisterns.' },
      { day: 'Day 3–4', title: 'Bosphorus Twilight', activity: 'Private wooden yacht cruise between continents and waterfront palace dinner.' },
      { day: 'Day 5–6', title: 'Living Heritage', activity: 'Curated artisan spice walk, private hammam treatment, and modern Turkish gastronomy.' }
    ]
  },
  'Relaxation-Bali': {
    title: 'Balinese Healing Sanctuary & Rainforest Retreat',
    summary: 'A 10-day mindful immersion into Ubud’s lush river valleys and Uluwatu’s dramatic clifftop ocean sanctuaries.',
    suggestedDestination: 'Bali',
    estimatedTotal: '$5,200 – $7,400 / person',
    highlights: ['Sacred Spring Melukat Blessing', 'Bamboo Shala Sound Healing', 'Clifftop Oceanfront Pool Villa', 'Private Organic Farm Dining'],
    curatedStays: ['Mandapa, Ritz-Carlton Reserve', 'Bulgari Resort Bali'],
    dailyPacing: [
      { day: 'Day 1–4', title: 'Ubud Rainforest', activity: 'Arrival in mist valleys, sound healing in bamboo shala, and sacred temple blessing.' },
      { day: 'Day 5–7', title: 'Cultural Immersion', activity: 'Jatiluwih terraced rice walks, private cooking class, and botanical spa rituals.' },
      { day: 'Day 8–10', title: 'Uluwatu Cliffs', activity: 'Oceanfront villa relaxation, sunset catamaran to crystal reefs, and farewell banquet.' }
    ]
  },
  'Family-Dubai': {
    title: 'Arabian Wonders & Desert Oasis Family Discovery',
    summary: 'A 6-day seamless family journey combining the modern architectural thrills of Dubai with authentic desert adventures.',
    suggestedDestination: 'Dubai',
    estimatedTotal: '$4,800 – $6,900 / person',
    highlights: ['Atlantis Aquaventure & Dolphin Encounter', 'Vintage Desert Land Rover Safari', 'Private Yacht Cruise', 'Falconry & Stargazing'],
    curatedStays: ['Atlantis The Royal', 'Al Maha Desert Resort'],
    dailyPacing: [
      { day: 'Day 1–3', title: 'Palm Jumeirah & Coast', activity: 'Private sky pool relaxation, helicopter skyline tour, and luxury marina cruise.' },
      { day: 'Day 4–6', title: 'Desert Enchantment', activity: 'Wildlife conservation drives, desert starlight feast, and sunrise camel trek.' }
    ]
  }
};

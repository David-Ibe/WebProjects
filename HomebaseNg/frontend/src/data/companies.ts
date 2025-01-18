export interface Company {
  id: string;
  name: string;
  logo: string;
  slug: string;
  description: string;
  establishedYear: number;
  location: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  specialties: string[];
  featuredProperties: number;
  completedDeals: number;
  rating: number;
  services: string[];
  awards?: string[];
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'Sure Luxury Homes',
    logo: '/assets/logo3.png',
    slug: 'sure-luxury-homes',
    description: 'Sure Luxury Homes is a premier real estate company specializing in high-end residential properties across Nigeria. With a focus on luxury living and exceptional service, we help our clients find their dream homes in the most prestigious neighborhoods.',
    establishedYear: 2010,
    location: 'Lagos',
    contactInfo: {
      email: 'info@sureluxuryhomes.com',
      phone: '+234 801 234 5678',
      address: '15 Admiralty Way, Lekki Phase 1, Lagos'
    },
    specialties: ['Luxury Homes', 'Waterfront Properties', 'Penthouse Apartments', 'Villa Communities'],
    featuredProperties: 45,
    completedDeals: 320,
    rating: 4.8,
    services: [
      'Property Sales',
      'Luxury Rentals',
      'Property Management',
      'Investment Advisory',
      'Interior Design Consultation'
    ],
    awards: [
      'Best Luxury Real Estate Company 2023 - Nigerian Property Awards',
      'Excellence in Customer Service 2022 - Real Estate Excellence Awards'
    ]
  },
  {
    id: '2',
    name: 'BlueHedge Realtors',
    logo: '/assets/logo2.png',
    slug: 'bluehedge-realtors',
    description: 'BlueHedge Realtors is a leading real estate firm known for its innovative approach to property solutions. We specialize in both residential and commercial properties, offering comprehensive real estate services to meet diverse client needs.',
    establishedYear: 2015,
    location: 'Abuja',
    contactInfo: {
      email: 'contact@bluehedge.com',
      phone: '+234 802 345 6789',
      address: 'Plot 1234, Jabi District, Abuja'
    },
    specialties: ['Commercial Properties', 'Residential Estates', 'Land Acquisition', 'Property Development'],
    featuredProperties: 60,
    completedDeals: 450,
    rating: 4.7,
    services: [
      'Commercial Real Estate',
      'Residential Sales & Leasing',
      'Property Development',
      'Real Estate Consulting',
      'Facility Management'
    ],
    awards: [
      'Most Innovative Real Estate Company 2023 - Business Innovation Awards',
      'Top Real Estate Developer 2022 - Property Times Awards'
    ]
  },
  {
    id: '3',
    name: 'Shelter Nest Realty',
    logo: '/assets/logo5.jpg',
    slug: 'shelter-nest-realty',
    description: 'Shelter Nest Realty is committed to making homeownership accessible to all Nigerians. We specialize in affordable housing solutions without compromising on quality and comfort, serving both first-time homebuyers and investors.',
    establishedYear: 2018,
    location: 'Port Harcourt',
    contactInfo: {
      email: 'info@shelternest.com',
      phone: '+234 803 456 7890',
      address: '45 Aba Road, GRA Phase 2, Port Harcourt'
    },
    specialties: ['Affordable Housing', 'First-Time Buyers', 'Investment Properties', 'Estate Development'],
    featuredProperties: 75,
    completedDeals: 280,
    rating: 4.6,
    services: [
      'Affordable Housing Solutions',
      'Property Sales & Rentals',
      'Investment Properties',
      'Property Management',
      'Real Estate Advisory'
    ]
  },
  {
    id: '4',
    name: 'Urban Prime Realty',
    logo: '/assets/logo1.png',
    slug: 'urban-prime-realty',
    description: 'Urban Prime Realty focuses on modern urban living solutions in Nigeria\'s major cities. We specialize in contemporary apartments, smart homes, and sustainable living spaces that cater to the modern professional.',
    establishedYear: 2012,
    location: 'Lagos',
    contactInfo: {
      email: 'hello@urbanprime.com',
      phone: '+234 804 567 8901',
      address: '25 Bourdillon Road, Ikoyi, Lagos'
    },
    specialties: ['Smart Homes', 'Urban Apartments', 'Sustainable Living', 'Modern Office Spaces'],
    featuredProperties: 55,
    completedDeals: 390,
    rating: 4.9,
    services: [
      'Smart Home Solutions',
      'Urban Property Sales',
      'Corporate Leasing',
      'Property Technology Integration',
      'Sustainable Development'
    ],
    awards: [
      'Best Smart Home Developer 2023 - Tech in Property Awards',
      'Sustainable Development Excellence 2022 - Green Building Council'
    ]
  }
];

import { useParams } from 'react-router-dom'
import { Building2, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'

const COMPANY_DATA = {
  'sure-luxury-homes': {
    name: 'Sure Luxury Homes',
    logo: '/assets/logo3.png',
    location: 'Victoria Island, Lagos',
    phone: '+234 801 234 5678',
    email: 'contact@sureluxuryhomes.com',
    website: 'www.sureluxuryhomes.com',
    description: 'Premier luxury real estate company specializing in high-end properties across Lagos. With over a decade of experience, we offer exclusive access to some of the most prestigious properties in prime locations.',
    propertiesCount: 156,
    properties: [
      {
        id: 'slh1',
        title: 'Luxury 5 Bedroom Mansion',
        type: 'Mansion for sale',
        price: 850000000,
        location: 'Banana Island, Lagos',
        bedrooms: 5,
        bathrooms: 6,
        parkingSpaces: 4,
        imageUrl: '/assets/1.jpg',
      },
      {
        id: 'slh2',
        title: 'Waterfront 4 Bedroom Villa',
        type: 'Villa for sale',
        price: 750000000,
        location: 'Ikoyi, Lagos',
        bedrooms: 4,
        bathrooms: 5,
        parkingSpaces: 3,
        imageUrl: '/assets/2.jpg',
      },
      {
        id: 'slh3',
        title: 'Penthouse with Ocean View',
        type: 'Penthouse for sale',
        price: 650000000,
        location: 'Victoria Island, Lagos',
        bedrooms: 3,
        bathrooms: 4,
        parkingSpaces: 2,
        imageUrl: '/assets/3.jpg',
      }
    ]
  },
  'bluehedge-realtors': {
    name: 'BlueHedge Realtors',
    logo: '/assets/logo2.png',
    location: 'Lekki Phase 1, Lagos',
    phone: '+234 802 345 6789',
    email: 'info@bluehedge.com',
    website: 'www.bluehedge.com',
    description: 'Leading property development and real estate investment firm focused on creating exceptional living spaces. We specialize in modern residential developments and luxury apartments.',
    propertiesCount: 203,
    properties: [
      {
        id: 'bh1',
        title: 'Modern 4 Bedroom Terrace',
        type: 'Terrace for sale',
        price: 280000000,
        location: 'Lekki Phase 1, Lagos',
        bedrooms: 4,
        bathrooms: 4,
        parkingSpaces: 2,
        imageUrl: '/assets/4.jpg',
      },
      {
        id: 'bh2',
        title: 'Luxury 3 Bedroom Apartment',
        type: 'Apartment for sale',
        price: 180000000,
        location: 'Lekki Phase 1, Lagos',
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        imageUrl: '/assets/5.jpg',
      },
      {
        id: 'bh3',
        title: 'Commercial Office Space',
        type: 'Office Space for sale',
        price: 450000000,
        location: 'Victoria Island, Lagos',
        officeUnits: 12,
        parkingSpaces: 24,
        imageUrl: '/assets/6.jpeg',
      }
    ]
  },
  'shelter-nest-realty': {
    name: 'Shelter Nest Realty',
    logo: '/assets/logo5.jpg',
    location: 'GRA Phase 2, Port Harcourt',
    phone: '+234 803 456 7890',
    email: 'info@shelternest.com',
    website: 'www.shelternest.com',
    description: 'Making quality housing accessible to all. We specialize in affordable yet comfortable homes, perfect for first-time buyers and growing families.',
    propertiesCount: 178,
    properties: [
      {
        id: 'sn1',
        title: 'Affordable 3 Bedroom Bungalow',
        type: 'Bungalow for sale',
        price: 45000000,
        location: 'Rukpokwu, Port Harcourt',
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        imageUrl: '/assets/7.jpg',
      },
      {
        id: 'sn2',
        title: '2 Bedroom Apartment',
        type: 'Apartment for sale',
        price: 35000000,
        location: 'Woji, Port Harcourt',
        bedrooms: 2,
        bathrooms: 2,
        parkingSpaces: 1,
        imageUrl: '/assets/8.jpg',
      },
      {
        id: 'sn3',
        title: 'Mini Estate Development',
        type: 'Estate Units for sale',
        price: 250000000,
        location: 'Eliozu, Port Harcourt',
        units: 10,
        bedrooms: 3,
        bathrooms: 3,
        imageUrl: '/assets/9.jpg',
      }
    ]
  },
  'urban-prime-realty': {
    name: 'Urban Prime Realty',
    logo: '/assets/logo1.png',
    location: 'Ikoyi, Lagos',
    phone: '+234 804 567 8901',
    email: 'hello@urbanprime.com',
    website: 'www.urbanprime.com',
    description: 'Pioneering smart and sustainable urban living solutions. Our properties combine modern technology with eco-friendly features to create the perfect contemporary living spaces.',
    propertiesCount: 142,
    properties: [
      {
        id: 'up1',
        title: 'Smart 4 Bedroom Duplex',
        type: 'Duplex for sale',
        price: 380000000,
        location: 'Ikoyi, Lagos',
        bedrooms: 4,
        bathrooms: 4,
        parkingSpaces: 2,
        imageUrl: '/assets/10.jpeg',
      },
      {
        id: 'up2',
        title: 'Eco-Friendly 3 Bedroom Apartment',
        type: 'Apartment for sale',
        price: 220000000,
        location: 'Lekki Phase 1, Lagos',
        bedrooms: 3,
        bathrooms: 3,
        parkingSpaces: 2,
        imageUrl: '/assets/12.jpeg',
      },
      {
        id: 'up3',
        title: 'Modern Studio Apartments',
        type: 'Studio Apartments for sale',
        price: 85000000,
        location: 'Victoria Island, Lagos',
        bedrooms: 1,
        bathrooms: 1,
        parkingSpaces: 1,
        imageUrl: '/assets/karsana-terraced-house-7709-2-768x435.jpg',
      }
    ]
  }
}

export default function CompanyPage() {
  const { slug } = useParams()
  const company = COMPANY_DATA[slug as keyof typeof COMPANY_DATA]

  if (!company) {
    return <div className="container py-12">Company not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Company Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{company.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{company.phone}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{company.email}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>{company.website}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{company.propertiesCount} Properties</span>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Properties by {company.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

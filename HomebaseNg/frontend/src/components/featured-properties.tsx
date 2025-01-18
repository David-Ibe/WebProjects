import { PropertyCard } from '@/components/property-card'
import { Link } from 'react-router-dom'

export const FEATURED_PROPERTIES = [
  {
    id: '1',
    title: 'Modern 4 Bedroom Detached Duplex',
    type: 'Detached duplex for sale',
    price: 85000000,
    location: 'Lekki, Lagos',
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    imageUrl: '/assets/1.jpg',
  },
  {
    id: '2',
    title: 'Contemporary 5 Bedroom Fully Detached Duplex With Pool',
    type: 'Detached duplex for sale',
    price: 750000000,
    location: 'Ikoyi, Lagos',
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4,
    imageUrl: '/assets/2.jpg',
  },
  {
    id: '3',
    title: 'Luxury 4 Bedroom Semi Detached Duplex',
    type: 'Semi-detached duplex for sale',
    price: 240000000,
    location: 'Victoria Island, Lagos',
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 2,
    imageUrl: '/assets/3.jpg',
  },
  {
    id: '7',
    title: 'Waterfront 6 Bedroom Mansion',
    type: 'Mansion for sale',
    price: 1200000000,
    location: 'Banana Island, Lagos',
    bedrooms: 6,
    bathrooms: 7,
    parkingSpaces: 6,
    imageUrl: '/assets/7.jpg',
  },
  {
    id: '8',
    title: 'Commercial Office Space',
    type: 'Office space for rent',
    price: 25000000,
    location: 'Victoria Island, Lagos',
    bedrooms: 0,
    bathrooms: 2,
    parkingSpaces: 4,
    imageUrl: '/assets/8.jpg',
  },
  {
    id: '9',
    title: 'Penthouse with Skyline View',
    type: 'Penthouse for sale',
    price: 950000000,
    location: 'Eko Atlantic, Lagos',
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 3,
    imageUrl: '/assets/9.jpg',
  },
  
    {
      id: '7',
      title: 'Waterfront 6 Bedroom Mansion',
      type: 'Mansion for sale',
      price: 1200000000,
      location: 'Banana Island, Lagos',
      bedrooms: 6,
      bathrooms: 7,
      parkingSpaces: 6,
      imageUrl: '/assets/7.jpg',
    },
    {
      id: '8',
      title: 'Commercial Office Space',
      type: 'Office space for rent',
      price: 25000000,
      location: 'Victoria Island, Lagos',
      bedrooms: 0,
      bathrooms: 2,
      parkingSpaces: 4,
      imageUrl: '/assets/8.jpg',
    },
    {
      id: '9',
      title: 'Penthouse with Skyline View',
      type: 'Penthouse for sale',
      price: 950000000,
      location: 'Eko Atlantic, Lagos',
      bedrooms: 4,
      bathrooms: 5,
      parkingSpaces: 3,
      imageUrl: '/assets/9.jpg',

  }
] as const

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Properties</h2>
          <p className="mt-2 text-lg text-muted-foreground">Discover our handpicked selection of premium properties</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <Link 
              key={property.id} 
              to={`/property/${property.id}`}
              className="group transition-transform hover:scale-105"
            >
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

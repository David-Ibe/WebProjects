import { Navbar } from '../components/navbar'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search, Filter, Bed, Bath, Car } from 'lucide-react'
import { Link } from 'react-router-dom'

const PROPERTIES_FOR_SALE = [
  {
    id: 1,
    title: 'Luxury 5 Bedroom Villa',
    location: 'Lekki Phase 1, Lagos',
    price: 75000000,
    image: '/assets/1.jpg',
    bedrooms: 5,
    bathrooms: 6,
    parking: 2,
    type: 'Villa'
  },
  {
    id: 2,
    title: 'Modern 4 Bedroom Duplex',
    location: 'Ikoyi, Lagos',
    price: 120000000,
    image: '/assets/2.jpg',
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    type: 'Duplex'
  },
  {
    id: 3,
    title: '3 Bedroom Penthouse',
    location: 'Victoria Island, Lagos',
    price: 85000000,
    image: '/assets/3.jpg',
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    type: 'Penthouse'
  },
  {
    id: 4,
    title: 'Luxury 6 Bedroom Mansion',
    location: 'Banana Island, Lagos',
    price: 450000000,
    image: '/assets/4.jpg',
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    type: 'Mansion'
  },
  {
    id: 5,
    title: '4 Bedroom Terrace House',
    location: 'Ikeja GRA, Lagos',
    price: 95000000,
    image: '/assets/5.jpg',
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    type: 'Terrace'
  },
  {
    id: 6,
    title: '3 Bedroom Smart Home',
    location: 'Magodo Phase 2, Lagos',
    price: 65000000,
    image: '/assets/6.jpg',
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    type: 'Smart Home'
  }
]

export default function ForSale() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Properties For Sale</h1>
            <p className="text-muted-foreground">Find your dream property in Nigeria's most sought-after locations</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search properties..."
                className="pl-10 w-[300px]"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES_FOR_SALE.map((property) => (
            <Link to={`/properties/${property.id}`} key={property.id} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
                  <p className="text-muted-foreground mb-4">{property.location}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      <span>{property.parking} Parking</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">₦{property.price.toLocaleString()}</span>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

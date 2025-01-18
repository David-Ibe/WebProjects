import { Navbar } from '../components/navbar'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search, Filter, Bed, Bath, Car } from 'lucide-react'
import { Link } from 'react-router-dom'

const PROPERTIES_FOR_RENT = [
  {
    id: 1,
    title: 'Modern 3 Bedroom Apartment',
    location: 'Victoria Island, Lagos',
    price: 3500000,
    image: '/assets/7.jpg',
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    type: 'Apartment',
    period: 'year'
  },
  {
    id: 2,
    title: 'Luxury 4 Bedroom Duplex',
    location: 'Lekki Phase 1, Lagos',
    price: 5000000,
    image: '/assets/8.jpg',
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    type: 'Duplex',
    period: 'year'
  },
  {
    id: 3,
    title: '2 Bedroom Serviced Flat',
    location: 'Ikoyi, Lagos',
    price: 250000,
    image: '/assets/1.jpg',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    type: 'Serviced',
    period: 'month'
  },
  {
    id: 4,
    title: '5 Bedroom Mansion',
    location: 'Banana Island, Lagos',
    price: 15000000,
    image: '/assets/2.jpg',
    bedrooms: 5,
    bathrooms: 6,
    parking: 3,
    type: 'Mansion',
    period: 'year'
  },
  {
    id: 5,
    title: 'Studio Apartment',
    location: 'Ikeja GRA, Lagos',
    price: 150000,
    image: '/assets/3.jpg',
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    type: 'Studio',
    period: 'month'
  },
  {
    id: 6,
    title: '3 Bedroom Terrace',
    location: 'Magodo Phase 2, Lagos',
    price: 2500000,
    image: '/assets/4.jpg',
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    type: 'Terrace',
    period: 'year'
  }
]

export default function ForRent() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Properties For Rent</h1>
            <p className="text-muted-foreground">Find your perfect rental property in prime locations</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search rentals..."
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
          {PROPERTIES_FOR_RENT.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id} className="group">
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
                    <div>
                      <span className="text-lg font-bold text-primary">₦{property.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">/{property.period}</span>
                    </div>
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

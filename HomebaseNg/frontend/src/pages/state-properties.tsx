import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Bed, Bath, Car, MapPin } from 'lucide-react'

// This would typically come from your API
const SAMPLE_PROPERTIES = {
  lagos: [
    {
      id: '1',
      title: 'Luxury 4 Bedroom Duplex',
      type: 'House for sale',
      price: 250000000,
      location: 'Lekki Phase 1, Lagos',
      bedrooms: 4,
      bathrooms: 4,
      parkingSpaces: 2,
      imageUrl: '/assets/1.jpg',
    },
    // Add more properties as needed
  ],
  // Add more states as needed
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

function capitalizeWords(str: string) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

export default function StateProperties() {
  const { state } = useParams<{ state: string }>()
  const [priceRange, setPriceRange] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  
  // In a real app, you would fetch this data from your API
  const properties = SAMPLE_PROPERTIES[state as keyof typeof SAMPLE_PROPERTIES] || []
  const stateName = state ? capitalizeWords(state) : ''

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Properties in {stateName}</h1>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-10000000">Below ₦10M</SelectItem>
              <SelectItem value="10000000-50000000">₦10M - ₦50M</SelectItem>
              <SelectItem value="50000000-100000000">₦50M - ₦100M</SelectItem>
              <SelectItem value="100000000+">Above ₦100M</SelectItem>
            </SelectContent>
          </Select>

          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length > 0 ? (
            properties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {formatPrice(property.price)}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      {property.parkingSpaces} Parking
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
              <p className="text-muted-foreground">
                We couldn't find any properties in {stateName} matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useParams } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { FEATURED_PROPERTIES } from '@/components/featured-properties'
import { Bed, Bath, Car, MapPin, Phone, Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Footer } from '../components/layout/Footer'
import { useEffect } from 'react'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = FEATURED_PROPERTIES.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground">The property you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Property Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{property.type}</span>
              <ArrowRight className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{property.location}</span>
            </div>
            <div className="text-3xl font-bold text-primary">
              ₦{property.price.toLocaleString()}
            </div>
          </div>

          {/* Property Images */}
          <div className="aspect-[2/1] bg-muted rounded-lg overflow-hidden mb-8">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Property Overview</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {property.bedrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-muted-foreground" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-muted-foreground" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  {property.parkingSpaces !== undefined && (
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-muted-foreground" />
                      <span>{property.parkingSpaces} Parking</span>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Contact Agent */}
            <div>
              <Card className="p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Viewing
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

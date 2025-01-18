import { Navbar } from '../components/navbar'
import { Building2, MapPin, Phone, Mail, Globe, Star, Users, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const AGENT_DATA = {
  'premium-homes': {
    name: 'Premium Homes',
    logo: '/assets/agent1.png',
    location: 'Lekki, Lagos',
    phone: '+234 801 234 5678',
    email: 'contact@premiumhomes.com',
    website: 'www.premiumhomes.com',
    description: 'Leading real estate agency specializing in luxury properties across Lagos. Our experienced agents provide personalized service to meet your property needs.',
    rating: 4.8,
    reviews: 156,
    yearsExperience: 15,
    listingsCount: 120,
    specialties: ['Luxury Homes', 'Waterfront Properties', 'Commercial Real Estate'],
    featuredProperties: [
      {
        id: 'ph1',
        title: 'Luxury 5 Bedroom Villa',
        type: 'Villa',
        price: 850000000,
        location: 'Lekki Phase 1, Lagos',
        image: '/assets/property1.jpg'
      },
      {
        id: 'ph2',
        title: 'Modern 4 Bedroom Duplex',
        type: 'Duplex',
        price: 450000000,
        location: 'Victoria Island, Lagos',
        image: '/assets/property2.jpg'
      }
    ]
  },
  'elite-realtors': {
    name: 'Elite Realtors',
    logo: '/assets/agent2.png',
    location: 'Victoria Island, Lagos',
    phone: '+234 802 345 6789',
    email: 'info@eliterealtors.com',
    website: 'www.eliterealtors.com',
    description: 'Elite Realtors is your trusted partner in finding premium properties. With our extensive network and market expertise, we make your real estate dreams a reality.',
    rating: 4.7,
    reviews: 142,
    yearsExperience: 12,
    listingsCount: 95,
    specialties: ['Residential Properties', 'Investment Properties', 'Property Management'],
    featuredProperties: [
      {
        id: 'er1',
        title: '3 Bedroom Penthouse',
        type: 'Penthouse',
        price: 380000000,
        location: 'Ikoyi, Lagos',
        image: '/assets/property3.jpg'
      },
      {
        id: 'er2',
        title: 'Luxury Office Space',
        type: 'Commercial',
        price: 550000000,
        location: 'Victoria Island, Lagos',
        image: '/assets/property4.jpg'
      }
    ]
  },
  'prime-properties': {
    name: 'Prime Properties',
    logo: '/assets/agent3.png',
    location: 'Ikeja, Lagos',
    phone: '+234 803 456 7890',
    email: 'contact@primeproperties.com',
    website: 'www.primeproperties.com',
    description: 'Prime Properties offers a comprehensive range of real estate services. Our team of professionals ensures a smooth and satisfactory property transaction experience.',
    rating: 4.6,
    reviews: 128,
    yearsExperience: 10,
    listingsCount: 85,
    specialties: ['Residential Sales', 'Property Valuation', 'Real Estate Consulting'],
    featuredProperties: [
      {
        id: 'pp1',
        title: '4 Bedroom Terrace',
        type: 'Terrace',
        price: 280000000,
        location: 'Magodo, Lagos',
        image: '/assets/property5.jpg'
      },
      {
        id: 'pp2',
        title: '2 Bedroom Apartment',
        type: 'Apartment',
        price: 120000000,
        location: 'Ikeja GRA, Lagos',
        image: '/assets/property6.jpg'
      }
    ]
  }
}

export default function EstateAgentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Estate Agents</h1>
            </div>
            <p className="text-muted-foreground">Connect with top real estate professionals in Nigeria</p>
          </div>
          <div className="w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search agents..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(AGENT_DATA).map(([id, agent]) => (
            <div key={id} className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <img src={agent.logo} alt={agent.name} className="w-16 h-16 object-contain rounded-lg bg-muted p-2" />
                  <div>
                    <h2 className="text-xl font-bold">{agent.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{agent.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-muted-foreground">({agent.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{agent.yearsExperience}+ years</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4 text-primary" />
                    <span>{agent.listingsCount} listings</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{agent.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>{agent.website}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Featured Properties</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {agent.featuredProperties.map((property) => (
                      <div key={property.id} className="group cursor-pointer">
                        <div className="aspect-video rounded-lg overflow-hidden mb-2">
                          <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{property.title}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{property.type}</span>
                            <span className="text-xs font-medium">₦{property.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button className="w-full">Contact Agent</Button>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

import { Navbar } from '../components/navbar'
import { Building2, MapPin, Phone, Mail, Globe, Star, Users, Home, Search, Award, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const DEVELOPER_DATA = {
  'mega-developments': {
    name: 'Mega Developments',
    logo: '/assets/developer1.png',
    location: 'Victoria Island, Lagos',
    phone: '+234 802 345 6789',
    email: 'info@megadevelopments.com',
    website: 'www.megadevelopments.com',
    description: 'Leading property development company specializing in modern residential and commercial properties. Known for innovative designs and sustainable building practices.',
    rating: 4.9,
    reviews: 234,
    yearsExperience: 20,
    completedProjects: 45,
    ongoingProjects: 8,
    certifications: ['ISO 9001:2015', 'LEED Certified', 'NIA Certified'],
    specialties: ['Luxury Residential', 'Commercial Complexes', 'Smart Buildings'],
    featuredProjects: [
      {
        id: 'md1',
        title: 'The Mega Towers',
        type: 'Mixed Use',
        location: 'Victoria Island',
        status: 'Completed',
        units: 120,
        image: '/assets/project1.jpg',
        completion: '2024'
      },
      {
        id: 'md2',
        title: 'Green Valley Estate',
        type: 'Residential',
        location: 'Lekki Phase 2',
        status: 'Ongoing',
        units: 250,
        image: '/assets/project2.jpg',
        completion: '2025'
      }
    ]
  },
  'urban-builders': {
    name: 'Urban Builders',
    logo: '/assets/developer2.png',
    location: 'Ikoyi, Lagos',
    phone: '+234 803 456 7890',
    email: 'contact@urbanbuilders.com',
    website: 'www.urbanbuilders.com',
    description: 'Urban Builders transforms city landscapes with modern architectural designs and sustainable development practices. We create spaces that enhance urban living.',
    rating: 4.8,
    reviews: 186,
    yearsExperience: 15,
    completedProjects: 32,
    ongoingProjects: 5,
    certifications: ['ISO 14001:2015', 'Green Building Certified'],
    specialties: ['Urban Development', 'Eco-friendly Homes', 'Office Complexes'],
    featuredProjects: [
      {
        id: 'ub1',
        title: 'Urban Heights',
        type: 'Residential',
        location: 'Ikoyi',
        status: 'Completed',
        units: 80,
        image: '/assets/project3.jpg',
        completion: '2023'
      },
      {
        id: 'ub2',
        title: 'Tech Hub Plaza',
        type: 'Commercial',
        location: 'Victoria Island',
        status: 'Ongoing',
        units: 60,
        image: '/assets/project4.jpg',
        completion: '2025'
      }
    ]
  },
  'horizon-developers': {
    name: 'Horizon Developers',
    logo: '/assets/developer3.png',
    location: 'Lekki, Lagos',
    phone: '+234 804 567 8901',
    email: 'info@horizondevelopers.com',
    website: 'www.horizondevelopers.com',
    description: 'Horizon Developers creates innovative living spaces that combine luxury with functionality. Our projects are designed to meet the evolving needs of modern living.',
    rating: 4.7,
    reviews: 142,
    yearsExperience: 12,
    completedProjects: 28,
    ongoingProjects: 6,
    certifications: ['Quality Excellence Award', 'Environmental Safety Certified'],
    specialties: ['Smart Homes', 'Luxury Apartments', 'Sustainable Development'],
    featuredProjects: [
      {
        id: 'hd1',
        title: 'Horizon Gardens',
        type: 'Residential',
        location: 'Lekki Phase 1',
        status: 'Completed',
        units: 150,
        image: '/assets/project5.jpg',
        completion: '2024'
      },
      {
        id: 'hd2',
        title: 'Smart Living Complex',
        type: 'Mixed Use',
        location: 'Ajah',
        status: 'Ongoing',
        units: 200,
        image: '/assets/project6.jpg',
        completion: '2026'
      }
    ]
  }
}

export default function PropertyDevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">Property Developers</h1>
            </div>
            <p className="text-muted-foreground">Discover leading property development companies in Nigeria</p>
          </div>
          <div className="w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search developers..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(DEVELOPER_DATA).map(([id, developer]) => (
            <div key={id} className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <img src={developer.logo} alt={developer.name} className="w-16 h-16 object-contain rounded-lg bg-muted p-2" />
                  <div>
                    <h2 className="text-xl font-bold">{developer.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{developer.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">{developer.rating}</span>
                    <span className="text-muted-foreground">({developer.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{developer.yearsExperience}+ years</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>{developer.completedProjects} completed</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{developer.description}</p>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {developer.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Certifications</h3>
                  <div className="space-y-1">
                    {developer.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{developer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{developer.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>{developer.website}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Featured Projects</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {developer.featuredProjects.map((project) => (
                      <div key={project.id} className="group cursor-pointer">
                        <div className="aspect-video rounded-lg overflow-hidden mb-2">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium
                            ${project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                            {project.status}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{project.title}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{project.type}</span>
                            <span className="text-xs font-medium">{project.units} units</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button className="w-full">Contact Developer</Button>
                  <Button variant="outline" className="w-full">View Projects</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

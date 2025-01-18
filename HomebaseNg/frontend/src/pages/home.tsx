import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { ChatBot } from '../components/chat-bot'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { PageLayout } from '@/components/page-layout'
import { homePageSections } from '@/config/layout'

interface SearchFormData {
  type: string
  location: string
  propertyType: string
  bedrooms: string
  minPrice: string
  maxPrice: string
  furnishing: string
  serviced: string
  shared: string
  addedToSite: string
  keywords: string
  propertyRef: string
}

export default function Home() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'shortlet'>('buy')
  const [formData, setFormData] = useState<SearchFormData>({
    type: '',
    location: '',
    propertyType: '',
    bedrooms: '',
    minPrice: '',
    maxPrice: '',
    furnishing: '',
    serviced: '',
    shared: '',
    addedToSite: '',
    keywords: '',
    propertyRef: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build query parameters
    const queryParams = new URLSearchParams()
    if (formData.location) queryParams.set('location', formData.location)
    if (formData.propertyType) queryParams.set('propertyType', formData.propertyType)
    if (formData.bedrooms) queryParams.set('bedrooms', formData.bedrooms)
    if (formData.minPrice) queryParams.set('minPrice', formData.minPrice)
    if (formData.maxPrice) queryParams.set('maxPrice', formData.maxPrice)
    if (formData.furnishing) queryParams.set('furnishing', formData.furnishing)
    if (formData.addedToSite) queryParams.set('addedToSite', formData.addedToSite)
    if (formData.keywords) queryParams.set('keywords', formData.keywords)
    if (formData.propertyRef) queryParams.set('propertyRef', formData.propertyRef)

    // Determine target page based on search type
    const targetPage = {
      buy: '/for-sale',
      rent: '/for-rent',
      shortlet: '/shortlet'
    }[activeTab]

    // Navigate to the appropriate page with search parameters
    navigate(`${targetPage}?${queryParams.toString()}`)
  }

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const heroSection = (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 md:py-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${import.meta.env.VITE_HERO_IMAGE || '/hero-bg.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center -mt-0 md:-mt-32 space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-6xl font-bold text-white text-center mb-4">
            Find your dream property
          </h1>

          <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="grid grid-cols-3 border-b">
              <button
                onClick={() => setActiveTab('buy')}
                className={`py-3 md:py-4 text-sm md:text-base text-center font-medium transition-colors ${
                  activeTab === 'buy'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 border-b hover:bg-gray-100 hover:text-primary'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`py-3 md:py-4 text-sm md:text-base text-center font-medium transition-colors ${
                  activeTab === 'rent'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 border-b hover:bg-gray-100 hover:text-primary'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setActiveTab('shortlet')}
                className={`py-3 md:py-4 text-sm md:text-base text-center font-medium transition-colors ${
                  activeTab === 'shortlet'
                    ? 'bg-primary text-white'
                    : 'text-gray-700 border-b hover:bg-gray-100 hover:text-primary'
                }`}
              >
                Short Let
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="p-4 md:p-6">
              <div className="space-y-4">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <Input
                    placeholder="Enter a state, locality or area"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full"
                  />
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleInputChange('propertyType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat">Flat / Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) => handleInputChange('bedrooms', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <Select
                    value={formData.minPrice}
                    onValueChange={(value) => handleInputChange('minPrice', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Min price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-min">No Min</SelectItem>
                      <SelectItem value="100000">₦100,000</SelectItem>
                      <SelectItem value="500000">₦500,000</SelectItem>
                      <SelectItem value="1000000">₦1,000,000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.maxPrice}
                    onValueChange={(value) => handleInputChange('maxPrice', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Max price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-max">No Max</SelectItem>
                      <SelectItem value="1000000">₦1,000,000</SelectItem>
                      <SelectItem value="5000000">₦5,000,000</SelectItem>
                      <SelectItem value="10000000">₦10,000,000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.furnishing}
                    onValueChange={(value) => handleInputChange('furnishing', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Furnishing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="furnished">Furnished</SelectItem>
                      <SelectItem value="unfurnished">Unfurnished</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.addedToSite}
                    onValueChange={(value) => handleInputChange('addedToSite', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Added to site" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anytime">Anytime</SelectItem>
                      <SelectItem value="last24">Last 24 hours</SelectItem>
                      <SelectItem value="last3days">Last 3 days</SelectItem>
                      <SelectItem value="lastweek">Last week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <Input
                    placeholder="Keywords e.g. 'pool' or 'jacuzzi'"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                  />
                  <Input
                    placeholder="Property Ref."
                    value={formData.propertyRef}
                    onChange={(e) => handleInputChange('propertyRef', e.target.value)}
                  />
                </div>

                <div className="flex justify-center mt-6 md:mt-8">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold w-full md:w-auto">
                    Search Properties
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <PageLayout 
          heroSection={heroSection}
          sections={homePageSections.order}
        />
      </main>
      <ChatBot />
    </div>
  )
}

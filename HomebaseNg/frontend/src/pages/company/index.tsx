import { useParams } from 'react-router-dom'
import { Building2, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'
import { COMPANY_DATA, type CompanySlug } from './data'

export default function CompanyPage() {
  const { slug } = useParams<{ slug: CompanySlug }>()
  const company = COMPANY_DATA[slug as CompanySlug]

  if (!company) {
    return <div className="container py-12">Company not found</div>
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Company Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-32 h-32">
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
                <MapPin className="w-5 h-5 mr-2" />
                {company.location}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-2" />
                {company.phone}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-2" />
                {company.email}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Globe className="w-5 h-5 mr-2" />
                {company.website}
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <p className="text-3xl font-bold">{company.propertiesCount}</p>
          </div>
        </div>

        {/* Company Properties */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.properties.map((property) => (
              <PropertyCard key={property.id} {...property} imageUrl={property.images[0]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

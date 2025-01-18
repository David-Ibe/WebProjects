import { Bed, Bath, Car } from 'lucide-react'

interface PropertyCardProps {
  id: string
  title: string
  type: string
  price: number
  location: string
  bedrooms?: number
  bathrooms?: number
  parkingSpaces?: number
  imageUrl: string
}

export function PropertyCard({
  id,
  title,
  type,
  price,
  location,
  bedrooms,
  bathrooms,
  parkingSpaces,
  imageUrl,
}: PropertyCardProps) {
  return (
    <div className="group rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-sm font-medium">
          {type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-foreground line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{location}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-primary">
            ₦{price.toLocaleString()}
            {type.includes('rent') && <span className="text-sm text-muted-foreground">/year</span>}
          </p>
          <div className="flex items-center space-x-4 text-muted-foreground">
            {bedrooms !== undefined && (
              <div className="flex items-center space-x-1">
                <Bed className="w-4 h-4" />
                <span className="text-sm">{bedrooms}</span>
              </div>
            )}
            {bathrooms !== undefined && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4" />
                <span className="text-sm">{bathrooms}</span>
              </div>
            )}
            {parkingSpaces !== undefined && (
              <div className="flex items-center space-x-1">
                <Car className="w-4 h-4" />
                <span className="text-sm">{parkingSpaces}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

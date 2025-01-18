export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  state: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  images: string[];
  amenities: string[];
  status: 'for-sale' | 'for-rent';
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  location?: string;
  state?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  status?: 'for-sale' | 'for-rent';
}

export interface PropertyStats {
  totalListings: number;
  averagePrice: number;
  priceChange: number;
  popularLocations: Array<{
    name: string;
    count: number;
    averagePrice: number;
    priceChange: number;
  }>;
}

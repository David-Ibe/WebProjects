export const mockData = {
  properties: [
    {
      id: '1',
      title: 'Luxury Apartment in Lekki Phase 1',
      description: 'Beautiful 3 bedroom apartment with modern amenities',
      price: 85000000,
      location: 'Lekki Phase 1',
      state: 'Lagos',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 3,
      images: ['/assets/property1.jpg'],
      amenities: ['Swimming Pool', 'Gym', '24/7 Security'],
      status: 'for-sale',
      createdAt: '2025-01-15T00:00:00.000Z',
      updatedAt: '2025-01-15T00:00:00.000Z'
    },
    // Add more mock properties as needed
  ],
  
  marketStats: {
    totalListings: 1234,
    averagePrice: 85000000,
    priceChange: 5.2,
    popularLocations: [
      {
        name: 'Lekki Phase 1',
        count: 234,
        averagePrice: 120000000,
        priceChange: 8.5
      },
      {
        name: 'Victoria Island',
        count: 186,
        averagePrice: 150000000,
        priceChange: 6.2
      },
      {
        name: 'Ikoyi',
        count: 142,
        averagePrice: 250000000,
        priceChange: 4.8
      }
    ]
  }
};

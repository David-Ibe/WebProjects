import { useQuery } from '@tanstack/react-query';
import { propertyService } from '@/features/properties/services/propertyService';
import type { PropertyFilters } from '@/features/properties/types';
import { mockData } from '@/lib/mockData';

export function useProperties(filters: PropertyFilters) {
  return useQuery({
    queryKey: ['properties', filters],
    queryFn: () => propertyService.getProperties(filters),
    placeholderData: mockData.properties, // Use mock data as placeholder
    retry: 1,
  });
}

export function useProperty(id: string) {
  return useQuery({
    queryKey: ['property', id],
    queryFn: () => propertyService.getProperty(id),
    placeholderData: () => mockData.properties.find(p => p.id === id),
    retry: 1,
  });
}

export function usePropertyStats() {
  return useQuery({
    queryKey: ['propertyStats'],
    queryFn: () => propertyService.getPropertyStats(),
    placeholderData: mockData.marketStats,
    retry: 1,
  });
}

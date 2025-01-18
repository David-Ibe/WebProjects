import { Property, PropertyFilters, PropertyStats } from '../types';
import { api } from '@/lib/api';

export const propertyService = {
  async getProperties(filters: PropertyFilters): Promise<Property[]> {
    const response = await api.get('/properties', { params: filters });
    return response.data;
  },

  async getProperty(id: string): Promise<Property> {
    const response = await api.get(`/properties/${id}`);
    return response.data;
  },

  async getPropertyStats(): Promise<PropertyStats> {
    const response = await api.get('/properties/stats');
    return response.data;
  },

  async getSimilarProperties(id: string): Promise<Property[]> {
    const response = await api.get(`/properties/${id}/similar`);
    return response.data;
  },
};

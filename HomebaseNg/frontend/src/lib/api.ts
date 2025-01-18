import axios, { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast';
import { mockData } from './mockData';

const isProduction = import.meta.env.PROD;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Function to check if the backend is available
const checkBackendConnection = async () => {
  try {
    await api.get('/health');
    return true;
  } catch {
    return false;
  }
};

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    // Check backend connection before making requests
    const isBackendAvailable = await checkBackendConnection();
    
    if (!isBackendAvailable && !isProduction) {
      // In development, use mock data if backend is not available
      return Promise.reject(new Error('MOCK_DATA'));
    }

    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError | Error) => {
    // Handle mock data case
    if (error.message === 'MOCK_DATA') {
      const path = (error as any).config?.url;
      if (path?.includes('/properties')) {
        return { data: mockData.properties };
      }
      if (path?.includes('/market-stats')) {
        return { data: mockData.marketStats };
      }
      return { data: null };
    }

    // Handle actual errors
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data as any;

        switch (status) {
          case 401:
            localStorage.removeItem('token');
            window.location.href = '/sign-in';
            break;
          case 500:
            if (!isProduction) {
              // In development, fallback to mock data on 500 errors
              const path = error.config?.url;
              if (path?.includes('/properties')) {
                return { data: mockData.properties };
              }
              if (path?.includes('/market-stats')) {
                return { data: mockData.marketStats };
              }
            }
            toast({
              variant: 'destructive',
              title: 'Server Error',
              description: 'An unexpected error occurred. Using cached data.',
            });
            break;
          default:
            toast({
              variant: 'destructive',
              title: 'Error',
              description: data?.message || 'An unexpected error occurred.',
            });
        }
      } else if (error.request) {
        toast({
          variant: 'destructive',
          title: 'Network Error',
          description: 'Unable to connect to the server. Using offline data.',
        });
        
        // Return mock data for network errors in development
        if (!isProduction) {
          const path = error.config?.url;
          if (path?.includes('/properties')) {
            return { data: mockData.properties };
          }
          if (path?.includes('/market-stats')) {
            return { data: mockData.marketStats };
          }
        }
      }
    }

    return Promise.reject(error);
  }
);

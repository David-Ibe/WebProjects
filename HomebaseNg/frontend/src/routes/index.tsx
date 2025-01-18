import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { lazy } from 'react';

// Lazy load components
const Home = lazy(() => import('@/pages/home'));
const ForSale = lazy(() => import('@/pages/for-sale'));
const ForRent = lazy(() => import('@/pages/for-rent'));
const PropertyDetails = lazy(() => import('@/pages/property-details'));
const Requests = lazy(() => import('@/pages/requests'));
const MarketTrends = lazy(() => import('@/pages/market-trends'));
const PropertyDevelopers = lazy(() => import('@/pages/property-developers'));
const EstateAgents = lazy(() => import('@/pages/estate-agents'));
const Contact = lazy(() => import('@/pages/contact'));
const NotFound = lazy(() => import('@/pages/not-found'));
const SignIn = lazy(() => import('@/pages/sign-in'));
const Register = lazy(() => import('@/pages/register'));
const Companies = lazy(() => import('@/pages/companies'));
const Company = lazy(() => import('@/pages/company'));
const StateProperties = lazy(() => import('@/pages/state-properties'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'for-sale', element: <ForSale /> },
      { path: 'for-rent', element: <ForRent /> },
      { path: 'property/:id', element: <PropertyDetails /> },
      { path: 'requests', element: <Requests /> },
      { path: 'market-trends', element: <MarketTrends /> },
      { path: 'property-developers', element: <PropertyDevelopers /> },
      { path: 'estate-agents', element: <EstateAgents /> },
      { path: 'contact', element: <Contact /> },
      { path: 'sign-in', element: <SignIn /> },
      { path: 'register', element: <Register /> },
      { path: 'companies', element: <Companies /> },
      { path: 'company/:slug', element: <Company /> },
      { path: 'state/:id/properties', element: <StateProperties /> },
    ],
  },
]);

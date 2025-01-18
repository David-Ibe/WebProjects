import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FEATURED_COMPANIES = [
  {
    id: '1',
    name: 'Sure Luxury Homes',
    logo: '/assets/logo3.png',
    slug: 'sure-luxury-homes'
  },
  {
    id: '2',
    name: 'BlueHedge Realtors',
    logo: '/assets/logo2.png',
    slug: 'bluehedge-realtors'
  },
  {
    id: '3',
    name: 'Shelter Nest Realty',
    logo: '/assets/logo5.jpg',
    slug: 'shelter-nest-realty'
  },
  {
    id: '4',
    name: 'Urban Prime Realty',
    logo: '/assets/logo4.jpg',
    slug: 'urban-prime-realty'
  },
];

const FeaturedCompanies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_COMPANIES.map(company => (
            <Link 
              to={`/company/${company.slug}`} 
              key={company.id}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-900">
                    {company.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;

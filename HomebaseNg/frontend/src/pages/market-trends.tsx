import { Navbar } from '../components/navbar'
import { Button } from '../components/ui/button'
import { TrendingUp, ArrowUpRight, ArrowDownRight, Building2, Home, MapPin, DollarSign, Users, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MARKET_STATS = {
  overview: {
    averagePrice: {
      value: 85000000,
      change: 5.2,
      trend: 'up'
    },
    averageRent: {
      value: 2500000,
      change: -1.8,
      trend: 'down'
    },
    activeListings: {
      value: 1234,
      change: 12.5,
      trend: 'up'
    }
  },
  hotAreas: [
    {
      name: 'Lekki Phase 1',
      priceChange: 8.5,
      averagePrice: 120000000,
      trend: 'up',
      propertyCount: 234
    },
    {
      name: 'Victoria Island',
      priceChange: 6.2,
      averagePrice: 150000000,
      trend: 'up',
      propertyCount: 186
    },
    {
      name: 'Ikoyi',
      priceChange: 4.8,
      averagePrice: 250000000,
      trend: 'up',
      propertyCount: 142
    }
  ],
  propertyTypes: [
    {
      type: 'Apartment',
      share: 45,
      trend: 'up',
      change: 3.2
    },
    {
      type: 'House',
      share: 30,
      trend: 'up',
      change: 2.1
    },
    {
      type: 'Land',
      share: 15,
      trend: 'down',
      change: -1.5
    },
    {
      type: 'Commercial',
      share: 10,
      trend: 'up',
      change: 4.8
    }
  ],
  recentTransactions: [
    {
      type: '4 Bedroom Duplex',
      location: 'Lekki Phase 1',
      price: 120000000,
      date: '2024-01-10'
    },
    {
      type: '3 Bedroom Apartment',
      location: 'Victoria Island',
      price: 85000000,
      date: '2024-01-08'
    },
    {
      type: '5 Bedroom House',
      location: 'Ikoyi',
      price: 250000000,
      date: '2024-01-05'
    }
  ]
}

export default function MarketTrends() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex items-center gap-4 mb-8">
          <TrendingUp className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Market Trends</h1>
            <p className="text-foreground/80">Stay informed with the latest real estate market trends</p>
          </div>
        </div>

        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium mb-2 text-foreground">Average Property Price</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-foreground">₦{MARKET_STATS.overview.averagePrice.value.toLocaleString()}</span>
              <div className={`flex items-center ${MARKET_STATS.overview.averagePrice.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {MARKET_STATS.overview.averagePrice.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span className="text-sm font-medium">{MARKET_STATS.overview.averagePrice.change}%</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70">Compared to last quarter</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium mb-2 text-foreground">Average Rental Price</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-foreground">₦{MARKET_STATS.overview.averageRent.value.toLocaleString()}</span>
              <div className={`flex items-center ${MARKET_STATS.overview.averageRent.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {MARKET_STATS.overview.averageRent.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span className="text-sm font-medium">{MARKET_STATS.overview.averageRent.change}%</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70">Per annum, compared to last quarter</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-medium mb-2 text-foreground">Properties Listed</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-foreground">{MARKET_STATS.overview.activeListings.value.toLocaleString()}</span>
              <div className={`flex items-center ${MARKET_STATS.overview.activeListings.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {MARKET_STATS.overview.activeListings.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span className="text-sm font-medium">+{MARKET_STATS.overview.activeListings.change}%</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70">Active listings this month</p>
          </div>
        </div>

        {/* Hot Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-6 text-foreground">Hot Areas</h2>
            <div className="space-y-4">
              {MARKET_STATS.hotAreas.map((area) => (
                <div key={area.name} className="flex items-center justify-between p-4 bg-muted/60 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{area.name}</span>
                    </div>
                    <div className="text-sm text-foreground/70">
                      {area.propertyCount} properties
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">₦{area.averagePrice.toLocaleString()}</div>
                    <div className={`flex items-center justify-end ${area.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {area.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      <span className="text-sm font-medium">{area.priceChange}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-6 text-foreground">Recent Transactions</h2>
            <div className="space-y-4">
              {MARKET_STATS.recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/60 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Home className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{transaction.type}</span>
                    </div>
                    <div className="text-sm text-foreground/70 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {transaction.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">₦{transaction.price.toLocaleString()}</div>
                    <div className="text-sm text-foreground/70">{new Date(transaction.date).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Types Distribution */}
        <div className="bg-card rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-6 text-foreground">Property Types Distribution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {MARKET_STATS.propertyTypes.map((type) => (
              <div key={type.type} className="p-4 bg-muted/60 rounded-lg">
                <h3 className="font-medium mb-2 text-foreground">{type.type}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">{type.share}%</span>
                  <div className={`flex items-center ${type.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {type.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span className="text-sm font-medium">{Math.abs(type.change)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Report CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Want More Insights?</h2>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Download our comprehensive market report for detailed analysis, forecasts, and expert insights into Nigeria's real estate market.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-medium">
            Download Market Report
          </Button>
        </div>
      </main>
    </div>
  )
}

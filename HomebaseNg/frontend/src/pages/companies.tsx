import { Navbar } from '../components/navbar'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search, Building2, MapPin, Phone, Mail, Star } from 'lucide-react'

export default function Companies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Real Estate Companies</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search companies..."
              className="pl-10 w-[300px]"
            />
          </div>
        </div>

        {/* Featured Companies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            Featured Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card rounded-lg overflow-hidden shadow-md p-6 border-2 border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">Premium Homes Ltd</h3>
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-muted-foreground">Premium Partner</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Victoria Island, Lagos</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+234 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>contact@premiumhomes.com</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">View Profile</Button>
                  <Button variant="outline" className="flex-1">Contact</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Listed Companies Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Latest Listed Companies in Nigeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-card rounded-lg overflow-hidden shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">City Realtors</h3>
                    <p className="text-muted-foreground">Real Estate Agency</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Lekki, Lagos</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+234 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>info@cityrealtors.com</span>
                  </div>
                </div>

                <Button className="w-full">View Profile</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

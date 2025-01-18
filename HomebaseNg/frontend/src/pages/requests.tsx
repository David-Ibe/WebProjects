import { Navbar } from '../components/navbar'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Building2, MapPin, Home, DollarSign, Phone, Mail, Calendar } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RECENT_REQUESTS = [
  {
    id: 1,
    type: '3 Bedroom Apartment',
    location: 'Lekki Phase 1',
    budget: '50,000,000 - 80,000,000',
    date: '2024-01-14',
    status: 'New',
    contact: {
      name: 'John Doe',
      phone: '+234 801 234 5678',
      email: 'john@example.com'
    }
  },
  {
    id: 2,
    type: '4 Bedroom Duplex',
    location: 'Victoria Island',
    budget: '120,000,000 - 150,000,000',
    date: '2024-01-13',
    status: 'In Progress',
    contact: {
      name: 'Sarah Johnson',
      phone: '+234 802 345 6789',
      email: 'sarah@example.com'
    }
  },
  {
    id: 3,
    type: '2 Bedroom Flat',
    location: 'Ikeja GRA',
    budget: '35,000,000 - 45,000,000',
    date: '2024-01-12',
    status: 'Matched',
    contact: {
      name: 'Michael Brown',
      phone: '+234 803 456 7890',
      email: 'michael@example.com'
    }
  }
]

export default function Requests() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Property Requests</h1>
              <p className="text-muted-foreground">Submit your property requirements and we'll help you find the perfect match</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                Submit a Request
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input type="text" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input type="text" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lekki">Lekki Phase 1</SelectItem>
                      <SelectItem value="vi">Victoria Island</SelectItem>
                      <SelectItem value="ikoyi">Ikoyi</SelectItem>
                      <SelectItem value="ikeja">Ikeja GRA</SelectItem>
                      <SelectItem value="magodo">Magodo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="Minimum budget" />
                    <Input type="text" placeholder="Maximum budget" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                  <Textarea 
                    placeholder="Describe any specific requirements (e.g., number of bedrooms, amenities, etc.)" 
                    className="h-32"
                  />
                </div>

                <Button className="w-full">Submit Request</Button>
              </form>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Recent Requests
              </h2>
              <div className="space-y-4">
                {RECENT_REQUESTS.map((request) => (
                  <div key={request.id} className="bg-card rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Home className="w-4 h-4 text-primary" />
                          <h3 className="font-medium">{request.type}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{request.location}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium
                        ${request.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                          request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-green-100 text-green-700'}`}>
                        {request.status}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span>Budget: ₦{request.budget}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Requested on {new Date(request.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="text-sm font-medium mb-2">Contact Information</div>
                      <div className="space-y-1 text-sm">
                        <div>{request.contact.name}</div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          <span>{request.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          <span>{request.contact.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Properties() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add PropertyCard components here with actual data */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

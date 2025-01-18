import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-br from-primary to-primary/80 mt-12 md:mt-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="w-12 h-12 text-white/90" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Are you an estate agent or developer?
          </h2>
          <p className="text-base md:text-lg mb-6 text-white/90">
            List your property for FREE and reach thousands of potential buyers and tenants.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="hover:scale-105 transition-transform duration-200 text-lg"
          >
            <Link to="/register">Register Now!</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

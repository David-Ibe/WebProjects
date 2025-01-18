import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe',
  'Zamfara'
]

export function BrowseStates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full text-lg bg-white p-4 text-gray-900 hover:text-[#CD7F32] hover:bg-gray-50">
                  Browse by State
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white p-4 max-h-[400px] overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {NIGERIAN_STATES.map((state) => (
                    <Link
                      key={state}
                      to={`/properties/state/${state.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-800 hover:text-[#CD7F32] p-2 rounded hover:bg-gray-50"
                    >
                      {state}
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  )
}

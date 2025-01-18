import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-3 px-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">HomeBaseNG</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {[
            ['HOME', '/'],
            ['FOR SALE', '/for-sale'],
            ['FOR RENT', '/for-rent'],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="text-sm font-medium text-white hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-white/10 flex items-center">
              PROFESSIONALS <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/estate-agents" className="w-full">Estate Agents</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/property-developers" className="w-full">Property Developers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {[
            ['REQUESTS', '/requests'],
            ['MARKET TRENDS', '/market-trends'],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="text-sm font-medium text-white hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4 px-2">
          <Link to="/sign-in">
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
              SIGN IN
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="default">REGISTER</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

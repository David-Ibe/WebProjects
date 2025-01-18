import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { label: 'FOR SALE', path: '/for-sale' },
  { label: 'FOR RENT', path: '/for-rent' },
  { label: 'REQUESTS', path: '/requests' },
  { label: 'MARKET TRENDS', path: '/market-trends' },
];

const professionalLinks = [
  { label: 'Estate Agents', path: '/estate-agents' },
  { label: 'Property Developers', path: '/property-developers' },
];

export function Navbar() {
  const location = useLocation();
  
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 px-2 hover:opacity-80 transition-opacity"
        >
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">HomeBaseNG</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {mainNavLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`
                px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${isActivePath(path)
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                }
              `}
            >
              {label}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger 
              className={`
                px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${location.pathname.includes('/professionals')
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                }
                flex items-center
              `}
            >
              PROFESSIONALS <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {professionalLinks.map(({ label, path }) => (
                <DropdownMenuItem key={path} asChild>
                  <Link 
                    to={path}
                    className={`w-full ${isActivePath(path) ? 'bg-accent' : ''}`}
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/sign-in">
            <Button 
              variant="ghost" 
              className="text-foreground/80 hover:text-foreground hover:bg-accent"
            >
              SIGN IN
            </Button>
          </Link>
          <Link to="/register">
            <Button>REGISTER</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

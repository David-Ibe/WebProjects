import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HomebaseNg</h3>
            <p className="text-gray-400 mb-4">
              Your trusted platform for finding, listing, and exploring properties across Nigeria. 
              Discover your dream home or next investment with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Properties */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore Properties</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/for-sale" className="text-gray-400 hover:text-white">
                  Properties for Sale
                </Link>
              </li>
              <li>
                <Link to="/for-rent" className="text-gray-400 hover:text-white">
                  Properties for Rent
                </Link>
              </li>
              <li>
                <Link to="/shortlet" className="text-gray-400 hover:text-white">
                  Shortlet Properties
                </Link>
              </li>
              <li>
                <Link to="/luxury" className="text-gray-400 hover:text-white">
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-400 hover:text-white">
                  Commercial Properties
                </Link>
              </li>
              <li>
                <Link to="/state-properties" className="text-gray-400 hover:text-white">
                  Properties by State
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Real Estate Blog
                </Link>
              </li>
              <li>
                <Link to="/market-trends" className="text-gray-400 hover:text-white">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-white">
                  Buying & Selling Guides
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">
                  Industry News
                </Link>
              </li>
              <li>
                <Link to="/mortgage-calculator" className="text-gray-400 hover:text-white">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="text-gray-400 hover:text-white">
                  Advertise with Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} HomebaseNg. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 md:justify-end">
              <Link to="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
              <Link to="/partners" className="hover:text-white">
                Our Partners
              </Link>
              <Link to="/support" className="hover:text-white">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

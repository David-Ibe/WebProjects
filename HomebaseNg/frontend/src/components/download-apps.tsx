import { AppleIcon, PlayIcon } from 'lucide-react'
import { Button } from './ui/button'

export function DownloadApps() {
  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-primary/90 to-primary mt-12 md:mt-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3 text-white">
            Download Our Mobile App
          </h2>
          <p className="text-sm md:text-base mb-6 text-white/90">
            Get instant access to properties, save favorites, and receive real-time updates right from your phone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="secondary"
              size="default"
              className="group flex items-center gap-2 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <AppleIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                Download on the App Store
              </a>
            </Button>
            
            <Button
              variant="secondary"
              size="default"
              className="group flex items-center gap-2 hover:scale-105 transition-transform duration-200"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <PlayIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                Get it on Google Play
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { StatsSection } from './stats-section'
import { FeaturedProperties } from './featured-properties'
import { CTASection } from './cta-section'
import { BrowseStates } from './browse-states'
import { AboutSection } from './about-section'
import { DownloadApps } from './download-apps'
import { homePageSections, type SectionId } from '@/config/layout'
import { useSnapshot } from 'valtio'
import FeaturedCompanies from '@/components/featured-companies';

const components = {
  StatsSection,
  FeaturedProperties,
  FeaturedCompanies,
  CTASection,
  BrowseStates,
  AboutSection,
  DownloadApps,
} as const

interface PageLayoutProps {
  sections?: readonly SectionId[];
  heroSection?: React.ReactNode;
}

export function PageLayout({ sections, heroSection }: PageLayoutProps) {
  const layoutSnapshot = useSnapshot(homePageSections)
  const sectionOrder = sections || layoutSnapshot.order
  
  const visibleSections = sectionOrder.filter((sectionId: SectionId) => {
    const section = layoutSnapshot.sections[sectionId]
    return section && section.visible
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {heroSection}
      {visibleSections.map(sectionId => {
        const section = layoutSnapshot.sections[sectionId]
        if (!section) return null
        
        const Component = components[section.component as keyof typeof components]
        if (!Component) return null

        return (
          <div key={section.id} id={section.id} className="my-12">
            <Component />
          </div>
        )
      })}
    </div>
  )
}

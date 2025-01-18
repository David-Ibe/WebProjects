import { proxy } from 'valtio'

export type SectionId = 'hero' | 'stats' | 'browseStates' | 'companies' | 'properties' | 'about' | 'downloadApps' | 'cta';

interface Section {
  id: SectionId;
  title: string;
  component: string;
  visible: boolean;
}

interface LayoutConfig {
  order: SectionId[];
  sections: Record<SectionId, Section>;
}

const layoutConfig = proxy<LayoutConfig>({
  order: [
    'hero',           // Hero section with search
    'companies',      // Featured companies
    'browseStates',   // Browse by states
    'properties',     // Featured properties
    'about',          // About section
    'stats',          // Statistics section
    'downloadApps',   // Download mobile apps
    'cta'            // Call to action
  ],
  
  sections: {
    hero: {
      id: 'hero',
      title: 'Hero Section',
      component: 'HeroSection',
      visible: true
    },
    browseStates: {
      id: 'browseStates',
      title: 'Browse by States',
      component: 'BrowseStates',
      visible: true
    },
    companies: {
      id: 'companies',
      title: 'Featured Companies',
      component: 'FeaturedCompanies',
      visible: true
    },
    properties: {
      id: 'properties',
      title: 'Featured Properties',
      component: 'FeaturedProperties',
      visible: true
      
    },

    about: {
      id: 'about',
      title: 'About',
      component: 'AboutSection',
      visible: true
    },

    stats: {
      id: 'stats',
      title: 'Statistics',
      component: 'StatsSection',
      visible: true
    },


    cta: {
      id: 'cta',
      title: 'Call to Action',
      component: 'CTASection',
      visible: true
    },
    
    downloadApps: {
      id: 'downloadApps',
      title: 'Download Apps',
      component: 'DownloadApps',
      visible: true
    }
  }
})

export const homePageSections = layoutConfig

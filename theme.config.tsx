import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 'DFArchon Grimoire',
  project: {
    link: 'https://github.com/dfarchon',
  },
  docsRepositoryBase: 'https://github.com/dfarchon/Grimoire',
  footer: {
    text: 'GPLv3 2025 © DFArchon',
  },
  primaryHue: 340,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Grimoire',
      defaultTitle: 'Grimoire',
      description: 'Grimoire shapes the Onchain Reality Interaction Protocols, infused with the will of the DFArchon community.',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://grimoire.dfmud.xyz/',
        siteName: 'Grimoire',
        title: 'Grimoire',
        description: 'Grimoire shapes the Onchain Reality Interaction Protocols, infused with the will of the DFArchon community.',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'DFArchon Grimoire'
          }
        ]
      }
    }
  }
}

export default config

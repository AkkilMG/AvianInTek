import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/text', '/private/'],
    }],
    sitemap: 'https://www.avianintek.com/sitemap.xml',
  }
}
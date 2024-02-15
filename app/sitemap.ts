import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ikigaifreelance.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ikigaifreelance.com/developpeur-web-freelance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ikigaifreelance.com/agence-seo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: 'https://ikigaifreelance.com/formation-wordpress-elementor',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://ikigaifreelance.com/politique-de-confidentialite',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://ikigaifreelance.com/mentions-legales',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://ikigaifreelance.com/conditions-generales-de-vente',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
  ]
}
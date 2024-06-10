import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bigcapital.app/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://bigcapital.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://bigcapital.app/updates',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://docs.bigcapital.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }, 
    {
      url: 'https://bigcapital.app/blog/quickbooks-alternative',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }, 
    {
      url: 'https://bigcapital.app/blog/early-adopter-plan',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },  
  ];
}
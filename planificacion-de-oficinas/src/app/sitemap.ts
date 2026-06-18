import { getSiteUrl } from '@/lib/site-url';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const appUrl = getSiteUrl();

  return [
    {
      url: appUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${appUrl}/tienda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}

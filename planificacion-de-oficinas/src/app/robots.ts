import { getSiteUrl } from '@/lib/site-url';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const appUrl = getSiteUrl();
  const isProduction = process.env.APP_ENV === 'production';

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : undefined,
      disallow: isProduction ? undefined : '/',
    },
    sitemap: `${appUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from 'next';
import { blogPosts } from '@/src/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinar-erp.bisniesgo.cloud';

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...posts,
  ];
}

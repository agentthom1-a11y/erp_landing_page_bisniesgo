import { MetadataRoute } from 'next';
import { getAllPosts } from '@/src/lib/contentParser';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinar-erp.bisniesgo.cloud';

  const allPosts = getAllPosts();
  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAtIso || new Date()),
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

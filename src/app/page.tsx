import { HomePageClient } from '@/src/components/pages/HomePageClient';
import { getAllPosts } from '@/src/lib/contentParser';

export default function Home() {
  const posts = getAllPosts();
  return (
    <main>
      <HomePageClient posts={posts} />
    </main>
  );
}

import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/src/lib/contentParser';
import { notFound } from 'next/navigation';
import { BlogPostClient } from '@/src/components/pages/BlogPostClient';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all parsed posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const siteUrl = 'https://sinar-erp.bisniesgo.cloud';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.targetKeywords.join(', '),
    alternates: {
      canonical: postUrl,
    },
    // Geo metadata for Local SEO (Indonesia)
    other: {
      'geo.region': 'ID-JK',
      'geo.placename': 'Jakarta',
      'geo.position': '-6.200000;106.816666',
      'ICBM': '-6.200000, 106.816666',
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: postUrl,
      siteName: 'SINAR ERP',
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAtIso,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = 'https://sinar-erp.bisniesgo.cloud';

  // 1. Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle,
    description: post.metaDescription,
    image: `${siteUrl}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SINAR ERP',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: post.publishedAtIso,
    dateModified: post.publishedAtIso,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };

  // 2. FAQ Schema
  let faqSchema = null;
  if (post.faq && post.faq.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  return (
    <main>
      {/* Inject JSON-LD Scripts for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Featured Snippet Target (Hidden or Visible depending on design, here invisible microdata) */}
      <div className="hidden" itemScope itemType="https://schema.org/WebPage">
        <span itemProp="description">{post.featuredSnippetAnswer}</span>
      </div>

      <BlogPostClient post={post} />
    </main>
  );
}

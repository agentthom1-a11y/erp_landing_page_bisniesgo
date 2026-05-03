import fs from 'fs';
import path from 'path';

// The raw JSON structure from the seed files
interface RawBlogPost {
  id: string;
  slug: string;
  status: string;
  category: string;
  published_at: string;
  title: string;
  meta_title: string;
  meta_description: string;
  excerpt: string;
  featured_snippet_answer: string;
  target_keywords: string[];
  search_intent: string;
  primary_cta: {
    label: string;
    text: string;
  };
  proof_points?: {
    claim: string;
    evidence: {
      source_title: string;
      authors: string;
      year: number;
      publication: string;
      takeaway: string;
    }[];
  }[];
  image_prompt: string;
  content_blocks: {
    type: 'paragraph' | 'bullet';
    heading?: string;
    content?: string[];
    items?: string[];
  }[];
  faq?: {
    q: string;
    a: string;
  }[];
}

// The structure expected by the UI and Metadata generator
export interface ParsedBlogPost {
  slug: string;
  category: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  contentBlocks: RawBlogPost['content_blocks'];
  proofPoints?: RawBlogPost['proof_points'];
  primaryCta: RawBlogPost['primary_cta'];
  faq: { question: string; answer: string }[];
  internalLinks: { name: string; url: string }[];
  image: string;
  date: string;
  author: string;
  readTime: string;
  
  // Advanced SEO Fields
  featuredSnippetAnswer: string;
  targetKeywords: string[];
  searchIntent: string;
  publishedAtIso: string;
}

const contentDir = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): ParsedBlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const raw = JSON.parse(fileContent) as RawBlogPost;
      
      // Fallback mapping for fields missing in JSON but required by UI
      const dateObj = new Date(raw.published_at);
      const dateStr = dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      
      // Estimate read time
      const wordCount = raw.content_blocks.reduce((acc, block) => {
        if (block.content) acc += block.content.join(' ').split(' ').length;
        if (block.items) acc += block.items.join(' ').split(' ').length;
        return acc;
      }, 0);
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';

      // Map images based on slug (temporary fallback until images are provided)
      let image = '/images/blog_growth.png';
      if (raw.slug.includes('manual')) image = '/images/blog_automation.png';
      if (raw.slug.includes('digitalisasi')) image = '/images/blog_digitalization.png';
      if (raw.slug.includes('inventory')) image = '/images/blog_inventory.png';
      if (raw.slug.includes('keuangan')) image = '/images/blog_finance.png';
      if (raw.slug.includes('budaya')) image = '/images/blog_culture.png';

      const mapped: ParsedBlogPost = {
        slug: raw.slug,
        category: raw.category.toUpperCase(),
        title: raw.title,
        seoTitle: raw.meta_title || raw.title,
        metaDescription: raw.meta_description || raw.excerpt,
        excerpt: raw.excerpt,
        contentBlocks: raw.content_blocks,
        proofPoints: raw.proof_points,
        primaryCta: raw.primary_cta,
        faq: (raw.faq || []).map(f => ({ question: f.q, answer: f.a })),
        internalLinks: [{ name: 'SINAR ERP', url: '/#produk' }],
        image,
        date: dateStr,
        author: 'Bisniesgo Team',
        readTime,
        
        // Advanced SEO Fields
        featuredSnippetAnswer: raw.featured_snippet_answer || raw.excerpt,
        targetKeywords: raw.target_keywords || [],
        searchIntent: raw.search_intent || 'informational',
        publishedAtIso: dateObj.toISOString()
      };

      return mapped;
    });

  // Sort by published_at descending
  return posts.sort((a, b) => new Date(b.publishedAtIso).getTime() - new Date(a.publishedAtIso).getTime());
}

export function getPostBySlug(slug: string): ParsedBlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllPosts } from '@/src/lib/contentParser';

const BASE_URL = 'https://sinar-erp.bisniesgo.cloud';
const INDEXNOW_KEY = 'f675f284e3df41fba359992f9d8544ab';
const SECRET_TOKEN = 'sinar-erp-auto-seo-token-2026'; // This should match the Cron Job token

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    // 1. Verify Authentication
    if (token !== SECRET_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Cache Revalidation (Performance & Freshness)
    // This clears the static cache for the entire site, ensuring the next visit serves
    // the absolute freshest HTML and data.
    revalidatePath('/', 'layout');

    // 3. Collect URLs for IndexNow
    const allPosts = getAllPosts();
    const urlList = [
      BASE_URL,
      `${BASE_URL}/sitemap.xml`,
      ...allPosts.map((post) => `${BASE_URL}/blog/${post.slug}`)
    ];

    // 4. Submit to IndexNow
    // IndexNow shares this data across Bing, Yandex, Seznam.cz, etc.
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'sinar-erp.bisniesgo.cloud',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urlList,
      }),
    });

    const indexNowStatus = indexNowResponse.status;

    // 5. Ping Google Sitemap
    const googlePingUrl = `https://www.google.com/ping?sitemap=${BASE_URL}/sitemap.xml`;
    const googleResponse = await fetch(googlePingUrl);
    const googleStatus = googleResponse.status;

    // 6. Ping Bing Sitemap (Fallback/Redundancy alongside IndexNow)
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${BASE_URL}/sitemap.xml`;
    const bingResponse = await fetch(bingPingUrl);
    const bingStatus = bingResponse.status;

    // 7. Return Final Optimization Report
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      report: {
        cache_revalidated: true,
        total_urls_processed: urlList.length,
        indexnow_status_code: indexNowStatus,
        google_ping_status_code: googleStatus,
        bing_ping_status_code: bingStatus,
        message: 'Daily SEO and Performance optimization completed successfully.',
      }
    });

  } catch (error: any) {
    console.error('SEO Optimization Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Internal Server Error' 
    }, { status: 500 });
  }
}

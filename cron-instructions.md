# Hostinger Cron Job Setup for SINAR ERP Auto-SEO

To ensure your ERP landing page continuously revalidates its cache, pings Google/Bing, and pushes content updates to search engines every day, you need to set up a simple Cron Job in your Hostinger hPanel.

## Instructions:

1. **Log into Hostinger:**
   Go to your hPanel and select your hosting plan.

2. **Navigate to Cron Jobs:**
   In the left sidebar, scroll down to the **Advanced** section and click on **Cron Jobs**.

3. **Configure the Cron Job:**
   - **Type:** Custom
   - **Command to run:**
     Copy and paste the following line EXACTLY as is:
     ```bash
     wget -qO- "https://sinar-erp.bisniesgo.cloud/api/seo/daily-optimize?token=sinar-erp-auto-seo-token-2026" > /dev/null
     ```
   - **Schedule:**
     Select **Once a day** (or `0 0 * * *` if setting it manually). This will run the SEO optimization every midnight.

4. **Save:**
   Click **Save** or **Add Cron Job**.

## What this does:
Every day, your server will hit that internal API. The API will:
- Clear the Next.js static cache (`revalidatePath`) so any new files in `src/content/blog/` go live instantly.
- Collect all blog URLs from your new File-Based CMS.
- Send the URLs to the **IndexNow API** (supported by Bing, Yandex).
- Ping the **Google Sitemap Service** to force Googlebot to re-crawl your site.

*You can test it manually right now by pasting `https://sinar-erp.bisniesgo.cloud/api/seo/daily-optimize?token=sinar-erp-auto-seo-token-2026` into your browser. You should receive a JSON response showing the success report.*

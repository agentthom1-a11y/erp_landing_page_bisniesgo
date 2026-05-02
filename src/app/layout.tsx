import { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { RootLayoutClient } from '@/src/components/layout/RootLayoutClient';
import '@/src/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const viewport: Viewport = {
  themeColor: '#98D600',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sinar-erp.bisniesgo.cloud'),
  title: {
    default: 'SINAR ERP - Premium ERP for Indonesian Businesses',
    template: '%s | SINAR ERP'
  },
  description: 'Integrated, scalable, and meaningful ERP solutions for Indonesian SMEs and enterprises to grow with discipline and clarity.',
  keywords: ['ERP Indonesia', 'Sistem ERP', 'Software Akuntansi', 'Bisniesgo', 'SINAR ERP', 'SME ERP Indonesia'],
  authors: [{ name: 'Bisniesgo Team' }],
  creator: 'Bisniesgo',
  publisher: 'Bisniesgo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SINAR ERP - Premium ERP for Indonesian Businesses',
    description: 'Integrated, scalable, and meaningful ERP solutions for Indonesian SMEs and enterprises.',
    url: 'https://sinar-erp.bisniesgo.cloud',
    siteName: 'SINAR ERP',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SINAR ERP - Premium ERP for Indonesian Businesses',
    description: 'Integrated, scalable, and meaningful ERP solutions for Indonesian SMEs and enterprises.',
    creator: '@bisniesgo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/sinar-erp-icon-mark-transparent.png',
    shortcut: '/logo/sinar-erp-icon-mark-transparent.png',
    apple: '/logo/sinar-erp-icon-mark-transparent.png',
  },
};

import { JsonLd } from '@/src/components/seo/JsonLd';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-bg-main font-sans selection:bg-brand-light selection:text-brand-dark antialiased">
        <JsonLd />
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

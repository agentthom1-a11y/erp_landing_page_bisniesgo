import React from 'react';

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bisniesgo",
    "url": "https://sinar-erp.bisniesgo.cloud",
    "logo": "https://sinar-erp.bisniesgo.cloud/logo/sinar-erp-icon-mark-transparent.png",
    "sameAs": [
      "https://twitter.com/bisniesgo",
      "https://www.linkedin.com/company/bisniesgo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-xxx-xxxx-xxxx",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["id", "en"]
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SINAR ERP",
    "operatingSystem": "Web-based",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}

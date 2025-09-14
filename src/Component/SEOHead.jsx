import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "M Daniyal - Full Stack Developer | React, Node.js, Mobile Apps",
  description = "Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. 5+ years experience building scalable web and mobile applications. Available for freelance projects.",
  keywords = "full stack developer, react developer, node.js developer, react native developer, javascript developer, web developer, mobile app developer, freelance developer, portfolio, M Daniyal",
  image = "/favicon.svg",
  url = "https://daniyal-dev-portfolio.vercel.app",
  type = "website",
  structuredData = null,
  canonical = null
}) => {
  const fullUrl = canonical || url;
  const fullImageUrl = image.startsWith('http') ? image : `https://daniyal-dev-portfolio.vercel.app${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="M Daniyal" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.country" content="Pakistan" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="expires" content="never" />
      <meta name="cache-control" content="public, max-age=31536000" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="M Daniyal Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="M Daniyal" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@daniyal_dev" />
      <meta name="twitter:creator" content="@daniyal_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

// SEO Data Generator for Projects and Testimonials

export const generateProjectStructuredData = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://daniyalamjadali.vercel.app/projects/${project.slug}`,
    "name": project.title,
    "description": project.description,
    "url": project.link,
    "image": project.img,
    "creator": {
      "@type": "Person",
      "name": "M Daniyal",
      "jobTitle": "Full Stack Developer"
    },
    "dateCreated": "2024-01-01",
    "dateModified": "2025-01-15",
    "inLanguage": "en",
    "keywords": project.tech.join(", "),
    "about": {
      "@type": "Thing",
      "name": project.category
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": `Professional ${project.category.toLowerCase()} development service`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://daniyalamjadali.vercel.app/projects/${project.slug}`
    }
  };
};

export const generateTestimonialStructuredData = (testimonial) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://daniyalamjadali.vercel.app/testimonials/${testimonial.slug}`,
    "itemReviewed": {
      "@type": "Service",
      "name": testimonial.project,
      "provider": {
        "@type": "Person",
        "name": "M Daniyal",
        "jobTitle": "Full Stack Developer"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": testimonial.country
      }
    },
    "reviewBody": testimonial.text,
    "datePublished": "2024-01-01",
    "publisher": {
      "@type": "Organization",
      "name": "M Daniyal Portfolio"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://daniyalamjadali.vercel.app/testimonials/${testimonial.slug}`
    }
  };
};

export const generatePortfolioStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "M Daniyal",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies",
    "url": "https://daniyalamjadali.vercel.app",
    "image": "https://daniyalamjadali.vercel.app/favicon.svg",
    "sameAs": [
      "https://github.com/daniyal-dev",
      "https://linkedin.com/in/daniyal-dev",
      "https://twitter.com/daniyal_dev"
    ],
    "knowsAbout": [
      "React",
      "Node.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Web Development",
      "Mobile App Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops web and mobile applications using modern technologies"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    },
    "email": "daniyalamjadali@gmail.com",
    "telephone": "+92-3045485310"
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "M Daniyal Portfolio",
    "url": "https://daniyalamjadali.vercel.app",
    "description": "Professional portfolio of M Daniyal, Full Stack Developer",
    "author": {
      "@type": "Person",
      "name": "M Daniyal"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://daniyalamjadali.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

// Generate slugs for projects and testimonials
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// SEO-friendly project data
export const getProjectSEOData = (project) => {
  const slug = generateSlug(project.title);
  return {
    title: `${project.title} - ${project.category} | M Daniyal Portfolio`,
    description: `${project.description} Built with ${project.tech.join(', ')}. Professional ${project.category.toLowerCase()} development by M Daniyal.`,
    keywords: `${project.title}, ${project.category.toLowerCase()}, ${project.tech.join(', ')}, web development, mobile app development, M Daniyal`,
    url: `https://daniyalamjadali.vercel.app/projects/${slug}`,
    image: project.img,
    structuredData: generateProjectStructuredData({ ...project, slug })
  };
};

// SEO-friendly testimonial data
export const getTestimonialSEOData = (testimonial) => {
  const slug = generateSlug(`${testimonial.name}-${testimonial.project}`);
  return {
    title: `${testimonial.name} Review - ${testimonial.project} | M Daniyal Portfolio`,
    description: `Client testimonial from ${testimonial.name} from ${testimonial.country} about ${testimonial.project} development. ${testimonial.text}`,
    keywords: `${testimonial.name}, ${testimonial.project}, client testimonial, review, M Daniyal, ${testimonial.country}`,
    url: `https://daniyalamjadali.vercel.app/testimonials/${slug}`,
    image: testimonial.img,
    structuredData: generateTestimonialStructuredData({ ...testimonial, slug })
  };
};

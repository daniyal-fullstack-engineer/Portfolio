import { Inter, Roboto, Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import GlobalFloatingIcons from '../src/Component/GlobalFloatingIcons'
import ScrollAnimations from '../src/Component/ScrollAnimations'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ 
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto'
})
const poppins = Poppins({ 
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  metadataBase: new URL('https://daniyalamjadali.vercel.app'),
  title: 'M Daniyal - Full Stack Developer | React, Node.js, Mobile Apps',
  description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. 5+ years experience building scalable web and mobile applications. Available for freelance projects.',
  keywords: 'full stack developer, react developer, node.js developer, react native developer, javascript developer, web developer, mobile app developer, freelance developer, portfolio, M Daniyal',
  authors: [{ name: 'M Daniyal' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    title: 'M Daniyal - Full Stack Developer | React, Node.js, Mobile Apps',
    description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. 5+ years experience building scalable web and mobile applications.',
    url: 'https://daniyalamjadali.vercel.app',
    siteName: 'M Daniyal Portfolio',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'M Daniyal - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@daniyal_dev',
    creator: '@daniyal_dev',
    title: 'M Daniyal - Full Stack Developer | React, Node.js, Mobile Apps',
    description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. 5+ years experience building scalable applications.',
    images: ['/favicon.svg'],
  },
  verification: {
    google: 'YOUR_VERIFICATION_CODE_HERE',
  },
  alternates: {
    canonical: 'https://daniyalamjadali.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Daniyal Portfolio" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "M Daniyal",
              "jobTitle": "Full Stack Developer",
              "description": "Professional Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies",
              "url": "https://daniyalamjadali.vercel.app",
              "image": "/favicon.svg",
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
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}>
        {children}
        {/* <GlobalFloatingIcons /> */}
        <ScrollAnimations />
        <ToastContainer />
        
        {/* Global Floating Icons - Visible on All Pages */}
        
      </body>
    </html>
  )
}

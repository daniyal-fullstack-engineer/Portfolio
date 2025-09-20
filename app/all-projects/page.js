import AllProjects from '../../src/Component/AllProjects';

export const metadata = {
  title: 'All Projects - Web & Mobile Development Portfolio | M Daniyal',
  description: 'Complete portfolio showcasing all web applications, mobile apps, e-commerce platforms, and business solutions developed by M Daniyal. Featured projects built with React, Node.js, React Native, and modern technologies.',
  keywords: 'portfolio projects, web development projects, mobile app projects, e-commerce development, React projects, Node.js projects, React Native apps, M Daniyal portfolio, development showcase',
  openGraph: {
    title: 'All Projects - Web & Mobile Development Portfolio | M Daniyal',
    description: 'Complete portfolio showcasing all web applications, mobile apps, e-commerce platforms, and business solutions developed by M Daniyal.',
    url: '/all-projects',
  },
  alternates: {
    canonical: '/all-projects',
  },
};

export default function AllProjectsPage() {
  return <AllProjects />;
}

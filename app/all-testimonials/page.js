import AllTestimonials from '../../src/Component/AllTestimonials';

export const metadata = {
  title: 'Client Testimonials - Portfolio',
  description: 'Read what our clients say about our work. Real testimonials from satisfied customers across the globe.',
  keywords: 'testimonials, client reviews, portfolio, web development, mobile app development',
  openGraph: {
    title: 'Client Testimonials - Portfolio',
    description: 'Read what our clients say about our work. Real testimonials from satisfied customers across the globe.',
    url: '/all-testimonials',
  },
  alternates: {
    canonical: '/all-testimonials',
  },
};

export default function AllTestimonialsPage() {
  return <AllTestimonials />;
}

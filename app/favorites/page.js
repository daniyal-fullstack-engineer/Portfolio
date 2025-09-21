import FavoritesPage from '../../src/Component/FavoritesPage';

export const metadata = {
  title: 'My Favorite Projects - Portfolio',
  description: 'Browse your favorite projects from my portfolio. Curated collection of web and mobile development projects.',
  keywords: 'favorite projects, portfolio, web development, mobile app development, saved projects',
  openGraph: {
    title: 'My Favorite Projects - Portfolio',
    description: 'Browse your favorite projects from my portfolio. Curated collection of web and mobile development projects.',
    url: '/favorites',
  },
  alternates: {
    canonical: '/favorites',
  },
};

export default function Favorites() {
  return <FavoritesPage />;
}

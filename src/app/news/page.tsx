import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { NewsList } from '@/components/NewsList';
import { newsArticles } from '@/content/news';

export const metadata: Metadata = {
  title: 'News & Content',
  description: 'Updates, announcements, and insights from Alpha Film & Television.',
  openGraph: {
    title: 'News & Content | Alpha Film & Television',
    description: 'Updates, announcements, and insights from Alpha Film & Television.'
  }
};

export default function NewsPage() {
  const sortedArticles = [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container className="space-y-10 py-16 md:py-24">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-4xl font-medium">News & Content</h1>
        <p className="text-black/75">Announcements, market perspectives, and updates from the AFT team.</p>
      </div>
      <NewsList articles={sortedArticles} />
    </Container>
  );
}

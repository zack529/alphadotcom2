import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { newsArticles } from '@/content/news';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Alpha Film & Television brings a modern, creator-focused perspective to entertainment financing.',
  openGraph: {
    title: 'Alpha Film & Television',
    description: 'A modern, creator-focused perspective to entertainment financing.'
  }
};

const heroText = `AFT brings a modern, creator-focused perspective to entertainment financing and is backed by a leadership team with over 100 years of combined experience across media, finance, production and technology.

Our mission is to rebuild the independent entertainment ecosystem for a new era—one where creative ambition is supported by aligned capital, disciplined execution, and real control over outcomes.

Since launch AFT has secured partnerships and investment opportunities with some of the world's leading producers, agents and entertainment projects.`;

const credibilityItems = ['Entertainment Financing', 'Structured Capital', 'Global Partnerships', 'Producer Alignment'];

export default function HomePage() {
  const latestArticles = [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <Container className="space-y-20 py-16 md:py-24">
      <section className="max-w-4xl space-y-6">
        {heroText.split('\n\n').map((paragraph) => (
          <p key={paragraph} className="text-lg text-black/85 md:text-xl">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="grid gap-4 border-y border-black/10 py-8 text-sm uppercase tracking-wide text-black/60 md:grid-cols-4">
        {credibilityItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium">Latest News</h2>
          <Link href="/news" className="text-sm text-accent transition hover:underline hover:underline-offset-4">
            View all
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="space-y-3 border-t border-black/10 pt-5">
              <p className="text-xs uppercase tracking-wide text-black/60">{article.category}</p>
              <h3 className="text-xl font-medium">
                <Link href={`/news/${article.slug}`} className="transition hover:underline hover:underline-offset-4">
                  {article.title}
                </Link>
              </h3>
              <p className="text-black/75">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 pt-10">
        <h2 className="text-2xl font-medium">Let&apos;s start a conversation.</h2>
        <Link href="/contact" className="mt-4 inline-block text-accent transition hover:underline hover:underline-offset-4">
          Contact AFT
        </Link>
      </section>
    </Container>
  );
}

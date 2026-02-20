import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { newsArticles } from '@/content/news';

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((entry) => entry.slug === slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Alpha Film & Television`,
      description: article.excerpt
    }
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <Container className="max-w-4xl space-y-8 py-16 md:py-24">
      <Link href="/news" className="inline-block text-sm text-accent transition hover:underline hover:underline-offset-4">
        Back to News
      </Link>
      <article className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-black/60">
            {new Date(article.date).toLocaleDateString()} · {article.category}
          </p>
          <h1 className="text-4xl font-medium">{article.title}</h1>
        </div>
        <div className="space-y-4 text-lg text-black/85">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}

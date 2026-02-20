'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { newsCategories, NewsCategory, NewsArticle } from '@/content/news';
import { NewsFilter } from './NewsFilter';

type NewsListProps = {
  articles: NewsArticle[];
};

export function NewsList({ articles }: NewsListProps) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'All'>('All');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => (activeCategory === 'All' ? true : article.category === activeCategory));
  }, [activeCategory, articles]);

  return (
    <div className="space-y-10">
      <NewsFilter categories={newsCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
      <div className="space-y-8">
        {filteredArticles.map((article) => (
          <article key={article.slug} className="border-b border-black/10 pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-black/60">
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span>{article.category}</span>
            </div>
            <h2 className="text-2xl font-medium">
              <Link href={`/news/${article.slug}`} className="transition hover:underline hover:underline-offset-4">
                {article.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl text-black/80">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

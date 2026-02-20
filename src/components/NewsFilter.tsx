'use client';

import { NewsCategory } from '@/content/news';

type NewsFilterProps = {
  categories: NewsCategory[];
  activeCategory: NewsCategory | 'All';
  onChange: (category: NewsCategory | 'All') => void;
};

export function NewsFilter({ categories, activeCategory, onChange }: NewsFilterProps) {
  return (
    <label className="flex w-full max-w-sm flex-col gap-2 text-sm text-black/70">
      Filter by category
      <select
        className="rounded-sm border border-black/20 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-accent"
        value={activeCategory}
        onChange={(event) => onChange(event.target.value as NewsCategory | 'All')}
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/news', label: 'News & Content' },
  { href: '/contact', label: 'Contact' }
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-sm border border-black/20 px-3 py-2 text-sm text-black transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Menu
      </button>
      {open ? (
        <div className="mt-4 space-y-3 border-t border-black/10 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-sm transition hover:opacity-70 ${isActive ? 'underline underline-offset-4' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

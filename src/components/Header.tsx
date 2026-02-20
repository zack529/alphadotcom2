import Link from 'next/link';
import { Container } from './Container';
import { MobileNav } from './MobileNav';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/news', label: 'News & Content' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/95">
      <Container className="py-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-lg font-semibold tracking-wide transition hover:opacity-75" aria-label="AFT home">
            AFT
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:underline hover:underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}

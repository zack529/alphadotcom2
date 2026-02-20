import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10">
      <Container className="flex flex-col gap-4 py-10 text-sm text-black/70 md:flex-row md:items-center md:justify-between">
        <p>Alpha Film & Television © {new Date().getFullYear()}</p>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <span className="text-xs font-semibold">in</span>
        </Link>
      </Container>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { PeopleGrid } from '@/components/PeopleGrid';
import { people } from '@/content/people';

export const metadata: Metadata = {
  title: 'People',
  description: 'Meet the Alpha Film & Television team.',
  openGraph: {
    title: 'People | Alpha Film & Television',
    description: 'Meet the Alpha Film & Television team.'
  }
};

export default function PeoplePage() {
  return (
    <Container className="space-y-10 py-16 md:py-24">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-4xl font-medium">People</h1>
        <p className="text-black/75">A multidisciplinary team with deep experience across media, finance, production, and technology.</p>
      </div>
      <PeopleGrid people={people} />
    </Container>
  );
}

import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Alpha Film & Television.',
  openGraph: {
    title: 'Contact | Alpha Film & Television',
    description: 'Contact Alpha Film & Television.'
  }
};

export default function ContactPage() {
  return (
    <Container className="space-y-10 py-16 md:py-24">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-4xl font-medium">Contact</h1>
        <p className="text-black/75">We welcome inquiries from producers, capital partners, and collaborators.</p>
      </div>
      <ContactForm />
    </Container>
  );
}

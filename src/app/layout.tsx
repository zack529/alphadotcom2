import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alphaft.com'),
  title: {
    default: 'Alpha Film & Television',
    template: '%s | Alpha Film & Television'
  },
  description: 'AFT brings a modern, creator-focused perspective to entertainment financing.',
  openGraph: {
    title: 'Alpha Film & Television',
    description: 'A modern, creator-focused perspective to entertainment financing.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-[17px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Alpha Film & Television and its mission.',
  openGraph: {
    title: 'About | Alpha Film & Television',
    description: 'Learn more about Alpha Film & Television and its mission.'
  }
};

const aboutBody = `A smarter future for film finance.
The name Alpha draws inspiration from Generation Alpha — the first fully digital-native generation, growing up in a world defined by AI, streaming, and immersive media. As a film finance company, Alpha embodies this forward-thinking spirit, investing in stories and creators that speak to the audiences and technologies of tomorrow. We’re not just funding films for today’s market — we’re shaping the cinematic landscape for the next generation.

We exist because the film industry is at a tipping point. 

Production in the UK and Australia is booming, powered by tax incentives and world-class talent now working on leaner, more commercially viable budgets. Yet the capital stack is broken. That’s where Alpha steps in. By bridging this underserved space, we deliver stable, data-driven returns while backing globally marketable stories with A-list talent. 

Our producer partners benefit from open, transparent, and effective financing that combines creativity with supportive decision-making: to empower producers with smart, flexible funding to get projects made. 

From secured loans against tax credits, rebates, and pre-sales to gap financing, bridge loans, finishing funds, and minimum guarantees — we provide support at every stage of production.

Our mission is simple: unlock opportunity where others can’t, and build a smarter future for film production and investors.`;

export default function AboutPage() {
  return (
    <Container className="max-w-4xl space-y-6 py-16 md:py-24">
      {aboutBody.split('\n\n').map((paragraph) => (
        <p key={paragraph} className="text-lg text-black/85">
          {paragraph}
        </p>
      ))}
    </Container>
  );
}

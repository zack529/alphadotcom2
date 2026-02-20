export type Person = {
  name: string;
  title: string;
  bio: string;
  linkedinUrl: string;
  image?: string;
};

export const people: Person[] = [
  {
    name: 'Jordan Avery',
    title: 'Partner, Structured Finance',
    bio: 'Jordan focuses on building resilient financing structures for independent productions. Jordan works closely with producers and legal teams to align risk, timing, and commercial strategy. Their approach emphasizes clarity, speed, and long-term partnership.',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Maya Sinclair',
    title: 'Head of Production Capital',
    bio: 'Maya leads production-focused capital planning across the investment lifecycle. She specializes in balancing creative priorities with disciplined budget frameworks. Maya supports teams from early packaging through delivery and recoupment.',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Ethan Cole',
    title: 'Director, Investor Relations',
    bio: 'Ethan manages investor communications and portfolio reporting with a focus on transparency and measurable outcomes. He helps connect capital partners to opportunities that match their risk and return objectives. His work centers on trust, consistency, and informed decision-making.',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Rina Shah',
    title: 'Principal, Content Strategy',
    bio: 'Rina evaluates content pipelines and supports development strategies designed for international audiences. She collaborates with producers to strengthen positioning and market readiness. Her background bridges commercial analysis and story-led decision frameworks.',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Leo Martinez',
    title: 'Vice President, Partnerships',
    bio: 'Leo develops long-term relationships across agencies, producers, and distribution stakeholders. He identifies opportunities where aligned incentives can accelerate execution. Leo is focused on building dependable, repeatable partnership models.',
    linkedinUrl: 'https://www.linkedin.com/'
  },
  {
    name: 'Nadia Brooks',
    title: 'General Counsel & Operations',
    bio: 'Nadia oversees legal, governance, and operating processes across the platform. She supports compliant deal execution while keeping workflows practical for creative teams. Nadia champions responsible growth through strong controls and clear documentation.',
    linkedinUrl: 'https://www.linkedin.com/'
  }
];

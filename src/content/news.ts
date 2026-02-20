export type NewsCategory = 'News' | 'Insights' | 'Announcements' | 'Partnerships';

export type NewsArticle = {
  title: string;
  slug: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    title: 'Alpha Film & Television Launches with Focus on Independent Production Finance',
    slug: 'aft-launch-independent-production-finance',
    date: '2025-01-12',
    category: 'Announcements',
    excerpt: 'AFT begins operations with a strategy centered on disciplined capital structures for independent film and television projects.',
    body: [
      'Alpha Film & Television has launched with a mandate to support independent producers through structured, transparent financing solutions tailored to modern production realities.',
      'The platform is designed to move efficiently from opportunity review to execution while maintaining consistent underwriting standards and practical collaboration with producers.',
      'AFT will focus on opportunities where aligned capital and disciplined planning can improve delivery confidence and long-term value creation.'
    ]
  },
  {
    title: 'AFT Expands Advisory Coverage for Early-Stage Project Packaging',
    slug: 'aft-expands-advisory-coverage-packaging',
    date: '2025-02-03',
    category: 'News',
    excerpt: 'The team has introduced expanded advisory support to help producers shape financing-ready project packages.',
    body: [
      'AFT has broadened its advisory scope to include earlier engagement on project structuring, budgeting assumptions, and financing pathways.',
      'This expanded support is intended to help production teams prepare stronger materials and clearer execution plans before entering formal capital discussions.',
      'The initiative reflects AFT’s belief that early alignment between creative and financial priorities improves outcomes for all stakeholders.'
    ]
  },
  {
    title: 'Insight: Building Durable Capital Stacks for Mid-Budget Productions',
    slug: 'insight-durable-capital-stacks-mid-budget',
    date: '2025-02-27',
    category: 'Insights',
    excerpt: 'A practical view on combining incentives, pre-sales, and private capital with stronger downside protection.',
    body: [
      'Mid-budget productions often face a mismatch between available financing products and the realities of market timelines. A durable capital stack starts with realistic assumptions and transparent waterfall design.',
      'By sequencing financing sources carefully, producers can reduce execution friction and preserve optionality during production and delivery.',
      'AFT’s framework emphasizes predictable milestones, clear governance, and active communication across all financing participants.'
    ]
  },
  {
    title: 'AFT Announces New Reporting Framework for Capital Partners',
    slug: 'aft-reporting-framework-capital-partners',
    date: '2025-03-15',
    category: 'Announcements',
    excerpt: 'A standardized reporting model aims to provide clearer visibility across project status, risk markers, and portfolio progress.',
    body: [
      'AFT has introduced a reporting framework designed to offer capital partners regular, decision-useful updates throughout the project lifecycle.',
      'The model includes consistent milestone tracking and contextual commentary intended to support informed portfolio oversight.',
      'By standardizing updates, AFT aims to strengthen communication discipline and reinforce confidence in execution.'
    ]
  },
  {
    title: 'Partnership Update: Collaborative Development Pipeline with Producer Network',
    slug: 'partnership-update-development-pipeline-producer-network',
    date: '2025-04-04',
    category: 'Partnerships',
    excerpt: 'AFT is working with a network of independent producers to evaluate a new slate of commercially oriented projects.',
    body: [
      'AFT has expanded collaboration with a producer network to review projects across genres and formats suitable for global audiences.',
      'The partnership approach prioritizes transparent criteria, practical timelines, and financing structures that can be adapted to each project profile.',
      'This pipeline is expected to support a steady flow of opportunities while maintaining selective underwriting standards.'
    ]
  },
  {
    title: 'Insight: Why Execution Discipline Matters as Much as Access to Capital',
    slug: 'insight-execution-discipline-and-capital',
    date: '2025-04-29',
    category: 'Insights',
    excerpt: 'Financing can unlock a project, but disciplined execution is what protects value over the life of production.',
    body: [
      'Access to capital is only one component of a successful production outcome. Planning rigor and operational consistency are equally important for preserving budget integrity.',
      'Clear accountability, realistic contingency planning, and milestone-based decision-making can reduce avoidable setbacks.',
      'AFT’s operating philosophy is to combine financing support with practical execution frameworks that keep teams aligned.'
    ]
  },
  {
    title: 'AFT Adds Senior Team Members Across Partnerships and Operations',
    slug: 'aft-adds-senior-team-members',
    date: '2025-05-18',
    category: 'News',
    excerpt: 'New hires strengthen partnership development and operational execution as activity grows across the platform.',
    body: [
      'AFT has expanded its team with senior professionals in partnerships and operations to support increased deal activity and portfolio oversight.',
      'The additions are intended to reinforce execution quality while improving responsiveness for producers and capital partners.',
      'AFT continues to invest in a lean, experienced team structure designed for high-conviction decision-making.'
    ]
  },
  {
    title: 'Partnerships Perspective: Principles for Long-Term Producer Alignment',
    slug: 'partnerships-perspective-long-term-producer-alignment',
    date: '2025-06-07',
    category: 'Partnerships',
    excerpt: 'AFT outlines practical principles for building repeatable, trust-based relationships with producing partners.',
    body: [
      'Sustainable partnerships are built on consistent behavior, shared objectives, and transparent communication under both favorable and challenging conditions.',
      'AFT emphasizes clear terms, predictable processes, and mutual accountability as core foundations for producer alignment.',
      'These principles support repeat collaboration and help establish a durable ecosystem for independent entertainment production.'
    ]
  }
];

export const newsCategories: NewsCategory[] = ['News', 'Insights', 'Announcements', 'Partnerships'];

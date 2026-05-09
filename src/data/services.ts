export interface Service {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  startingAt?: string;
  accent: 'rose' | 'sage' | 'sand';
}

export const services: Service[] = [
  {
    slug: 'content-creation',
    title: 'Content Creation',
    short: 'Scroll-stopping reels, photos, and stories that actually feel like your brand.',
    long: '[EDIT: Brookelyn crafts authentic, on-trend content that resonates with your audience — from concept to camera to caption. UGC, lifestyle reels, product flat-lays, and everything in between.]',
    bullets: [
      'UGC reels & TikToks',
      'Lifestyle photo shoots',
      'Product flat-lays',
      'Captions & hashtag strategy',
    ],
    startingAt: '[EDIT: from $___]',
    accent: 'rose',
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    short: 'Done-for-you posting, engagement, and growth so you can focus on your craft.',
    long: '[EDIT: A full-service partnership for brands that want to show up consistently without the daily overwhelm. Strategy, content calendar, scheduling, community management, and monthly insights.]',
    bullets: [
      'Monthly content calendar',
      'Scheduling & posting',
      'Community management',
      'Analytics & monthly report',
    ],
    startingAt: '[EDIT: from $___ / mo]',
    accent: 'sage',
  },
  {
    slug: 'photography',
    title: 'Photography',
    short: 'Editorial portrait, brand, and travel photography with a soft, story-first feel.',
    long: '[EDIT: Whether it\'s a portrait session, a small business brand shoot, or coverage of an event, Brookelyn captures the warmth and detail that make a moment feel like itself.]',
    bullets: [
      'Portrait sessions',
      'Brand & small business shoots',
      'Travel & lifestyle',
      'Editorial design',
    ],
    startingAt: '[EDIT: from $___]',
    accent: 'sand',
  },
];

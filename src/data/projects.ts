export interface Project {
  slug: string;
  title: string;
  role: string;
  category: 'Photography' | 'Client work' | 'Personal project';
  short: string;
  long: string;
  instagram: string;
  handle: string;
  accent: 'rose' | 'sage' | 'sand' | 'teal' | 'mustard' | 'cobalt' | 'forest';
}

export const projects: Project[] = [
  {
    slug: 'harrington-and-hobbs',
    title: 'Harrington & Hobbs',
    role: 'Photography business',
    category: 'Photography',
    short: 'My photography business — editorial portrait, brand, and travel work.',
    long: '[EDIT: A short paragraph about what Harrington & Hobbs is, the kind of photography you take on, and what makes it yours.]',
    instagram: 'https://instagram.com/harringtonandhobbs',
    handle: '@harringtonandhobbs',
    accent: 'forest',
  },
  {
    slug: 'the-kava-konnection',
    title: 'The Kava Konnection',
    role: 'Client · Content & marketing',
    category: 'Client work',
    short: 'Ongoing content creation and social strategy for an independent kava bar.',
    long: '[EDIT: A short case study — the goals when you started, what you took on, and any results worth highlighting.]',
    instagram: 'https://instagram.com/the_kava_konnection',
    handle: '@the_kava_konnection',
    accent: 'teal',
  },
  {
    slug: 'gvl-trinket-trade',
    title: 'GVL Trinket Trade',
    role: 'Personal project · Founder',
    category: 'Personal project',
    short: 'A community trinket-trade event and brand built from the ground up.',
    long: '[EDIT: A short paragraph about the project — what it is, why you started it, and what it has grown into.]',
    instagram: 'https://instagram.com/gvltrinkettrade',
    handle: '@gvltrinkettrade',
    accent: 'mustard',
  },
];

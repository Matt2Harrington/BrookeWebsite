export interface Project {
  slug: string;
  title: string;
  role: string;
  category: 'Photography' | 'Client work' | 'Personal project';
  short: string;
  long: string;
  instagram: string;
  handle: string;
  accent: 'rose' | 'sage' | 'sand' | 'teal' | 'mustard' | 'cobalt' | 'forest' | 'cream';
  /** Optional list of video files (paths under /public). Rendered as autoplay loops. */
  videos?: string[];
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
    accent: 'cream',
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
    accent: 'forest',
    videos: [
      '/videos/kava/1000014761.mp4',
      '/videos/kava/3a91c50c174f4eaba8848f88c1dc81fb.mp4',
      '/videos/kava/4110a64ed2bf48db905365146b9053f5.mp4',
      '/videos/kava/4156dcc6c3194af29022a7e883795ad2.mp4',
      '/videos/kava/4E2CEAE6-DECD-4CA2-9F7F-2F4C9D11BC7F.mp4',
      '/videos/kava/EC88BBC8-AC46-48A5-9DAE-0864D6A6E1AE.mp4',
    ],
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
    accent: 'rose',
    videos: [
      '/videos/trinket/a8456cf7f12e4484bdeef4364f014feb.mp4',
    ],
  },
];

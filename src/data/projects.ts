export interface Project {
  slug: string;
  title: string;
  role: string;
  category: 'Photography' | 'Client work' | 'Personal project';
  short: string;
  long: string;
  instagram: string;
  handle: string;
  accent: 'rose' | 'sage' | 'sand' | 'teal' | 'mustard' | 'cobalt' | 'forest' | 'hunter' | 'cream';
  /** Optional list of video files (paths under /public). Rendered as autoplay loops. */
  videos?: string[];
  logo?: string;
  logoRounded?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'harrington-and-hobbs',
    title: 'Harrington & Hobbs',
    role: 'Photography business',
    category: 'Photography',
    short: 'My photography business — editorial portrait, brand, and travel work.',
    long: 'Weddings, portraits, events, branding shoots, restaurant menu rollouts, and more — full-service shoot management from concept and prep through to delivery of final edited files.',
    instagram: 'https://instagram.com/harringtonandhobbs',
    handle: '@harringtonandhobbs',
    accent: 'cream',
    logo: '/images/logos/H&HLogoBcrop.png',
  },
  {
    slug: 'the-kava-konnection',
    title: 'The Kava Konnection',
    role: 'Client · Content & marketing',
    category: 'Client work',
    short: 'Ongoing content creation and social strategy for an independent kava bar.',
    long: 'Led and directed social media accounts by creating Instagram Reels and TikToks, taking professional photos, managing marketing events, and making flyers in Canva. Collaborated with the management team to develop content strategies that increased engagement and brand awareness, using analytics to track performance metrics, audience insights, and optimize content strategy for maximum reach and impact.',
    instagram: 'https://instagram.com/the_kava_konnection',
    handle: '@the_kava_konnection',
    accent: 'hunter',
    logo: '/images/logos/Kava_logo.png',
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
    short: 'A community trinket-trade box built from the ground up.',
    long: 'I started a trinket trading box in Greenville to trade little trinkets and crafts. It\'s a box where you can leave a trinket, take a trinket, and share things with the community — similar to geocaching. It\'s currently on the Sidewalk Joy Map alongside other trading boxes around the world. I\'ve made an Instagram and Facebook dedicated to it, and I\'m working on expanding the box to another location and collaborating with local craft clubs for craft events.',
    instagram: 'https://instagram.com/gvltrinkettrade',
    handle: '@gvltrinkettrade',
    accent: 'rose',
    logo: '/images/logos/trinket.png',
    logoRounded: true,
    videos: [
      '/videos/trinket/a8456cf7f12e4484bdeef4364f014feb.mov',
      '/videos/trinket/13b87ca350ba4b9a87fba76209412b83.MOV',
      '/videos/trinket/f46d9c84355448018ee92db5563268af.MOV',
    ],
  },
];

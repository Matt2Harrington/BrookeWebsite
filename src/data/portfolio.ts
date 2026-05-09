// Photo galleries that get rendered on /portfolio.
//
// Drop static photo files into /public/images/portfolio/<slug>/ and then list
// them under the matching project below. Filenames are referenced as-is,
// e.g. `/images/portfolio/harrington-and-hobbs/photo-01.jpg`.
//
// Live photography work is sourced from @harringtonandhobbs on Instagram.

export interface Photo {
  src: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface Gallery {
  slug: string;
  photos: Photo[];
}

export const galleries: Gallery[] = [
  {
    slug: 'harrington-and-hobbs',
    photos: [
      // Drop photos into /public/images/portfolio/harrington-and-hobbs/ and list them here.
      // Example:
      // { src: '/images/portfolio/harrington-and-hobbs/01.jpg', aspect: 'tall' },
    ],
  },
  {
    slug: 'the-kava-konnection',
    photos: [],
  },
  {
    slug: 'gvl-trinket-trade',
    photos: [],
  },
];

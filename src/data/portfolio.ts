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
      { src: '/images/photography/1R1A7496.JPEG', aspect: 'tall' },
      { src: '/images/photography/1R1A9762.JPEG', aspect: 'tall' },
      { src: '/images/photography/IMG_6302.JPG', aspect: 'tall' },
      { src: '/images/photography/1000003246.JPG', aspect: 'tall' },
      { src: '/images/photography/1000003326.JPG', aspect: 'tall' },
      { src: '/images/photography/1000011086.JPG', aspect: 'tall' },
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

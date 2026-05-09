export const site = {
  name: 'Brookelyn McPherson',
  tagline: 'Photographer · Marketing Strategist · Content Creator',
  domain: 'galaxylens.art',
  email: '[EDIT: hello@galaxylens.art]',
  location: 'Greenville, SC',

  // Personal / brand IG (header + footer "find me" link)
  instagram: 'https://instagram.com/brookelyn_hobbs?utm_medium=copy_link',
  instagramHandle: '@brookelyn_hobbs',

  // Photography business — all photography on the site links here
  photographyInstagram: 'https://instagram.com/harringtonandhobbs',
  photographyHandle: '@harringtonandhobbs',

  // Most recent personal project
  personalProjectInstagram: 'https://instagram.com/gvltrinkettrade',
  personalProjectHandle: '@gvltrinkettrade',

  // Featured client
  clientInstagram: 'https://instagram.com/the_kava_konnection',
  clientHandle: '@the_kava_konnection',
};

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const mobileNavLinks = [
  { label: 'Home', href: '/' },
  ...navLinks,
];

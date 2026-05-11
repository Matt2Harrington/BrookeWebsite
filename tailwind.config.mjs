/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm kraft-yellow backgrounds
        cream: '#F4E4C2',
        'cream-deep': '#E5CC9A',
        // Near-black neutral for headings + dark sections (no brown)
        cocoa: '#1A1A1A',
        // Cool slate for body / secondary text (no brown)
        'cocoa-soft': '#3D4350',
        // Bold raspberry — primary accent
        rose: '#4A1B20',
        'rose-soft': '#FAC4D0',
        // Chartreuse lime — secondary accent
        sage: '#8FB01C',
        'sage-soft': '#E1EFA8',
        // Tangerine — tertiary accent
        sand: '#F87425',
        // Scrapbook accents
        teal: '#2EA9A0',
        'teal-soft': '#A8DCD5',
        mustard: '#E8B71E',
        'mustard-soft': '#F5DF8A',
        navy: '#1F3A66',
        'navy-soft': '#7B97C0',
        forest: '#3F6B43',
        'forest-soft': '#A8C4A8',
        hunter: '#346210',
        cobalt: '#2B5BA3',
        magenta: '#E91E89',
        coral: '#FF7E6B',
        lavender: '#B89BD9',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        script: ['Waiting for the Sunrise', 'cursive'],
        chunky: ['Bowlby One SC', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};

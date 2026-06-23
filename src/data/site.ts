// Central business facts. Single source of truth for the whole site.
// Anything marked [CONFIRM] is a placeholder Marco/owner needs to verify.

export const site = {
  name: 'Yee Hauls',
  legalName: 'Yee Hauls LLC',
  tagline: 'Rent a dump trailer. We haul it off.',
  domain: 'yeehauls.com',
  url: 'https://yeehauls.com',

  // Contact
  phoneDisplay: '(480) 876-5030',
  phoneE164: '+14808765030',
  email: 'info@yeehauls.com',

  // Service-area business (no public storefront address)
  isServiceAreaBusiness: true,
  primaryCity: 'Gilbert',
  state: 'AZ',
  stateFull: 'Arizona',
  metro: 'East Valley',

  // Hours - [CONFIRM] actual hours / same-day / weekend availability
  hours: '[CONFIRM] Mon-Sat, 7am-6pm',
  hoursSchema: 'Mo-Sa 07:00-18:00', // [CONFIRM]
  sameDay: true, // [CONFIRM]

  // Social
  instagram: 'https://www.instagram.com/yeehauls', // [CONFIRM handle/URL]
  googleProfile: '[CONFIRM full Google Business Profile URL]', // share link: https://share.google/zUZgjWhmsjE90Qjsh

  // Brand colors - pulled from the logo (espresso brown + rope cream) + a desert rust CTA
  colors: {
    brown: '#3a2a1c', // primary / logo brown - headers, headings, overlay
    brownDeep: '#2a1d12',
    cream: '#f4ebdc', // rope cream - warm section backgrounds
    creamSoft: '#faf5ec',
    rust: '#c2622e', // CTA / accent - desert rust
    rustDeep: '#a44e21',
    ink: '#22201d', // body text
    line: '#e4d8c4', // hairline borders on cream
  },
} as const;

// What Yee Hauls hauls (used in copy + "what we take" lists). Verified-safe, generic.
export const takes = [
  'Junk and general clutter',
  'Construction and remodel debris',
  'Landscaping and yard waste',
  'Garage, estate, and home cleanouts',
  'Roofing tear-off debris',
  'Furniture and appliances', // [CONFIRM appliances OK]
];

// Common "we can't take" items - [CONFIRM exact list with owner]
export const doesNotTake = [
  'Hazardous materials',
  'Wet paint and chemicals',
  'Tires', // [CONFIRM]
  'Anything requiring special disposal', // [CONFIRM]
];

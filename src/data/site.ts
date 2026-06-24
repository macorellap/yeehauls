// Central business facts. Single source of truth for the whole site.
// Anything marked [CONFIRM] is a placeholder still to be verified.

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

  // Availability: appointment-based; same-day and weekends subject to trailer availability
  hours: 'By appointment, 7 days a week',
  sameDay: true,
  weekends: true,

  // Credibility (verified by owner)
  licensed: true, // business license
  insured: true, // business insurance

  // Social
  instagram: 'https://www.instagram.com/yeehauls',
  googleProfile: '[CONFIRM full Google Business Profile URL]', // share link: https://share.google/zUZgjWhmsjE90Qjsh

  // Brand colors - pulled from the logo (espresso brown + rope cream) + a desert rust CTA
  colors: {
    brown: '#3a2a1c',
    brownDeep: '#2a1d12',
    cream: '#f4ebdc',
    creamSoft: '#faf5ec',
    rust: '#c2622e',
    rustDeep: '#a44e21',
    ink: '#22201d',
    line: '#e4d8c4',
  },
} as const;

// Dump trailer rental pricing (verified by owner).
export const pricing = {
  basePrice: 250, // per drop
  includedTons: 1, // first ton (2,000 lbs) included
  includedLbs: 2000,
  perAdditionalTon: 90,
  rentalHours: 48,
  maxPayloadLbs: 4840, // rated payload / ~2.5-ton max load
  overageFee: '$100 per 500 lbs over the payload limit',
  // One-line summary used in several places.
  summary:
    '$250 per drop, which includes the first ton (2,000 lbs) and up to 48 hours. Additional weight is $90 per ton.',
};

// What we advertise that we take (non-hazardous).
export const takes = [
  'Construction debris',
  'Landscaping debris',
  'Household junk (non-hazardous)',
  'Yard waste',
];

// Special-handling items: allowed only with prior approval, may incur extra fees.
export const specialHandling = [
  'Concrete',
  'Dirt',
  'Rock',
  'Pavers, block, and brick',
  'Large quantities of manure',
];

// Prohibited items (cannot go in the trailer or hauling loads).
export const prohibited = [
  'Hazardous waste',
  'Paint, stains, and solvents',
  'Chemicals and pesticides',
  'Flammable or combustible materials (gasoline, propane tanks, fuel, oil)',
  'Batteries (including vehicle and lithium batteries)',
  'Asbestos-containing materials',
  'Medical or biohazardous waste',
  'Radioactive materials',
  'Explosives or ammunition',
  'Tires (unless approved in advance)',
  'Refrigerators, air conditioners, or appliances with refrigerants (unless approved)',
  'Any material prohibited by local, state, or federal disposal regulations',
];

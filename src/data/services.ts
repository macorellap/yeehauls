// Yee Hauls has ONE service: dump trailer rental. We deliver the trailer, the
// customer loads it, and we pick it up and handle the dump run / disposal.
// We do NOT load the customer's material for them.

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  cardBlurb: string;
  heroSubhead: string;
  metaTitle: string;
  metaDescription: string;
  whatItIs: string[]; // 2 short paragraphs
  useCases: string[]; // high-intent "use it for" bullets
  pricingNote: string; // honest pricing for this service
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: 'dump-trailer-rental',
    name: 'Dump Trailer Rental',
    shortName: 'Trailer Rental',
    cardBlurb:
      'We drop a dump trailer at your place, you load it on your schedule, and we haul it off and handle the dump run. No hourly clock, no rush.',
    heroSubhead:
      'We deliver the trailer to your driveway or job site. You load it. We pick it up and handle the dump run and disposal.',
    metaTitle: 'Dump Trailer Rental in Gilbert, AZ | Yee Hauls',
    metaDescription:
      'Rent a dump trailer in Gilbert and the East Valley. We deliver, you load, we haul it off. Simple flat pricing. Call (480) 876-5030 for a free quote.',
    whatItIs: [
      'A dump trailer rental is the easy middle ground between renting a roll-off dumpster and hiring full-service junk removal. We bring the trailer to you, leave it while you load, then come back to haul it off and handle disposal.',
      'You load on your own schedule with no hourly clock running. When the trailer is full, we take care of the dump run so you never have to drive to the landfill or sort out fees. You load it, we handle the rest.',
    ],
    useCases: [
      'Garage, home, and estate cleanouts',
      'Remodel and construction debris',
      'Landscaping and yard waste',
      'Roofing tear-off debris',
      'Moving and downsizing junk',
      'HOA and rental turnovers',
    ],
    pricingNote:
      'Dump trailer rental is $250 per drop. That includes the first ton (2,000 lbs) and up to 48 hours with the trailer. Extra weight is $90 per ton. Our 6 ft by 10 ft trailer holds up to a 2.5-ton load (4,840 lb payload), and loads over the limit are subject to a $100 per 500 lbs overage fee.',
    faqs: [
      {
        q: 'How does dump trailer rental work?',
        a: 'We deliver a clean dump trailer to your home or job site, you load it at your own pace, and we return to pick it up and handle the dump run. You never touch the landfill.',
      },
      {
        q: 'Do you load the material for me?',
        a: 'No. You load the trailer yourself on your own schedule, which keeps the price low and predictable. We handle delivery, pickup, and the dump run.',
      },
      {
        q: 'How long can I keep the trailer?',
        a: 'You get the trailer for up to 48 hours. That is plenty of time for most cleanouts and weekend projects.',
      },
      {
        q: 'How much does it cost?',
        a: 'It is $250 per drop, which includes the first ton (2,000 lbs) and up to 48 hours. Additional weight is $90 per ton. Call (480) 876-5030 and we will confirm your quote up front.',
      },
      {
        q: 'Is there a weight limit?',
        a: 'The 6 ft by 10 ft trailer holds up to a 2.5-ton load (a 4,840 lb payload). Loads over the limit are subject to a $100 per 500 lbs overage charge, so call us if you are unsure about the weight of your material.',
      },
      {
        q: 'Where will you place the trailer?',
        a: 'We drop it where you need it, like a driveway, side yard, or job site, as long as there is safe access for the truck. Tell us the spot when you book.',
      },
    ],
  },
];

// 3-step process: deliver -> you load -> we haul it off (pickup + dump run).
export const howItWorks = [
  {
    step: 1,
    title: 'We deliver the trailer',
    body: 'Tell us the day and the spot. We drop a clean dump trailer right where you need it.',
  },
  {
    step: 2,
    title: 'You load it up',
    body: 'Take your time. Fill it on your own schedule with junk, debris, or yard waste.',
  },
  {
    step: 3,
    title: 'We haul it off',
    body: 'When you are done, we pick up the trailer and handle the dump run and disposal for you.',
  },
];

// Trailer specs (verified by owner).
export const trailerSpecs = {
  sizeDisplay: '6 ft x 10 ft dump trailer',
  capacityDisplay: '2.5-ton max load (4,840 lb payload)',
  removableSides: true, // wood side extensions visible in photos
};

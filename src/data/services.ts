// Services that get their own pages. Yee Hauls has two core offerings.
// Specs/pricing marked [CONFIRM]/NEEDS must be verified before launch (no fabricated numbers).

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
      'We drop a dump trailer at your place, you load it on your schedule, and we haul it away. No hourly clock, no rush.',
    heroSubhead:
      'We deliver the trailer to your driveway or job site. You load it. We pick it up and dispose of it.',
    metaTitle: 'Dump Trailer Rental in Gilbert, AZ | Yee Hauls',
    metaDescription:
      'Rent a dump trailer in Gilbert and the East Valley. We deliver, you load, we haul it off. Simple flat pricing. Call (480) 876-5030 for a free quote.',
    whatItIs: [
      'A dump trailer rental is the easy middle ground between renting a roll-off dumpster and hiring full-service junk removal. We bring the trailer to you, leave it while you load, then come back to haul it off and handle disposal.',
      'You load on your own schedule with no hourly clock running. When the trailer is full, we take care of the dump run so you never have to drive to the landfill or sort out fees.',
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
        a: 'We deliver a clean dump trailer to your home or job site, you load it at your own pace, and we return to pick it up and dispose of everything. You never touch the landfill.',
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
  {
    slug: 'hauling-service',
    name: 'Hauling Service',
    shortName: 'Hauling',
    cardBlurb:
      'Already loaded or want it gone fast? We haul off junk, debris, and yard waste and handle the dump run for you.',
    heroSubhead:
      'Junk, debris, and yard waste gone the same day. We do the loading and the disposal so you do not have to.',
    metaTitle: 'Junk & Debris Hauling in Gilbert, AZ | Yee Hauls',
    metaDescription:
      'Hauling and junk removal in Gilbert and the East Valley. We load, haul, and dispose of debris and yard waste. Call (480) 876-5030 for a free quote.',
    whatItIs: [
      'When you want it gone without the work, our hauling service does the heavy lifting. We show up, load the junk and debris, and haul it off in one trip.',
      'It is the right call for one-off piles, a single heavy item, or anything you would rather not load yourself. We handle disposal so the job is truly done.',
    ],
    useCases: [
      'Junk and clutter removal',
      'Single heavy or bulky items',
      'Post-project debris cleanup',
      'Yard and landscaping waste',
      'Furniture and bulky item removal',
      'Same-day haul-offs',
    ],
    pricingNote:
      'Hauling is priced by the load and the job, so it depends on what you have and where you are. Call (480) 876-5030 and we will give you a flat quote up front, with no surprise fees.',
    faqs: [
      {
        q: 'Do I need to load anything myself?',
        a: 'No. With our hauling service we handle the loading. If you would rather load on your own time, a dump trailer rental may be the better fit.',
      },
      {
        q: 'Can you come the same day?',
        a: 'Same-day and weekend service is available based on trailer availability. Call early and we will do our best to fit you in.',
      },
      {
        q: 'What can you haul away?',
        a: 'We take construction debris, landscaping debris, yard waste, and non-hazardous household junk. Some materials like concrete, dirt, and rock need prior approval, and hazardous items are not allowed. Contact us before loading anything you are unsure about.',
      },
      {
        q: 'How is hauling priced?',
        a: 'Pricing depends on the load. Call (480) 876-5030 for a fast, flat quote before we start.',
      },
    ],
  },
];

// 3-step "how it works" - the core promise from the current site.
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
    body: 'When you are done, we pick it up and handle the dump run and disposal for you.',
  },
];

// Trailer specs (verified by owner).
export const trailerSpecs = {
  sizeDisplay: '6 ft x 10 ft dump trailer',
  capacityDisplay: '2.5-ton max load (4,840 lb payload)',
  removableSides: true, // wood side extensions visible in photos
};

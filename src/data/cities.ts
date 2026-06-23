// Cities that get their own location pages. These four are the real service area.
// Local detail marked [CONFIRM] must be verified (no fabricated neighborhoods/facts).

export interface City {
  slug: string;
  name: string;
  isPrimary: boolean;
  county: string;
  // 2-paragraph local intro is the ~60% unique content each page needs.
  // Drafted light here; expand with verified local detail at copy stage.
  intro: string;
  neighborhoods: string[]; // [CONFIRM] real neighborhoods/areas
  metaTitle: string;
  metaDescription: string;
}

export const cities: City[] = [
  {
    slug: 'gilbert',
    name: 'Gilbert',
    isPrimary: true,
    county: 'Maricopa County',
    intro:
      'Yee Hauls is based in Gilbert and it is where we run most of our dump trailer drop-offs. From cleanouts in older neighborhoods to debris from new builds on the south side, we know the town and the dump runs that come with it. [CONFIRM local detail]',
    neighborhoods: ['[CONFIRM]', 'Power Ranch', 'Seville', 'Val Vista Lakes', 'Agritopia'], // [CONFIRM]
    metaTitle: 'Dump Trailer Rental in Gilbert, AZ | Yee Hauls',
    metaDescription:
      'Local dump trailer rental and hauling in Gilbert, AZ. We deliver, you load, we haul it off. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    isPrimary: false,
    county: 'Maricopa County',
    intro:
      'We deliver dump trailers across Chandler, from established neighborhoods near downtown to the newer developments out east. Whether it is a garage cleanout or a remodel, we drop the trailer and handle the haul. [CONFIRM local detail]',
    neighborhoods: ['[CONFIRM]', 'Ocotillo', 'Fulton Ranch', 'Downtown Chandler'], // [CONFIRM]
    metaTitle: 'Dump Trailer Rental in Chandler, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental and hauling in Chandler, AZ. We deliver the trailer, you load it, we haul it off. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'mesa',
    name: 'Mesa',
    isPrimary: false,
    county: 'Maricopa County',
    intro:
      'Mesa is a big part of our service area. We haul for homeowners and contractors across the city, from yard-waste loads to construction debris. We bring the trailer to you and take the dump run off your plate. [CONFIRM local detail]',
    neighborhoods: ['[CONFIRM]', 'Eastmark', 'Las Sendas', 'Dobson Ranch'], // [CONFIRM]
    metaTitle: 'Dump Trailer Rental in Mesa, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental and hauling in Mesa, AZ. Delivery, you load, we haul it away. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'queen-creek',
    name: 'Queen Creek',
    isPrimary: false,
    county: 'Maricopa County', // [CONFIRM - Queen Creek spans Maricopa & Pinal]
    intro:
      'Queen Creek keeps growing, and so does the debris that comes with new builds, landscaping, and cleanouts. We deliver dump trailers throughout the area and handle disposal so you can keep the project moving. [CONFIRM local detail]',
    neighborhoods: ['[CONFIRM]', 'Encanterra', 'Hastings Farms', 'Queen Creek Station'], // [CONFIRM]
    metaTitle: 'Dump Trailer Rental in Queen Creek, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental and hauling in Queen Creek, AZ. We deliver, you load, we haul it off. Call (480) 876-5030 for a free quote.',
  },
];

export const primaryCity = cities.find((c) => c.isPrimary)!;

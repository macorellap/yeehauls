// Cities that get their own location pages. These four are the real service area.
// Neighborhoods are verified real areas of each city. Local context confirmed by owner.

export interface City {
  slug: string;
  name: string;
  isPrimary: boolean;
  county: string;
  // 2-3 sentence local intro = the ~60% unique content each page needs.
  intro: string;
  neighborhoods: string[];
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
      'Yee Hauls is based right here in Gilbert, so it is where we run most of our dump trailer drops. We see a lot of move-out cleanouts around town, from rental turnovers to families clearing the garage before a sale. From Power Ranch and Morrison Ranch to the Heritage District, we bring the trailer to you and handle the dump run.',
    neighborhoods: ['Power Ranch', 'Agritopia', 'Morrison Ranch', 'Val Vista Lakes', 'Heritage District'],
    metaTitle: 'Dump Trailer Rental in Gilbert, AZ | Yee Hauls',
    metaDescription:
      'Local dump trailer rental in Gilbert, AZ. We deliver, you load, we haul it off. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    isPrimary: false,
    county: 'Maricopa County',
    intro:
      'We deliver dump trailers all over Chandler, from the established neighborhoods near downtown to the newer master-planned communities on the south and east sides. Remodels, garage cleanouts, and landscaping projects keep us busy here. Whether you are in Ocotillo, Fulton Ranch, or closer to Downtown Chandler, we drop the trailer and take care of disposal.',
    neighborhoods: ['Ocotillo', 'Fulton Ranch', 'Clemente Ranch', 'Downtown Chandler'],
    metaTitle: 'Dump Trailer Rental in Chandler, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental in Chandler, AZ. We deliver the trailer, you load it, we haul it off. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'mesa',
    name: 'Mesa',
    isPrimary: false,
    county: 'Maricopa County',
    intro:
      'Mesa is a big part of our service area, and it covers a lot of ground. Out in west Mesa we do plenty of older-home cleanouts, where decades of belongings finally need to go. On the east side, newer communities like Eastmark generate remodel and landscaping debris. From Dobson Ranch to Las Sendas, we bring the trailer and handle the haul.',
    neighborhoods: ['Eastmark', 'Las Sendas', 'Dobson Ranch', 'East Mesa', 'West Mesa'],
    metaTitle: 'Dump Trailer Rental in Mesa, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental in Mesa, AZ. Delivery, you load, we haul it away. Call (480) 876-5030 for a free quote.',
  },
  {
    slug: 'queen-creek',
    name: 'Queen Creek',
    isPrimary: false,
    county: 'Maricopa & Pinal counties',
    intro:
      'Queen Creek keeps growing fast, and the debris grows right along with it. We haul a lot of new-construction debris and hardscape removal here, from leftover block and pavers to landscaping tear-outs. Whether you are in Encanterra, Hastings Farms, Barney Farms, or Ironwood Crossing, we deliver the trailer and keep your project moving.',
    neighborhoods: ['Encanterra', 'Hastings Farms', 'Whitewing', 'Barney Farms', 'Ironwood Crossing'],
    metaTitle: 'Dump Trailer Rental in Queen Creek, AZ | Yee Hauls',
    metaDescription:
      'Dump trailer rental in Queen Creek, AZ. We deliver, you load, we haul it off. Call (480) 876-5030 for a free quote.',
  },
];

export const primaryCity = cities.find((c) => c.isPrimary)!;

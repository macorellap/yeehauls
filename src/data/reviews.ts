// Real customer reviews only. Never fabricate. Pulled from the Google Business Profile.
// city is optional (only include when the reviewer's location is actually shown).

export interface Review {
  name: string;
  text: string;
  stars: number;
  city?: string;
  source: string;
}

export const reviews: Review[] = [
  {
    name: 'Johnathan Caceres',
    text: 'Talk about extremely reliable and great equipment! Recommend 10/10',
    stars: 5,
    source: 'Google',
  },
  // More real reviews go here as Marco supplies them.
];

// Aggregate rating for schema - only populate once the true count + average are known.
// Leaving null prevents fabricating an AggregateRating. [CONFIRM rating + total count]
export const aggregate: { ratingValue: number; reviewCount: number } | null = null;

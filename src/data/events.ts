export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  description?: string;
  image?: string;
};

export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Iri Ji Festival',
    date: '2026-9-05',
    location: 'Ekwulu Square',
    description: 'Annual yam festival with music and traditional rites.',
    image: '/images/iri-ji.jpg',
  },
  {
    id: 'e2',
    title: 'Agegrade Meeting',
    date: '2025-12-12',
    location: 'Town Hall, Ekwulu',
    description: 'Monthly agegrade planning and volunteering',
    image: '/images/agegrade.jpg',
  },
  {
    id: 'e3',
    title: 'Market Day Fair',
    date: '2025-12-20',
    location: 'Market Square',
    description: 'Special EKE market fair with artisans and food.',
    image: '/images/market.jpg',
  },
];

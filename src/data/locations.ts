export type Location = {
  id: string;
  name: string;
  address: string;
  postalCity: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
  routeFromAccommodation?: {
    google: string;
    apple: string;
  };
};

const ACCOMMODATION_ADDRESS = 'Dorperheideweg 12, 5944 NK Arcen';

export const LOCATIONS: Location[] = [
  {
    id: 'huisje',
    name: 'Het huisje',
    address: 'Dorperheideweg 12',
    postalCity: '5944 NK Arcen',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dorperheideweg+12,5944+NK+Arcen',
    appleMapsUrl: 'https://maps.apple.com/?address=Dorperheideweg+12,5944+NK+Arcen,Netherlands',
  },
  {
    id: 'restaurant',
    name: 'Hertog Jan Proeverij',
    address: 'Kruisweg 43',
    postalCity: '5944 EM Arcen',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kruisweg+43,5944+EM+Arcen',
    appleMapsUrl: 'https://maps.apple.com/?address=Kruisweg+43,5944+EM+Arcen,Netherlands',
    routeFromAccommodation: {
      google: `https://www.google.com/maps/dir/${encodeURIComponent(ACCOMMODATION_ADDRESS)}/${encodeURIComponent('Kruisweg 43, 5944 EM Arcen')}`,
      apple: `https://maps.apple.com/?saddr=${encodeURIComponent(ACCOMMODATION_ADDRESS)}&daddr=${encodeURIComponent('Kruisweg 43, 5944 EM Arcen')}`,
    },
  },
  {
    id: 'paintball',
    name: 'Paintball Warriors',
    address: 'Hei 17a',
    postalCity: '5991 PC Baarlo',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hei+17a,5991+PC+Baarlo',
    appleMapsUrl: 'https://maps.apple.com/?address=Hei+17a,5991+PC+Baarlo,Netherlands',
    routeFromAccommodation: {
      google: `https://www.google.com/maps/dir/${encodeURIComponent(ACCOMMODATION_ADDRESS)}/${encodeURIComponent('Hei 17a, 5991 PC Baarlo')}`,
      apple: `https://maps.apple.com/?saddr=${encodeURIComponent(ACCOMMODATION_ADDRESS)}&daddr=${encodeURIComponent('Hei 17a, 5991 PC Baarlo')}`,
    },
  },
];

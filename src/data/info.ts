export type InfoData = {
  wifi: { naam: string | null; wachtwoord: string | null };
  adres: { straat: string; postcode: string; plaats: string };
  boeking: { nummer: string; type: string };
  notities: string[];
};

export const INFO: InfoData = {
  // Vul in voor het weekend:
  wifi: { naam: null, wachtwoord: null },
  adres: { straat: 'Dorperheideweg 12', postcode: '5944 NK', plaats: 'Arcen' },
  boeking: { nummer: '00026171661000', type: 'Comfort villa 12 cv12' },
  notities: [],
};

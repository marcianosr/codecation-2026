export type InfoData = {
  wifi: { naam: string | null; wachtwoord: string | null };
  adres: { straat: string; postcode: string; plaats: string };
  boeking: { nummer: string; type: string };
  afsluiting: string[];
  notities: string[];
};

export const INFO: InfoData = {
  // Vul in voor het weekend:
  wifi: { naam: null, wachtwoord: null },
  adres: { straat: 'Dorperheideweg 12', postcode: '5944 NK', plaats: 'Arcen' },
  boeking: { nummer: '00026171661000', type: 'Comfort villa 12 cv12' },
  afsluiting: [
    'De bedden afhalen en het bedlinnen achterlaten in de hal van de accommodatie.',
    'Het eventueel gehuurde keuken en/of badlinnen achterlaten in de hal van de accommodatie.',
    'De meubels op dezelfde plaats als bij aankomst terugzetten.',
    'De vaatwasser leeg en het servies schoon in de kast. Kosten voor uitruimen na vertrek: € 10,-',
    'De koelkast leeg, schoon, aan en de deur dicht.',
    'Huisvuil in de daarvoor bestemde containers bij een van de milieustraten op het park deponeren. Kosten voor afvoeren van vuilniszakken na vertrek: € 10,- per zak.',
    'De vloeren bezemschoon achterlaten, als ook de open haard (indien aanwezig).',
    'Deuren en ramen afsluiten.',
  ],
  notities: [],
};

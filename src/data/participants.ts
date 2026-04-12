export type ParticipantStats = {
  humor: number;    // droogste humor score /100
  bugs: number;     // total bugs gesquashed
  koffie: number;   // cups per dag
  lgtm: number;     // % PRs approved without comment (low = most thorough)
  tokens: number;   // AI tokens verbrand (in thousands)
};

export type Participant = {
  name: string;
  photo: string;
  bio: string;
  stats: ParticipantStats;
};

export const OTHER_PRIORITIES: string[] = [
  'Ruud Schroen',
  'Matthijs Groen',
];

export const PARTICIPANTS: Participant[] = [
  {
    name: 'Tom Schoutens',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/02/Tom_Transparant2.png',
    bio: 'Tom vraagt Claude expliciet om de OCP-vragen "niet te makkelijk" te maken, om vervolgens na jaren Java-ervaring hopeloos te stranden bij de module Building Blocks.',
    stats: { humor: 87, bugs: 2847, koffie: 3.5, lgtm: 23, tokens: 847 },
  },
  {
    name: 'Egon Meijers',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/22_Egon_Transparant1.png',
    bio: 'Egon besteedt het debuggen liever uit aan eindgebruikers die de hele dag naar hun DevTools moeten staren tot er iets knapt, maar vindt Claude vervolgens "te veeleisend" zodra de AI om de informatie vraagt die hij zelf weigert op te zoeken.',
    stats: { humor: 71, bugs: 5102, koffie: 6.0, lgtm: 8, tokens: 2341 },
  },
  {
    name: 'Sander van Maurik',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/11/sander-van-mauri-transparant.png',
    bio: 'Sander klaagt pas over de kwaliteit van de prompt nadat hij al op Enter heeft gedrukt, wat verklaart waarom zelfs zijn /buddy hem heeft geghost om aan de notificatie-terreur te ontsnappen.',
    stats: { humor: 64, bugs: 1204, koffie: 2.0, lgtm: 45, tokens: 412 },
  },
  {
    name: 'Max Bodelier',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/76_Max_Transparant2.png',
    bio: 'Max is blijkbaar een literaire grootmeester als het gaat om D&D-briefings inclusief adventure hooks en menu-opties, maar op werk is hij blijkbaar al door zijn letterbudget heen zodra hij een luie "nice" heeft getypt.',
    stats: { humor: 79, bugs: 3391, koffie: 4.0, lgtm: 61, tokens: 1893 },
  },
  {
    name: 'Pascal Widdershoven',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/87_Pascal_Transparant1.png',
    bio: 'Pascal gebruikt spraak-naar-tekst omdat hij "beter praat dan typt", maar zelfs met die extra snelheid staat zijn Codecation-project nog steeds op de status: "moet er nog even over nadenken".',
    stats: { humor: 55, bugs: 8834, koffie: 1.5, lgtm: 17, tokens: 5502 },
  },
  {
    name: 'Owen Vromans',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/06/nico-vromans-2-2-e1750830655872.png',
    bio: 'De broodjesservice van het tankstation is de enige architectuur binnen het bedrijf waar Nico wél een strakke deadline en een fatsoenlijke uptime voor weet te regelen.',
    stats: { humor: 88, bugs: 1887, koffie: 3.0, lgtm: 31, tokens: 1024 },
  },
  {
    name: 'Piet de Vries',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/06/piet-de-vries-2-e1750831013836.png',
    bio: "Onze 'Nix weirdo' verstuurt security advisories voor besturingssystemen waar hij de enige gebruiker van is, waarschijnlijk omdat hij na 3 uur 's nachts toch niets anders te doen heeft met zijn getraumatiseerde cron jobs.",
    stats: { humor: 92, bugs: 412, koffie: 0.5, lgtm: 78, tokens: 88 },
  },
  {
    name: 'Guido Theelen',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/32_Guido_Transparant2.png',
    bio: "Guido's releases zijn net als zijn aanstaande baby: ze komen op onvoorspelbare tijden wanneer iedereen probeert te slapen, en de kans is groot dat er daarna iemand moet huilen.",
    stats: { humor: 66, bugs: 6103, koffie: 5.0, lgtm: 52, tokens: 4096 },
  },
  {
    name: 'Aschwin Bruyning',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/10_Aschwin_Transparant2.png',
    bio: 'Aschwin voert hele discussies met zichzelf in Slack-threads om bugs op te lossen die hij zelf heeft veroorzaakt—zoals het per ongeluk deployen van een compleet Jira-ticket in het veld customerNumber.',
    stats: { humor: 73, bugs: 2201, koffie: 2.5, lgtm: 34, tokens: 2048 },
  },
  {
    name: 'Daan de Rond',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/13_Daan_transparant3.png',
    bio: "Daan vertrouwt geen GitHub-account met minder dan 10 volgers, maar laat wel zonder blikken of blozen zijn volledige tijdregistratie over aan een AI die hij in zijn eigen DM's 'kut Claude' noemt.",
    stats: { humor: 85, bugs: 3782, koffie: 4.5, lgtm: 19, tokens: 1337 },
  },
  {
    name: 'Marciano Schildmeijer',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/69_Marciano_Transparant1.png',
    bio: 'Marciano bouwde een tool om collega\'s kritisch te ondervragen over hun code, om vervolgens elke scheet van een AI blindelings als de absolute waarheid te accepteren. Voegt onbedoeld horizontale scrolls toe op elke mobiele website die hij released.',
    stats: { humor: 94, bugs: 1337, koffie: 3.5, lgtm: 11, tokens: 9001 },
  },
];

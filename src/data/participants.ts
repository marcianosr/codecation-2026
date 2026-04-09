export type ParticipantStats = {
  humor: number;    // droogste humor score /100
  bugs: number;     // total bugs gesquashed
  koffie: number;   // cups per dag
  lgtm: number;     // % PRs approved without comment (low = most thorough)
  commits: number;  // commits before 09:00
};

export type Participant = {
  name: string;
  photo: string;
  bio: string;
  stats: ParticipantStats;
};

export const PARTICIPANTS: Participant[] = [
  {
    name: 'Tom Schoutens',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/02/Tom_Transparant2.png',
    bio: 'Converteert koffie naar code met een efficiency die de React compiler jaloers maakt. Heeft nog nooit een PR gemerged zonder minstens één discussie over naamgeving.',
    stats: { humor: 87, bugs: 2847, koffie: 3.5, lgtm: 23, commits: 142 },
  },
  {
    name: 'Egon Meijers',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/22_Egon_Transparant1.png',
    bio: 'De man die altijd vraagt "maar heb je ook aan edge cases gedacht?" — en altijd gelijk heeft. Debugt liever in productie dan toe te geven dat hij iets niet weet.',
    stats: { humor: 71, bugs: 5102, koffie: 6.0, lgtm: 8, commits: 89 },
  },
  {
    name: 'Sander van Maurik',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/11/sander-van-mauri-transparant.png',
    bio: 'Senior developer die junior developers laat geloven dat hij de documentatie ook leest. Dat doet hij niet, maar hij weet gewoon hoe het werkt.',
    stats: { humor: 64, bugs: 1204, koffie: 2.0, lgtm: 45, commits: 31 },
  },
  {
    name: 'Max Bodelier',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/76_Max_Transparant2.png',
    bio: 'Schrijft CSS die er op alle browsers uitziet alsof het op één browser gemaakt is. Zijn dark mode is donkerder dan zijn koffie.',
    stats: { humor: 79, bugs: 3391, koffie: 4.0, lgtm: 61, commits: 203 },
  },
  {
    name: 'Pascal Widdershoven',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/87_Pascal_Transparant1.png',
    bio: 'Architect van systemen die hij zelf niet meer helemaal begrijpt, maar die wel werken. Refactort code die niemand anders durft aan te raken.',
    stats: { humor: 55, bugs: 8834, koffie: 1.5, lgtm: 17, commits: 17 },
  },
  {
    name: 'Owen Vromans',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/06/nico-vromans-2-2-e1750830655872.png',
    bio: 'Staat altijd klaar om een PR te reviewen en schrijft altijd nuttiger comments dan "LGTM". Geheime hobby: de tabs-vs-spaces discussie opnieuw opstarten.',
    stats: { humor: 88, bugs: 1887, koffie: 3.0, lgtm: 31, commits: 77 },
  },
  {
    name: 'Piet de Vries',
    photo: 'https://kabisa.nl/wp-content/uploads/2025/06/piet-de-vries-2-e1750831013836.png',
    bio: 'De rustige kracht achter de schermen. Lost problemen op voordat anderen ze zien. Zijn code werkt altijd — zijn uitleg ook.',
    stats: { humor: 92, bugs: 412, koffie: 0.5, lgtm: 78, commits: 4 },
  },
  {
    name: 'Guido Theelen',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/32_Guido_Transparant2.png',
    bio: 'Heeft meer side projects dan collega\'s en heeft ze ook allemaal in productie. "Proof of concept" is zijn favoriete excuus.',
    stats: { humor: 66, bugs: 6103, koffie: 5.0, lgtm: 52, commits: 299 },
  },
  {
    name: 'Aschwin Bruyning',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/10_Aschwin_Transparant2.png',
    bio: 'Kan elke businessvraag vertalen naar een technische oplossing. Houdt niet van onnodige complexiteit — tenzij hij het zelf bedacht heeft.',
    stats: { humor: 73, bugs: 2201, koffie: 2.5, lgtm: 34, commits: 108 },
  },
  {
    name: 'Daan de Rond',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/13_Daan_transparant3.png',
    bio: 'Heeft een mening over alles en heeft bij 80% van de gevallen ook gelijk. De andere 20% noemen we "leermoment".',
    stats: { humor: 85, bugs: 3782, koffie: 4.5, lgtm: 19, commits: 156 },
  },
  {
    name: 'Marciano Schildmeijer',
    photo: 'https://kabisa.nl/wp-content/uploads/2023/09/69_Marciano_Transparant1.png',
    bio: 'Weet precies wat goede code is en is niet bang dat te zeggen. Zijn component namen zijn poëzie, zijn commit messages zijn haiku\'s.',
    stats: { humor: 94, bugs: 1337, koffie: 3.5, lgtm: 11, commits: 211 },
  },
];

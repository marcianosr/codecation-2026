export type ScheduleLink = {
	label: string;
	icon: "map" | "menu";
	url: string;
};

export type ScheduleItem = {
	start: string | null;
	end: string | null;
	activity: string;
	links?: ScheduleLink[];
};

export type Day = {
	id: "vrijdag" | "zaterdag" | "zondag";
	label: string;
	date: string;
	items: ScheduleItem[];
};

export const SCHEDULE: Day[] = [
	{
		id: "vrijdag",
		label: "Vrijdag",
		date: "2026-04-17",
		items: [
			{ start: "17:30", end: "18:00", activity: "Inloop" },
			{ start: "18:00", end: "20:00", activity: "Gourmetten" },
			{ start: "20:00", end: "20:30", activity: "Introductie projecten" },
			{ start: "20:30", end: null, activity: "Programmeren" },
		],
	},
	{
		id: "zaterdag",
		label: "Zaterdag",
		date: "2026-04-18",
		items: [
			{
				start: "09:00",
				end: "10:00",
				activity: "Ontbijt / Programmeren",
			},
			{
				start: "10:00",
				end: "10:30",
				activity: "Stand-up voor projecten",
			},
			{ start: "10:30", end: "12:15", activity: "Programmeren" },
			{
				start: "12:15",
				end: "12:55",
				activity:
					"Klaarmaken en reis naar Paintball Warriors te Baarlo",
				links: [
					{
						label: "Kaart",
						icon: "map",
						url: "https://www.google.com/maps/dir/Dorperheideweg+12,5944+NK+Arcen/Hei+17a,5991+PC+Baarlo",
					},
				],
			},
			{
				start: "13:00",
				end: "15:00",
				activity: "Paintballen",
				links: [
					{
						label: "Kaart",
						icon: "map",
						url: "https://www.google.com/maps/search/?api=1&query=Hei+17a,5991+PC+Baarlo",
					},
				],
			},
			{
				start: "15:00",
				end: "15:30",
				activity: "Naar het huisje",
				links: [
					{
						label: "Kaart",
						icon: "map",
						url: "https://www.google.com/maps/dir/Hei+17a,5991+PC+Baarlo/Dorperheideweg+12,5944+NK+Arcen",
					},
				],
			},
			{
				start: "15:30",
				end: "17:30",
				activity: "Opfrissen en naar restaurant",
				links: [
					{
						label: "Kaart",
						icon: "map",
						url: "https://www.google.com/maps/dir/Dorperheideweg+12,5944+NK+Arcen/Kruisweg+43,5944+EM+Arcen",
					},
					{
						label: "Menu",
						icon: "menu",
						url: "https://www.hertogjanproeverij.nl/menukaart/#hoofdgerechten",
					},
				],
			},
			{
				start: "18:00",
				end: null,
				activity: "Restaurant — Hertog Jan Proeverij",
				links: [
					{
						label: "Kaart",
						icon: "map",
						url: "https://www.google.com/maps/search/?api=1&query=Kruisweg+43,5944+EM+Arcen",
					},
					{
						label: "Menu",
						icon: "menu",
						url: "https://www.hertogjanproeverij.nl/menukaart/#hoofdgerechten",
					},
				],
			},
			{
				start: null,
				end: null,
				activity: "Verder hacken voor de echte diehards",
			},
		],
	},
	{
		id: "zondag",
		label: "Zondag",
		date: "2026-04-19",
		items: [
			{
				start: "09:00",
				end: "10:00",
				activity: "Ontbijt / Programmeren",
			},
			{
				start: "10:00",
				end: "10:30",
				activity: "Stand-up voor projecten",
			},
			{ start: "10:30", end: "17:00", activity: "Programmeren" },
			{
				start: "12:30",
				end: "12:45",
				activity: "Lunch and Learn door Aschwin",
			},
			{
				start: "12:45",
				end: "13:00",
				activity: "Lunch and Learn door Owen",
			},
			{ start: "17:00", end: "18:00", activity: "Eindpresentaties" },
			{ start: "18:00", end: "18:30", activity: "Eten afhalen" },
			{
				start: "18:30",
				end: null,
				activity: "Opruimen + schoonmaak + Uitchecken",
			},
		],
	},
];

export const EVENT_START = "2026-04-17T17:30:00+02:00";

// Verified facts pulled directly from the live agamesports.net crawl (2026-08-13).
// Keep this the single source of truth for facts that repeat across pages —
// address, hours, phone — so a change only has to happen in one place.

export const facility = {
	name: 'A-Game Sports',
	foundedYear: 2013,
	address: {
		street: '856 Main St',
		city: 'New Rochelle',
		state: 'NY',
		zip: '10801',
		full: '856 Main St, New Rochelle, NY 10801',
	},
	phone: '(914) 278-9477',
	phoneHref: 'tel:+19142789477',
	email: 'info@agamesports.net',
	campDirectorEmail: 'info@agamesports.net',
	hours: [
		{ days: 'Monday – Friday', time: '9:00am – 10:00pm' },
		{ days: 'Saturday – Sunday', time: '8:00am – 7:00pm' },
	],
	hoursNote:
		'Additional hours are available by request. Summer hours vary and the facility is closed Sundays except for birthday parties and special events — call ahead to confirm.',
	social: {
		facebook: 'https://www.facebook.com/AGameSportsWestchester/',
		instagram: 'https://www.instagram.com/agamesports/',
		twitter: 'https://twitter.com/AGAMESPORTS2',
	},
	mission:
		"At A-Game Sports we don't just make better athletes, we make better people.",
	anniversaryNote: 'Celebrating more than a decade in New Rochelle since 2013.',
};

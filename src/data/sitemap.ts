// Full site sitemap — every URL from the legacy site's nav, grouped and labeled.
// This is the single source of truth for nav rendering AND the content-parity checklist.
// Do not remove an entry here without confirming the equivalent content exists elsewhere on the new site.

export type SitemapEntry = {
	href: string;
	label: string;
	/** true once a matching file exists in src/content/pages */
	built?: boolean;
};

export type SitemapGroup = {
	group: string;
	/** href of this group's hub/landing page, or null if the group is a flat bucket of peers with no hub. */
	hub: string | null;
	entries: SitemapEntry[];
};

export const sitemap: SitemapGroup[] = [
	{
		group: 'About / Facility',
		hub: '/about-a-game-sports/',
		entries: [
			{ href: '/about-a-game-sports/', label: 'About A-Game' },
			{ href: '/about-a-game-sports/facility/', label: 'Our Facility' },
			{ href: '/about-a-game-sports/now-hiring/', label: 'Now Hiring' },
			{ href: '/about-a-game-sports/press/', label: 'Press' },
			{ href: '/about-a-game-sports/staff/', label: 'Meet the Coaches' },
		],
	},
	{
		group: 'Baseball',
		hub: '/baseball-programs/',
		entries: [
			{ href: '/baseball-programs/', label: 'Baseball Programs' },
			{ href: '/baseball-programs/baseball-1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/baseball-programs/baseball-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/baseball-programs/baseball-team-training/', label: 'Team Training' },
			{ href: '/baseball-programs/fire-travel-baseball-teams/', label: 'Fire Travel Baseball' },
			{ href: '/baseball-programs/rapid-fire-hitting-package/', label: 'Rapid Fire Hitting Package' },
			{ href: '/fall-baseball/', label: 'Fall Baseball' },
		],
	},
	{
		group: 'Basketball',
		hub: '/basketball-programs/',
		entries: [
			{ href: '/basketball-programs/', label: 'Basketball Programs' },
			{ href: '/basketball-programs/one-on-one-lesson-packages/', label: '1-on-1 Lesson Packages' },
			{ href: '/fall-basketball/', label: 'Fall Basketball' },
			{
				href: '/fall-basketball/fall-outdoor-nothing-but-net-3-on-3-basketball-tournament/',
				label: 'Nothing But Net 3-on-3 Tournament',
			},
		],
	},
	{
		group: 'Softball',
		hub: '/softball-programs/',
		entries: [
			{ href: '/softball-programs/', label: 'Softball Programs' },
			{ href: '/softball-programs/fastpitch-softball-1-on-1-lessons/', label: 'Fastpitch 1-on-1 Lessons' },
			{ href: '/softball-programs/heat-softball-teams/', label: 'Heat Softball Teams' },
			{ href: '/softball-programs/softball-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/softball-programs/softball-team-training/', label: 'Team Training' },
			{ href: '/fall-softball/', label: 'Fall Softball' },
		],
	},
	{
		group: 'Field Hockey',
		hub: '/field-hockey-programs/',
		entries: [
			{ href: '/field-hockey-programs/', label: 'Field Hockey Programs' },
			{ href: '/field-hockey-programs/field-hockey-1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/field-hockey-programs/field-hockey-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/field-hockey-programs/field-hockey-team-training/', label: 'Team Training' },
			{ href: '/fall-field-hockey/', label: 'Fall Field Hockey' },
		],
	},
	{
		group: 'Football (Flag)',
		hub: '/football-programs/',
		entries: [
			{ href: '/football-programs/', label: 'Flag Football Programs' },
			{ href: '/football-programs/football-1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/football-programs/football-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/football-programs/travel-flag-football/', label: 'Travel Flag Football' },
			{ href: '/fall-football/', label: 'Fall Football' },
		],
	},
	{
		group: 'Lacrosse',
		hub: '/lacrosse/',
		entries: [
			{ href: '/lacrosse/', label: 'Lacrosse Programs' },
			{ href: '/lacrosse/1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/lacrosse/lacrosse-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/lacrosse/team-training/', label: 'Team Training' },
			{ href: '/fall-lacrosse/', label: 'Fall Lacrosse' },
		],
	},
	{
		group: 'Little Athletes Academy',
		hub: '/little-athletes-academy-programs/',
		entries: [
			{ href: '/little-athletes-academy-programs/', label: 'Little Athletes Academy' },
			{ href: '/little-athletes-academy-programs/customized-playgroups/', label: 'Customized Playgroups' },
			{
				href: '/little-athletes-academy-programs/sports-socialization-and-instruction/',
				label: '1-on-1 Lessons',
			},
			{ href: '/little-athletes-academy-programs/super-summer-saturdays/', label: 'Super Summer Saturdays' },
			{ href: '/fall-little-athletes/', label: 'Fall Little Athletes' },
		],
	},
	{
		group: 'Soccer',
		hub: '/soccer-programs/',
		entries: [
			{ href: '/soccer-programs/', label: 'Soccer Programs' },
			{ href: '/soccer-programs/adult-soccer/', label: 'Adult Soccer' },
			{ href: '/soccer-programs/soccer-1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/soccer-programs/soccer-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/soccer-programs/soccer-team-training/', label: 'Team Training' },
			{ href: '/fall-soccer/', label: 'Fall Soccer' },
		],
	},
	{
		group: 'Strength & Conditioning',
		hub: '/speed-training-strength-conditioning/',
		entries: [
			{ href: '/speed-training-strength-conditioning/', label: 'Speed, Strength & Conditioning' },
			{ href: '/speed-training-strength-conditioning/adult-fitness/', label: 'Adult Fitness' },
			{
				href: '/speed-training-strength-conditioning/strength-conditioning-1-on-1-training/',
				label: '1-on-1 Training',
			},
			{
				href: '/speed-training-strength-conditioning/strength-conditioning-small-group-training/',
				label: 'Small Group Training',
			},
			{ href: '/fall-strength-conditioning/', label: 'Fall Strength & Conditioning' },
		],
	},
	{
		group: 'Travel Teams',
		hub: '/travel-teams/',
		entries: [{ href: '/travel-teams/', label: 'Travel Teams' }],
	},
	{
		group: 'Volleyball',
		hub: '/volleyball/',
		entries: [
			{ href: '/volleyball/', label: 'Volleyball Programs' },
			{ href: '/volleyball/volleyball-1-on-1-lessons/', label: '1-on-1 Lessons' },
			{ href: '/volleyball/volleyball-small-group-lessons/', label: 'Small Group Lessons' },
			{ href: '/fall-volleyball/', label: 'Fall Volleyball' },
		],
	},
	{
		group: 'Summer Camps',
		hub: '/summer-camps/',
		entries: [
			{ href: '/summer-camps/', label: 'Summer Camps' },
			{ href: '/summer-camps/4-day-indoor-flag-football-mini-camp/', label: '4-Day Indoor Flag Football Mini Camp' },
			{ href: '/summer-camps/basketball-camp/', label: 'Basketball Camp' },
			{ href: '/summer-camps/flag-football-training-camp/', label: 'Flag Football Training Camp' },
			{ href: '/summer-camps/indoor-mini-basketball-camp/', label: 'Indoor Mini Basketball Camp' },
			{
				href: '/summer-camps/little-athletes-multi-sport-summer-camp/',
				label: 'Little Athletes Multi-Sport Camp',
			},
			{ href: '/summer-camps/little-learners/', label: 'Little Learners' },
			{ href: '/summer-camps/mini-windmill-pitching-bootcamp/', label: 'Mini Windmill Pitching Bootcamp' },
			{
				href: '/summer-camps/strength-speed-agility-summer-mini-camps/',
				label: 'Strength, Speed & Agility Mini Camps',
			},
			{ href: '/summer-camps/summer-baseball-softball-camp/', label: 'Summer Baseball & Softball Camp' },
			{
				href: '/summer-camps/summer-girls-only-flag-football-training-camp/',
				label: "Girls-Only Flag Football Camp",
			},
			{ href: '/summer-camps/summer-hitters-bootcamp/', label: 'Summer Hitters Bootcamp' },
			{ href: '/summer-camps/summer-soccer-camp/', label: 'Summer Soccer Camp' },
			{ href: '/summer-camps/volleyball-camp/', label: 'Volleyball Camp' },
		],
	},
	{
		group: 'School Break Camps',
		hub: null,
		entries: [
			{ href: '/school-break-camps/school-holiday-camps/', label: 'School Holiday Camps' },
			{ href: '/school-break-camps/spring-break-camps/', label: 'Spring Break Camps' },
			{ href: '/school-break-camps/winter-break-camps/', label: 'Winter Break Camps' },
		],
	},
	{
		group: 'Academics / Pre-School',
		hub: '/school-programs/',
		entries: [
			{ href: '/school-programs/', label: 'School Programs' },
			{ href: '/school-programs/a-game-academics/', label: 'A-Game Academics' },
			{ href: '/school-programs/little-learners/', label: 'Little Learners Pre-School' },
			{ href: '/school-programs/sat-prep-program/', label: 'SAT Prep Program' },
		],
	},
	{
		group: 'Birthdays / Events / Rentals',
		hub: '/birthdays-events-rentals/',
		entries: [
			{ href: '/birthdays-events-rentals/', label: 'Birthdays, Events & Rentals' },
			{ href: '/birthdays-events-rentals/birthday-parties/', label: 'Birthday Parties' },
			{ href: '/birthdays-events-rentals/corporate-retreats/', label: 'Corporate Retreats' },
			{ href: '/birthdays-events-rentals/facility-rentals/', label: 'Facility Rentals' },
			{ href: '/birthdays-events-rentals/gym-membership/', label: 'Gym Membership' },
			{ href: '/birthdays-events-rentals/outdoor-birthday-parties/', label: 'Outdoor Birthday Parties' },
		],
	},
	{
		// Booking/info utility pages only — kept separate from Legal below so
		// "See Also" recommendations on these pages never surface policy/terms
		// pages as if they were topically related content.
		group: 'Site-wide / Utility',
		hub: null,
		entries: [
			{ href: '/customized-programs/', label: 'Customized Programs' },
			{ href: '/calendar/', label: 'Calendar' },
			{ href: '/contact/', label: 'Contact' },
			{ href: '/specials/', label: 'Specials' },
			{ href: '/blog/', label: 'Blog' },
		],
	},
	{
		group: 'Legal',
		hub: null,
		entries: [
			{ href: '/policies/', label: 'Policies' },
			{ href: '/release-forms/', label: 'Release Forms' },
			{ href: '/privacy-policy/', label: 'Privacy Policy' },
			{ href: '/terms/', label: 'Terms of Use' },
		],
	},
];

export const sitemapFlat: SitemapEntry[] = sitemap.flatMap((g) => g.entries);

// Primary nav = top-level hub per group, kept short so it scales past ~90 pages.
export const primaryNav = [
	{ label: 'About', href: '/about-a-game-sports/' },
	{
		label: 'Sports',
		href: '/baseball-programs/',
		children: [
			{ label: 'Baseball', href: '/baseball-programs/' },
			{ label: 'Basketball', href: '/basketball-programs/' },
			{ label: 'Softball', href: '/softball-programs/' },
			{ label: 'Field Hockey', href: '/field-hockey-programs/' },
			{ label: 'Flag Football', href: '/football-programs/' },
			{ label: 'Lacrosse', href: '/lacrosse/' },
			{ label: 'Soccer', href: '/soccer-programs/' },
			{ label: 'Volleyball', href: '/volleyball/' },
			{ label: 'Strength & Conditioning', href: '/speed-training-strength-conditioning/' },
			{ label: 'Little Athletes Academy', href: '/little-athletes-academy-programs/' },
		],
	},
	{
		label: 'Camps',
		href: '/summer-camps/',
		children: [
			{ label: 'Summer Camps', href: '/summer-camps/' },
			{ label: 'School Break Camps', href: '/school-break-camps/school-holiday-camps/' },
		],
	},
	{ label: 'Travel Teams', href: '/travel-teams/' },
	{ label: 'Academics', href: '/school-programs/' },
	{ label: 'Birthdays & Events', href: '/birthdays-events-rentals/' },
	{ label: 'Contact', href: '/contact/' },
];

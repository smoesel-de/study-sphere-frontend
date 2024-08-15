import type { Page } from '$lib/models/page';

export const pages: Page[] = [
	{
		name: 'Startseite',
		link: '/start',
		icon: 'home'
	},
	{
		name: 'Meine Module',
		link: '/meine-module',
		icon: 'school'
	},
	{
		name: 'Stundenplan',
		link: '/stundenplan',
		icon: 'calendar-days'
	},
	{
		name: 'Noten',
		link: '/noten',
		icon: 'graduation-cap'
	}
];

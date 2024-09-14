import type { Page } from '$lib/models/page';

export const pages: Page[] = [
	{
		name: 'Startseite',
		link: '/start',
		icon: 'home',
		roles: ['student', 'lecturer']
	},
	{
		name: 'Meine Module',
		link: '/meine-module',
		icon: 'school',
		roles: ['student', 'lecturer']
	},
	{
		name: 'Stundenplan',
		link: '/stundenplan',
		icon: 'calendar-days',
		roles: ['student', 'lecturer']
	},
	{
		name: 'Noten',
		link: '/noten',
		icon: 'graduation-cap',
		roles: ['student']
	}
];

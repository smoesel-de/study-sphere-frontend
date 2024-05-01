import type { Page } from '$lib/models/page';

export const pages: Page[] = [
	{
		name: 'Startseite',
		link: '/start',
		icon: 'fa-home'
	},
	{
		name: 'Meine Module',
		link: '/meine-module',
		icon: 'fa-school'
	},
	{
		name: 'Stundenplan',
		link: '/stundenplan',
		icon: 'fa-calendar-days'
	}
];

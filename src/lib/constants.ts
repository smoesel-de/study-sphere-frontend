import type { Page } from '$lib/models/page';

export const pages: Page[] = [
	{
		name: 'Startseite',
		link: '/start',
		icon: 'fa-home'
	},
	{
		name: 'Meine Kurse',
		link: '/meine-kurse',
		icon: 'fa-school'
	},
	{
		name: 'Stundenplan',
		link: '/stundenplan',
		icon: 'fa-calendar-days'
	}
];

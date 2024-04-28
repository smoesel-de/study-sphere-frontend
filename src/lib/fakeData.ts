import bwl from '$lib/assets/fake_courses/bwl.jpg';
import deutsch from '$lib/assets/fake_courses/deutsch.jpg';
import informatik from '$lib/assets/fake_courses/informatik.jpg';
import it_recht from '$lib/assets/fake_courses/it_recht.jpg';
import it_sicherheit from '$lib/assets/fake_courses/it_sicherheit.jpg';
import mathematik from '$lib/assets/fake_courses/mathematik.jpg';

interface Lecturer {
	fore_name: string;
	last_name: string;
}

export interface Course {
	id: number;
	name: string;
	image: string;
	lecturer: Lecturer;
}

export const courses: Course[] = [
	{
		id: 1,
		name: 'Mathematik',
		image: mathematik,
		lecturer: {
			fore_name: 'Matthias',
			last_name: 'Maßmann'
		}
	},
	{
		id: 2,
		name: 'Informatik',
		image: informatik,
		lecturer: {
			fore_name: 'Bernd',
			last_name: 'Kress'
		}
	},
	{
		id: 3,
		name: 'Deutsch',
		image: deutsch,
		lecturer: {
			fore_name: 'Johann',
			last_name: 'Goethe'
		}
	},

	{
		id: 4,
		name: 'BWL',
		image: bwl,
		lecturer: {
			fore_name: 'Bernd',
			last_name: 'Albrecht'
		}
	},
	{
		id: 5,
		name: 'IT-Sicherheit',
		image: it_sicherheit,
		lecturer: {
			fore_name: 'Hacker',
			last_name: 'Man'
		}
	},
	{
		id: 6,
		name: 'IT-Recht',
		image: it_recht,
		lecturer: {
			fore_name: 'Barbara',
			last_name: 'Salesch'
		}
	}
];

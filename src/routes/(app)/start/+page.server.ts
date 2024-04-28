import { courses } from '$lib/fakeData';

export const load = async () => {
	return {
		courses: courses.slice(0, 3)
	};
};

import { formatDate } from '$lib/utils/formatDate';

export const load = async ({ locals, fetch }) => {
	const marks = await locals.client.GET('/mark/', { fetch });

	return {
		moduleGrades: Object.values(marks.data!).map((mark) => ({
			...mark,
			marks: mark.marks.map((mark) => ({
				...mark,
				announcement_date: formatDate(mark.announcement_date)
			}))
		}))
	};
};

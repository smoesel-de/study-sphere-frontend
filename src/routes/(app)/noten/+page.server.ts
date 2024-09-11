import { formatDate } from '$lib/utils/formatDate';

const formatMark = (mark: number) => mark.toString().replace('.', ',');

export const load = async ({ locals, fetch }) => {
	const marks = await locals.client.GET('/mark/', { fetch });

	return {
		moduleMarks: Object.values(marks.data!).map((mark) => ({
			...mark,
			date: formatDate(mark.date),
			marks: mark.marks.map((mark) => ({
				...mark,
				mark: formatMark(mark.mark),
				average_mark: formatMark(mark.average_mark),
				announcement_date: formatDate(mark.announcement_date)
			}))
		}))
	};
};

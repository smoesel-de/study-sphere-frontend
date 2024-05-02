import dayjs from 'dayjs';

export const formatDate = (dateInMs: number): string => {
	return dayjs(new Date(dateInMs)).format('DD.MM.YYYY');
};

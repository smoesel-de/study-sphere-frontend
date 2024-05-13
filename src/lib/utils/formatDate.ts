import dayjs from 'dayjs';

export const formatDate = (dateInSeconds: number): string => {
	return dayjs(new Date(dateInSeconds * 1000)).format('DD.MM.YYYY');
};

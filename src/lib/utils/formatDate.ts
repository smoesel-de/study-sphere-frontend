import dayjs from 'dayjs';

export const formatDate = (dateInSeconds: number, withTime: boolean = false): string => {
	return dayjs(new Date(dateInSeconds * 1000)).format('DD.MM.YYYY' + (withTime ? ' HH:mm' : ''));
};

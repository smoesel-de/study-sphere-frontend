import dayjs from 'dayjs';

export const formatSecondsToDate = (dateInSeconds: number, withTime: boolean = false): string => {
	return (
		dayjs(new Date(dateInSeconds * 1000)).format('DD.MM.YYYY' + (withTime ? ' HH:mm' : '')) +
		(withTime ? ' Uhr' : '')
	);
};

export const formatDateToSeconds = (date: Date): number => {
	return date.getTime() / 1000;
};

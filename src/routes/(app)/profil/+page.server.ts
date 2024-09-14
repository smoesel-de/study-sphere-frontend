import { getInitials } from '$lib/utils/initials.js';
import dayjs from 'dayjs';

export const load = async ({ locals, fetch }) => {
	const userInfo = await locals.client.GET('/user/', { fetch });

	return {
		...userInfo.data!,
		initials: getInitials(userInfo.data!.fore_name, userInfo.data!.last_name),
		birthdate: userInfo.data!.birthdate
			? dayjs(userInfo.data!.birthdate).format('DD.MM.YYYY')
			: null
	};
};

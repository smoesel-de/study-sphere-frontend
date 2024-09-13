import { getInitials } from '$lib/utils/initials';

export const load = async ({ locals, fetch }) => {
	const userInfo = await locals.client.GET('/user/', { fetch });
	return {
		initials: getInitials(userInfo.data!.fore_name, userInfo.data!.last_name),
		avatar: userInfo.data!.avatar_file_id,
		userRole: userInfo.data!.role
	};
};

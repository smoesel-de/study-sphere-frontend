const getInitial = (name: string) => name.charAt(0).toUpperCase();

export const load = async ({ locals, fetch }) => {
	const userInfo = await locals.client.GET('/user/info', { fetch });
	if (userInfo.data)
		return { initials: getInitial(userInfo.data.fore_name) + getInitial(userInfo.data.last_name) };
};

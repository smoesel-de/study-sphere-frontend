export const load = async ({ locals }) => {
	const userInfo = await locals.client.GET('/user/info');
	return { userInfo: userInfo.data };
};

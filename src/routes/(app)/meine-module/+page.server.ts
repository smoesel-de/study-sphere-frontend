export const load = async ({ locals }) => {
	const modules = await locals.client.GET('/module/');
	return {
		modules: modules.data!
	};
};

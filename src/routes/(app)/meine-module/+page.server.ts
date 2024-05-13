export const load = async ({ locals, fetch }) => {
	const modules = await locals.client.GET('/module/', { fetch });
	return {
		modules: modules.data!
	};
};

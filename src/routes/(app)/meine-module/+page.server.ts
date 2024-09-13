export const load = async ({ locals, fetch }) => {
	const modules = await locals.client.GET('/module/', { fetch });

	return {
		modules: modules.data!.sort((a, b) => a.name.localeCompare(b.name))
	};
};

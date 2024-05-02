export const load = async ({ params, locals }) => {
	const module = await locals.client.GET('/module/{module_id}', {
		params: {
			path: {
				module_id: parseInt(params.id)
			}
		}
	});
	return { module: module.data! };
};

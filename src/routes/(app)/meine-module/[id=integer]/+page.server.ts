import { error } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const module = await locals.client.GET('/module/{module_id}', {
		params: {
			path: {
				module_id: parseInt(params.id)
			}
		}
	});

	const posts = await locals.client.GET('/module/{module_id}/post', {
		params: {
			path: {
				module_id: parseInt(params.id)
			}
		}
	});

	if (module.response.status === 404 || posts.response.status === 404) {
		return error(404, 'Das Modul wurde nicht gefunden.');
	}
	return { module: module.data!, posts: posts.data! };
};

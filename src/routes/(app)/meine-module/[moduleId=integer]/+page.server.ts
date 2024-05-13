import { formatDate } from '$lib/utils/formatDate';
import { getInitials } from '$lib/utils/initials.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals, fetch }) => {
	const module = await locals.client.GET('/module/{module_id}', {
		params: {
			path: {
				module_id: parseInt(params.moduleId)
			}
		},
		fetch
	});

	const posts = await locals.client.GET('/module/{module_id}/post', {
		params: {
			path: {
				module_id: parseInt(params.moduleId)
			},
			fetch
		}
	});

	if (module.response.status === 404 || posts.response.status === 404) {
		return error(404, 'Das Modul wurde nicht gefunden.');
	}

	const formattedPosts = posts.data!.map((post) => {
		return {
			...post,
			publish_date: post.publish_date !== undefined ? formatDate(post.publish_date!) : undefined
		};
	});

	const lecturer = await locals.client.GET('/user/{user_id}', {
		params: {
			path: {
				user_id: module.data!.lecturer_id!
			},
			fetch
		}
	});

	const formattedLecturer = {
		...lecturer.data!,
		initials: getInitials(lecturer.data!.fore_name, lecturer.data!.last_name)
	};

	return { module: module.data!, posts: formattedPosts, lecturer: formattedLecturer };
};

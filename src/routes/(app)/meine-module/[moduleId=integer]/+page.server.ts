import { formatDateToSeconds } from '$lib/utils/formatDate';
import { formatPosts } from '$lib/utils/formatPost.js';
import { getInitials } from '$lib/utils/initials.js';
import { error } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { z } from 'zod';

const newPostSchema = z.object({
	title: z.string().min(1, 'Bitte gib ein Titel an'),
	description: z.string().min(1, 'Bitte gib den Inhalt an'),
	dueDate: z.string()
});

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

	const formattedPosts = formatPosts(posts.data!);

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

	const user = await locals.client.GET('/user/');

	const form = await superValidate(zod(newPostSchema));

	return {
		module: module.data!,
		posts: formattedPosts,
		lecturer: formattedLecturer,
		userRole: user.data!.role,
		form
	};
};

export const actions = {
	default: async ({ request, locals, params }) => {
		const form = await superValidate(request, zod(newPostSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		await locals.client.POST('/module/{module_id}/post', {
			params: {
				path: {
					module_id: Number(params.moduleId)
				}
			},
			body: {
				title: form.data.title,
				description: form.data.description,
				due_date: form.data.dueDate ? formatDateToSeconds(new Date(form.data.dueDate)) : null
			}
		});
		return message(form, 'success');
	}
};

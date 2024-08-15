import { env } from '$env/dynamic/private';
import { formatDate } from '$lib/utils/formatDate';
import { getInitials } from '$lib/utils/initials';
import { error } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	submissionFile: z.instanceof(File, { message: 'Bitte wähle eine Datei aus.' })
});

export const load = async ({ locals, params, fetch }) => {
	const post = await locals.client.GET('/module/{module_id}/post/{post_id}', {
		params: {
			path: {
				module_id: parseInt(params.moduleId),
				post_id: parseInt(params.postId)
			}
		},
		fetch
	});

	if (post.response.status === 404) {
		error(404, 'Der Beitrag wurde nicht gefunden.');
	}

	const formattedPost = {
		...post.data!,
		publish_date:
			post.data!.publish_date !== undefined ? formatDate(post.data!.publish_date!) : undefined,
		files: await Promise.all(
			post.data!.files.map(async (file) => {
				const fileInfo = await locals.client.GET('/file/{file_id}/info', {
					params: {
						path: {
							file_id: file.file_id
						},
						fetch
					}
				});
				return { ...fileInfo.data!, ...file };
			})
		),
		due_date: post.data!.due_date !== undefined ? formatDate(post.data!.due_date!, true) : undefined
	};

	const author = await locals.client.GET('/user/{user_id}', {
		params: {
			path: {
				user_id: post.data!.author_id
			},
			fetch
		}
	});

	const formattedAuthor = {
		...author.data!,

		initials: getInitials(author.data!.fore_name, author.data!.last_name)
	};

	return { post: formattedPost, author: formattedAuthor, form: await superValidate(zod(schema)) };
};

export const actions = {
	default: async ({ request, fetch, params, cookies }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const formData = new FormData();
		formData.append('file', form.data.submissionFile);

		// API-Client doesn't work with file upload so I have to do it manually
		await fetch(`${env.API_URL}/post/${params.moduleId}/submission`, {
			method: 'POST',
			headers: {
				'Session-Token': cookies.get('token') ?? ''
			},
			body: formData
		});

		return message(form, 'Die Datei wurde erfolgreich abgegeben.');
	}
};

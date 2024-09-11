import { env } from '$env/dynamic/private';
import { formatDate } from '$lib/utils/formatDate';
import { getInitials } from '$lib/utils/initials';
import { error } from '@sveltejs/kit';
import { fail, message, setError, superValidate } from 'sveltekit-superforms';
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
		due_date:
			post.data!.due_date !== undefined ? formatDate(post.data!.due_date!, true) : undefined,
		submission_is_open: post.data!.due_date
			? new Date() <= new Date(post.data!.due_date * 1000)
			: false
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
	uploadFile: async ({ request, fetch, params, cookies }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const formData = new FormData();
		formData.append('file', form.data.submissionFile);

		// API-Client doesn't work with file upload so I have to do it manually
		const response = await fetch(`${env.API_URL}/post/${params.moduleId}/submission`, {
			method: 'POST',
			headers: {
				'Session-Token': cookies.get('token') ?? ''
			},
			body: formData
		});

		if (!response.ok) {
			return setError(form, 'submissionFile', 'Es ist ein unerwarteter Fehler aufgetreten.');
		}

		return message(form, 'Die Datei wurde erfolgreich abgegeben.');
	},
	deleteFile: async ({ request, locals }) => {
		const formData = await request.formData();
		console.log(formData.get('fileId'));
		await locals.client.DELETE('/post/{post_file_id}', {
			params: {
				path: {
					post_file_id: Number(formData.get('fileId')?.toString())
				}
			}
		});
	}
};

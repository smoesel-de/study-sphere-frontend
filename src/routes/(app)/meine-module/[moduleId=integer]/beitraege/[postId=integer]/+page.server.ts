import { formatDate } from '$lib/utils/formatDate';
import { getInitials } from '$lib/utils/initials';
import { error } from '@sveltejs/kit';

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
		)
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

	return { post: formattedPost, author: formattedAuthor };
};

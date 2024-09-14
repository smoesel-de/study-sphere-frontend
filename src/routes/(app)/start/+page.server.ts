import { formatPosts } from '$lib/utils/formatPost';

export const load = async ({ locals, fetch }) => {
	const modules = await locals.client.GET('/module/', { fetch });
	const news = await locals.client.GET('/post/', { fetch });

	return {
		modules: modules.data!.slice(0, 3),
		news: formatPosts(news.data!)
	};
};

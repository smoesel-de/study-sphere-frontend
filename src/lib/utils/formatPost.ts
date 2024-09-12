import { type components } from '$lib/services/api/spec';
import { formatSecondsToDate } from './formatDate';

type Post = components['schemas']['PostData'];

export const formatPosts = (posts: Post[]) =>
	posts.sort((a, b) => (b.publish_date ?? 0) - (a.publish_date ?? 0)).map(formatPost);

export const formatPost = (post: Post) => ({
	...post,
	publish_date: post.publish_date ? formatSecondsToDate(post.publish_date) : undefined
});

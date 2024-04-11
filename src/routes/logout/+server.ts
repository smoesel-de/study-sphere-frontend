import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, cookies, locals }) => {
	const response = await locals.client.POST('/logout', { fetch });
	if (response.response.status === 200) {
		cookies.set('token', '', { path: '/' });
	}
	return redirect(302, '/');
};

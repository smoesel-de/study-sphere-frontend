import { createApiClient } from '$lib/server/api/client';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');
	event.locals.client = createApiClient(token);
	const response = await event.locals.client.GET('/user/info');
	if (response.response.status === 200) {
		if (event.url.pathname === '/') {
			return redirect(302, '/home');
		}
	} else if (event.url.pathname !== '/') {
		return redirect(302, '/');
	}
	return await resolve(event);
};

import { client } from '$lib/server/api/client';

export const handle = async ({ event, resolve }) => {
	event.locals.client = client;
	return await resolve(event);
};

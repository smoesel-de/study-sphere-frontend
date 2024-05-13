import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, params, fetch }) => {
	const fileContent = await locals.client.GET('/file/{file_id}', {
		params: {
			path: {
				file_id: parseInt(params.id)
			},
			fetch
		},
		parseAs: 'arrayBuffer'
	});

	const fileInfo = await locals.client.GET('/file/{file_id}/info', {
		params: {
			path: {
				file_id: parseInt(params.id)
			},
			fetch
		}
	});

	if (fileContent.response.status === 404 || fileInfo.response.status === 404) {
		return error(404, 'Die Datei wurde nicht gefunden.');
	}

	return new Response(fileContent.data, {
		headers: {
			'Content-Type': fileInfo.data!.mime_type,
			'Content-Disposition': `attachment; filename="${fileInfo.data!.name}"`
		}
	});
};

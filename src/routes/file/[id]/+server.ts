import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, params }) => {
	console.log('fileId: ', params.id);
	const fileContent = await locals.client.GET('/file/{file_id}', {
		params: {
			path: {
				file_id: parseInt(params.id)
			}
		},
		parseAs: 'arrayBuffer'
	});

	const fileInfo = await locals.client.GET('/file/{file_id}/info', {
		params: {
			path: {
				file_id: parseInt(params.id)
			}
		}
	});

	console.log(fileInfo.data);

	return new Response(fileContent.data, {
		headers: {
			'Content-Type': fileInfo.data!.mime_type,
			'Content-Disposition': `attachment; filename="${fileInfo.data!.name}"`
		}
	});
};

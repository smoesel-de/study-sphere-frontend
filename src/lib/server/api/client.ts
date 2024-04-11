import { env } from '$env/dynamic/private';
import createClient from 'openapi-fetch';

import type { paths } from './spec';

export const createApiClient = (token?: string) =>
	createClient<paths>({
		baseUrl: env.API_URL,
		headers: {
			'Session-Token': token
		}
	});

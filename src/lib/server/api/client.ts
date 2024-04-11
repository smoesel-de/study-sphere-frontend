import { env } from '$env/dynamic/private';
import createClient from 'openapi-fetch';

import type { paths } from './spec';

export const client = createClient<paths>({ baseUrl: env.API_URL });

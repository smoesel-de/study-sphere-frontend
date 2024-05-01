// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { createApiClient } from '$lib/services/api/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client: ReturnType<typeof createApiClient>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

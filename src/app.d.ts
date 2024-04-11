// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { client } from '$lib/server/api/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client: typeof client;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

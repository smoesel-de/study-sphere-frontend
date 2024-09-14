import { type components } from '$lib/services/api/spec';

export interface Page {
	name: string;
	link: string;
	icon: string;
	roles: components['schemas']['Role'][];
}

import { fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const loginFormSchema = z.object({
	email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse an'),
	password: z.string().min(1, 'Geben Sie ein Passwort ein')
});

export const load = async () => {
	const form = await superValidate(zod(loginFormSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(loginFormSchema));
		console.log(form.data, form.valid);
		if (!form.valid) {
			return fail(400, { form });
		}
		return message(form, 'Erfolgreich eingeloggt!');
	}
};

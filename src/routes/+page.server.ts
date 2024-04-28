import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const loginFormSchema = z.object({
	email: z.string().email('Bitte gib eine gültige E-Mail-Adresse ein'),
	password: z.string().min(1, 'Bitte gib ein Passwort ein')
});

export const load = async () => {
	const form = await superValidate(zod(loginFormSchema));
	return { form };
};

export const actions = {
	default: async ({ request, locals, fetch, cookies }) => {
		const form = await superValidate(request, zod(loginFormSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		const response = await locals.client.POST('/login', {
			body: {
				email: form.data.email,
				password: btoa(form.data.password)
			},
			parseAs: 'text',
			fetch
		});
		switch (response.response.status) {
			case 401:
				setError(form, 'email', 'Die E-Mail oder das Passwort sind nicht korrekt.');
				return setError(form, 'password', 'Die E-Mail oder das Passwort sind nicht korrekt.');
			case 200:
				cookies.set('token', response.data!, {
					path: '/',
					secure: env.NODE_ENV === 'production',
					maxAge: 60 * 60 * 24 * 7
				});
				return redirect(302, '/start');
			default:
				return { form };
		}
	}
};

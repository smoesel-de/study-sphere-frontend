<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import Meta from '$lib/components/Meta.svelte';
	import { superForm } from 'sveltekit-superforms';
	export let data;

	const { form, message, errors, enhance } = superForm(data.form, { resetForm: false });

	const a = () => {
		console.log('Hello World!');
	};
</script>

<Meta title="Anmeldung" />

<div class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
	<div class="card-side bg-base-100 shadow-xl">
		<div class="card-body grid grid-cols-2 items-center py-28 text-center">
			<div class="space-y-1">
				<img src={logo} alt="logo" class="mx-auto w-28" />
				<h1 class="text-5xl font-extrabold text-primary">Study Sphere</h1>
			</div>
			<form use:enhance method="post" class="space-y-2">
				<h2 class="text-4xl font-extrabold">Anmeldung</h2>
				<div>
					<label
						class="input input-bordered flex items-center gap-2"
						class:input-error={$errors.email || $page.status === 401}
					>
						<i class="fa-solid fa-envelope"></i>
						<input name="email" placeholder="E-Mail" bind:value={$form.email} />
					</label>
					{#if $errors.email}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.email}</span>
						</div>
					{/if}
				</div>
				<div>
					<label
						class="input input-bordered flex items-center justify-between gap-2"
						class:input-error={$errors.password || $page.status === 401}
					>
						<input
							name="password"
							placeholder="Passwort"
							type="password"
							bind:value={$form.password}
						/>
						<button on:click={a} type="button"><i class="fa-solid fa-eye"></i></button>
					</label>
					{#if $errors.password}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.password}</span>
						</div>
					{/if}
				</div>
				{#if $message}
					<div class="alert alert-error">
						<i class="fa-solid fa-triangle-exclamation"></i>
						<span>{$message}</span>
					</div>
				{/if}
				<div class="card-actions justify-center">
					<button type="submit" class="btn btn-primary">
						<i class="fa-solid fa-paper-plane"></i> Anmelden
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

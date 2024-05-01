<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import { superForm } from 'sveltekit-superforms';
	export let data;

	const { form, errors, enhance } = superForm(data.form, { resetForm: false });

	let passwordVisible = true;
	$: passwordInputType = passwordVisible ? 'password' : 'text';
	$: passwordVisiblityToggleIcon = passwordVisible ? 'fa-eye' : 'fa-eye-slash';

	const switchPasswordVisibility = () => {
		passwordVisible = !passwordVisible;
	};
</script>

<Meta title="Anmeldung" description="Melde dich bei Study Sphere an" />

<div class="flex min-h-screen flex-col justify-center bg-base-200">
	<div class="card mx-2 max-w-5xl bg-base-100 shadow-xl lg:card-side sm:mx-auto">
		<figure class="!hidden w-1/2 lg:!block">
			<div class="relative">
				<enhanced:img src="$lib/assets/login_background.jpg" alt="" />
				<div class="absolute left-0 top-0 h-full w-full bg-gray-200 bg-opacity-75"></div>
				<div
					class="absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-1"
				>
					<enhanced:img src="$lib/assets/logo.png" alt="Study Sphere Logo" class="w-28" />
					<h2 class="text-6xl font-extrabold text-primary">Study Sphere</h2>
				</div>
			</div>
		</figure>
		<div class="card-body justify-center">
			<form use:enhance method="post" class="">
				<h2 class="text-4xl font-bold">Melde Dich jetzt an!</h2>
				<div class="mb-5 mt-3 space-y-2">
					<div>
						<div class="label">
							<span class="label-text-alt" class:text-error={$errors.email}>E-Mail</span>
						</div>
						<input
							name="email"
							placeholder="Gib Deine E-Mail ein..."
							bind:value={$form.email}
							class="input input-bordered w-full"
							class:input-error={$errors.email}
						/>
						{#if $errors.email}
							<div class="label">
								<span class="label-text-alt text-error">{$errors.email}</span>
							</div>
						{/if}
					</div>
					<div>
						<div class="label">
							<span class="label-text-alt" class:text-error={$errors.password}>Passwort</span>
						</div>
						<label
							class="input input-bordered flex items-center gap-2"
							class:input-error={$errors.password}
						>
							<input
								name="password"
								placeholder="Gib Dein Passwort ein..."
								bind:value={$form.password}
								{...{ type: passwordInputType }}
								class="flex-1"
							/>
							<button on:click={switchPasswordVisibility} type="button" class="flex-none">
								<i class="fa-solid text-neutral-content {passwordVisiblityToggleIcon}"></i>
							</button>
						</label>
						{#if $errors.password}
							<div class="label">
								<span class="label-text-alt text-error">{$errors.password}</span>
							</div>
						{/if}
					</div>
				</div>
				<button type="submit" class="btn btn-primary w-full">Anmelden </button>
			</form>
		</div>
	</div>
</div>

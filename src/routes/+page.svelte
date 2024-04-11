<script>
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, message, errors, enhance } = superForm(data.form, { resetForm: false });
</script>

<svelte:head>
	<title>Stduy Sphere</title>
</svelte:head>

<div class="mx-2 sm:mx-auto sm:w-4/5 lg:w-2/6">
	<div class="card mt-24 bg-base-100 shadow-xl">
		<form use:enhance method="post">
			<div class="card-body space-y-2 text-center">
				<h2 class="text-4xl font-extrabold">Login</h2>
				<div>
					<label
						class="input input-bordered flex items-center gap-2"
						class:input-error={$errors.email}
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
						class="input input-bordered flex items-center gap-2"
						class:input-error={$errors.password}
					>
						<i class="fa-solid fa-lock"></i>
						<input
							name="password"
							placeholder="Passwort"
							type="password"
							bind:value={$form.password}
						/>
					</label>
					{#if $errors.password}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.password}</span>
						</div>
					{/if}
				</div>
				<div class="card-actions justify-center">
					<button class="btn btn-primary">
						<i class="fa-solid fa-paper-plane"></i> Anmelden
					</button>
				</div>
			</div>
		</form>
	</div>
</div>

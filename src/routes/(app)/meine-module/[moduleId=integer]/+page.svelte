<script lang="ts">
	import defaultModuleBanner from '$lib/assets/default_module_banner.webp';
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	const { form, errors, message, enhance } = superForm(data.form, { resetForm: true });

	let newPostDialog: HTMLDialogElement;
	let isSubmission = false;

	$: !isSubmission ? ($form.dueDate = '') : null;
	$: $message ? newPostDialog.close() : null;
</script>

<Meta title={data.module.name} description="Das Modul {data.module.name}" />

<div
	class="w-full rounded-2xl bg-auto bg-no-repeat py-16 md:py-28 lg:py-32"
	style="background: linear-gradient(rgba(80, 80, 80, 0.9), rgba(80, 80, 80, 0.9)),
    url({data.module.banner_file_id
		? `/file/${data.module.banner_file_id}`
		: defaultModuleBanner}); background-position: center"
>
	<Heading title={data.module.name} class="text-center text-white lg:text-5xl" />
</div>

<div class="mt-3 flex items-center">
	<Avatar initials={data.lecturer.initials} avatar={data.lecturer.avatar_file_id} />
	<span class="ml-2 text-xl font-semibold">{data.lecturer.fore_name} {data.lecturer.last_name}</span
	>
</div>

<Heading title="Beiträge" class="mt-7" />

<div class="pt-5">
	{#if data.userRole === 'lecturer'}
		<button class="btn btn-primary mb-5" on:click={() => newPostDialog.showModal()}>
			<i class="fa-solid fa-plus"> </i> Beitrag hinzufügen
		</button>
	{/if}
	<PostList posts={data.posts} />
</div>

<dialog id="newPostModal" class="modal" bind:this={newPostDialog}>
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
		</form>
		<h3 class="text-lg font-bold">Neuer Beitrag</h3>
		<div class="py-4">
			<form class="space-y-3" method="post" use:enhance>
				<div class="form-control">
					<div class="label">
						<span class="label-text" class:text-error={$errors.title}>Titel</span>
					</div>
					<input
						name="title"
						class="input input-bordered w-full"
						placeholder="Titel"
						bind:value={$form.title}
						class:input-error={$errors.title}
					/>
					{#if $errors.title}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.title}</span>
						</div>
					{/if}
				</div>
				<div class="form-control">
					<div class="label">
						<span class="label-text" class:text-error={$errors.description}>Inhalt</span>
					</div>
					<textarea
						name="description"
						class="textarea textarea-bordered"
						placeholder="Inhalt"
						rows="5"
						bind:value={$form.description}
						class:textarea-error={$errors.description}
					></textarea>
					{#if $errors.description}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.description}</span>
						</div>
					{/if}
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-2">
						<input type="checkbox" class="checkbox" bind:checked={isSubmission} />
						<span class="label-text">Abgabe erstellen</span>
					</label>
				</div>
				{#if isSubmission}
					<div class="form-control">
						<div class="label">
							<span class="label-text" class:text-error={$errors.dueDate}>Abgabedatum</span>
						</div>
						<input
							name="dueDate"
							class="input input-bordered w-full"
							type="datetime-local"
							bind:value={$form.dueDate}
							class:input-error={$errors.dueDate}
						/>
						{#if $errors.dueDate}
							<div class="label">
								<span class="label-text-alt text-error">{$errors.dueDate}</span>
							</div>
						{/if}
					</div>
				{/if}
				<button class="btn btn-primary">Beitrag erstellen</button>
			</form>
		</div>
	</div>
</dialog>

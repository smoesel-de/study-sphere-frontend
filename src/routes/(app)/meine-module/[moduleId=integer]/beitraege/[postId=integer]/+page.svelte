<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	import { enhance } from '$app/forms';
	import Dropzone from 'svelte-file-dropzone';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	$: attachments = data.post.files.filter((file) => file.file_type === 'attachment');
	$: submissions = data.post.files.filter((file) => file.file_type === 'submission');

	const {
		errors,
		message,
		submitting,
		enhance: superEnhance
	} = superForm(data.form, { resetForm: false });

	interface SelectedFile {
		name: string;
	}

	interface SelectedFiles {
		detail: {
			acceptedFiles: SelectedFile[];
		};
	}

	let selectedFile: SelectedFile | undefined;

	$: if ($message) {
		selectedFile = undefined;
		(document.querySelector('input[type=file]') as HTMLInputElement)!.value = '';
	}

	const handleFilesSelect = (selectedFiles: SelectedFiles) => {
		selectedFile = selectedFiles.detail.acceptedFiles[0];
	};
</script>

{#if data.post.title}
	<Meta
		title={data.post.title}
		description="Der Beitrag {data.post.title} vom {data.post.due_date}"
	/>
{/if}

<div class="space-y-6">
	<div class="mt-2 flex items-center">
		<Avatar initials={data.author.initials} avatar={data.author.avatar_file_id} />
		<div class="ml-2">
			<p class="text-xl font-semibold">{data.author.fore_name} {data.author.last_name}</p>
			<p>{data.post.publish_date}</p>
		</div>
	</div>

	<div class="card bg-base-100 shadow-lg">
		<div class="card-body">
			<Heading title={data.post.title ?? ''} />
			<div class="mt-1">
				{data.post.description}
			</div>
		</div>
	</div>

	{#if attachments.length > 0}
		<div class="card overflow-x-auto bg-base-100 shadow-lg">
			<div class="card-body">
				<p class="card-title text-2xl">Dateien</p>
				<table class="table">
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{#each attachments as file}
							<tr>
								<td class="space-x-1"
									><i class="fa-solid fa-file"></i>
									<span>{file.name}</span></td
								>
								<td class="text-right">
									<a href="/file/{file.file_id}">
										<i class="fa-solid fa-download"></i>
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}
	{#if data.post.due_date}
		<div class="card overflow-x-auto bg-base-100 shadow-lg">
			<form method="post" action="?/uploadFile" enctype="multipart/form-data" use:superEnhance>
				<div class="card-body">
					<p class="card-title text-2xl">Abgabe</p>
					<p>
						<i class="fa-solid fa-clock"></i>
						{data.post.due_date}
					</p>
					<div>
						{#if data.post.submission_is_open}
							<div class="badge badge-success">offen</div>
						{:else}
							<div class="badge badge-error">geschlossen</div>
						{/if}
						{#if submissions.length > 0}
							<div class="badge badge-success">abgegeben</div>
						{:else}
							<div class="badge badge-error">nicht abgegeben</div>
						{/if}
					</div>
					{#if data.post.submission_is_open}
						<Dropzone
							accept="application/pdf"
							multiple={false}
							on:drop={handleFilesSelect}
							name="submissionFile"
							disabled={$submitting}
						>
							{#if selectedFile}
								{selectedFile.name}
							{:else}
								Ziehe eine Datei hierher, oder klicke, um eine Datei auszuwählen.
							{/if}
						</Dropzone>
						{#if $submitting}
							<div class="flex items-center space-x-2 py-1">
								<span class="loading loading-spinner text-primary"></span>
								<span>Wird hochgeladen..</span>
							</div>
						{/if}
						{#if $message}
							<div class="text-success">{$message}</div>
						{/if}
						{#if $errors.submissionFile}
							<div class="text-error">{$errors.submissionFile}</div>
						{/if}
						<div class="card-actions">
							<button class="btn btn-primary" type="submit" disabled={$submitting}>Abgeben</button>
						</div>
					{/if}
					{#if submissions.length > 0}
						<p class="mt-1 text-xl">Abgegebene Dateien</p>
						<table class="table">
							<thead>
								<tr>
									<th>Name</th>
								</tr>
							</thead>
							<tbody>
								{#each submissions as file}
									<tr>
										<td class="space-x-1">
											<i class="fa-solid fa-file"></i>
											<span>{file.name}</span>
										</td>
										<td class="flex flex-row justify-end space-x-2 text-right">
											<a href="/file/{file.file_id}">
												<i class="fa-solid fa-download"></i>
											</a>
											{#if data.post.submission_is_open}
												<form use:enhance method="post" action="?/deleteFile">
													<input name="fileId" value={file.post_file_id} class="hidden" />
													<button type="submit">
														<i class="fa-solid fa-trash"></i>
													</button>
												</form>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			</form>
		</div>
	{/if}
</div>

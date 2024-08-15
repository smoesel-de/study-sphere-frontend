<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	import Dropzone from 'svelte-file-dropzone';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	$: attachments = data.post.files.filter((file) => file.file_type === 'attachment');
	$: submissions = data.post.files.filter((file) => file.file_type === 'submission');

	const { errors, message, enhance } = superForm(data.form, { resetForm: false });

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
	<Heading title={data.post.title} />
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
			{data.post.description}
		</div>
	</div>

	{#if attachments.length > 0}
		<div class="card bg-base-100 shadow-lg">
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
		<div class="card bg-base-100 shadow-lg">
			<form method="post" use:enhance enctype="multipart/form-data">
				<div class="card-body">
					<p class="card-title text-2xl">Abgabe</p>
					<p>
						<i class="fa-solid fa-clock"></i>
						{data.post.due_date}
					</p>
					<Dropzone
						accept="application/pdf"
						multiple={false}
						on:drop={handleFilesSelect}
						name="submissionFile"
					>
						{#if selectedFile}
							{selectedFile.name}
						{:else}
							Ziehe eine Datei hierher, oder klicke, um eine Datei auszuwählen.
						{/if}
					</Dropzone>
					{#if $message}
						<div class="text-success">{$message}</div>
					{/if}
					{#if $errors.submissionFile}
						<div class="text-error">{$errors.submissionFile}</div>
					{/if}
					<div class="card-actions">
						<button class="btn btn-primary" type="submit">Abgeben</button>
					</div>
					{#if submissions.length > 0}
						<p class="mt-1 text-xl">Bereits abgegeben</p>
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
										<td class="space-x-2 text-right">
											<a href="/file/{file.file_id}">
												<i class="fa-solid fa-download"></i>
											</a>
											<i class="fa-solid fa-trash"></i>
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

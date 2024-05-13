<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
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

	<div class="card bg-base-100 shadow-xl">
		<div class="card-body">
			{data.post.description}
		</div>
	</div>

	{#if data.post.files}
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<p class="card-title text-2xl">Dateien</p>
				<table class="table">
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{#each data.post.files as file}
							<tr>
								<td class="space-x-1"><i class="fa-solid fa-file"></i> <span>{file.name}</span></td>
								<td class="text-right">
									<a href="/file/{file.file_id}"><i class="fa-solid fa-download"></i></a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}
	{#if data.post.due_date}
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<p class="card-title text-2xl">Abgabe</p>
				<p><i class="fa-solid fa-clock"></i> {data.post.due_date}</p>
				<input type="file" class="file-input file-input-bordered file-input-primary mt-3 w-full" />
			</div>
		</div>
	{/if}
</div>

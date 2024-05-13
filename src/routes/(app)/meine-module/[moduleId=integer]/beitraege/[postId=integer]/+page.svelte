<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let data;
</script>

{#if data.post.title}
	<Heading title={data.post.title} />
{/if}

<div class="space-y-5">
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
</div>

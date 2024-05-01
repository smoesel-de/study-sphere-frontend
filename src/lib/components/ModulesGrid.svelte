<script lang="ts">
	import { type paths } from '$lib/services/api/spec';

	type Modules = paths['/module/']['get']['responses']['200']['content']['application/json'];

	export let modules: Modules;
	export let isStartPage: boolean = false;
</script>

<div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
	{#each modules as course}
		<a class="card bg-base-100 shadow-xl" href="/meine-module/{course.id}">
			<figure>
				<img
					src="/file/{course.banner_file_id}"
					alt={course.name}
					class="h-40 w-full object-cover"
				/>
			</figure>
			<div class="card-body">
				<h2 class="text-2xl font-bold">{course.name}</h2>
				<p>Matthias Maßmann</p>
			</div>
		</a>
	{/each}
	{#if isStartPage}
		<div class="flex items-center justify-center">
			<a href="/meine-module" class="btn btn-circle btn-primary h-28 w-28 text-5xl">
				<i class="fa-solid fa-chevron-right"></i>
			</a>
		</div>
	{/if}
</div>

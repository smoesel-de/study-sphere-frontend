<script>
	import defaultModuleBanner from '$lib/assets/default_module_banner.webp';
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
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
	<Avatar initials={'MM'} />
	<span class="ml-2 text-xl font-semibold">Matthias Maßmann</span>
</div>

<Heading title="Beiträge" class="mt-7" />

<div class="mt-3">
	{#each data.posts as post}
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">{post.title}</h2>
				<p>{post.publish_date}</p>
			</div>
		</div>
	{/each}
</div>

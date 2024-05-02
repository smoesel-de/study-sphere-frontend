<script>
	import defaultModuleBanner from '$lib/assets/default_module_banner.webp';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
</script>

<Meta title="Modul" description="Modul" />

<div
	class="w-full rounded-badge bg-auto bg-no-repeat py-16 md:py-28 lg:py-32"
	style="background: linear-gradient(rgba(80, 80, 80, 0.9), rgba(80, 80, 80, 0.9)),
    url({data.module.banner_file_id
		? `/file/${data.module.banner_file_id}`
		: defaultModuleBanner}); background-position: center"
>
	<Heading title={data.module.name} class="text-center text-white lg:text-5xl" />
</div>

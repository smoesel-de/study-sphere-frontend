<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import ModulesGrid from '$lib/components/ModulesGrid.svelte';
	import PostList from '$lib/components/PostList.svelte';

	export let data;
</script>

<Meta title="Startseite" description="Die Startseite" />

<Heading title="Das Neueste" />
<div class="my-3">
	<PostList posts={data.news} />
</div>

<Heading title="Meine Module" />

<ModulesGrid modules={data.modules} isStartPage={true} />

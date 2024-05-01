<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import ModulesGrid from '$lib/components/ModulesGrid.svelte';

	export let data;
</script>

<Meta title="Startseite" description="Die Startseite" />

<Heading title="Das Neueste" />
<div class="mb-20 mt-4">Folgt...</div>

<Heading title="Meine Module" />

<ModulesGrid modules={data.modules} isStartPage={true} />

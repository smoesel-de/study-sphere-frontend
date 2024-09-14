<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import ModulesGrid from '$lib/components/ModulesGrid.svelte';

	export let data;
</script>

<Meta title="Meine Module" description="Eine Übersicht über alle Module, die Du besuchst" />

<Heading title="Meine Module" />

{#if data.modules !== undefined}
	<ModulesGrid modules={data.modules} />
{/if}

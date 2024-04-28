<script lang="ts">
	import CourseGrid from '$lib/components/CourseGrid.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
</script>

<Meta title="Startseite" description="Die Startseite" />

<Heading title="Das Neueste" />
<div class="mb-20 mt-4">Folgt...</div>

<Heading title="Meine Kurse" />

<CourseGrid courses={data.courses} isStartPage={true} />

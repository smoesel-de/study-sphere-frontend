<script lang="ts">
	import CourseGrid from '$lib/components/CourseGrid.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;

	console.log(data.courses);
</script>

<Meta title="Meine Kurse" description="Eine Übersicht über alle Kurse, die Du besuchst" />

<Heading title="Meine Kurse" />

<CourseGrid courses={data.courses} />

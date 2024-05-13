<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	// @ts-ignore
	import Calendar from '@event-calendar/core';
	// @ts-ignore
	import TimeGrid from '@event-calendar/time-grid';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		locale: 'de',
		firstDay: 1,
		events: [
			// your list of events
		]
	};
</script>

<Meta title="Stundenplan" description="Dein Stundenplan" />

<Heading title="Stundenplan" />
<div class="card mt-4 bg-white shadow-xl">
	<div class="card-body">
		<Calendar {plugins} {options} />
	</div>
</div>

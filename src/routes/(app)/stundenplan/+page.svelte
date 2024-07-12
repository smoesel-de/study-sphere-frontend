<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	// @ts-ignore
	import Calendar from '@event-calendar/core';
	// @ts-ignore
	import TimeGrid from '@event-calendar/time-grid';

	export let data;

	const plugins = [TimeGrid];
	const options = {
		view: 'timeGridWeek',
		locale: 'de',
		firstDay: 1,
		hiddenDays: [0, 6],
		events: data.lectures,
		height: '70vh',
		scrollTime: '09:00:00',
		allDaySlot: false
	};
</script>

<Meta title="Stundenplan" description="Dein Stundenplan" />

<Heading title="Stundenplan" />
<div class="mt-4 bg-white shadow-xl lg:card">
	<div class="lg:card-body">
		<Calendar {plugins} {options} />
	</div>
</div>

<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';
	// @ts-ignore
	import Calendar from '@event-calendar/core';
	// @ts-ignore
	import TimeGrid from '@event-calendar/time-grid';
	// @ts-ignore
	import List from '@event-calendar/list';

	export let data;

	const plugins = [TimeGrid, List];

	$: innerWidth = 0;

	$: options = {
		view: innerWidth < 800 ? 'listWeek' : 'timeGridWeek',
		locale: 'de',
		firstDay: 1,
		hiddenDays: [0, 6],
		events: data.lectures,
		height: '70vh',
		scrollTime: '08:00:00',
		allDaySlot: false,
		buttonText: {
			today: 'Heute'
		},
		noEventsContent: 'Keine Vorlesungen'
	};
</script>

<svelte:window bind:innerWidth />

<Meta title="Stundenplan" description="Dein Stundenplan" />

<Heading title="Stundenplan" />
<div class="card !-mx-1 mt-4 bg-white shadow-lg sm:!-mx-0">
	<div class="card-body !-mx-4 sm:!-mx-0">
		<Calendar {plugins} {options} />
	</div>
</div>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;

	const drawerId = 'drawer';
</script>

<div class="bg-base-200">
	<div class="drawer lg:drawer-open">
		<input id={drawerId} type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<Navbar initials={data.initials} {drawerId} />
			<slot />
		</div>
		<Sidebar {drawerId} />
	</div>
</div>

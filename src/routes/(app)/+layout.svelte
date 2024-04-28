<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;

	const drawerId = 'drawer';
</script>

<div class="min-h-screen bg-base-200">
	<div class="drawer lg:drawer-open">
		<input id={drawerId} type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<Navbar initials={data.initials} {drawerId} />
			<div class="p-4">
				<slot />
			</div>
		</div>
		<Sidebar {drawerId} />
	</div>
</div>

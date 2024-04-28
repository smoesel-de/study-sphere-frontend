<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import { pages } from '$lib/constants';

	export let drawerId: string;

	$: activeUrl = $page.url.pathname;
</script>

<div class="drawer-side">
	<label for={drawerId} aria-label="close sidebar" class="drawer-overlay"></label>
	<ul class="menu h-full w-80 bg-base-100 text-base-content">
		<li class="mb-3">
			<a class="text-2xl font-bold text-primary" href="/">
				<img src={logo} class="h-12 w-12" alt="logo" />
				Study Sphere
			</a>
		</li>
		{#each pages as page}
			<li>
				<a href={page.link} class="text-lg" class:text-primary={activeUrl.startsWith(page.link)}>
					<i class="fa-solid {page.icon}"></i>
					{page.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

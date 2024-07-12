<script lang="ts">
	import { page } from '$app/stores';
	import { pages } from '$lib/constants';

	export let drawerId: string;

	$: activeUrl = $page.url.pathname;
</script>

<div class="drawer-side z-20">
	<label for={drawerId} aria-label="close sidebar" class="drawer-overlay"></label>
	<ul class="menu h-full w-80 bg-base-100 text-base-content">
		<li class="mb-3">
			<a class="text-2xl font-bold text-primary" href="/">
				<enhanced:img src="$lib/assets/logo.png" class="h-12 w-12" alt="logo" />
				Study Sphere
			</a>
		</li>
		{#each pages as page}
			<li>
				<a
					href={page.link}
					class="text-lg"
					class:text-primary={activeUrl.startsWith(page.link)}
					on:click={() => {
						document.getElementById(drawerId)?.click();
					}}
				>
					<i class="fa-solid {page.icon}"></i>
					{page.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

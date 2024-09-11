<script lang="ts">
	import { page } from '$app/stores';
	import { pages } from '$lib/constants';
	import { type components } from '$lib/services/api/spec';

	export let drawerId: string;
	export let userRole: components['schemas']['Role'];

	$: activeUrl = $page.url.pathname;
</script>

<div class="drawer-side z-20">
	<label for={drawerId} aria-label="close sidebar" class="drawer-overlay"></label>
	<div class="h-full w-80 bg-base-100">
		<ul class="menu text-base-content">
			<li class="mb-3">
				<a class="text-2xl font-bold text-primary" href="/">
					<enhanced:img src="$lib/assets/logo.png" class="h-12 w-12" alt="logo" />
					Study Sphere
				</a>
			</li>
			{#each pages as page}
				{#if page.roles.includes(userRole)}
					<li>
						<a
							href={page.link}
							class="text-lg"
							class:text-primary={activeUrl.startsWith(page.link)}
							on:click={() => {
								document.getElementById(drawerId)?.click();
							}}
						>
							<i class="fa-solid fa-{page.icon}"></i>
							{page.name}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="absolute bottom-2 left-6 flex flex-row items-center gap-2 text-lg font-bold">
			<span>Made by</span>
			<enhanced:img src="$lib/assets/smoesel.png" class="h-12 w-12" alt="SMOESEL" />
		</div>
	</div>
</div>

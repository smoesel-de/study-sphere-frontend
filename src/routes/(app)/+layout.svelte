<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import type { Page } from '$lib/models/page';

	export let data;

	const pages: Page[] = [
		{
			name: 'Startseite',
			link: '/home',
			icon: 'fa-home'
		},
		{
			name: 'Meine Kurse',
			link: '/my-courses',
			icon: 'fa-school'
		},
		{
			name: 'Stundenplan',
			link: '/timetable',
			icon: 'fa-calendar-days'
		}
	];
	$: activeUrl = $page.url.pathname;
</script>

<div class="bg-base-200">
	<div class="drawer lg:drawer-open">
		<input id="drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<nav class="navbar bg-base-100">
				<div class="flex w-full">
					<div class="flex-1 lg:invisible">
						<label for="drawer" aria-label="open sidebar" class="btn btn-square btn-ghost text-xl">
							<i class="fa-solid fa-bars"></i>
						</label>
					</div>

					<div class="dropdown dropdown-end flex-none">
						<div tabindex="0" role="button" class="avatar placeholder btn btn-circle btn-ghost">
							<div class="w-10 rounded-full bg-neutral text-neutral-content">
								<span class="text-lg">{data.initials}</span>
							</div>
						</div>
						<ul
							class="menu dropdown-content menu-sm z-[1] mt-3 w-36 rounded-box bg-base-100 p-2 shadow"
						>
							<li>
								<a href="/"><i class="fa-solid fa-user-circle"></i> Profil</a>
							</li>
							<li><a href="/logout"><i class="fa-solid fa-right-from-bracket"></i> Abmelden</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<!-- Page content here -->
			<slot />
		</div>
		<div class="drawer-side">
			<label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu h-full w-80 bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				<li class="mb-3">
					<a class="text-2xl font-bold text-primary" href="/">
						<img src={logo} class="h-12 w-12" alt="logo" />
						Study Sphere
					</a>
				</li>
				{#each pages as page}
					<li>
						<a
							href={page.link}
							class="text-lg"
							class:text-primary={activeUrl.startsWith(page.link)}
						>
							<i class="fa-solid {page.icon}"></i>
							{page.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

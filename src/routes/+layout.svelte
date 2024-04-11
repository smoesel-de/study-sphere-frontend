<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import '../app.css';
</script>

<nav class="navbar bg-primary">
	<div class="container mx-auto flex justify-between">
		<a class="btn btn-ghost text-2xl text-neutral-content" href="/">
			<img src={logo} class="h-12 w-12" alt="logo" />Study Sphere</a
		>
		{#if $page.url.pathname !== '/'}
			<a class="btn btn-square btn-ghost text-center text-xl text-white" href="/logout">
				<i class="fa-solid fa-right-from-bracket"></i>
			</a>
		{/if}
	</div>
</nav>

<slot />

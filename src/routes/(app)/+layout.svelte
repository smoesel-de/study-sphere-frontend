<script>
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
</script>

<nav class="navbar bg-primary">
	<div class="container mx-auto flex justify-between">
		<a class="btn btn-ghost text-2xl text-white" href="/">
			<img src={logo} class="h-12 w-12" alt="logo" />Study Sphere</a
		>
		{#if $page.url.pathname !== '/'}
			<a class="btn btn-square btn-ghost text-center text-2xl text-white" href="/logout">
				<i class="fa-solid fa-right-from-bracket"></i>
			</a>
		{/if}
	</div>
</nav>

<div class="mx-2 sm:mx-auto sm:w-4/5 lg:w-2/6">
	<slot />
</div>

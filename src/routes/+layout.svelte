<script>
	import logo from '$lib/assets/logo.png';
	import '../app.css';
</script>

<nav class="navbar bg-primary">
	<div class="container mx-auto">
		<a class="btn btn-ghost text-neutral-content text-2xl" href="/">
			<img src={logo} class="h-12 w-12" alt="logo" />Study Sphere</a
		>
	</div>
</nav>

<slot />

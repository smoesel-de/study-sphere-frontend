<script>
	import logo from '$lib/assets/logo.png';

	export let data;
</script>

<div class="min-h-screen bg-base-200">
	<nav class="navbar bg-base-100">
		<div class="flex w-full justify-between">
			<a class="btn btn-ghost text-2xl font-bold text-primary" href="/">
				<img src={logo} class="h-12 w-12" alt="logo" />
				Study Sphere
			</a>
			<div class="dropdown dropdown-end">
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
	<slot />
</div>

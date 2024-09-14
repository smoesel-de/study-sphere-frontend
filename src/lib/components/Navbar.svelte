<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	export let initials: string | undefined;
	export let avatar: number | null | undefined;
	export let drawerId: string;
</script>

<nav class="tart-0 navbar sticky top-0 z-20 bg-base-100">
	<div class="flex w-full">
		<div class="flex-1 lg:invisible">
			<label for={drawerId} aria-label="open sidebar" class="btn btn-square btn-ghost text-xl">
				<i class="fa-solid fa-bars"></i>
			</label>
		</div>
		<div class="dropdown dropdown-end flex-none">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<Avatar {initials} {avatar} />
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-36 rounded-box bg-base-100 p-2 shadow">
				<li>
					<a href="/profil"><i class="fa-solid fa-user-circle"></i> Profil</a>
				</li>
				<li><a href="/logout"><i class="fa-solid fa-right-from-bracket"></i> Abmelden</a></li>
			</ul>
		</div>
	</div>
</nav>

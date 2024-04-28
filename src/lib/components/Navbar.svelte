<script lang="ts">
	export let initials: string | undefined;
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
			<div tabindex="0" role="button" class="avatar placeholder btn btn-circle btn-ghost">
				<div class="w-10 rounded-full bg-neutral text-neutral-content">
					<span class="text-lg">{initials}</span>
				</div>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-36 rounded-box bg-base-100 p-2 shadow">
				<li>
					<a href="/"><i class="fa-solid fa-user-circle"></i> Profil</a>
				</li>
				<li><a href="/logout"><i class="fa-solid fa-right-from-bracket"></i> Abmelden</a></li>
			</ul>
		</div>
	</div>
</nav>

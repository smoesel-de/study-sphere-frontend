<script lang="ts">
	export let initials: string | undefined = '';
	export let avatar: number | null | undefined = null;
	export let large = false;
</script>

<div class="avatar placeholder">
	<div
		class="avatar placeholder rounded-full bg-neutral text-neutral-content"
		class:w-12={!large}
		class:w-28={large}
	>
		{#if avatar !== undefined && avatar !== null}
			<img src="/file/{avatar}" alt="Avatar" class="rounded-full" />
		{:else}
			<span class="text-xl">{initials}</span>
		{/if}
	</div>
</div>

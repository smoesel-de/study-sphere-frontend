<script lang="ts">
	export let initials: string | undefined = '';
	export let avatar: number | null | undefined = null;
</script>

<div class="avatar placeholder">
	<div class="avatar placeholder w-12 rounded-full bg-neutral text-neutral-content">
		{#if avatar !== undefined && avatar !== null}
			<img src="/file/{avatar}" alt="Avatar" class="rounded-full" />
		{:else}
			<span class="text-xl">{initials}</span>
		{/if}
	</div>
</div>

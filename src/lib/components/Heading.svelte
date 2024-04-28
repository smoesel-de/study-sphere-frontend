<script lang="ts">
	export let title: string;

	let className = '';

	export { className as class };
</script>

<h1 class="text-4xl font-extrabold {className}">{title}</h1>

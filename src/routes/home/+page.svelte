<script lang="ts">
	export let data;
</script>

<div class="card mt-24 bg-base-100 shadow-xl">
	<div class="card-body space-y-2">
		<h2 class="text-4xl font-extrabold">Informationen</h2>
		<p>Vorname: {data.userInfo?.fore_name}</p>
		<p>Nachname: {data.userInfo?.last_name}</p>
		<p>E-Mail: {data.userInfo?.email}</p>
	</div>
</div>

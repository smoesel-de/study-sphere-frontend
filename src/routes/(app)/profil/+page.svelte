<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let data;
</script>

<Meta title="Profil" description="Dein Profil" />

<div class="flex items-center gap-5">
	<Avatar avatar={data.avatar_file_id} initials={data.initials} large={true} />
	<div class="flex flex-col gap-2">
		<Heading title="{data.fore_name} {data.last_name}" />
		<a class="link-hover link link-primary" href="/profil">Bild ändern</a>
	</div>
</div>
<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
	<div class="card bg-base-100 shadow-lg">
		<div class="card-body">
			<h2 class="text-2xl font-bold">Profil Informationen</h2>
			<table>
				<tbody>
					<tr>
						<td class="w-36"><b>Vorname</b></td>
						<td>{data.fore_name}</td>
					</tr>
					<tr>
						<td class="w-36"><b>Nachname</b></td>
						<td>{data.last_name}</td>
					</tr>
					<tr>
						<td class="w-36"><b>E-Mail</b></td>
						<td>{data.email}</td>
					</tr>
					{#if data.telephone}
						<tr>
							<td class="w-36"><b>Telefon</b></td>
							<td>{data.telephone}</td>
						</tr>
					{/if}
					{#if data.birthdate}
						<tr>
							<td class="w-36"><b>Geburtstag</b></td>
							<td>{data.birthdate}</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	</div>
	<div class="card bg-base-100 shadow-lg">
		<div class="card-body">
			<h2 class="text-2xl font-bold">Adresse</h2>
			<table>
				<tbody>
					<tr>
						<td class="w-36"><b>Straße</b></td>
						<td>{data.street}</td>
					</tr>
					<tr>
						<td class="w-36"><b>Postleitzahl</b></td>
						<td>{data.zip}</td>
					</tr>
					<tr>
						<td class="w-36"><b>Stadt</b></td>
						<td>{data.city}</td>
					</tr>
					<tr>
						<td class="w-36"><b>Land</b></td>
						<td>{data.country}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

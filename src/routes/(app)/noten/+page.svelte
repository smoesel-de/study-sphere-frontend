<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	export let data;
</script>

<Heading title="Noten" />

<div class="mt-4 space-y-4">
	{#each data.moduleMarks as moduleMark}
		<div class="collapse collapse-arrow mt-4 border bg-white">
			<input type="checkbox" />
			<div class="collapse-title flex items-center justify-between">
				<span class="text-xl font-medium">{moduleMark.module_name}</span>
				<div class="badge badge-primary flex-shrink-0">{moduleMark.credit_points} Credits</div>
			</div>
			<div class="collapse-content overflow-x-auto overflow-y-hidden">
				<table class="table">
					<thead>
						<tr>
							<th>Datum</th>
							<th>Bekanntgabe</th>
							<th>Note</th>
							<th>Punkte</th>
							<th>Durchschnitt</th>
							<th>Kommentar</th>
						</tr>
					</thead>
					<tbody>
						{#each moduleMark.marks as mark}
							<tr>
								<td>
									{moduleMark.date}
								</td>
								<td>
									{mark.announcement_date}
								</td>
								<td>
									{mark.mark}
								</td>
								<td>
									{mark.points}
								</td>
								<td> {mark.average_mark} </td>
								<td>
									{mark.comment}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</div>

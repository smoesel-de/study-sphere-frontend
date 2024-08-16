<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	export let data;
</script>

<Heading title="Noten" />

<div class="mt-4 space-y-4">
	{#each data.moduleGrades as moduleGrad}
		<div class="collapse collapse-arrow mt-4 border bg-white">
			<input type="checkbox" />
			<div class="collapse-title flex items-center justify-between">
				<span class="text-xl font-medium">{moduleGrad.module.name}</span>
				<div class="badge badge-primary flex-shrink-0">{moduleGrad.module.credits} Credits</div>
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
						{#each moduleGrad.exams as exam}
							<tr>
								<td>
									{exam.date}
								</td>
								<td>
									{exam.announcement_date}
								</td>
								<td>
									{exam.grade}
								</td>
								<td>
									{exam.points}
								</td>
								<td>
									{exam.average}
								</td>
								<td>
									{exam.comment}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</div>

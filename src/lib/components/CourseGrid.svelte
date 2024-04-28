<script lang="ts">
	import type { Course } from '$lib/fakeData';

	export let courses: Course[];
</script>

<div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
	{#each courses as course}
		<a class="card bg-base-100 shadow-xl" href="/">
			<figure>
				<img src={course.image} alt={course.name} class="h-40 w-full object-cover" />
			</figure>
			<div class="card-body">
				<h2 class="text-2xl font-bold">{course.name}</h2>
				<p>{course.lecturer.fore_name} {course.lecturer.last_name}</p>
			</div>
		</a>
	{/each}
</div>

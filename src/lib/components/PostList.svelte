<script lang="ts">
	import { formatPosts } from '$lib/utils/formatPost';

	type Posts = ReturnType<typeof formatPosts>;

	export let posts: Posts;
</script>

{#if posts.length !== 0}
	<div class="space-y-3">
		{#each posts as post}
			<a
				href={post.module_id
					? `/meine-module/${post.module_id}/beitraege/${post.id}`
					: `/beitraege/${post.id}`}
				class="card bg-base-100 shadow-lg"
			>
				<div class="card-body">
					<h2 class="card-title">{post.title}</h2>
					<p><i class="fa-solid fa-calendar-day"></i> {post.publish_date}</p>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p>Noch Keine Beiträge vorhanden</p>
{/if}

<script lang="ts">
	import type { PageServerData } from './$types';

	const { data }: { data: PageServerData } = $props();
</script>

<div class="container min-h-screen py-8">
	<a href="/" class="text-sm text-white">+- Back</a>
	<h1 class="mt-4 text-4xl font-bold">{data.title}</h1>
</div>

<script lang="ts">
	import { cn } from '$lib/utils';

	const { title, class: className }: { title: string; class?: string } = $props();
</script>

<h2 class={cn('text-5xl font-bold lowercase text-shadow-md sm:text-7xl', className)}>{title}</h2>

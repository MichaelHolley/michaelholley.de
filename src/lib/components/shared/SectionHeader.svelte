<script lang="ts">
	import { cn } from '$lib/utils';

	const { title, class: className }: { title: string; class: string } = $props();
</script>

<h1 class={cn('text-5xl font-bold lowercase sm:text-7xl', className)}>{title}</h1>

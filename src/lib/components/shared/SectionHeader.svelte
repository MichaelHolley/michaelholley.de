<script lang="ts">
	import { cn } from '$lib/utils';

	const { title, class: className } = $props<{ title: string; class: string }>();
</script>

<h1 class={cn('text-5xl font-bold lowercase sm:text-7xl', className)}>{title}</h1>

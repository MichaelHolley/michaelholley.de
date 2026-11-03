<script lang="ts">
	import { cn } from '#lib/utils.js';

	const { value, class: className }: { value: string; class?: string } = $props();
</script>

<span class={cn('bg-paper-surface text-small px-2 py-0.5 text-black', className)}>
	{value}
</span>

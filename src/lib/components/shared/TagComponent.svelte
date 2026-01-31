<script lang="ts">
	import { cn } from '$lib/utils';

	const { value, class: className }: { value: string; class?: string } = $props();
</script>

<span class={cn('border border-neutral-200 px-1.5 py-0.5 text-sm text-neutral-500', className)}>
	{value}
</span>

<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('grid w-full auto-rows-[20rem] grid-cols-3 gap-4', $$props.class)}>
	<slot />
</div>

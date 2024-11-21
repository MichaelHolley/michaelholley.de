<script lang="ts">
	import { cn } from '$lib/utils';

	export let title: string;
</script>

<h1 class={cn('text-5xl sm:text-7xl font-bold lowercase', $$props.class)}>{title}</h1>

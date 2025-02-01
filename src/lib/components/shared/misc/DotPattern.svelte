<script lang="ts">
	import { cn } from '$lib/utils';

	const {
		width = 16,
		height = 16,
		x = 0,
		y = 0,
		cx = 1,
		cy = 1,
		cr = 1,
		fillColor = 'rgb(163 163 163 / 0.8)',
		class: className
	}: {
		width?: string | number;
		height?: string | number;
		x?: number;
		y?: number;
		cx?: number;
		cy?: number;
		cr?: number;
		fillColor?: string;
		class?: string;
	} = $props();

	let id = crypto.randomUUID().toString().slice(0, 10); // generating a unique ID for Components
</script>

<svg
	aria-hidden="true"
	class={cn('pointer-events-none absolute inset-0 h-full w-full ', className)}
	fill={fillColor}
>
	<defs>
		<pattern
			{id}
			{width}
			{height}
			patternUnits="userSpaceOnUse"
			patternContentUnits="userSpaceOnUse"
			{x}
			{y}
		>
			<circle id="pattern-circle" {cx} {cy} r={cr} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
</svg>

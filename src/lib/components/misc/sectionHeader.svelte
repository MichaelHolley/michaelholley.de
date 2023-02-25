<script lang="ts">
	type position = 'start' | 'center' | 'end';

	export let title: string;
	export let position: position = 'start';
</script>

<h1 class={`text-${position} text-7xl font-bold lowercase`}>{title}</h1>

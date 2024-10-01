<script lang="ts">
	export let period: string;
	export let title: string;
	export let workplace: string;
</script>

<div class="mx-auto py-7 pl-8 border-l-4 relative">
	<span class="block">{workplace}</span>
	<div class="relative">
		<div class="flex flex-col md:flex-row justify-between gap-1 md:gap-3">
			<h4 class="text-2xl font-bold">{title}</h4>
			<span class="block text-tertiary text-base md:text-lg">{period}</span>
		</div>
		<div class="h-6 w-6 bg-black rounded-full absolute top-[50%] -translate-y-[50%] -left-[46px]" />
	</div>
	<span class="block mt-2 text-justify">
		<slot />
	</span>
</div>

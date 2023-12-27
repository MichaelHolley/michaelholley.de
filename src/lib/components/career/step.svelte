<script lang="ts">
	export let period: string;
	export let title: string;
	export let workplace: string;
</script>

<div class="w-10/12 lg:w-2/5 mx-auto py-6 pl-8 border-l-4 relative">
	<span class="block pl-5 text-xl">{period}</span>
	<div class="relative">
		<h4 class="text-2xl font-bold">{title}</h4>
		<div class="h-6 w-6 bg-black rounded-full absolute top-[50%] -translate-y-[50%] -left-[46px]" />
	</div>
	<span class="block">{workplace}</span>
	<span class="block mt-2 text-justify">
		<slot />
	</span>
</div>

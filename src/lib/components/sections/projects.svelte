<script lang="ts">
	import SectionHeader from '../misc/sectionHeader.svelte';

	interface Project {
		title: string;
		github?: string;
		url?: string;
	}

	const projects: Project[] = [
		{ title: 'Wissenschaftspreis' },
		{ title: 'michaelholley.de' },
		{ title: 'OnTrack' },
		{ title: 'MyPoll' },
		{ title: 'PaymentsDashboard' }
	];
</script>

<section id="projekte" class="bg-mhWhite text-mhBlack py-6 h-[600px]">
	<a
		class="ml-3 hover:scale-110 transition-all hover:text-mhPrimary"
		href="https://github.com/MichaelHolley"
		target="_blank"
		rel="noreferrer"
	>
		<SectionHeader title="Projekte" />
	</a>
	<div class="mt-6">
		<ul class="break-words">
			{#each projects as p, i}
				<li class="mb-1">
					<h4 class="text-4xl font-bold uppercase hover:text-mhSecondary hover:cursor-pointer">
						{p.title}
					</h4>
				</li>
			{/each}
		</ul>
	</div>
</section>

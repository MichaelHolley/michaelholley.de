<script lang="ts">
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';

	const area = (title: string, icons: string[], delay: string, body: Snippet) => ({
		title,
		icons,
		delay,
		body
	});
</script>

<section id="dev" class="relative overflow-hidden bg-black text-white">
	<SectionHeader title="Dev" class="hidden pb-8 text-center" />
	<div class="container flex flex-col py-6 md:py-10">
		{#each [area('Backend', ['logos:dotnet', 'devicon:java'], 'motion-delay-0', backend), area('Frontend', ['devicon:vuejs', 'devicon:svelte', 'devicon:tailwindcss'], 'motion-delay-100', frontend), area('DevOps', ['devicon:docker', 'devicon:gitlab', 'fa:github'], 'motion-delay-200', devops)] as c (c.title)}
			<article
				class="group motion-translate-y-in-50 motion-blur-in-md relative grid grid-cols-1 gap-x-8 gap-y-6 border-t border-white/10 py-7 first:border-t-0 md:py-9 lg:grid-cols-12 {c.delay}"
			>
				<div class="lg:col-span-5 xl:col-span-4">
					<h3 class="text-3xl font-bold text-white md:text-4xl">{c.title}</h3>
					<div class="mt-3 flex flex-row items-center gap-2.5">
						{#each c.icons as icon, i (i)}
							<Icon
								{icon}
								class="size-6 opacity-60 saturate-0 transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100 hover:-translate-y-0.5 hover:rotate-6"
								aria-hidden="true"
							/>
						{/each}
					</div>
				</div>

				<div class="text-lg leading-8 text-neutral-300 lg:col-span-7 xl:col-span-8">
					{@render c.body()}
				</div>
			</article>
		{/each}
	</div>
	<DotPattern
		width={20}
		height={20}
		cx={10}
		cy={10}
		cr={1}
		class="mask-[linear-gradient(to_top_right,white,transparent,transparent)]"
	/>
</section>

{#snippet backend()}
	<p>
		Am Backend reizt mich die Logik hinter der Anwendung: Datenmodellierung, REST-APIs und eine
		Architektur, aus der <span class="text-secondary"
			>leistungsstarke und skalierbare Anwendungen</span
		> entstehen. Am liebsten arbeite ich mich in komplexe Probleme ein und entwickle daraus effiziente,
		sauber strukturierte Lösungen.
	</p>
{/snippet}

{#snippet frontend()}
	<p>
		Im Frontend arbeite ich gern mit den
		<span class="text-secondary">neuesten Technologien und Frameworks</span> und lege Wert auf
		performante, skalierbare Web-Anwendungen. Reaktive UIs, eine saubere Komponenten-Architektur und
		durchdachte UX geben mir den Raum, <span class="text-secondary">Kreativität</span> und technische
		Präzision zu verbinden.
	</p>
{/snippet}

{#snippet devops()}
	<p>
		DevOps verbindet für mich Entwicklung und Betrieb. Ich
		<span class="text-secondary">automatisiere</span> Prozesse über CI/CD-Pipelines und
		Containerisierung und verzahne die Zusammenarbeit von Entwicklung und Operations. So lassen sich
		Releases <span class="text-secondary">schneller und zuverlässiger</span> ausliefern.
	</p>
{/snippet}

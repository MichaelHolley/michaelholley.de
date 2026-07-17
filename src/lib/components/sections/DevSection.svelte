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

	let openTitles = $state<Record<string, boolean>>({});
	const toggle = (title: string) => (openTitles[title] = !openTitles[title]);
</script>

<section id="dev" class="relative overflow-hidden bg-black text-white">
	<SectionHeader title="Dev" class="hidden pb-8 text-center" />
	<div class="container py-6 md:py-10">
		<div
			class="relative z-10 rounded-3xl border border-white/10 bg-black/50 px-6 shadow-2xl backdrop-blur-md sm:px-10"
		>
			<ul class="flex flex-col divide-y divide-white/10">
				{#each [area('Backend', ['logos:dotnet', 'devicon:java'], 'motion-delay-0', backend), area('Frontend', ['devicon:vuejs', 'devicon:svelte', 'devicon:tailwindcss'], 'motion-delay-100', frontend), area('DevOps', ['devicon:docker', 'devicon:gitlab', 'fa:github'], 'motion-delay-200', devops)] as c, i (c.title)}
					<li
						class="group motion-translate-y-in-50 motion-blur-in-md relative overflow-hidden {c.delay}"
					>
						<button
							type="button"
							class="flex w-full cursor-pointer flex-col items-start justify-between gap-2 py-8 text-left transition-colors duration-300 md:flex-row md:items-center md:py-10"
							aria-expanded={!!openTitles[c.title]}
							onclick={() => toggle(c.title)}
						>
							<div class="flex items-baseline gap-4 md:gap-6">
								<span class="font-mono text-sm text-neutral-600"
									>{String(i + 1).padStart(2, '0')}</span
								>
								<h3
									class="group-hover:text-secondary text-5xl font-black tracking-tighter uppercase transition-colors duration-300 sm:text-7xl md:text-8xl {openTitles[
										c.title
									]
										? 'text-secondary'
										: ''}"
								>
									{c.title}
								</h3>
							</div>
							<div class="flex items-center gap-3 pl-10 md:pl-0">
								{#each c.icons as icon, j (j)}
									<Icon
										{icon}
										class="size-6 transition-colors duration-300 group-hover:text-white {openTitles[
											c.title
										]
											? 'text-white'
											: 'text-neutral-600'}"
										aria-hidden="true"
									/>
								{/each}
								<Icon
									icon="ic:baseline-expand-more"
									class="size-5 text-neutral-600 transition-transform duration-300 {openTitles[
										c.title
									]
										? 'rotate-180'
										: ''}"
									aria-hidden="true"
								/>
							</div>
						</button>

						<div
							class="grid transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:pb-8 {openTitles[
								c.title
							]
								? 'grid-rows-[1fr] pb-8'
								: 'grid-rows-[0fr] pb-0'}"
						>
							<div
								class="max-w-2xl overflow-hidden pl-10 text-lg leading-8 text-neutral-400 md:pl-16"
							>
								{@render c.body()}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
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

<script lang="ts">
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';

	const area = (title: string, icons: string[], accent: string, delay: string, body: Snippet) => ({
		title,
		icons,
		accent,
		delay,
		body
	});
</script>

<section id="dev" class="relative overflow-hidden bg-black text-white">
	<SectionHeader title="Dev" class="hidden pb-8 text-center" />
	<div class="container flex flex-col py-12 md:py-20">
		{#each [area('Backend', ['logos:dotnet', 'devicon:java'], 'var(--color-primary)', 'motion-delay-0', backend), area('Frontend', ['devicon:vuejs', 'devicon:svelte', 'devicon:tailwindcss'], 'var(--color-secondary)', 'motion-delay-100', frontend), area('DevOps', ['devicon:docker', 'devicon:gitlab', 'fa:github'], 'var(--color-tertiary)', 'motion-delay-200', devops)] as c (c.title)}
			<article
				style="--accent: {c.accent};"
				class="group motion-translate-y-in-50 motion-blur-in-md relative grid grid-cols-1 gap-x-8 gap-y-6 border-t border-white/10 py-10 md:py-14 lg:grid-cols-12 {c.delay}"
			>
				<div class="lg:col-span-5 xl:col-span-4">
					<h3 class="text-3xl font-bold text-white md:text-4xl">{c.title}</h3>
					<!-- accent underline that widens on hover -->
					<div
						class="mt-3 h-1 w-10 rounded-full bg-[var(--accent)] transition-all duration-500 ease-out group-hover:w-16"
					></div>
					<div class="mt-4 flex flex-row items-center gap-2.5">
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
		Als Backend-Entwickler fasziniert mich die Logik hinter den Kulissen. Die Arbeit mit Datenbanken
		und APIs, um <span class="text-secondary">leistungsstarke und skalierbare Anwendungen</span> zu bauen,
		ist für mich pure Leidenschaft. Ich liebe es, effiziente Lösungen zu entwickeln und komplexe Probleme
		zu lösen.
	</p>
{/snippet}

{#snippet frontend()}
	<p>
		Die Frontend-Entwicklung ist für mich eine spannende Herausforderung. Ich beschäftige mich gerne
		mit den <span class="text-secondary">neuesten Technologien und Frameworks</span>, um performante
		und skalierbare Webanwendungen zu bauen. Die Freiheit, meine
		<span class="text-secondary">Kreativität</span> auszuleben und gleichzeitig technisch anspruchsvolle
		Probleme zu lösen, begeistert mich.
	</p>
{/snippet}

{#snippet devops()}
	<p>
		DevOps vereint für mich das Beste aus beiden Welten: Entwicklung und Betrieb. Ich finde es
		faszinierend, Prozesse zu <span class="text-secondary">automatisieren</span> und die
		Zusammenarbeit zwischen Entwicklern und Operations-Teams zu optimieren. Durch DevOps können wir
		<span class="text-secondary">schnellere und zuverlässigere</span> Software-Releases ermöglichen.
	</p>
{/snippet}

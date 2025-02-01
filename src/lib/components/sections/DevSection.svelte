<script>
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
	import TechStack from '$lib/components/dev/TechStack.svelte';
</script>

<section id="dev" class="relative">
	<div class="container grid grid-cols-1 gap-6 py-12 md:py-20 lg:grid-cols-3 lg:gap-12 xl:gap-16">
		<div class="col-span-3 lg:col-span-1">
			<h2 class="pb-1 text-2xl tracking-widest text-neutral-500">Backend</h2>
			<p class="leading-7">
				Als Backend-Entwickler fasziniert mich die Logik hinter den Kulissen. Die Arbeit mit
				Datenbanken und APIs, um <span class="text-secondary"
					>leistungsstarke und skalierbare Anwendungen</span
				> zu bauen, ist für mich pure Leidenschaft. Ich liebe es, effiziente Lösungen zu entwickeln und
				komplexe Probleme zu lösen.
			</p>
		</div>
		<div class="col-span-3 lg:col-span-1">
			<h2 class="pb-1 text-2xl tracking-widest text-neutral-500">Frontend</h2>
			<p class="leading-7">
				Die Frontend-Entwicklung ist für mich eine spannende Herausforderung. Ich beschäftige mich
				gerne mit den <span class="text-secondary">neuesten Technologien und Frameworks</span>, um
				performante und skalierbare Webanwendungen zu bauen. Die Freiheit, meine
				<span class="text-secondary">Kreativität</span> auszuleben und gleichzeitig technisch anspruchsvolle
				Probleme zu lösen, begeistert mich.
			</p>
		</div>
		<div class="col-span-3 lg:col-span-1">
			<h2 class="pb-1 text-2xl tracking-widest text-neutral-500">DevOps</h2>
			<p class="leading-7">
				DevOps vereint für mich das Beste aus beiden Welten: Entwicklung und Betrieb. Ich finde es
				faszinierend, Prozesse zu <span class="text-secondary">automatisieren</span> und die
				Zusammenarbeit zwischen Entwicklern und Operations-Teams zu optimieren. Durch DevOps können
				wir <span class="text-secondary">schnellere und zuverlässigere</span> Software-Releases ermöglichen.
			</p>
		</div>
		<TechStack class="col-span-3" />
	</div>
	<DotPattern
		width={20}
		height={20}
		cx={10}
		cy={10}
		cr={1}
		class="[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
	/>
</section>

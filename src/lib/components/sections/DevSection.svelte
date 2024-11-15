<script>
	import DotPattern from '$lib/components/shared/misc/DotPattern.svelte';
	import HeaderTechstack from '../dev/HeaderTechstack.svelte';
</script>

<section id="dev" class="relative">
	<div class="container py-12 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
		<div>
			<HeaderTechstack
				header="Backend"
				icons={['ant-design:java-outlined', 'simple-icons:dotnet']}
			/>
			<p class="leading-7">
				Als Backend-Entwickler fasziniert mich die Logik hinter den Kulissen. Die Arbeit mit
				Datenbanken und APIs, um <span class="text-secondary"
					>leistungsstarke und skalierbare Anwendungen</span
				> zu bauen, ist für mich pure Leidenschaft. Ich liebe es, effiziente Lösungen zu entwickeln und
				komplexe Probleme zu lösen.
			</p>
		</div>
		<div>
			<HeaderTechstack
				header="Frontend"
				icons={['flowbite:html-solid', 'mdi:language-typescript', 'mdi:react']}
			/>
			<p class="leading-7">
				Die Frontend-Entwicklung ist für mich eine spannende Herausforderung. Ich beschäftige mich
				gerne mit den <span class="text-secondary">neuesten Technologien und Frameworks</span>, um
				performante und skalierbare Webanwendungen zu bauen. Die Freiheit, meine
				<span class="text-secondary">Kreativität</span> auszuleben und gleichzeitig technisch anspruchsvolle
				Probleme zu lösen, begeistert mich.
			</p>
		</div>
		<div>
			<HeaderTechstack header="DevOps" icons={['mdi:docker', 'fa:github', 'mdi:gitlab']} />
			<p class="leading-7">
				DevOps vereint für mich das Beste aus beiden Welten: Entwicklung und Betrieb. Ich finde es
				faszinierend, Prozesse zu <span class="text-secondary">automatisieren</span> und die
				Zusammenarbeit zwischen Entwicklern und Operations-Teams zu optimieren. Durch DevOps können
				wir <span class="text-secondary">schnellere und zuverlässigere</span> Software-Releases ermöglichen.
			</p>
		</div>
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

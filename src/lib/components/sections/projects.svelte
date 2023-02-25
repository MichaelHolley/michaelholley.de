<script lang="ts">
	import SectionHeader from '../misc/sectionHeader.svelte';

	interface Project {
		title: string;
		description: string[];
		github?: string;
		url?: string;
	}

	const projects: Project[] = [
		{
			title: 'Wissenschaftspreis',
			description: [
				'Bei der Umsetzung des Projekts wurden zunächst die einzelnen Abschnitte unterteilt und nach Kompetenzen zugewiesen. Ich erhielt die Zuständigkeit für die Entwicklung einer API mit ASP.NET Core, welche Dateien per HTTP-Request speichert und zurückgibt.',
				'Während der Umsetzung entwickelte sich meine Rolle hin zu eine Art Projektleiter, der in allen Bereichen der Entwicklung mitwirkt. So unterstützte ich die Entwicklung der Webseite sowie die Datenaggregation mit Python auf einem Raspberry Pi. Zudem erhielt ich die Zuständigkeit für die Dokumentation und kontrollierte dessen Bearbeitung durch die Teammitglieder.',
				'Die Zusammenarbeit wurde letztendlich mit dem 2. Platz und einem Preisgeld von 1000€ belohnt.'
			]
		},
		{
			title: 'michaelholley.de',
			description: [
				'Die Darstellung der Webseite hat bereits mehrere Versionen durchlaufen und wird stetig ergänzt und aktualisiert. Dabei wird vor allem auf die Faktoren Performance, Technologie, Design und Interaktion geachtet. Informationen sollen möglichst schnell zu finden, verständlich und auf das Nötigste reduziert sein.'
			]
		},
		{ title: 'OnTrack', description: [] },
		{
			title: 'MyPoll',
			description: [
				'MyPoll ist eine Angular-Anwendung mit der man einfache Umfragen mit einer einzelnen Fragen erstellen kann. Antworten können dabei optional beschränkt werden, wie feste Antworten, eigene Antworten, private Umfragen und die Mehrfachauswahl.',
				'Dahinter arbeitet ein ASP.NET Core Backend, welches die Daten in einer SQLite-Datenbank verwaltet.'
			]
		},
		{
			title: 'PaymentsDashboard',
			description: [
				'Das PaymentsDashboard ist eine Anwendung in der finanzielle Ausgaben gespeichert und dargestellt werden. Unter Verwendung von Tags, ist der Nutzer in der Lage Zahlungen mit Stichwörter zu versehen, die eine Sortierung bzw. Filterung ermöglichen.',
				'Jede Zahlung erhält verpflichtend einen primären Tag, der bei der visuellen Aufbereitung in Form von Graphen zur Darstellung verwendet wird.'
			]
		}
	];

	let hoveredIndex = 1;

	function setHoveredProjectByIndex(index: number) {
		hoveredIndex = index;
	}
</script>

<section id="projekte" class="bg-mhWhite text-mhBlack py-6 h-[600px]">
	<SectionHeader title="Projekte" />
	<div class="mt-6 flex flex-col md:flex-row">
		<ul class="break-words pr-6">
			{#each projects as p, i}
				<li
					class="mb-1"
					on:mouseenter={() => setHoveredProjectByIndex(i)}
					on:mouseleave={() => setHoveredProjectByIndex(1)}
				>
					<h4
						class="text-4xl font-bold uppercase hover:text-mhPrimary hover:cursor-pointer transition-all"
					>
						{p.title}
					</h4>
				</li>
			{/each}
		</ul>
		{#if hoveredIndex >= 0 && hoveredIndex < projects.length}
			<div class="px-3 md:pr-40 text-justify">
				{#each projects[hoveredIndex].description as descr, i}
					<p class={i != 0 ? 'mt-2' : ''}>{descr}</p>
				{/each}
			</div>
		{/if}
	</div>
</section>

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
				'Mit unserem Projekt haben wir mehrere Ziele erreicht. Erstens haben wir erfolgreich CO2-Daten mit einem Raspberry Pi und einem CO2-Sensor gemessen und gespeichert. Zweitens haben wir eine REST-API erstellt, mit der wir auf die CO2-Daten zugreifen und sie in einer Webanwendung anzeigen konnten. Drittens haben wir eine benutzerfreundliche Webanwendung erstellt, die die CO2-Daten im Zeitverlauf auf optisch ansprechende Weise anzeigt.',
				'Insgesamt hat unser Projekt unsere Fähigkeiten in den Bereichen Programmierung, Webentwicklung und Datenanalyse unter Beweis gestellt. Außerdem sammelten wir wertvolle Erfahrungen bei der Arbeit im Team und bei der Zusammenarbeit an einem Projekt. Unser zweiter Platz beim Wissenschaftspreis Augsburger Schulen war ein Beweis für unsere harte Arbeit und unsere Hingabe, welche mit einem Preisgeld von 1000€ belohnt wurde.'
			]
		},
		{
			title: 'michaelholley.de',
			description: [
				'Meine Absicht war es, eine Portfolio-Website zu erstellen, die meine Fähigkeiten und mein Fachwissen als Entwickler präsentiert, gleichzeitig aber auch eine gute User-Experience bietet.',
				'Durch die Verwendung der neuesten Web-Technologien (SvelteKit + Tailwindcss) und die Erstellung visuell ansprechender und interaktiver Elemente hoffe ich, einen positiven Eindruck bei potenziellen Kunden und Arbeitgebern zu hinterlassen.'
			]
		},
		{
			title: 'OnTrack',
			description: [
				'Insgesamt ist die OnTrack Web-App ein nützliches Tool für alle, die ihre täglichen Aktivitäten, ToDos und Ausgaben im Auge behalten wollen. Dank der benutzerfreundlichen Oberfläche und der grafischen Darstellung ist es einfach, organisiert zu bleiben.',
				'Entwickelt mit React und Mantine-Components für das Front-End und einem ASP.NET-Back-End mit Google Sign-In für die Benutzerauthentifizierung sowie MongoDB-Datenbank.'
			]
		},
		{
			title: 'MyPoll',
			description: [
				'MyPoll ist eine Angular-Anwendung mit der man einfache Umfragen mit einer einzelnen Fragen erstellen kann. Antworten können dabei optional beschränkt werden, wie feste Antworten, eigene Antworten, private Umfragen und die Mehrfachauswahl. Dahinter arbeitet ein ASP.NET Core Backend, welches die Daten in einer SQLite-Datenbank verwaltet.'
			]
		},
		{
			title: 'PaymentsDashboard',
			description: [
				'Das PaymentsDashboard ist eine Anwendung in der finanzielle Ausgaben gespeichert und dargestellt werden. Unter Verwendung von Tags, ist der Nutzer in der Lage Zahlungen mit Stichwörtern zu versehen, die eine Sortierung bzw. Filterung ermöglichen.',
				'Jede Zahlung erhält verpflichtend einen primären Tag, der bei der visuellen Aufbereitung in Form von Graphen zur Darstellung verwendet wird.'
			]
		}
	];

	let selectedIndex = -1;

	function selectProject(index: number) {
		selectedIndex = index;
	}
</script>

<section id="projekte" class="bg-mhWhite text-mhBlack py-6 px-16">
	<SectionHeader title="Projekte" class="text-center md:text-start md:pl-7" />
	<div class="mt-6 flex flex-col md:flex-row pr-4 md:pl-7">
		<ul class="break-words mb-6">
			{#each projects as p, i}
				<li
					class="mb-1"
					role="button"
					tabindex="0"
					on:click={() => selectProject(i)}
					on:keyup={(e) => {
						if (e.key == 'Enter') selectProject(i);
					}}
				>
					<h4
						class="text-2xl md:text-3xl lg:text-4xl text-center md:text-start font-bold uppercase hover:text-mhSecondary hover:cursor-pointer transition-all duration-300 {i ===
						selectedIndex
							? 'text-mhPrimary'
							: 'text-mhBlack'}"
					>
						{p.title}
					</h4>
				</li>
			{/each}
		</ul>
		<div
			class="h-[450px] w-full {selectedIndex != -1
				? 'overflow-hidden hover:overflow-y-scroll pr-1 hover:pr-0 scroll'
				: ''}"
		>
			{#if selectedIndex >= 0 && selectedIndex < projects.length}
				<div class="pl-8 pr-4 text-justify text-lg">
					{#each projects[selectedIndex].description as descr, i}
						<p class={i != 0 ? 'mt-2' : ''}>{descr}</p>
					{/each}
				</div>
			{:else}
				<h3 class="text-center text-xl">Wählen Sie ein Projekt</h3>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: theme('colors.mhAlt') transparent;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 4px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: theme('colors.mhAlt');
	}
</style>

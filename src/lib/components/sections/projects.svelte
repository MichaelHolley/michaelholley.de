<script lang="ts">
	import { fade } from 'svelte/transition';
	import colors from 'tailwindcss/colors';
	import GithubIcon from '../shared/icons/githubIcon.svelte';
	import SectionHeader from '../shared/sectionHeader.svelte';

	interface Project {
		title: string;
		description: string[];
		github?: string;
		url?: string;
	}

	const projects: Project[] = [
		{
			title: 'Bonuspunkteprogramm',
			description: [
				'Als Team-Lead des Frontend übernahm ich die Verantwortung und Leitung einer umfangreichen Bonuspunkte-App einschließlich Web-Anwendung einer führenden Lebensmittelkette mit mehreren zehntausend Nutzern. Meine Tätigkeiten begannen, als die App bereits in der Betriebsphase war, mit dem Ziel neue Features zu implementieren und Optimierungen bzgl. Stabilität, Performance und UX durchzuführen.',
				'Während der Projektlaufzeit waren mein Team und ich in der Lage, die App zur Zufriedenheit des Kunden weiterzuentwickeln, sowie eine erhebliche Verbesserung der Bewertung in den App-Stores zu erreichen. Ich bin stolz darauf, einen Beitrag zu einem so bedeutenden Projekt geleistet zu haben.'
			]
		},
		{
			title: 'Wissenschaftspreis',
			description: [
				'Mit unserem Projekt haben wir mehrere Ziele erreicht. Erstens haben wir erfolgreich CO2-Daten mit einem Raspberry Pi und einem CO2-Sensor gemessen und gespeichert. Zweitens haben wir eine REST-API erstellt, mit der wir auf die CO2-Daten zugreifen und sie in einer Webanwendung anzeigen konnten. Drittens haben wir eine benutzerfreundliche Webanwendung erstellt, die die CO2-Daten im Zeitverlauf auf optisch ansprechende Weise anzeigt.',
				'Insgesamt hat unser Projekt unsere Fähigkeiten in den Bereichen Programmierung, Webentwicklung und Datenanalyse unter Beweis gestellt. Außerdem sammelten wir wertvolle Erfahrungen bei der Arbeit im Team und bei der Zusammenarbeit an einem Projekt. Unser zweiter Platz beim Wissenschaftspreis Augsburger Schulen 2021 war ein Beweis für unsere harte Arbeit und unsere Hingabe, welche mit einem Preisgeld von 1000€ belohnt wurde.'
			]
		},
		{
			title: 'michaelholley.de',
			description: [
				'Meine Absicht war es, eine Portfolio-Website zu erstellen, die meine Fähigkeiten und mein Fachwissen als Entwickler präsentiert, gleichzeitig aber auch eine gute User-Experience bietet.',
				'Durch die Verwendung der neuesten Web-Technologien (SvelteKit + Tailwindcss) und die Erstellung visuell ansprechender und interaktiver Elemente hoffe ich, einen positiven Eindruck bei potenziellen Kunden und Arbeitgebern zu hinterlassen.'
			],
			github: 'https://github.com/MichaelHolley/michaelholley.de'
		},
		{
			title: 'OnTrack',
			description: [
				'Insgesamt ist die OnTrack Web-App ein nützliches Tool für alle, die ihre täglichen Aktivitäten, ToDos und Ausgaben im Auge behalten wollen. Dank der benutzerfreundlichen Oberfläche und der grafischen Darstellung ist es einfach, organisiert zu bleiben.',
				'Entwickelt mit React und Mantine-Components für das Front-End und einem ASP.NET-Back-End mit Google Sign-In für die Benutzerauthentifizierung sowie MongoDB-Datenbank.'
			],
			github: 'https://github.com/MichaelHolley/OnTrack'
		}
	];

	let selectedIndex = -1;

	function selectProject(index: number) {
		selectedIndex = index;
	}
</script>

<section id="projekte" class="bg-tertiary text-white">
	<div class="container py-8 md:py-16">
		<SectionHeader title="Projekte" class="text-center md:text-start" />
		<div class="mt-6 flex flex-col md:flex-row gap-4 md:gap-2">
			<ul class="break-words">
				{#each projects as p, i}
					<li
						class="mb-1 hover:scale-105 transition-all"
						role="button"
						tabindex="0"
						on:click={() => selectProject(i)}
						on:keyup={(e) => {
							if (e.key == 'Enter') selectProject(i);
						}}
					>
						<h4
							class="text-2xl lg:text-3xl xl:text-4xl text-center md:text-start font-bold uppercase hover:cursor-pointer transition-all duration-200 selection:bg-secondary {i ===
							selectedIndex
								? 'text-primary'
								: 'text-white'}"
						>
							{p.title}
						</h4>
					</li>
				{/each}
			</ul>
			<div class="h-[380px] w-full {selectedIndex != -1 ? 'overflow-y-auto pr-1' : ''}">
				{#if selectedIndex >= 0 && selectedIndex < projects.length}
					{#each projects as project, index}
						{#if index === selectedIndex}
							<div class="flex flex-col">
								<div class="text-justify text-lg px-4">
									{#each project.description as descr, i}
										<p class={i != 0 ? 'mt-4' : ''}>
											{descr}
										</p>
									{/each}
								</div>
								<div class="mt-3 p-2 flex flex-row justify-center">
									{#if !!project.github && projects[selectedIndex].github != ''}
										<a
											class="hover:scale-110 transition-all"
											href={project.github}
											target="_blank"
											rel="noreferrer"
											aria-label="GitHub-Repository"
										>
											<GithubIcon color={colors.white} height={40} />
										</a>
									{/if}
								</div>
							</div>
						{/if}
					{/each}
				{:else}
					<h3 class="text-center text-xl">Wählen Sie ein Projekt</h3>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: theme('colors.white') transparent;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 4px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: theme('colors.white');
	}
</style>

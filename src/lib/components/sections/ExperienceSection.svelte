<script lang="ts">
	import Step from '$lib/components/career/Step.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
</script>

<section id="experience" class="bg-white text-black">
	<div class="pt container py-8 md:py-16 md:pt-12 2xl:px-64">
		<SectionHeader title="Experience" class="text-center" />
		<div class="text-left text-lg">
			<Step period="seit Mai 2023" title="Software Entwickler" workplace="AraCom IT Services AG">
				<ul class="list-inside list-square *:py-1">
					<li>
						Eigenverantwortliche Definition, Abschätzung, Konzeption und Umsetzung von kleinen
						Softwareprojekten in Kundenauftrag
					</li>
					<li>
						Übernahme der Rolle des Technical Lead Frontend während der Betriebsphase einer
						innovativen Smartphone-App im Bereich Lebensmittel, einschließlich Verantwortung über
						Technologie und Team
					</li>
					<li>
						Optimierung von Build- und Deployment-Prozessen zur Erhöhung der Effizienz und
						Stabilität der Software
					</li>
					<li>
						Aktive Mitwirkung bei der Ausbildung, in Tech-Communitys und Förderung von
						Nachwuchskräften, inklusive Mentoring und Wissensvermittlung
					</li>
				</ul>
			</Step>
			<Step
				period="Jan. 22 - Apr. 2023"
				title="Junior Software Entwickler"
				workplace="AraCom IT Services AG"
			>
				<ul class="list-inside list-square *:py-1">
					<li>
						Entwicklung und Optimierung vielseitiger Softwarelösungen in einem agilen,
						teamorientierten Umfeld
					</li>
					<li>Eigenständige Bearbeitung von Aufgaben einschließlich proaktiver Problemlösung</li>
					<li>
						Kontinuierliche Weiterbildung und Sammeln an Erfahrung in neuen Technologien, Best
						Practices und Software-Architekturmustern
					</li>
				</ul>
			</Step>
			<Step
				period="2019 - 2022"
				title="Ausbildung: Fachinformatiker für Anwendungsentwicklung"
				workplace="AraCom IT Services AG"
			>
				Verkürzte Ausbildung in 2,5 Jahren mit <strong>Bestnote 1,0</strong> (Berufsschule) und
				<strong>96 von 100 Punkten</strong> in der IHK-Abschlussprüfung erfolgreich abgeschlossen
			</Step>
			<Step
				period="2017 - 2019"
				title="Studium: Informatik und Multimedia"
				workplace="Universität Augsburg"
			>
				<p>abgebrochen</p>
				<ul class="list-inside list-square *:py-1">
					<li>Erster Kontakt mit Softwareprojekten und anderen IT-Begeisterten</li>
					<li>Tiefes fachliches Eintauchen in Algorithmen und Datenstrukturen</li>
				</ul>
			</Step>
		</div>
	</div>
</section>

<style>
	.list-square li::marker {
		color: theme('colors.secondary.DEFAULT');
	}

	.list-square li {
		padding-left: 1.5rem;
		text-indent: -1.5rem;
	}
</style>

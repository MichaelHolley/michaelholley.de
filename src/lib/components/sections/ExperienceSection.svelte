<script lang="ts">
	import Step from '$lib/components/career/Step.svelte';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
</script>

<section id="experience" class="bg-white text-black">
	<div class="pt container py-8 md:py-16 md:pt-12 2xl:px-64">
		<SectionHeader title="Experience" class="text-center" />
		<div class="text-left text-lg">
			<Step period="seit 2022" title="Software Developer" workplace="AraCom IT Services AG">
				<ul class="list-inside list-square *:py-1">
					<li>
						Entwicklung und Optimierung webbasierter Dashboards sowie vielseitiger Softwarelösungen
						in einem agilen, teamorientierten Umfeld
					</li>
					<li>
						Übernahme der Rolle des Technical Leads Frontend während der Betriebsphase einer
						innovativen Smartphone-App im Bereich Lebensmittel, einschließlich technischer
						Verantwortung
					</li>
					<li>
						Aktive Mitwirkung bei der Ausbildung und Förderung von Nachwuchskräften, einschließlich
						Mentoring und Wissensvermittlung
					</li>
				</ul>
			</Step>
			<Step
				period="2019 - 2022"
				title="Ausbildung: Fachinformatiker für Anwendungsentwicklung"
				workplace="AraCom IT Services AG"
			>
				<ul class="list-inside list-square *:py-1">
					<li>
						<strong>Verkürzte Ausbildung</strong> erfolgreich in nur 2,5 Jahren abgeschlossen, dank herausragender
						Leistungen und hoher Eigeninitiative
					</li>
					<li>Abschluss der Berufsschule mit <strong>Bestnote 1,0</strong></li>
					<li>
						IHK-Abschlussprüfung mit einem Gesamtergebnis von <strong>96 von 100 Punkten</strong> absolviert
					</li>
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

<script>
	import SectionHeader from '../shared/sectionHeader.svelte';
	import Step from '../career/step.svelte';
	import Blurfade from '../shared/blurfade.svelte';
</script>

<section id="taetigkeiten" class={`bg-white text-black  selection:bg-primary`}>
	<div class="container py-8 md:py-16 2xl:px-64">
		<SectionHeader title="Experience" class="text-center" />
		<div class="text-lg text-left">
			<Blurfade delay={0.2}>
				<Step period="seit 2022" title="Software Developer" workplace="AraCom IT Services AG">
					<ul class="list-square list-inside">
						<li>
							teambasierte Entwicklung diverser webbasierten Dashboards und weiterer
							Softwarelösungen
						</li>
						<li>
							Rolle des Technical Leads Frontend in der Betriebsphase einer Smartphone-App im
							Lebensmittelbereich
						</li>
						<li>Engagierte Unterstützung bei der Ausbildung von Nachwuchskräften</li>
					</ul>
				</Step>
			</Blurfade>
			<Blurfade delay={0.4}>
				<Step
					period="2019 - 2022"
					title="Ausbildung: Fachinformatiker für Anwendungsentwicklung"
					workplace="AraCom IT Services AG"
				>
					<ul class="list-square list-inside">
						<li>Verkürzte Ausbildung auf 2.5 Jahre</li>
						<li>Abschluss der Berufsschule mit <strong>Note 1,0</strong></li>
						<li>IHK Prüfung abgelegt mit <strong>96 von 100</strong> Punkten gesamt</li>
					</ul>
				</Step>
			</Blurfade>
		</div>
	</div>
</section>

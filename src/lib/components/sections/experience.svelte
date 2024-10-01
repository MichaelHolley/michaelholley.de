<script>
	import SectionHeader from '../shared/sectionHeader.svelte';
	import Step from '../career/step.svelte';
</script>

<section id="taetigkeiten" class={`bg-white text-black  selection:bg-primary`}>
	<div class="container py-8 md:py-16 2xl:px-64">
		<SectionHeader title="Experience" class="text-center" />
		<div class="text-lg text-left">
			<Step period="seit 2022" title="Software Developer" workplace="AraCom IT Services AG">
				<ul class="list-square list-outside">
					<li>
						teambasierte Entwicklung von maßgeschneiderten Softwarelösungen für Kunden aus
						verschiedenen Branchen
					</li>
					<li>Umsetzung von Verwaltungs-Tools in Form von webbasierten Dashboards</li>
					<li>
						die Rolle des Technical Leads im Frontend während der Betriebsphase einer Smartphone-App
						im Lebensmittelbereich
					</li>
				</ul>
			</Step>
			<Step
				period="2019 - 2022"
				title="Ausbildung: Fachinformatiker für Anwendungsentwicklung"
				workplace="AraCom IT Services AG"
			>
				<ul class="list-square list-outside">
					<li>Verkürzte Ausbildung auf 2.5 Jahre</li>
					<li>Abschluss der Berufsschule mit <strong>Note 1,0</strong></li>
					<li>IHK Prüfung abgelegt mit <strong>96 von 100</strong> Punkten gesamt</li>
				</ul>
			</Step>
		</div>
	</div>
</section>

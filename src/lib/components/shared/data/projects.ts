import { iconMap } from './icons';

export const projects: Project[] = [
	{
		title: 'Treuepunkte App',
		shortDescription:
			'Leitung und Weiterentwicklung einer umfangreichen Bonuspunkte-App im Lebensmittelbereich',
		description: [
			'Als Team-Lead des Frontend übernahm ich die Verantwortung und Leitung einer umfangreichen Bonuspunkte-App einschließlich Web-Anwendung einer führenden Lebensmittelkette mit mehreren zehntausend Nutzern. Meine Tätigkeiten begannen, als die App bereits in der Betriebsphase war, mit dem Ziel neue Features zu implementieren und Optimierungen bzgl. Stabilität, Performance und UX durchzuführen.',
			'Während der Projektlaufzeit waren mein Team und ich in der Lage, die App zur Zufriedenheit des Kunden weiterzuentwickeln, sowie eine erhebliche Verbesserung der Bewertung in den App-Stores zu erreichen. Ich bin stolz darauf, einen Beitrag zu einem so bedeutenden Projekt geleistet zu haben.'
		],
		tech: [iconMap.reactnative, iconMap.dotnet, iconMap.azure],
		class: 'col-span-3 lg:col-span-2',
		icon: iconMap.phone
	},
	{
		title: 'michaelholley.de',
		shortDescription: 'Erstellung einer Portfolio-Website',
		description: [
			'Meine Absicht war es, eine Portfolio-Website zu erstellen, die meine Fähigkeiten und mein Fachwissen als Entwickler präsentiert, gleichzeitig aber auch eine gute User-Experience bietet.',
			'Durch die Verwendung der neuesten Web-Technologien (SvelteKit + Tailwindcss) und die Erstellung visuell ansprechender und interaktiver Elemente hoffe ich, einen positiven Eindruck bei potenziellen Kunden und Arbeitgebern zu hinterlassen.'
		],
		github: 'https://github.com/MichaelHolley/michaelholley.de',
		tech: [iconMap.svelte, iconMap.typescript, iconMap.tailwind],
		class: 'col-span-3 lg:col-span-1',
		icon: iconMap.web
	},
	{
		title: 'OnTrack',
		shortDescription: 'Web-App zur Verwaltung von täglichen Aktivitäten, ToDos und Ausgaben',
		description: [
			'Insgesamt ist die OnTrack Web-App ein nützliches Tool für alle, die ihre täglichen Aktivitäten, ToDos und Ausgaben im Auge behalten wollen. Dank der benutzerfreundlichen Oberfläche und der grafischen Darstellung ist es einfach, organisiert zu bleiben.',
			'Entwickelt mit React und Mantine-Components für das Front-End und einem ASP.NET-Back-End mit Google Sign-In für die Benutzerauthentifizierung sowie MongoDB-Datenbank.'
		],
		github: 'https://github.com/MichaelHolley/OnTrack',
		tech: [iconMap.react, iconMap.mongodb, iconMap.dotnet],
		class: 'col-span-3 lg:col-span-1',
		icon: iconMap.tracker
	},
	{
		title: 'Wissenschaftspreis',
		shortDescription:
			'Zweiter Platz beim Wissenschaftspreis Augsburger Schulen mit der Projekt zur Messung und Auswertung von CO2-Daten',
		description: [
			'Mit unserem Projekt haben wir mehrere Ziele erreicht. Erstens haben wir erfolgreich CO2-Daten mit einem Raspberry Pi und einem CO2-Sensor gemessen und gespeichert. Zweitens haben wir eine REST-API erstellt, mit der wir auf die CO2-Daten zugreifen und sie in einer Webanwendung anzeigen konnten. Drittens haben wir eine benutzerfreundliche Webanwendung erstellt, die die CO2-Daten im Zeitverlauf auf optisch ansprechende Weise anzeigt.',
			'Insgesamt hat unser Projekt unsere Fähigkeiten in den Bereichen Programmierung, Webentwicklung und Datenanalyse unter Beweis gestellt. Außerdem sammelten wir wertvolle Erfahrungen bei der Arbeit im Team und bei der Zusammenarbeit an einem Projekt. Unser zweiter Platz beim Wissenschaftspreis Augsburger Schulen 2021 war ein Beweis für unsere harte Arbeit und unsere Hingabe, welche mit einem Preisgeld von 1000€ belohnt wurde.'
		],
		tech: [iconMap.github, iconMap.python, iconMap.linux, iconMap.html, iconMap.dotnet],
		class: 'col-span-3 lg:col-span-2',
		icon: iconMap.trophy
	}
];

export interface Project {
	title: string;
	description: string[];
	shortDescription: string;
	github?: string;
	url?: string;
	tech?: string[];
	class?: string;
	icon?: string;
}

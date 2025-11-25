import { tech, type Tech } from './tech';

export interface Project {
	id: string;
	title: string;
	short: string;
	description: string[];
	tech?: (Tech | string)[];
	github?: string;
	url?: string;
	class?: string;
	icon?: string;
	previewImg?: string;
	imageUrls?: string[];
}

export const projects: Project[] = [
	{
		id: 'loyality-app',
		title: 'Treuepunkte App',
		short:
			'Leitung und Optimierung einer Bonuspunkte-App für eine führende Lebensmittelkette mit Fokus auf Stabilität, Performance und UX.',
		description: [
			'Als Team-Lead des Frontend übernahm ich die Verantwortung und Leitung einer umfangreichen Bonuspunkte-App einschließlich Web-Anwendung einer führenden Lebensmittelkette mit mehreren zehntausend aktiven Nutzern. Meine Tätigkeiten begannen, als die App bereits in der Betriebsphase war, mit dem Ziel neue Features zu implementieren und Optimierungen bzgl. Stabilität, Performance und UX durchzuführen.',
			'Während der Projektlaufzeit waren mein Team und ich in der Lage, die App zur Zufriedenheit des Kunden weiterzuentwickeln, sowie eine erhebliche Verbesserung der Bewertung in den App-Stores zu erreichen. Ich bin stolz darauf, einen Beitrag zu einem so bedeutenden Projekt geleistet zu haben.'
		],
		class: 'col-span-1 lg:col-span-2',
		icon: 'mdi:mobile-phone-message',
		tech: [tech.React, 'React Native', tech.TypeScript, tech.Azure, tech.aspnet],
		previewImg: '/project/loyality_app.webp'
	},
	{
		id: 'coding-2025',
		title: 'Coding 2025',
		short: 'Daily Coding Challenge 2025',
		description: [
			'Die Coding Challenge 2025 ist ein persönliches Langzeitprojekt mit dem Ziel, täglich zu coden und kontinuierlich die eigenen Fähigkeiten als Entwickler zu verbessern. Seit Beginn des Jahres 2025 wird – mit Ausnahme von Urlaubs- und Krankheitstagen sowie seltenen Ausnahmefällen – jeden Tag programmiert.',
			'Im Rahmen dieser Challenge entstehen verschiedene Projekte, darunter die App Ascent, die Portfolio-Website, Tshopper und weitere Anwendungen. Diese dienen nicht nur zur praktischen Umsetzung neuer Ideen, sondern auch zur Erprobung moderner Technologien und zur gezielten Weiterentwicklung technischer Fähigkeiten.'
		],
		class: 'col-span-1',
		icon: 'tabler:code',
		github: 'https://github.com/MichaelHolley',
		previewImg: '/project/github_profile.webp'
	},
	{
		id: 'ascent',
		title: 'Ascent',
		short: 'Tracking von Hobbys und Zielen',
		description: [
			'Ascent ist eine Habit-Tracking-App, die Nutzern dabei hilft, ihre täglichen Routinen zu überwachen und positive Verhaltensweisen zu etablieren. Die Entwicklung dieser Anwendung hat nicht nur meine technischen Fähigkeiten erweitert, sondern auch meine Kompetenzen im Projektmanagement und in der Problemlösung gestärkt.​',
			'Während des Entwicklungsprozesses habe ich gelernt, komplexe Anforderungen zu analysieren, effektive Lösungen zu entwerfen und den gesamten Lebenszyklus einer Anwendung zu steuern. Diese Erfahrungen haben mein Verständnis für Softwarearchitektur vertieft und meine Fähigkeit verbessert, Projekte effizient zu planen und umzusetzen.​',
			'Die App ermöglicht es den Nutzern, individuelle Ziele zu setzen und ihren Fortschritt durch detaillierte Statistiken und Analysen zu visualisieren. Durch diese Funktionen wird eine benutzerfreundliche und motivierende Erfahrung geschaffen, die es den Nutzern ermöglicht, ihre persönlichen Ziele effektiv zu erreichen.​'
		],
		github: 'https://github.com/MichaelHolley/Ascent',
		class: 'col-span-1',
		icon: 'tabler:chart-line',
		url: 'https://ascent.michaelholley.de',
		tech: [tech.Svelte, tech.tailwindcss, tech.TypeScript, tech.prisma, tech.Docker],
		previewImg: '/project/ascent.webp'
	},
	{
		id: 'science-competition-2021',
		title: 'Wissenschaftspreis',
		short: 'Projekt zur CO₂-Messung sowie Daten-Visualisierung',
		description: [
			'Mit unserem Projekt haben wir mehrere Ziele erreicht. Erstens haben wir erfolgreich CO₂-Daten mit einem Raspberry Pi und einem CO₂-Sensor gemessen und gespeichert. Zweitens haben wir eine REST-API erstellt, mit der wir auf die CO₂-Daten zugreifen und sie in einer Webanwendung anzeigen konnten. Drittens haben wir eine benutzerfreundliche Webanwendung erstellt, die die CO₂-Daten im Zeitverlauf auf optisch ansprechende Weise anzeigt.',
			'Insgesamt hat unser Projekt unsere Fähigkeiten in den Bereichen Programmierung, Webentwicklung und Datenanalyse unter Beweis gestellt. Außerdem sammelten wir wertvolle Erfahrungen bei der Arbeit im Team und bei der Zusammenarbeit an einem Projekt. Unser zweiter Platz beim Wissenschaftspreis Augsburger Schulen 2021 war ein Beweis für unsere harte Arbeit und unsere Hingabe, welche mit einem Preisgeld von 1000€ belohnt wurde.'
		],
		class: 'col-span-1',
		icon: 'mdi:trophy',
		tech: ['Raspberry Pi', tech.Python, tech.aspnet, tech.HTML, tech.TypeScript],
		previewImg: '/project/co2_app.webp'
	},
	{
		id: 'michaelholley-de',
		title: 'michaelholley.de',
		short: 'Portfolio-Website',
		description: [
			'Diese Portfolio-Website wurde entwickelt, um Fachwissen und Fähigkeiten als Fullstack-Entwickler ansprechend zu präsentieren. Im Laufe der Zeit entstanden mehrere Versionen mit unterschiedlichen Technologien, um verschiedene Ansätze und Frameworks zu erproben.',
			'Die aktuelle Umsetzung basiert auf SvelteKit und Tailwind CSS und legt den Fokus auf eine schlanke, performante und interaktive Benutzererfahrung. Moderne Web-Technologien sorgen für eine optimierte User-Experience und hinterlassen einen positiven Eindruck bei potenziellen Kunden und Arbeitgebern.'
		],
		github: 'https://github.com/MichaelHolley/michaelholley.de',
		class: 'col-span-1',
		icon: 'mdi:web',
		tech: [tech.Svelte, tech.tailwindcss, tech.TypeScript, tech.Docker],
		previewImg: '/project/michaelholleyde.webp'
	}
];

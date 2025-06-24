export interface Blog {
	title: string;
	id: string;
	description: string;
	released: string;
	tags?: string[];
}

export const blogs: Blog[] = [
	{
		title: 'Web-Apps installieren',
		id: 'installing-web-apps',
		description:
			'Verwandeln Sie Ihre Webanwendung in ein natives App-Erlebnis. Dieser Leitfaden zeigt Ihnen Schritt für Schritt, wie Sie mit nur einer Datei Ihre Web-App installieren können.',
		released: '24.06.2025',
		tags: ['Web']
	}
];

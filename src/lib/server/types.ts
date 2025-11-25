export interface Blog {
	id: number;
	documentId: string;
	title: string;
	description: string;
	content?: string;
	released: string;
	tags: string[];
	slug: string;
}

export type TechItem = {
	icon: string;
	color: string;
	name: string;
};

export interface Project {
	id: string;
	title: string;
	short: string;
	description: string[];
	tech?: (TechItem | string)[];
	github?: string;
	url?: string;
	class?: string;
	icon?: string;
	previewImg?: string;
	imageUrls?: string[];
}

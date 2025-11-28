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
	id: number;
	documentId: string;
	title: string;
	slug: string;
	description: string;
	iconIdentifier: string;
	content: string;
	url: string;
	github_ref: string;
	tech: string[];
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string;
	caption: string;
	formats: Formats;
	url: string;
}

export interface Formats {
	thumbnail: ImageFormat;
	medium: ImageFormat;
	large: ImageFormat;
	small: ImageFormat;
}

export interface ImageFormat {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string;
	width: number;
	height: number;
	size: number;
	sizeInBytes: number;
	url: string;
}

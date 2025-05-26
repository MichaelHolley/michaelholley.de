export interface Blog {
	title: string;
	id: string;
	description: string;
	released: string;
	tags?: string[];
}

export const blogs: Blog[] = [];

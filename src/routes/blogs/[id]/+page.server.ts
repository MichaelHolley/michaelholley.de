// src/routes/blogs/[id]/+page.server.ts
import { blogs } from '$lib/server/blogs';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return blogs.map((blog) => ({
		id: blog.id
	}));
};

export const load = async ({ params }: { params: { id: string } }) => {
	const blog = await import(`$lib/markdown/blog/${params.id}.md?raw`);
	return { blog: blog.default as string };
};

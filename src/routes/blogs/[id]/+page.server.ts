export const load = async ({ params }: { params: { id: string } }) => {
	const blog = await import(`$lib/markdown/blog/${params.id}.md?raw`);
	return { blog: blog.default as string };
};

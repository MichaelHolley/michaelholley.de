import { query } from '$app/server';
import { renderer } from '$lib/components/shared/util/markedRenderer';
import { fetchBlogBySlug, fetchBlogs } from '$lib/server/services/strapi.service';
import { marked } from 'marked';
import z from 'zod';

export const getBlobBySlug = query(z.string(), async (slug: string) => {
	const blog = await fetchBlogBySlug(slug);

	// Convert markdown to HTML on the server
	if (blog?.content) {
		marked.use({ renderer });
		blog.content = await marked(blog.content);
	}

	return { blog };
});

export const getBlogs = query(async () => {
	const blogs = await fetchBlogs();
	const sortedBlogs = blogs.sort(
		(a, b) => new Date(b.released).getTime() - new Date(a.released).getTime()
	);

	return { blogs: sortedBlogs };
});

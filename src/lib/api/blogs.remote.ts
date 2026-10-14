import { query } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { renderer } from '#lib/components/shared/util/markedRenderer.js';
import { fetchBlogBySlug, fetchBlogs } from '#lib/server/services/strapi.service.js';
import { marked } from 'marked';
import z from 'zod';

export const getBlogBySlug = query(z.string(), async (slug: string) => {
	const blog = await fetchBlogBySlug(slug);

	if (!blog) {
		error(404, 'Blog post not found');
	}

	if (blog.isExternal && blog.externalUrl) {
		redirect(301, blog.externalUrl, { external: true });
	}

	// Convert markdown to HTML on the server
	if (blog.content) {
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

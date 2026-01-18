import { fetchBlogBySlug } from '$lib/server/services/strapi.service';
import { marked } from 'marked';

export const ssr = true;

export const load = async ({ params }: { params: { slug: string } }) => {
	const blog = await fetchBlogBySlug(params.slug);

	// Convert markdown to HTML on the server
	if (blog?.content) {
		blog.content = await marked(blog.content);
	}

	return { blog };
};

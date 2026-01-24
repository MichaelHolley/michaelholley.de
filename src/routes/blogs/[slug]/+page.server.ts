import { renderer } from '$lib/components/shared/util/markedRenderer';
import { fetchBlogBySlug } from '$lib/server/services/strapi.service';
import { marked } from 'marked';

export const load = async ({ params }: { params: { slug: string } }) => {
	const blog = await fetchBlogBySlug(params.slug);

	// Convert markdown to HTML on the server
	if (blog?.content) {
		marked.use({ renderer });
		blog.content = await marked(blog.content);
	}

	return { blog };
};

import { fetchBlogBySlug } from '$lib/server/services/strapi.service';

export const load = async ({ params }: { params: { slug: string } }) => {
	const blog = await fetchBlogBySlug(params.slug);

	return { blog };
};

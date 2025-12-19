import { fetchProjectBySlug } from '$lib/server/services/strapi.service';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { slug: string } }) => {
	const project = await fetchProjectBySlug(params.slug);

	if (!project) throw error(404, 'Not found');

	return { project };
};

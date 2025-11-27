import { fetchProjectBySlug } from '$lib/server/services/strapi.service';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { id: string } }) => {
	const project = await fetchProjectBySlug(params.id);

	if (!project) throw error(404, 'Not found');

	return { project };
};

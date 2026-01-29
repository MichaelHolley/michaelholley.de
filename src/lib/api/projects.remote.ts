import { query } from '$app/server';
import { fetchProjectBySlug } from '$lib/server/services/strapi.service';
import z from 'zod';

export const getProjectBySlug = query(z.string(), async (slug: string) => {
	const project = await fetchProjectBySlug(slug);

	return { project };
});

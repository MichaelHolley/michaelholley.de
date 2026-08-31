import { query } from '$app/server';
import { error } from '@sveltejs/kit';
import { fetchProjectBySlug, fetchProjects } from '$lib/server/services/strapi.service';
import z from 'zod';

export const getProjectBySlug = query(z.string(), async (slug: string) => {
	const project = await fetchProjectBySlug(slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
});

export const getProjects = query(async () => {
	const projects = await fetchProjects();
	const sortedProjects = projects.sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

	return { projects: sortedProjects };
});

import { projects } from '$lib/server/projects.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { id: string } }) => {
	const project = projects.find((p) => p.id === params.id);

	if (!project) throw error(404, 'Not found');

	return project;
};

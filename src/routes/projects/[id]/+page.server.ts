import { projects } from '$lib/server/projects.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }: { params: { id: string } }) => {
	const project = projects.find((p) => p.id === params.id);

	if (!project) redirect(308, '/');

	return project;
};

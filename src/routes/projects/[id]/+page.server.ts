import { projects } from '$lib/server/projects.js';

export const load = async ({ params }: { params: { id: number } }) => {
	const project = projects[params.id];
	return project;
};

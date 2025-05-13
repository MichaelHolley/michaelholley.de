import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		projects,
		tech,
		blogs: [
			{ title: 'Test tile 1', description: 'Test description 1', id: 1 },
			{ title: 'Test tile 1', description: 'Test description 1', id: 2 }
		]
	};
};

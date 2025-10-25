import { blogs } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		projects,
		tech,
		blogs
	};
};

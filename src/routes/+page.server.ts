import { projects } from '$lib/server/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { projects };
};

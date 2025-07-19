import { env } from '$env/dynamic/private';
import type { Blog } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await fetch(`${env.STRAPI_URL}/blogs`, {
		headers: { Authorization: `Bearer ${env.STRAPI_TOKEN}` }
	});

	const { data: blogs } = (await res.json()) as { data: Blog[] };

	return {
		projects,
		tech,
		blogs
	};
};

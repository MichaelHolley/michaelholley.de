import { STRAPI_TOKEN, STRAPI_URL } from '$env/static/private';
import type { Blog } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await fetch(`${STRAPI_URL}/blogs`, {
		headers: { Authorization: `Bearer ${STRAPI_TOKEN}` }
	});

	const { data: blogs } = (await res.json()) as { data: Blog[] };

	return {
		projects,
		tech,
		blogs
	};
};

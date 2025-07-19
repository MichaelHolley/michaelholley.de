import { STRAPI_URL, STRAPI_TOKEN } from '$env/static/private';
import type { Blog } from '$lib/server/blogs';

export const load = async ({ params }: { params: { id: string } }) => {
	const res = await fetch(`${STRAPI_URL}/blogs/${params.id}`, {
		headers: { Authorization: `Bearer ${STRAPI_TOKEN}` }
	});

	const { data: blog } = (await res.json()) as { data: Blog };

	return { blog };
};

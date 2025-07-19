import { env } from '$env/dynamic/private';
import type { Blog } from '$lib/server/blogs';

export const load = async ({ params }: { params: { id: string } }) => {
	const res = await fetch(`${env.STRAPI_URL}/blogs/${params.id}`, {
		headers: { Authorization: `Bearer ${env.STRAPI_TOKEN}` }
	});

	const { data: blog } = (await res.json()) as { data: Blog };

	return { blog };
};

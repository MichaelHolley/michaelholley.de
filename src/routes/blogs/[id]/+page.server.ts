import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Blog } from '$lib/server/blogs';

export const load = async ({ params }: { params: { id: string } }) => {
	try {
		console.log(
			`Requesting ${env.STRAPI_URL}/blogs/${params.id} - with: ${env.STRAPI_TOKEN.substring(0, 5)}`
		);

		const res = await fetch(`${env.STRAPI_URL}/blogs/${params.id}`, {
			headers: { Authorization: `Bearer ${env.STRAPI_TOKEN}` }
		});

		const { data: blog } = (await res.json()) as { data: Blog };

		return { blog };
	} catch (e) {
		console.error(e);
		throw error(500, `Internal Server Error: ${e}`);
	}
};

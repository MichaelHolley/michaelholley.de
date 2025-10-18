import { env } from '$env/dynamic/private';
import type { Blog } from '$lib/server/blogs';
import { cache } from '$lib/server/cache';

export const load = async ({ params }: { params: { id: string } }) => {
	const cachedBlog = cache.get<Blog>(`blog-${params.id}`);
	try {
		if (cachedBlog) {
			console.log(`Using cached data (blog-id: ${params.id})`);
			return { blog: cachedBlog };
		}

		console.log(`No cached data (blog-id: ${params.id}) - Fetching from Strapi...`);
		const res = await fetch(`${env.STRAPI_URL}/blogs/${params.id}`, {
			headers: { Authorization: `Bearer ${env.STRAPI_TOKEN}` }
		});

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blog ${params.id}: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const { data: blog } = (await res.json()) as { data: Blog };

		cache.set(`blog-${params.id}`, blog);

		return { blog };
	} catch (e) {
		console.error('Error fetching blog:', e);

		return { blog: cachedBlog || null };
	}
};

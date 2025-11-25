import { env } from '$env/dynamic/private';
import type { Blog } from '$lib/server/types';
import { cache } from '$lib/server/cache';

export const load = async ({ params }: { params: { slug: string } }) => {
	let cachedBlog = cache.get<Blog>(`blog-${params.slug}`);
	try {
		if (cachedBlog) {
			console.log(`Using cached data (blog-slug: ${params.slug})`);
			return { blog: cachedBlog };
		}

		console.log(`No cached data (blog-slug: ${params.slug}) - Fetching from Strapi...`);
		const res = await fetch(`${env.STRAPI_URL}/blogs?filters[slug][$eq]=${params.slug}`);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blog ${params.slug}: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = ((await res.json()) as { data: Blog[] }).data;

		if (filterResult.length != 1) {
			throw new Error(`Blog with slug ${params.slug} not found or multiple entries exist.`);
		}

		const blog = filterResult[0] as Blog;

		cache.set(`blog-${params.slug}`, blog);

		return { blog };
	} catch (e) {
		console.error('Error fetching blog:', e);

		cachedBlog = cache.getIgnoreInvalidation<Blog>(`blog-${params.slug}`);
		return { blog: cachedBlog || null };
	}
};

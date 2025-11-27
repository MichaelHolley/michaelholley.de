import { env } from '$env/dynamic/private';
import { cache } from '$lib/server/cache';
import type { Blog } from '$lib/server/types';

const selectFields = [
	'id',
	'documentId',
	'title',
	'slug',
	'description',
	'released',
	'tags'
] as const satisfies readonly (keyof Blog)[];

/**
 * Fetches all blogs from Strapi with caching support
 * @returns Array of blogs or empty array on error
 */
export async function fetchBlogs(): Promise<Blog[]> {
	let cachedBlogs = cache.get<Blog[]>('blogs');

	try {
		if (cachedBlogs) {
			console.log('Using cached data (blogs)');
			return cachedBlogs;
		}

		console.log('No cached data (blogs) - Fetching from Strapi...');

		const strapiUrl = `${env.STRAPI_URL}/blogs?${selectFields.map((field, index) => `fields[${index}]=${field}`).join('&')}`;
		const res = await fetch(strapiUrl);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blogs: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = (await res.json()) as { data: Blog[] };

		cache.set('blogs', filterResult.data);

		return filterResult.data;
	} catch (e) {
		console.error('Error fetching blogs:', e);

		cachedBlogs = cache.getIgnoreInvalidation<Blog[]>('blogs');

		return cachedBlogs || [];
	}
}

/**
 * Fetches a single blog by slug from Strapi with caching support
 * @param slug - The blog slug to fetch
 * @returns Blog object or null if not found
 */
export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
	let cachedBlog = cache.get<Blog>(`blog-${slug}`);

	try {
		if (cachedBlog) {
			console.log(`Using cached data (blog-slug: ${slug})`);
			return cachedBlog;
		}

		console.log(`No cached data (blog-slug: ${slug}) - Fetching from Strapi...`);
		const res = await fetch(`${env.STRAPI_URL}/blogs?filters[slug][$eq]=${slug}`);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blog ${slug}: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = ((await res.json()) as { data: Blog[] }).data;

		if (filterResult.length !== 1) {
			throw new Error(`Blog with slug ${slug} not found or multiple entries exist.`);
		}

		const blog = filterResult[0] as Blog;

		cache.set(`blog-${slug}`, blog);

		return blog;
	} catch (e) {
		console.error('Error fetching blog:', e);

		cachedBlog = cache.getIgnoreInvalidation<Blog>(`blog-${slug}`);
		return cachedBlog || null;
	}
}

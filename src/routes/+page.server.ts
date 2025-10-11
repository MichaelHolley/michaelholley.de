import { env } from '$env/dynamic/private';
import { cache } from '$lib/server/cache';
import type { Blog } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const cachedBlogs = cache.get<Blog[]>('blogs');

	try {
		if (cachedBlogs) {
			console.log('Using cached data (blogs)');
			return {
				projects,
				tech,
				blogs: cachedBlogs
			};
		}

		console.log('No cached data (blogs) - Fetching from Strapi...');
		const res = await fetch(`${env.STRAPI_URL}/blogs`, {
			headers: { Authorization: `Bearer ${env.STRAPI_TOKEN}` }
		});

		if (!res.ok) {
			throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
		}

		const { data: blogs } = (await res.json()) as { data: Blog[] };

		cache.set('blogs', blogs);

		return {
			projects,
			tech,
			blogs
		};
	} catch (e) {
		console.error('Error fetching blogs:', e);

		return {
			projects,
			tech,
			blogs: cachedBlogs || []
		};
	}
};

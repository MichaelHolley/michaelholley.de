import { env } from '$env/dynamic/private';
import { cache } from '$lib/server/cache';
import type { Blog } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';
import { fail } from '@sveltejs/kit';
import { Buffer } from 'buffer';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	let cachedBlogs = cache.get<Blog[]>('blogs');

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
		const res = await fetch(
			`${env.STRAPI_URL}/blogs?fields[0]=id&fields[1]=documentId&fields[2]=title&fields[3]=slug&fields[4]=description&fields[5]=released&fields[6]=tags`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch blogs: ${res.status} ${res.statusText} (${await res.text()})`
			);
		}

		const filterResult = (await res.json()) as { data: Blog[] };

		cache.set('blogs', filterResult.data);

		return {
			projects,
			tech,
			blogs: filterResult.data
		};
	} catch (e) {
		console.error('Error fetching blogs:', e);

		cachedBlogs = cache.getIgnoreInvalidation<Blog[]>('blogs');

		return {
			projects,
			tech,
			blogs: cachedBlogs || []
		};
	}
};

export const actions = {
	sendContactInformation: async (event) => {
		const formData = await event.request.formData();
		const name = formData.get('name');
		const mail = formData.get('mail');
		const message = formData.get('message');

		try {
			await fetch(env.N8N_WEBHOOK_URL as string, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${Buffer.from(`${env.N8N_USERNAME}:${env.N8N_PASSWORD}`).toString('base64')}`,
					'request-start-time': new Date().toISOString()
				},
				body: JSON.stringify({
					name,
					mail,
					message
				})
			});
		} catch (error) {
			console.error('Error sending contact information:', error);
			return fail(400, { error: 'Failed to send contact information.' });
		}
	}
} satisfies Actions;

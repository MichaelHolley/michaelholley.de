import { env } from '$env/dynamic/private';
import { fetchBlogs, fetchProjects } from '$lib/server/services/strapi.service';
import { tech } from '$lib/tech-icons';
import { fail } from '@sveltejs/kit';
import { Buffer } from 'buffer';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [blogs, projects] = await Promise.all([fetchBlogs(), fetchProjects()]);

	return {
		projects: projects.sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0)),
		tech,
		blogs
	};
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

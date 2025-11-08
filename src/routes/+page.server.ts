import { env } from '$env/dynamic/private';
import { blogs } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';
import { fail } from '@sveltejs/kit';
import { Buffer } from 'buffer';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		projects,
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

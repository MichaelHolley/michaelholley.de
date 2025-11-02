import { N8N_PASSWORD, N8N_USERNAME, N8N_WEBHOOK_URL } from '$env/static/private';
import { blogs } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';
import { Buffer } from 'buffer';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

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
			await fetch(N8N_WEBHOOK_URL as string, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${Buffer.from(`${N8N_USERNAME}:${N8N_PASSWORD}`).toString('base64')}`,
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

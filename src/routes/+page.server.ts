import { blogs } from '$lib/server/blogs';
import { projects } from '$lib/server/projects';
import { tech } from '$lib/server/tech';
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
		const email = formData.get('email');
		const message = formData.get('message');

		console.log('Contact Information Received:', { name, email, message });
	}
} satisfies Actions;

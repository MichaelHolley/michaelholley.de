import { STRAPI_URL } from '$app/env/private';

export function getStrapiUrl() {
	const url = STRAPI_URL;
	if (!url) {
		throw new Error('STRAPI_URL is not set. Check your .env file (see .env.example).');
	}

	return url;
}
